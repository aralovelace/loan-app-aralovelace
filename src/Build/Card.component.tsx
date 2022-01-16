import React from "react";
import { Button } from "./Button.component";
import { Text } from "./Text.component";
import { useNode } from "@craftjs/core";
import { Paper } from "@material-ui/core";

export const Card = ({ title, subtitle }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <Paper className="bg-white p-5 w-52 my-5">
      <div ref={(ref) => connect(drag(ref))}>
        <div id="text">
          <Text text={title} fontSize={20} />
          <Text text={subtitle} fontSize={15} />
        </div>
        <div id="buttons" className="mt-2">
          <Button text="Learn more" />
        </div>
      </div>
    </Paper>
  );
};
