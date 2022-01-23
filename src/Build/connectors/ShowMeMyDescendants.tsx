import { useEditor } from "@craftjs/core";

export const ShowMeMyDescendants = () => {
  const { allDescendants } = useEditor((state, query) => {
    const selectedNodeId = state.events.selected;
    let allDescendants = false;

    if (selectedNodeId)
      allDescendants = query.node(selectedNodeId).decendants();

    return { allDescendants };
  });

  return allDescendants ? (
    <div>
      {
        // @ts-ignore
        allDescendants.map((node) => (
          <li>{node.id}</li>
        ))
      }
    </div>
  ) : null;
};
