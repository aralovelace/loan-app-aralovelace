import { UserComponent } from "@craftjs/core";
import React from "react";

export const Container: UserComponent = ({ children }) => {
  return <div>{children}</div>;
};

Container.craft = {
  displayName: "Container",
  rules: {
    canDrag: () => true,
  },
};
