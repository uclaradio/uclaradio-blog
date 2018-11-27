import React, { Component } from "react";
import { connect } from "react-redux";
import { recipesFetchData } from "../actions/actions.js";
import _ from "lodash";

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.renderRecipes = this.renderRecipes.bind(this);
  }
  componentDidMount() {
    const API_URL = "http://localhost:3000/api/recipe/?list";
    this.props.fetchRecipe(API_URL);
  }
  renderRecipes() {
    return _.map(this.props.recipes, recipe => {
      const img = recipe.image ? recipe.image.filename : "";
      // Get the html for our recipe ingredients
      function createMarkupForIngredients() {
        if (recipe.ingredientList) {
          return {
            __html: recipe.ingredientList
          };
        } else {
          return;
        }
      }
      // Get the html for our recipe cooking instructions
      function createMarkupForInstructions() {
        if (recipe.cookingInstructions) {
          return {
            __html: recipe.cookingInstructions
          };
        } else {
          return;
        }
      }
      if ((recipe.state = "published")) {
        return (
          <div key={recipe._id}>
            <h1>{recipe.name}</h1>
            <img style={{ width: "300px", height: "300px" }} src={img} />
            <h2>Ingredient List</h2>
            <div dangerouslySetInnerHTML={createMarkupForIngredients()} />
            <h2> Cooking Instructions </h2>
            <div dangerouslySetInnerHTML={createMarkupForInstructions()} />
          </div>
        );
      }
    });
  }
  render() {
    if (this.props.loading) {
      return (
        <div>
          <h1>LOADING...</h1>
        </div>
      );
    }
    return <div>{this.renderRecipes()}</div>;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    recipes: state.recipes,
    loading: state.loadRecipes
  };
}

// anything returned from here will end up in the props
const mapDispatchToProps = dispatch => ({
  // Our thunk will be mapped to this.props.fetchRecipe
  fetchRecipe: url => dispatch(recipesFetchData(url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeList);
