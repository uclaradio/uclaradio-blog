import { combineReducers } from "redux";
import getRecipes from "./recipe_actions/get_recipes.js";
import loadingRecipes from "./recipe_actions/loading_recipes.js";
import getPosts from "./postActions/getPosts.js";
import loadingPosts from "./postActions/loadingPosts.js";

const reducers = combineReducers({
  recipes: getRecipes,
  loadRecipes: loadingRecipes,
  posts: getPosts,
  loadPosts: loadingPosts
});

export default reducers;
