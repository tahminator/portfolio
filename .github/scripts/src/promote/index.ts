import {
  DockerClient,
  EnvClient,
  EnvClientStrategy,
} from "@tahminator/pipeline";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const { originalTag, newGithubTag } = await yargs(hideBin(process.argv))
  .option("originalTag", {
    type: "string",
    demandOption: true,
  })
  .option("newGithubTag", {
    type: "string",
    demandOption: true,
  })
  .strict()
  .parse();

export async function main() {
  const envClient = EnvClient.create(EnvClientStrategy.GIT_CRYPT);
  const ciEnv = await envClient.readFromEnv(".env.ci");
  const { dockerHubPat } = parseCiEnv(ciEnv);
  await using dockerClient = await DockerClient.create(
    "tahminator",
    dockerHubPat,
  );

  await dockerClient.promoteDockerImage({
    originalTag,
    newGithubTags: [newGithubTag, "latest"],
    repository: "portfolio",
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
