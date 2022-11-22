import Client from "@dagger.io/dagger";


export async function build(client: Client) {
  const workdir = client.host().workdir(["node_modules", "dist"]);

  const ctr = client
    .container()
    .from("node:16")
    .withMountedFile("/src/package.json", (await workdir.file("package.json").id()).id)
    .withMountedFile("/src/package-lock.json", (await workdir.file("package-lock.json").id()).id)
    .withMountedFile("/src/decorate-angular-cli.js", (await workdir.file("decorate-angular-cli.js").id()).id)
    .withWorkdir("/src")
    .exec(["npm", "installl"])

  return ctr
    .directory("/src")
    .withDirectory(".", (await workdir.id()).id)
}
