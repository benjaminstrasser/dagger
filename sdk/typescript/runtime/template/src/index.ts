import { dag, Container, Directory, object, func } from "@dagger.io/dagger"

@object()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class QuickStart {
  /**
   * example usage: "dagger call container-echo stdout"
   */
  @func()
  containerEcho(): Container {
    const isBunRuntime = typeof Bun === "object";
    return dag
      .container()
      .from("alpine:latest")
      .withExec(["echo", `Running inside Bun? ${isBunRuntime ? "yes" : "no"}`])
  }

  /**
   * example usage: "dagger call grep-dir --directory-arg . --pattern GrepDir"
   */
  @func()
  async grepDir(directoryArg: Directory, pattern: string): Promise<string> {
    return dag
      .container()
      .from("alpine:latest")
      .withMountedDirectory("/mnt", directoryArg)
      .withWorkdir("/mnt")
      .withExec(["grep", "-R", pattern, "."])
      .stdout()
  }
}
