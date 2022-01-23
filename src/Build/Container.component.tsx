import { useNode, UserComponent } from "@craftjs/core";
import React from "react";

export const Container: UserComponent = ({ children }) => {
  const {
    connectors: { drag, connect },
  } = useNode();

  return <div>{children}</div>;
};

Container.craft = {
  displayName: "Container",
  rules: {
    canDrag: () => true,
  },
};
