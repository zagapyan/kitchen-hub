import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './SingleRecipeViewComponent.css'
import { BookOpen } from 'react-feather'
import { Redirect } from 'react-router-dom'

class SingleRecipeViewComponent extends Component {
    constructor(props) {
        super(props)
    }
    null
    componentDidMount(){}
    componentDidUpdate(nextProps){
        if(nextProps.id !== this.props.recipeID){
            console.log('recipeId Changed')
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
                <div className="renderCurrentRecipe">
                    <div className="section">
                      {currentRecipe.map(o=>
                        <div class="card">
                          <div class="card-image">
                            <figure class="image">
                              <img src={o.imgSrc} title={`Media Image: ${o.title}`} style={{objectFit: 'cover', maxHeight: 200}} />
                            </figure>
                          </div>
                          <div class="card-content">
                            <div class="media">
                              <div class="media-left">
                                <figure class="image">
                                  <BookOpen size="36"/>
                                </figure>
                              </div>
                              <div class="media-content">
                                <a class="title is-4" href={o.url} target="_blank">{o.title}</a>
                              </div>
                            </div>
                            <div class="content">
                              <p class="subtitle is-6 has-text-left">{o.description}</p>
                              <a className="button is-primary" href={o.url} target="_blank">Go</a>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                </div>
            )
        }
        return <Redirect to={{pathname: '/'}}/>
    }
    render() {
        const renderCurrentRecipe = this.props.recipes 
            ? this.isValidId(this.props.recipeID)
            : false
        return (
            <div className="SingleRecipeViewComponent">
                { renderCurrentRecipe }
            </div>
        );
    }
}

SingleRecipeViewComponent.propTypes = {}

SingleRecipeViewComponent.defaultProps = {}

export default SingleRecipeViewComponent
