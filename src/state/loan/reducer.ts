import { handleActions } from "redux-actions";
import * as actions from "./actions";

const initialLoanRequest = Object.freeze({
  amount: 10000,
  term: 5,
  interest: 5,
});

const initialState = Object.freeze({
  loanRequestInput: initialLoanRequest,
  loanRequest: initialLoanRequest,
});

const changeLoanRequest = (state, action) => {
  const input = action.payload;
  const loanRequestInput = {
    ...state.loanRequestInput,
    [input.name]: input.value,
  };
  return Object.freeze({
    ...state,
    loanRequestInput,
  });
};

const submitLoanRequest = (state, action) => {
  const loanRequest = action.payload;
  return Object.freeze({ ...state, loanRequest });
};

export default handleActions(
  {
    [actions.changeLoanRequest]: changeLoanRequest,
    [actions.submitLoanRequest]: submitLoanRequest,
  },
  initialState
);
