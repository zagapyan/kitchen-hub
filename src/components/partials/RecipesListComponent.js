import React from 'react';
import '../../App.css';

export default class RecipesListComponent extends React.Component{
  constructor(props){
    super(props);
  }
  handleRefreshRecipesList(e){
    e.preventDefault();
    console.log('refresh!');
    console.log(this.props)
  }
  componentWillMount(){
    console.log(this.props);
  }
  componentDidMount(){
    console.log(this.props);
  }
  render(){
    return(
      <nav className="recipes-list-component">
        <h1>Kitchen Hub</h1>
        <button onClick={this.handleRefreshRecipesList.bind(this)}>Refresh</button>
        <ul>
          <li>I am Recipes List Component</li>
        </ul>
      </nav>
    )
  }
}