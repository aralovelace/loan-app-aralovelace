import React from "react";
import ToastItem from "./ToastItem";
import { connect } from "react-redux";

const ToastList = ({ toasts }) => {
  return (
    <div className="fixed top-0 right-0">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </div>
  );
};

const mapState = (state) => {
  const { toasts } = state;
  return { toasts };
};
export default connect(mapState)(ToastList);
