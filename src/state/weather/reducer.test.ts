import * as actions from "./actions";
import ListReducer from "./list-reducer";

test("addCity add city", () => {
  const cities = [];
  const action = actions.addCity("Singapore");
  const expectOutput = ["Singapore"];
  expect(ListReducer(cities, action)).toEqual(expectOutput);
});

test("addCity does not add existing city", () => {
  const cities = ["Malaysia"];
  const action = actions.addCity("Malaysia");
  const expectOutput = ["Malaysia"];
  expect(ListReducer(cities, action)).toEqual(expectOutput);
});
