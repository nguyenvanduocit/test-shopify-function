import type {
  RunInput,
  FunctionRunResult,
  FunctionError,
} from "../generated/api";

export function run(input: RunInput): FunctionRunResult {
  return {
    errors: [
      {
        localizedMessage: "Not possible to order more than one of each",
        target: "$.cart",
      },
    ],
  };
}
