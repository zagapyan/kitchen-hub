import React from 'react';

import RecipesListContainer from '../containers/RecipesListContainer';
import RecipeViewComponent from './partials/RecipeViewComponent';
import endpoint from '../utils/endpoint';

export default class HomeComponent extends React.Component{
  constructor(props){
    super(props);
  }
  componentWillMount(){
    this.props.fetchRecipes(endpoint);
  }
  render(){
    return(
      <div className="home-component">
        <RecipesListContainer />
        <RecipeViewComponent />
      </div>
    );
  }
}