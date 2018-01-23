import React from 'react'
import PropTypes from 'prop-types'
import styles from './RecipeControlComponent.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Edit, Trash2, Star } from 'react-feather'
import { handleDeleteRecipe } from '../../actions/domainActions'

// const RecipeControlComponent = ({props}) => (
//   <div className="RecipeControlComponent"> 
//     <button className="button is-small"><Edit size="14"/></button>
//     <button className="button is-small" onClick={()=>handleDeleteRecipe(props._id)}><Trash2 size="14"/></button>
//     <button className="button is-small"><Star size="14"/></button>
//   </div>
// );

// RecipeControlComponent.propTypes = {}
// RecipeControlComponent.defaultProps = {}

class RecipeControlComponent extends React.Component{
  constructor(props){
    super(props)
  }
  null
  render(){
    return(
      <div className="RecipeControlComponent"> 
        <button className="button is-small">
          <Edit size="14"/></button>
        <button className="button is-small"
          onClick={
            this.props.handleDeleteRecipe.bind(this, this.props._id)}>
          <Trash2 size="14"/></button>
        <button className="button is-small">
          <Star size="14"/></button>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    handleDeleteRecipe
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleDeleteRecipe
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(RecipeControlComponent);
