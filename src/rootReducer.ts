import { combineReducers } from 'redux';
import toastsReducer from './state/toast/reducer';
import loanReducer from './state/loan/reducer'

export default combineReducers({
  toasts: toastsReducer,
  loan: loanReducer

});
