import { createAction } from "redux-actions";

const seStoriesIds = createAction("SET_STORIES_IDS");
const addTopStories = createAction("ADD_TOP_STORIES");

export { seStoriesIds, addTopStories };
