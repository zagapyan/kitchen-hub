import React from 'react';

export default class RecipesListComponent extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <nav>
        <ul>
          <li>I am Recipes List Component</li>
        </ul>
      </nav>
    )
  }
}