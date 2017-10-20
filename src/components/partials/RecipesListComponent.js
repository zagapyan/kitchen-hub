import React from 'react';
import { Link } from 'react-router-dom';
import endpoint from '../../utils/endpoint'
import '../../App.css';
import { isEmpty } from 'lodash';
import { RefreshCcw, Trash } from 'react-feather';
import moment from 'moment';

export default class RecipesListComponent extends React.Component{
  constructor(props){
    super(props);
  }
  componentWillMount(){
    // this.props.fetchRecipes(endpoint)
  }
  componentDidMount(){
    this.props.fetchRecipes(endpoint) 
  }
  handleDeleteRecipe(id,event){
    event.preventDefault();
    this.props.fetchDeleteRecipe(id);
  }
  handleRefreshRecipesList(event){
    event.preventDefault();
    console.log('handleRefreshRecipesList')
    this.props.fetchRecipes(endpoint)
  }
  handleCurrentRecipeView(id,recipes,proxy){
    // this.props.filterCurrentRecipe(id, recipes);
  }
  render(){
    return(
      <nav className="recipes-list-component">
        <header>
          <div className="title-container">
            <h1 className="site-title">Kitchen Hub</h1>
            <button
              onClick={this.handleRefreshRecipesList.bind(this)}
              className="refresh-recipe-btn btn">
                <RefreshCcw /></button>
          </div>
          <small className="last-update-label">
            {this.props.timeStamp ?
              `Last Update: ${moment(this.props.timeStamp).calendar()}`
              : 'No time stamp available'}</small>
        </header>
        <ul className="recipe-list">{
          !isEmpty(this.props.recipes) ? 
            this.props.recipes.map(
              (data, index)=>
                <li key={index} className="recipe-list-item" data-id={data._id}>
                  {/* <button
                    onClick={this.handleCurrentRecipeView.bind(this, data._id, this.props.recipes)}>
                      {data.title}
                  </button> */}
                  <Link to={'recipe/'+data._id}>{data.title}</Link>
                  <button
                    className="trash-icon"
                    onClick={this.handleDeleteRecipe.bind(this, data._id)}>
                    <Trash height="16"/></button>
                  </li>)
            : <li>No recipes Available</li>}
        </ul>
      </nav>
    )
  }
}