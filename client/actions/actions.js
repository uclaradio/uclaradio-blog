import axios from "axios";

// Exporting our actions
export const LOADING_RECIPES = "LOADING_RECIPES";
export const GET_RECIPES = "GET_RECIPES";
export const LOADING_ARTICLES = "LOADING_ARTICLES";
export const GET_ARTICLES = "GET_ARTICLES";

// An action to check if the recipes are loaded accepts true or false
export function loadingRecipes(loading) {
  return {
    type: LOADING_RECIPES,
    payload: loading
  };
}

// This will get the recipes from the API
export function fetchRecipes(data) {
  return {
    type: GET_RECIPES,
    payload: data
  };
}

// This is a redux thunk that will fetch our model data
export function recipesFetchData(url) {
  return dispatch => {
    const request = axios.get(url);
    request.then(response => {
      dispatch(loadingRecipes(false));
      dispatch(fetchRecipes(response.data.recipe));
    });
  };
}

export function loadingArticles(loading) {
  return {
    type: LOADING_ARTICLES,
    payload: loading
  };
}

export function fetchArticles(data) {
  return {
    type: GET_ARTICLES,
    payload: data
  };
}

export function articlesFetchData(url) {
  return dispatch => {
    const request = axios.get(url);
    request.then(response => {
      dispatch(loadingArticles(false));
      dispatch(fetchArticles(response.data.article));
    });
  };
}
