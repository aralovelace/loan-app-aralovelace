import React from "react";
import {Editor, Frame, Canvas} from "@craftjs/core";
import TextComponent from '../Build/Text.component';

const Build = () => {
  return (
    <div>
      <header>Some fancy header or whatever</header>
      <Editor>
        // Editable area starts here
        <Frame>
          <Canvas>
            <TextComponent text="I'm already rendered here" />
          </Canvas>
        </Frame>
      </Editor>
    </div>
  );
};

export default Build;
