import React from "react";
import { useNode } from "@craftjs/core";
import { Paper } from "@material-ui/core";

export const Image = ({ image }: { image: string }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <Paper className="my-4 w-40 flex justify-center">
      <div ref={(ref) => connect(drag(ref))}>
        <img width={100} src={`/${image}`} />
      </div>
    </Paper>
  );
};
