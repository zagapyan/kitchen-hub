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
    console.log('handleRefreshRecipesList')
    this.props.fetchRecipes(endpoint)
  }
  render(){
    return(
      <nav className="recipes-list-component">
        <h1>Kitchen Hub</h1>
        <button
          onClick={this.handleRefreshRecipesList.bind(this)}>
          Refresh</button>
        <br />
        <small>{this.props.timeStamp ? `Last Update: ${this.props.timeStamp}` : 'No time stamp available'}</small>
        <pre>{/*JSON.stringify(this.props)*/}</pre>
        <ul>
          {/*
            this.props.recipes ?
              this.props.recipes.map(
                (data, key)=>
                  <li key={key}>{data}</li>)
              : <li>No Recipes Currently Present</li>*/}
        </ul>
        <button
          onClick={()=>this.props.updateRecipes()}>
          Update</button>
      </nav>
    )
  }
}