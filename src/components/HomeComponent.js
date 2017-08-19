import React from 'react';

import RecipesListComponent from './partials/RecipesListComponent';
import RecipeViewComponent from './partials/RecipeViewComponent';

const endpoint = 'https://open.zigmundsunoo.com/api/recipes'
// const endpoint = '//localhost:3000/api/recipes'

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
        <RecipesListComponent />
        <RecipeViewComponent />
      </div>
    );
  }
}