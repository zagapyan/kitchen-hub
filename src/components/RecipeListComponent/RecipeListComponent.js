import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BeatLoader } from 'react-spinners'
import { NavLink } from 'react-router-dom'
import { Edit, Trash2, Star } from 'react-feather'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { handleDeleteRecipe, fetchRecipes } from '../../actions/domainActions'
import RecipeControlComponent from '../RecipeControlComponent'
import styles from './RecipeListComponent.css'

class RecipeListComponent extends Component{
  constructor(props){
    super(props)
  }
  null
  handleDeleteRecipe(recipe){
    this.props.handleDeleteRecipe(recipe._id)
    setTimeout(()=>this.props.fetchRecipes(), 2000)
  }
  render(){
    return(
      <div className="RecipeListComponent">
        <ul>
          {this.props.recipes ? this.props.recipes.map(o=>
              <li key={o._id.toString()}>
                <NavLink to={`/recipe/${o._id}`}>{o.title}</NavLink>
                <RecipeControlComponent props={o}/>       
                <span>
                  { o.tags ? o.tags.map((i,k)=>
                    <pre key={`${o._id}${k}`}>i.name</pre>)
                    : false }
                </span>
              </li>
            ) : <BeatLoader />}
        </ul>
      </div>
    )
  }
}

RecipeListComponent.propTypes = {}

function mapStateToProps(state) {
  return {
    fetchRecipes,
    handleDeleteRecipe,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchRecipes,
    handleDeleteRecipe
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(RecipeListComponent)
