export interface DaggerSDKErrorOptions {
  cause?: Error
}

/**
 *
 */
export abstract class DaggerSDKError extends Error {
  abstract name: string
  abstract code: string
  cause?: Error

  constructor(message: string, options?: DaggerSDKErrorOptions) {
    super(message)
    this.cause = options?.cause
  }
}

/*
###################
UnknownDaggerError
###################
*/

/**
 *  TODO: ADD Description
 */
export class UnknownDaggerError extends DaggerSDKError {
  name = "UnknownDaggerError"
  code = "D101"

  constructor(message: any, options: DaggerSDKErrorOptions) {
    super(message, options)
  }
}
