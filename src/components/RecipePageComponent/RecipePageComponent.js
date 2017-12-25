import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './RecipePageComponent.css'
import RecipeListComponent from '../RecipeListComponent';
import SingleRecipeViewComponent from '../SingleRecipeViewComponent';
class RecipePageComponent extends Component {
    constructor(props) {
        super(props)
    }
    null
    render() {
        return (
            <div className="RecipePageComponent">
              I Am A Single Recipe
              <RecipeListComponent />
              <SingleRecipeViewComponent />
            </div>
        );
    }
}

RecipePageComponent.propTypes = {}

RecipePageComponent.defaultProps = {}

export default RecipePageComponent
