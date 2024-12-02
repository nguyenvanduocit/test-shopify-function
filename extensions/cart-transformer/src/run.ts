import type { RunInput, FunctionRunResult } from "../generated/api";

export function run(input: RunInput): FunctionRunResult {
  // map cart lines to operations
  const operations = input.cart.lines.map((line) => ({
    update: {
      cartLineId: line.id,
      price: {
        adjustment: {
          fixedPricePerUnit: {
            amount: 12345,
          },
        },
      },
    },
  }));

  return {
    operations,
  };
}
