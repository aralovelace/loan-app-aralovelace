import { handleActions } from "redux-actions";
import * as actions from "./actions";
const initialState = [];

//updaters
const addCity = (cities, action) => {
  const city = action.payload;
  if (!isCityInList(cities, city)) {
    return [...cities, city];
  }
  return cities;
};

const isCityInList = (cities, newCity) => {
  const existingCity = cities.find((city) => city.id === newCity.id);
  return existingCity != null;
};

export default handleActions(
  {
    [actions.addCity]: addCity,
  },
  initialState
);
