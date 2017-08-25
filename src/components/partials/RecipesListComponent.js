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
    setTimeout(()=>console.log(this.props),3000);
  }
  render(){
    return(
      <nav className="recipes-list-component">
        <h1 className="site-title">Kitchen Hub</h1>
        
        <button
          onClick={this.handleRefreshRecipesList.bind(this)}
          className="refresh-recipe-btn btn">
            Refresh</button>
        <br />
        
        <small className="last-update-label">
          {this.props.timeStamp ?
            `Last Update: ${this.props.timeStamp}`
            : 'No time stamp available'}</small>

        <ul className="recipe-list">{
          !isEmpty(this.props.recipes) ? 
            this.props.recipes.map(
              data=>
                <li key={data.id} className="recipe-list-item">
                  <a href={data.url}>{data.title}</a></li>)
            : <li>No recipes Available</li>}
        </ul>
      </nav>
    )
  }
}