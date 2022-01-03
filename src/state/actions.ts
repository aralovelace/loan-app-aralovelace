import { createAction } from 'redux-actions';
const submitLoanRequest = createAction('SUBMIT_LOAN_REQUEST');
const changeLoanRequest = createAction('CHANGE_LOAN_REQUEST');
export  { submitLoanRequest, changeLoanRequest } ;
