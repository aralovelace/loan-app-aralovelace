import { handleActions } from "redux-actions";
import * as actions from "./actions";

const setStoriesIds = (state, action) => {
  const setStoriesIds = action.payload;
  return {
    ...state,
    setStoriesIds,
  };
};

const addTopStories = (state, action) => {
  const newStories = action.payload;
  const topStories = state.topStories.concat(newStories);
  return {
    ...state,
    topStories,
  };
};
