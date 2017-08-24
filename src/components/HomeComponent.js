import React from 'react';

import RecipesListContainer from '../containers/RecipesListContainer';
import MainViewContainer from '../containers/MainViewContainer';
import endpoint from '../utils/endpoint';

export default class HomeComponent extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props);
  }
  componentWillMount(){
    this.props.fetchRecipes(endpoint);
  }
  render(){
    return(
      <div className="home-component">
        <RecipesListContainer />
        <MainViewContainer />
      </div>
    );
  }
}