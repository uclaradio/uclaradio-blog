import { combineReducers } from "redux";
import getRecipes from "./recipe_actions/get_recipes.js";
import loadingRecipes from "./recipe_actions/loading_recipes.js";
import getArticles from "./articleActions/getArticles.js";
import loadingArticles from "./articleActions/loadingArticles.js";

const reducers = combineReducers({
  recipes: getRecipes,
  loadRecipes: loadingRecipes,
  articles: getArticles,
  loadArticles: loadingArticles
});

export default reducers;
