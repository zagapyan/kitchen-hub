import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BeatLoader } from 'react-spinners'
import { NavLink } from 'react-router-dom'
import { Edit, Trash2, Star } from 'react-feather'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchDeleteRecipe } from '../../actions/domainActions'
import styles from './RecipeListComponent.css'

class RecipeListComponent extends Component{
  constructor(props){
    super(props)
  }
  null
  handleDeleteRecipe(recipe){
    this.props.fetchDeleteRecipe(recipe._id)
  }
  render(){
    return(
        <div className="RecipeListComponent">
          <ul>
            {this.props.recipes ? this.props.recipes.map(o=>
                <li key={o._id.toString()}>
                  <NavLink to={`/recipe/${o._id}`}>{o.title}</NavLink>
                  <button className=""><Edit /></button>
                  <button className="" onClick={this.handleDeleteRecipe.bind(this, o)}><Trash2 /></button>
                  <button className=""><Star /></button>
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

RecipeListComponent.defaultProps = {}

function mapStateToProps(state) {
  return {
    fetchDeleteRecipe
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    // ...clientActions
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(RecipeListComponent);
