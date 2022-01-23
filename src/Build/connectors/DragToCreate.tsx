import { useEditor } from "@craftjs/core";
import { Text } from "../Text.component";

export const DragToCreate = (nodeId) => {
  const {
    connectors: { drag, create },
  } = useEditor();

  return (
    <div>
      <a ref={(ref) => create(ref, <Text text="Drag me" fontSize={12} />)}>
        Drag me to create a new Text
      </a>
    </div>
  );
};
