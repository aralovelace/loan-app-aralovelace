import React from "react";
import { useNode } from "@craftjs/core";

export const Button = ({ text }: { text: string }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div ref={(ref) => connect(drag(ref))}>
      <button className="bg-blue-800 text-white w-32 block px-5 py-2">
        {text}
      </button>
    </div>
  );
};
