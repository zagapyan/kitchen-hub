import React from 'react';
import endpoint from '../../utils/endpoint'
import '../../App.css';
import { isEmpty } from 'lodash';

export default class RecipesListComponent extends React.Component{
  constructor(props){
    super(props);
  }
  handleRefreshRecipesList(e){
    e.preventDefault();
    this.props.fetchRecipes(endpoint);
    setTimeout(_=>console.log(this.props),3000)
  }
  render(){
    return(
      <nav className="recipes-list-component">
        <h1>Kitchen Hub</h1>
        <button
          onClick={this.handleRefreshRecipesList.bind(this)}>
          Refresh</button>
        <small>{this.props.timeStamp ? `Last Update: ${this.props.timeStamp}` : 'No time stamp available'}</small>
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