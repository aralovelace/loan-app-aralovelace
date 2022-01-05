import * as actions from "./actions";
import { handleActions } from "redux-actions";

const initialState = [];

const addToast = (toasts, action) => {
  const toast = action.payload;
  return [...toasts, toast];
};

const deleteToast = (toasts, action) => {
  const toastId = action.payload.id;
  const newToasts = toasts.filter(({ id }) => id !== toastId);
  return newToasts;
};

export default handleActions(
  {
    [actions.addToast]: addToast,
    [actions.deleteToast]: deleteToast,
  },
  initialState
);
