import React from "react";
import { useNode } from "@craftjs/core";
import { TextField } from "@material-ui/core";

export const Textfield = ({label}:{label:string}) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div className="my-4" ref={(ref) => connect(drag(ref))}>
      <TextField id="outlined-basic" label={label} variant="outlined" size="small"/>
    </div>
  );
};
