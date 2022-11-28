import { DaggerSDKError, DaggerSDKErrorOptions } from "./DaggerSDKError.js"

/**
 *  TODO: ADD Description
 */
interface TooManyNestedObjectsErrorOptions extends DaggerSDKErrorOptions {
  response: unknown
}

/**
 *  TODO: ADD Description
 */
export class TooManyNestedObjectsError extends DaggerSDKError {
  name = "TooManyNestedObjectsError"
  code = "D102"

  response: unknown

  constructor(message: any, options: TooManyNestedObjectsErrorOptions) {
    super(message, options)
    this.response = options.response
  }
}
