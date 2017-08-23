import React from 'react';
import endpoint from '../../utils/endpoint'
import '../../App.css';
import { isEmpty } from 'lodash';

export default class RecipesListComponent extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props);
  }
  handleRefreshRecipesList(e){
    e.preventDefault();
    // console.log(endpoint);
    // console.log(this.props.fetchRecipes)
    this.props.fetchRecipes(endpoint);
    // setTimeout(_=>console.log(this.props),3000)
  }
  render(){
    return(
      <nav className="recipes-list-component">
        <h1>Kitchen Hub</h1>
        <button
          onClick={this.handleRefreshRecipesList.bind(this)}>
          Refresh</button>
        <button onClick={ ()=>this.props.fetchRecipes(endpoint)}>Refresh</button>
        <small>{this.props.timeStamp ? `Last Update: ${this.props.timeStamp}` : 'No time stamp available'}</small>
        <pre>{JSON.stringify(this.props)}</pre>
        <ul>
          {/*
            this.props.recipes ?
              this.props.recipes.map(
                (data, key)=>
                  <li key={key}>{data}</li>)
              : <li>No Recipes Currently Present</li>*/}
        </ul>
      </nav>
    )
  }
}