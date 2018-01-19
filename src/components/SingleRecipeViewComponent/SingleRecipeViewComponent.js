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
    ifExistsInState(){
        if(0) return true
        else return false
    }
    handleSingleRecipesRequest(){
        return 0;
    }
    isValidId(id){
        return this.props.recipes.filter(o=>o.id===id)
    }
    render() {
        console.table(this.props)
        console.log(this.props.recipeID)
        const componentClasses=["SingleRecipeViewComponent", this.props.styleProps]
        return (
            <div className={componentClasses.toString().replace(',',' ')}>
                <pre>{this.props.recipeID ? JSON.stringify(this.props.recipeID) : 'none'}</pre>
                {
                    this.props.recipes 
                        ?   JSON.stringify(this.props.recipes.filter(o=>o._id === this.props.recipeID)[0])
                        : 'none'
                }
            </div>
        );
    }
}

SingleRecipeViewComponent.propTypes = {}

SingleRecipeViewComponent.defaultProps = {}

export default SingleRecipeViewComponent
