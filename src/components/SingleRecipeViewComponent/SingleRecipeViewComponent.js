import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './SingleRecipeViewComponent.css'

class SingleRecipeViewComponent extends Component {
    constructor(props) {
        super(props)
    }
    null
    componentDidMount(){}
    componentDidUpdate(nextProps){
        if(nextProps.id !== this.props.recipeID){
            console.log('recipeId Changed')
            // this.isValidId(nextProps.id)
        }
    }
    isValidId(id){
        return this.props.recipes.filter(o=>o.id===id)
    }
    render() {
        // console.log(this.props)
        // const componentClasses=["SingleRecipeViewComponent", this.props.styleProps]
        return (
            <div className={componentClasses.toString().replace(',',' ')}>
                <pre>{this.props.recipeID ? JSON.stringify(this.props.recipeID) : 'none'}</pre>
                I am a Single recipe
            </div>
        );
    }
}

SingleRecipeViewComponent.propTypes = {}

SingleRecipeViewComponent.defaultProps = {}

export default SingleRecipeViewComponent
