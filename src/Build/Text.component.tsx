import { useNode } from '@craftjs/core';
import React, { useEffect, useState } from 'react';
import ContentEditable from 'react-contenteditable';
import { FormControl, FormLabel, Slider } from '@material-ui/core';

export const Text = ({ text, fontSize }: { text: string; fontSize: number }) => {
  const {
    connectors: { connect, drag },
    selected,
    dragged,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    !selected && setEditable(false);
  }, [selected]);

  return (
    <div className="my-4" ref={(ref) => connect(drag(ref))} onClick={(e) => setEditable(true)}>
      <ContentEditable
        disabled={!editable}
        html={text}
        onChange={(e) =>
          setProp(
            (props) =>
              (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
          )
        }
        tagName="p"
        style={{ fontSize: `${fontSize}px` }}
      />
      {selected && (
        <FormControl size="small">
          <FormLabel>Font size</FormLabel>
          <Slider
            className="w-52 block"
            value={fontSize || 7}
            step={7}
            min={7}
            max={50}
            onChange={(_, value) => {
              setProp((props) => (props.fontSize = value));
            }}
          />
        </FormControl>
      )}
    </div>
  );
};
