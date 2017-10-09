import React from 'react';

import RecipesListContainer from '../containers/RecipesListContainer';
import RecipeViewContainer from '../containers/RecipeViewContainer';
import endpoint from '../utils/endpoint';

export default class HomeComponent extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="home-component">
        <RecipesListContainer />
        {/* <RecipeViewContainer /> */}
      </div>
    );
  }
}