import { Utils, GitHubClient } from "@tahminator/pipeline";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const { newTagVersion } = await yargs(hideBin(process.argv))
  .option("newTagVersion", {
    type: "string",
    demandOption: true,
  })
  .strict()
  .parse();

async function main() {
  const ciEnv = await Utils.getEnvVariables(["ci"]);
  const { githubPat } = parseCiEnv(ciEnv);
  const ghClient = new GitHubClient(githubPat);

  await ghClient.updateK8sTagWithPR({
    manifestRepo: ["tahminator", "k8s-personal"],
    originRepo: ["tahminator", "portfolio"],
    kustomizationFilePath: "apps/production/portfolio/kustomization.yaml",
    imageName: "tahminator/portfolio",
    newTag: newTagVersion,
    environment: "production",
  });
}

function parseCiEnv(ciEnv: Record<string, string>) {
  const githubPat = (() => {
    const v = ciEnv["GITHUB_PAT"];
    if (!v) {
      throw new Error("Missing GITHUB_PAT from .env.ci");
    }
    return v;
  })();

  return { githubPat };
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
