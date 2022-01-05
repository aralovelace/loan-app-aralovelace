import React from "react";
import { partial } from "lodash";
import { connect } from "react-redux";
import { addToast } from "../state/toast/operation";

const AddToast = ({ addToast }) => {
  return (
    <div>
      <button
        type="button"
        className="mt-5 bg-blue-800 text-white cursor-pointer  rounded-xl p-3 hover:text-orange-300
          transition ease-in-out hover:-translate-y-1"
        onClick={partial(addToast, "A new  toast message")}
      >
        ADD TOAST
      </button>
    </div>
  );
};

export default connect(null, { addToast })(AddToast);
