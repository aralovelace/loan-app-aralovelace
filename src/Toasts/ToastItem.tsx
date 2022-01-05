import React from "react";
import { partial } from "lodash";
import { connect } from "react-redux";
import { deleteToast } from "./../state/toast/actions";

const ToastItem = ({ toast, deleteToast }) => {
  return (
    <div className="bg-blue-50 text-blue-800 w-80 p-2 m-6 flex border justify-evenly">
      <div>{toast.message}</div>
      <div>
        <button
          className="ml-2 pointer  text-red-800 border-0"
          type="button"
          onClick={partial(deleteToast, toast)}
        >
          X
        </button>
      </div>
    </div>
  );
};

const mapState = (state) => {
  const { toasts } = state;

  return { toasts };
};

export default connect(mapState, { deleteToast })(ToastItem);
