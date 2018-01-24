import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styles from './RecipePageComponent.css'
import RecipeListComponent from '../RecipeListComponent'
import { fetchRecipes } from '../../actions/domainActions'
import SingleRecipeViewComponent from '../SingleRecipeViewComponent'
import endpoint from '../../utils/endpoint'
import { HeaderComponent } from '../HeaderComponent/HeaderComponent';

class RecipePageComponent extends Component {
  constructor(props) {
    super(props)
    // if location params change in the same component
    // this.props.history.listen((location, action)=>{
    //   let recipeID = this.props.match.params.recipe
    // })
  }
  null
  componentDidMount(){
    console.log('componentDidMount');
    this.handleSingleRecipeFetch()
  }
  handleSingleRecipeFetch(){
    if(this.props.recipes.length <= 0){
      console.log('fetchingRecipes')
      this.props.fetchRecipes(endpoint)
    }
  }
  handleNavToggle(recipe){
    console.log(recipe)
  }
  render() {
    return (
      <div className = "RecipePageComponent">
        {/* <Link className="title is-5 has-text-left" to="/">KitchenHub</Link> */}
        <HeaderComponent />
        <SingleRecipeViewComponent
            recipeID={this.props.match.params.recipe}
            recipes={this.props.recipes}
            />
      </div>
    );
  }
}

RecipePageComponent.propTypes = {
  fetchRecipes: PropTypes.func,
  recipes: PropTypes.array,
}

function mapStateToProps(state) {
  return {
    recipes: state.domainReducer.recipes,
    fetchRecipes,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchRecipes
  }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
  (RecipePageComponent);