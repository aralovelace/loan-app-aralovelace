import { useEditor } from "@craftjs/core";

export const LayerItem = (nodeId) => {
  const {
    connectors: { select },
  } = useEditor();

  return (
    <div>
      <a ref={(ref) => select(ref, nodeId)}>Click me to select node {nodeId}</a>
    </div>
  );
};
