import * as actions from "./actions";
import reducer from "./reducer";

test("addToast", () => {
  const toasts = [
    {
      id: 1,
      message: "First toast",
    },
  ];

  const action = actions.addToast({
    id: 2,
    message: "Section toast",
  });

  const expectOutput = [
    {
      id: 1,
      message: "First toast",
    },
    {
      id: 2,
      message: "Section toast",
    },
  ];

  expect(reducer(toasts, action)).toEqual(expectOutput);
});

test("deleteToast", () => {
  const toasts = [
    {
      id: 1,
      message: "First toast",
    },
    {
      id: 2,
      message: "Section toast",
    },
  ];

  const action = actions.deleteToast({
    id: 2,
    message: "Section toast",
  });

  const expectOutput = [
    {
      id: 1,
      message: "First toast",
    },
  ];

  expect(reducer(toasts, action)).toEqual(expectOutput);
});
