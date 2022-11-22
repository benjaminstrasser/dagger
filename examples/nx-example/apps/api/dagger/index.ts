import Client from "@dagger.io/dagger";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import * as nxWorkspace from "@nx-example/nx-workspace"

export async function build(client: Client) {
  const workspace = await nxWorkspace.build(client);

  const ctr = client
    .container()
    .from("node:16")
    .withMountedDirectory("/src", (await workspace.id()).id)
    .withWorkdir("/src")
    .exec(["npx", "nx", "build", "api"])
}
