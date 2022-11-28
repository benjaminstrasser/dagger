import { DaggerSDKError, DaggerSDKErrorOptions } from "./DaggerSDKError.js"

/**
 *  TODO: ADD Description
 */
interface EngineSessionPortParseErrorOptions extends DaggerSDKErrorOptions {
  parsedLine: string
}

/**
 *  TODO: ADD Description
 */
export class EngineSessionPortParseError extends DaggerSDKError {
  name = "EngineSessionPortError"
  code = "D103"

  parsedLine?: string

  constructor(message: any, options?: EngineSessionPortParseErrorOptions) {
    super(message, options)
    if (options) this.parsedLine = options.parsedLine
  }
}
