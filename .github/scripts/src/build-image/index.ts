import { DockerClient, Utils } from "@tahminator/pipeline";
import { $ } from "bun";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

process.env.TZ = "America/New_York";

const { dockerUpload } = await yargs(hideBin(process.argv))
  .option("dockerUpload", {
    type: "boolean",
    default: true,
    demandOption: false,
  })
  .strict()
  .parse();

async function main() {
  const ciEnv = await Utils.getEnvVariables(["ci"]);
  const { dockerHubPat } = parseCiEnv(ciEnv);

  await using dockerClient = await DockerClient.create(
    "tahminator",
    dockerHubPat,
  );

  // copy old tz format from build-image.sh
  const timestamp = new Date()
    .toLocaleString("en-US", {
      timeZone: process.env.TZ,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    })
    .replace(/(\d+)\/(\d+)\/(\d+),\s(\d+):(\d+):(\d+)/, "$3.$1.$2-$4.$5.$6");

  const gitSha = (await $`git rev-parse --short HEAD`.text()).trim();

  await dockerClient.buildImage({
    dockerFileLocation: "Dockerfile",
    dockerUsername: "tahminator",
    dockerRepository: "portfolio",
    tags: [timestamp, gitSha],
    shouldUpload: dockerUpload,
  });
}

function parseCiEnv(ciEnv: Record<string, string>) {
  const dockerHubPat = (() => {
    const v = ciEnv["DOCKER_HUB_PAT"];
    if (!v) {
      throw new Error("Missing DOCKER_HUB_PAT from .env.ci");
    }
    return v;
  })();

  return { dockerHubPat };
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
