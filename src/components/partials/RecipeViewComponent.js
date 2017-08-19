import React from 'react';

export default class RecipeViewComponent extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <main className="recipe-view-component">
        <h1>I am Recipe View Component</h1>
      </main>
    )
  }
}