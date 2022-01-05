import * as actions from "./actions";
import { v4 as uuidv4 } from "uuid";

const addToast = (message) => {
  return (dispatch) => {
    const id = uuidv4();
    const toast = {
      id,
      message,
    };

    dispatch(actions.addToast(toast));
    setTimeout(() => {
      dispatch(actions.deleteToast(toast));
    }, 5000);
  };
};

export { addToast };
