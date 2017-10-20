import React from 'react';
import RecipesListContainer from '../containers/RecipesListContainer';
import RecipeViewContainer from '../containers/RecipeViewContainer';

export default class RecipePageComponent extends React.Component {
	constructor(props){
    super(props)
  }
	componentDidMount(){
		console.log(this.props);
		let id = this.props.match.params.recipe;
		this.props.fetchSingleRecipe(id);
	}
	render() {
		return ( 
			<div className ="recipe-component">
				<RecipeViewContainer/>
			</div>
		);
	}
}