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
    isValidId(ID){
        const currentRecipe = this.props.recipes.filter(o=>o._id===ID);
        if(!!currentRecipe.length){
            return(
                <div>
                    {currentRecipe.map(o=>
                        <div key="currentRecipe">
                            <img src={o.imgSrc} />
                            <h1 className="is-title is-1">{o.title}</h1>
                            <p>{o.description}</p>
                            <a href={o.url}>Go</a>
                        </div>
                    )}
                </div>
            )
        }
        return <h1>nope</h1>
    }
    render() {
        const componentClasses=["SingleRecipeViewComponent", this.props.styleProps]
        const renderCurrentRecipe = this.props.recipes 
            ? this.isValidId(this.props.recipeID)
            : false
        return (
            <div className={componentClasses.toString().replace(',',' ')}>
                { renderCurrentRecipe }
            </div>
        );
    }
}

SingleRecipeViewComponent.propTypes = {}

SingleRecipeViewComponent.defaultProps = {}

export default SingleRecipeViewComponent
