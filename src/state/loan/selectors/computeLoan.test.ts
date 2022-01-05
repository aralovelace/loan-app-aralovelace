import { computeLoan } from "./computeLoan";

test("computeLoan", function () {
  const amount = 10000;
  const term = 5;
  const interest = 5;
  const expectOutput = {
    totalInterest: 2500,
    totalPaid: 12500,
  };

  expect(computeLoan({ loanRequest: { amount, term, interest } })).toEqual(
    expectOutput
  );
});
