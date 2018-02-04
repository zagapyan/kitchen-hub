import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BeatLoader } from 'react-spinners'
import { NavLink } from 'react-router-dom'
import { Book } from 'react-feather'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchRecipes, filterClear } from '../../actions/domainActions'
import SearchComponent from '../SearchComponent'
import RecipeControlComponent from '../RecipeControlComponent'
import styles from './RecipeListComponent.scss'

class RecipeListComponent extends Component{
  constructor(props){
    super(props)
  }
  null
  componentWillUnmount(){
    this.props.filterClear()
  }
  render(){
    return(
      <div className="RecipeListComponent">
        <nav className="panel">
          <div className="panel-heading">
            <SearchComponent/>
          </div>
          {this.props.recipes ? this.props.recipes.map(o=>
            <span className="panel-block" key={o._id.toString()}>
              <span className="panel-icon">
                <Book size="14" />
              </span>
              <NavLink to={`/recipe/${o._id}`} className="recipe-link">{o.title}</NavLink>
              <RecipeControlComponent props={o} className="recipe-control"/>       
              <span>
                { o.tags ? o.tags.map((i,k)=>
                  <pre key={`${o._id}${k}`}>i.name</pre>)
                  : false }
              </span>
            </span>
            )
            : <div className="section has-text-centered">
                <BeatLoader />
              </div>
            }
        </nav>
      </div>
    )
  }
}

RecipeListComponent.propTypes = {
  fetchRecipes: PropTypes.func,
  filterClear: PropTypes.func,
  recipes: PropTypes.array,
}

function mapStateToProps(state) {
  return {
    fetchRecipes,
    filterClear
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchRecipes,
    filterClear
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(RecipeListComponent)
