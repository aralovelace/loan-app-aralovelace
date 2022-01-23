import { useEditor } from "@craftjs/core";
export const DeleteButtonThingy = () => {
  const { actions, selectedNodeId } = useEditor((state) => ({
    selectedNodeId: state.events.selected,
  }));

  return (
    <div>
      <button onClick={() => actions.delete(selectedNodeId)}>
        Click me to delete the selected node
      </button>
    </div>
  );
};
