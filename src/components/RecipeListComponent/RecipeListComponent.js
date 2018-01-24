import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BeatLoader } from 'react-spinners'
import { NavLink } from 'react-router-dom'
import { Book } from 'react-feather'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchRecipes } from '../../actions/domainActions'
import SearchComponent from '../SearchComponent'
import RecipeControlComponent from '../RecipeControlComponent'
import styles from './RecipeListComponent.css'

class RecipeListComponent extends Component{
  constructor(props){
    super(props)
  }
  null
  render(){
    return(
      <div className="RecipeListComponent">
        <nav className="panel">
          <div className="panel-heading">
            <div className="level">
              <div className="level-left">
                  Recipes
              </div>
              <div className="level-item">
                <SearchComponent />
              </div>
            </div>
          </div>
          {this.props.recipes ? this.props.recipes.map(o=>
            <span className="panel-block" key={o._id.toString()}>
              <span className="panel-icon">
                <Book size="14" />
              </span>
              <NavLink to={`/recipe/${o._id}`}>{o.title}</NavLink>
              <RecipeControlComponent props={o}/>       
              <span>
                { o.tags ? o.tags.map((i,k)=>
                  <pre key={`${o._id}${k}`}>i.name</pre>)
                  : false }
              </span>
            </span>
            ) : <BeatLoader />}
        </nav>
      </div>
    )
  }
}

RecipeListComponent.propTypes = {
  fetchRecipes: PropTypes.func,
  recipes: PropTypes.array,
}

function mapStateToProps(state) {
  return {
    fetchRecipes,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchRecipes
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(RecipeListComponent)
