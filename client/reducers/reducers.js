import { combineReducers } from "redux";
import getPosts from "./postActions/getPosts.js";
import loadingPosts from "./postActions/loadingPosts.js";

const reducers = combineReducers({
  posts: getPosts,
  loadPosts: loadingPosts
});

export default reducers;
