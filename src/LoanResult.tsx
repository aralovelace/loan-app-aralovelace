import React from "react";
import { connect } from "react-redux";
import { computeLoan } from "./state/selectors";

function mapState(state) {
  return {
    loan: computeLoan(state),
  };
}

function LoanResult({ loan }) {
  return (
    <div className="mt-5">
      <div className="">
        Total Interest Paid:{" "}
        <span className="font-semibold">{loan.totalInterest.toFixed(2)}</span>
      </div>
      <div className="mt-3">
        Total Amount Paid:{" "}
        <span className="font-semibold">{loan.totalPaid.toFixed(2)}</span>
      </div>
    </div>
  );
}
export default connect(mapState)(LoanResult);
