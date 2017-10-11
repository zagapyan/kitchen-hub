import React from 'react';
import RecipesListContainer from '../containers/RecipesListContainer';
import RecipeViewContainer from '../containers/RecipeViewContainer';

export default class RecipePageComponent extends React.Component {
	render() {
		return ( 
			<div className ="recipe-component">
				<RecipeViewContainer />
			</div>
		);
	}
}