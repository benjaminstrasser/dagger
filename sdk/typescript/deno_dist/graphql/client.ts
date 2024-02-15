import { Buffer } from "node:buffer";
import { GraphQLClient } from "npm:graphql-request@6.1.0"

export function createGQLClient(port: number, token: string): GraphQLClient {
  return new GraphQLClient(`http://127.0.0.1:${port}/query`, {
    headers: {
      Authorization: "Basic " + Buffer.from(token + ":").toString("base64"),
    },
  })
}
