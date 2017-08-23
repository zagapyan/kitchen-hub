import React from 'react';
import '../../App.css';
import { isEmpty } from 'lodash';

export default class RecipesListComponent extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props)
  }
  handleRefreshRecipesList(e){
    e.preventDefault();
    console.log(this.props.recipes);
    console.log(isEmpty(this.props.recipes));
  }
  render(){
    return(
      <nav className="recipes-list-component">
        <h1>Kitchen Hub</h1>
        <button
          onClick={this.handleRefreshRecipesList.bind(this)}>
          Refresh</button>
        <ul>
          {
            this.props.recipes ?
              this.props.recipes.map(
                (data, key)=>
                  <li key={key}>{data}</li>)
              : <li>No Recipes Currently Present</li>}
        </ul>
      </nav>
    )
  }
}