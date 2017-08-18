import React from 'react';

import RecipesListComponent from './partials/RecipesListComponent';
import RecipeViewComponent from './partials/RecipeViewComponent';

export default class HomeComponent extends React.Component{
  constructor(props){
    super(props);
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