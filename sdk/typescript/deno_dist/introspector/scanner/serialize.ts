import ts from "npm:typescript@5.3.3"

import { UnknownDaggerError } from "../../common/errors/UnknownDaggerError.ts"
import { SignatureMetadata, SymbolMetadata } from "./metadata.ts"
import { isOptional } from "./utils.ts"

/**
 * Convert the function signature from the compiler API into a lighter data type.
 *
 * This functions returns the params serialized and its returns type.
 *
 * @param checker The typescript compiler checker.
 * @param signature The signature to convert.
 */
export function serializeSignature(
  checker: ts.TypeChecker,
  signature: ts.Signature
): SignatureMetadata {
  return {
    params: signature.parameters.map((param) => {
      const { optional, defaultValue } = isOptional(param)

      return {
        ...serializeSymbol(checker, param),
        optional,
        defaultValue,
      }
    }),
    returnType: serializeType(checker, signature.getReturnType()),
  }
}

/**
 * Convert the TypeScript symbol from the compiler API into a lighter data type.
 *
 * This function returns the name of the symbol, with its typename and its
 * documentation.
 * This function also returns the actual TypeScript type for additional
 * introspection.
 *
 * @param checker The typescript compiler checker.
 * @param symbol The type to convert.
 */
export function serializeSymbol(
  checker: ts.TypeChecker,
  symbol: ts.Symbol
): SymbolMetadata & { type: ts.Type } {
  if (!symbol.valueDeclaration) {
    throw new UnknownDaggerError("could not find symbol value declaration", {})
  }

  const type = checker.getTypeOfSymbolAtLocation(
    symbol,
    symbol.valueDeclaration
  )

  return {
    name: symbol.getName(),
    description: ts.displayPartsToString(
      symbol.getDocumentationComment(checker)
    ),
    typeName: serializeType(checker, type),
    type,
  }
}

/**
 * Convert the TypeScript type from the compiler API into a readable textual
 * type.
 *
 * @param checker The typescript compiler checker.
 * @param type The type to convert.
 */
export function serializeType(checker: ts.TypeChecker, type: ts.Type): string {
  const strType = checker.typeToString(type)

  // Remove Promise<> wrapper around type if it's a promise.
  if (strType.startsWith("Promise")) {
    return strType.substring("Promise<".length, strType.length - 1)
  }

  return strType
}
