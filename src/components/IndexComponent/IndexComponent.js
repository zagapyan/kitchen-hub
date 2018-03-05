import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import styles from './IndexComponent.scss'
import HeaderComponent from '../HeaderComponent'
import RecipeListComponent from '../RecipeListComponent'
import PushURLComponent from '../PushURLComponent'
import * as domainActions from '../../actions/domainActions'

class IndexComponent extends Component {
    constructor(props) {
      super(props)
    }
    componentWillMount(){
    }
    componentDidMount(){
      let tag = this.props.match.params.tag;
      this.handleFetchRecipes(tag)
    }
    componentWillReceiveProps(nextProps){
      console.log('props have been received')
      if(nextProps.match.params.tag !== this.props.match.params.tag){
        let tag = nextProps.match.params.tag
        this.handleFetchRecipes(tag)
      }
      if(this.props.triggerNextAction !== nextProps.triggerNextAction && nextProps.triggerNextAction === true){
        console.log('fire in the sky')
        let tag = this.props.match.params.tag;
        this.handleFetchRecipes(tag)
      }
    }
    handleFetchRecipes(tag){
      this.props.fetchRecipes(tag)
    }
    null
    render() {
        // return full list unless filtering is turned on
        let recipes = !!this.props.filtering ? this.props.filteredRecipes : this.props.recipes;
        return (
            <div className="IndexComponent">
              <HeaderComponent />
              <div className="section">
                <div className="container">
                  <PushURLComponent />
                  <RecipeListComponent recipes={recipes}/>
                </div>
              </div>
            </div>
        );
    }
}

IndexComponent.propTypes = {
  recipes: PropTypes.array,
  filtering: PropTypes.bool,
  filteredRecipes: PropTypes.array,
  fetchRecipes: PropTypes.func,
}

function mapStateToProps(state) {
  return {
    recipes: state.domainReducer.recipes, 
    filtering: state.domainReducer.filtering,
    filteredRecipes: state.domainReducer.filteredRecipes,
    fetchRecipes: domainActions.fetchRecipes,
    triggerNextAction: state.domainReducer.triggerNextAction
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...domainActions
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(IndexComponent);

