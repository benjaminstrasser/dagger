import { DaggerSDKError, DaggerSDKErrorOptions } from "./DaggerSDKError.js"

/**
 *  TODO: ADD Description
 */
interface DockerImageRefValidationErrorOptions extends DaggerSDKErrorOptions {
  ref: string
}

/**
 *  TODO: ADD Description
 */
export class DockerImageRefValidationError extends DaggerSDKError {
  name = "DockerImageRefValidationError"
  code = "D104"

  ref: string

  constructor(message: any, options: DockerImageRefValidationErrorOptions) {
    super(message, options)
    this.ref = options?.ref
  }
}
