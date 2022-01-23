import { handleActions } from "redux-actions";
import * as actions from "./actions";

const initialState = "";

const changeCityName = (name, action) => {
  return action.payload.value;
};

const clearCityName = (name, action) => {
  return "";
};

export default handleActions(
  {
    [actions.changeCityName]: changeCityName,
    [actions.addCity]: clearCityName,
  },
  initialState
);
