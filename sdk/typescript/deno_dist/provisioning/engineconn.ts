import { Writable } from "node:stream"
import { GraphQLClient } from "npm:graphql-request@6.1.0"

export interface ConnectOpts {
  Workdir?: string
  Project?: string
  LogOutput?: Writable
  Timeout?: number
}

export interface ConnectParams {
  port: number
  session_token: string
}

export interface EngineConn {
  /**
   * Addr returns the connector address.
   */
  Addr: () => string

  /**
   * Connect initializes a ready to use GraphQL Client that
   * points to the engine.
   */
  Connect: (opts: ConnectOpts) => Promise<GraphQLClient>

  /**
   * Close stops the current connection.
   */
  Close: () => Promise<void>
}
