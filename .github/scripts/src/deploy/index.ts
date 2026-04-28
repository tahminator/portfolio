import {
  Utils,
  GitHubClient,
  EnvClient,
  EnvClientStrategy,
} from "@tahminator/pipeline";
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
  const envClient = EnvClient.create(EnvClientStrategy.GIT_CRYPT);
  const ciEnv = await envClient.readFromEnv(".env.ci");
  const { githubAppAppId, githubAppInstallationId, githubAppPrivateKeyB64 } =
    parseCiEnv(ciEnv);
  const ghClient = await GitHubClient.createWithGithubAppToken({
    appId: githubAppAppId,
    installationId: githubAppInstallationId,
    privateKey: await Utils.decodeBase64EncodedString(githubAppPrivateKeyB64),
  });

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
  const githubAppAppId = (() => {
    const v = ciEnv["GITHUB_APP_APP_ID"];
    if (!v) {
      throw new Error("Missing GITHUB_APP_APP_ID from .env.ci");
    }
    return v;
  })();

  const githubAppInstallationId = (() => {
    const v = ciEnv["GITHUB_APP_INSTALLATION_ID"];
    if (!v) {
      throw new Error("Missing GITHUB_APP_INSTALLATION_ID from .env.ci");
    }
    return v;
  })();

  const githubAppPrivateKeyB64 = (() => {
    const v = ciEnv["GITHUB_APP_PRIVATE_KEY_B64"];
    if (!v) {
      throw new Error("Missing GITHUB_APP_PRIVATE_KEY_B64 from .env.ci");
    }
    return v;
  })();

  return { githubAppAppId, githubAppInstallationId, githubAppPrivateKeyB64 };
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
