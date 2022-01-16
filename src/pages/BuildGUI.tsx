import { Editor, Element, Frame } from "@craftjs/core";
import React from "react";
import { Card } from "../Build/Card.component";
import { Text } from "../Build/Text.component";
import { Button } from "../Build/Button.component";
import { Toolbox } from "../Build/Toolbox.component";
import { Image } from "../Build/Image.component";
import { Textfield } from "../Build/Textfield.component";

export default function BuildGUI() {
  return (
    <Editor resolver={{ Text, Button, Card, Image, Textfield }}>
      <section className="w-full flex flex-row">
        <div className="w-1/2 pt-10 pl-5 bg-gray-400">
          <Frame>
            <Element className="bg-gray-400" is="div" canvas>
              <Text text="This is a sample TEXT" fontSize={12} />
            </Element>
          </Frame>
        </div>
        <div className="1/4">
          <Toolbox />
        </div>
      </section>
    </Editor>
  );
}
