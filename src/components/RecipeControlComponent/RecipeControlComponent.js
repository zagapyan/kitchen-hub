import React from 'react'
import PropTypes from 'prop-types'
import styles from './RecipeControlComponent.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Edit, Trash2, Star } from 'react-feather'
import { deleteRecipe, fetchRecipes } from '../../actions/domainActions'

class RecipeControlComponent extends React.Component{
  constructor(props){
    super(props)
  }
  null
  handleDeleteRecipe(recipe){
    let id = recipe.props._id
    this.props.deleteRecipe(id)
    setTimeout(()=>this.props.fetchRecipes(), 1000)
  }
  fuck(props){
    console.log(props)
  }
  render(){
    return(
      <div className="RecipeControlComponent"> 
        {/* {JSON.stringify(this.props)} */}
        <button className="button is-small">
          <Edit size="14"/></button>
        <button className="button is-small"
          onClick={this.handleDeleteRecipe.bind(this, this.props)}>
          <Trash2 size="14"/></button>
        <button className="button is-small">
          <Star size="14"/></button>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    deleteRecipe,
    fetchRecipes
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteRecipe,
    fetchRecipes
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(RecipeControlComponent);
