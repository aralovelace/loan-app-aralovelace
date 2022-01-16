import { Element, useEditor } from "@craftjs/core";
import { Text } from "./Text.component";
import { Button } from "./Button.component";
import { Card } from "./Card.component";
import React from "react";
import { Container } from "./Container.component";
import { Image } from "./Image.component";
import { Textfield } from "./Textfield.component";

export const Toolbox = () => {
  const { connectors } = useEditor();
  return (
    <div style={{ padding: "2rem" }}>
      <h1 className="font-semibold mb-5">Toolbox</h1>
      <button
        className="bg-blue-800 text-white mb-5 w-32 block px-5 py-2"
        ref={(ref) =>
          connectors.create(
            ref,
            <Element
              canvas
              background={{ r: 78, g: 78, b: 78, a: 1 }}
              color={{ r: 0, g: 0, b: 0, a: 1 }}
              is={Container}
              height="300px"
              width="300px"
            ></Element>
          )
        }
      >
        Container
      </button>
      <button
        className="bg-blue-800 text-white w-32 mb-5 block px-5 py-2"
        ref={(ref) =>
          connectors.create(
            ref,
            <Card title="I am a title" subtitle="subtitle" />
          )
        }
      >
        Card
      </button>

      <button
        className="bg-blue-800 text-white w-32 mb-5 block px-5 py-2"
        ref={(ref) =>
          connectors.create(ref, <Text text="demo" fontSize={12} />)
        }
      >
        Text
      </button>
      <button
        className="bg-blue-800 text-white w-32 mb-5 block px-5 py-2"
        ref={(ref) => connectors.create(ref, <Image image="logo192.png" />)}
      >
        Image
      </button>
      <button
        className="bg-blue-800 text-white w-32 mb-5 block px-5 py-2"
        ref={(ref) => connectors.create(ref, <Button text="Click Me" />)}
      >
        Button
      </button>
      <button
        className="bg-blue-800 text-white w-32 mb-5 block px-5 py-2"
        ref={(ref) =>
          connectors.create(ref, <Textfield label="Update Label" />)
        }
      >
        Text field
      </button>
    </div>
  );
};
