import {
  GraphQLRequestContext,
  GraphQLResponse,
} from "graphql-request/dist/types"
import { DaggerSDKError, DaggerSDKErrorOptions } from "./DaggerSDKError.js"

/**
 *  TODO: ADD Description
 */
interface GraphQLRequestErrorOptions extends DaggerSDKErrorOptions {
  response: GraphQLResponse
  request: GraphQLRequestContext
}

/*
  TODO: ADD Description
*/
export class GraphQLRequestError extends DaggerSDKError {
  public name = "GraphQLRequestError"
  public code = "D100"

  requestContext: GraphQLRequestContext
  response: GraphQLResponse

  constructor(message: any, options: GraphQLRequestErrorOptions) {
    super(message, options)
    this.requestContext = options.request
    this.response = options.response
  }
}
