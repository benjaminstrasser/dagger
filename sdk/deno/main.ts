import Client, { connect } from "../typescript/deno_dist/index.ts";

import process from "node:process";

connect(
  async (client: Client) => {
    const node = client
      .container()
      .from("node:16-slim")
      .withExec(["node", "-v"]);

    const version = await node.stdout();

    console.log("Hello from Dagger and Node " + version);
  },
  { LogOutput: process.stdout }
);
