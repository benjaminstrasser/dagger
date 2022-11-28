import { DaggerSDKError, DaggerSDKErrorOptions } from "./DaggerSDKError.js"

/**
 *  TODO: ADD Description
 */
export class InitEngineSessionBinaryError extends DaggerSDKError {
  name = "InitEngineSessionBinaryError"
  code = "D105"

  constructor(message: any, options?: DaggerSDKErrorOptions) {
    super(message, options)
  }
}
