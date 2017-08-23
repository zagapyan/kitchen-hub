import React from 'react';

export default class RecipeViewComponent extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <section className="recipe-view-component">
        <h2>I am Recipe View Component</h2>
      </section>
    )
  }
}