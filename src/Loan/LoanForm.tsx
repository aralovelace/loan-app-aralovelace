import React from "react";
import pipe from "lodash/flow";
import { partial } from "lodash";
import { preventDefault, withChange } from "../helpers";
import { changeLoanRequest, submitLoanRequest } from "../state";
import { connect } from "react-redux";

const LoanForm = ({ loan, changeLoanRequest, submitLoanRequest }) => {
  const handleChange = withChange(changeLoanRequest);
  const handleSubmit = partial(submitLoanRequest, loan);

  return (
    <form onSubmit={pipe(preventDefault, handleSubmit)}>
      <div className="mt-5 flex flex-row">
        <label htmlFor="amount" className="w-40">
          Loan amount
        </label>
        <input
          name="amount"
          type="number"
          value={loan.loanRequest.amount}
          onChange={handleChange}
          required
          className="form-input ml-4"
        />
      </div>
      <div className="mt-5 flex flex-row">
        <label htmlFor="term" className="w-40">
          Loan term in years
        </label>
        <input
          name="term"
          type="number"
          value={loan.loanRequest.term}
          onChange={handleChange}
          required
          className="form-input ml-4"
        />
      </div>
      <div className="mt-5 flex flex-row">
        <label htmlFor="interest" className="w-40">
          Interest rate per year
        </label>
        <input
          name="interest"
          type="number"
          value={loan.loanRequest.interest}
          onChange={handleChange}
          required
          className="form-input ml-4"
        />
      </div>
      <div className="mt-8">
        <input
          type="submit"
          className="bg-blue-800 text-white cursor-pointer  rounded-xl p-3 hover:text-orange-300
          transition ease-in-out hover:-translate-y-1"
          value="Calculate"
        />
      </div>
    </form>
  );
};
function mapState(state) {
  const { loan } = state;
  return { loan };
}

export default connect(mapState, { submitLoanRequest, changeLoanRequest })(
  LoanForm
);
