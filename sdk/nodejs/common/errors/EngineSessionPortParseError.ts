import { DaggerSDKError, DaggerSDKErrorOptions } from "./DaggerSDKError.js"

interface EngineSessionPortParseErrorOptions extends DaggerSDKErrorOptions {
  parsedLine: string
}

/**
 * This error is thrown if the EngineSession does not manage to parse the required port successfully because the parsed port is not a number.
 */
export class EngineSessionPortParseError extends DaggerSDKError {
  name = "EngineSessionPortError"
  code = "D103"

  /**
   *  the line, which caused the error during parsing, if the error was caused because of parsing.
   */
  parsedLine: string

  /**
   * @hidden
   */
  constructor(message: string, options: EngineSessionPortParseErrorOptions) {
    super(message, options)
    this.parsedLine = options.parsedLine
  }
}
