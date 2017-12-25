import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import styles from './IndexComponent.css'
import SearchComponent from '../SearchComponent'
import RecipeListComponent from '../RecipeListComponent'
import * as domainActions from '../../actions/domainActions';
import endpoint from '../../utils/endpoint';

class IndexComponent extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount(){
    }
    componentDidMount(){
      this.props.fetchRecipes(endpoint) 
    }
    handleDeleteRecipe(id,event){
      event.preventDefault();
      this.props.fetchDeleteRecipe(id);
    }
    handleRefreshRecipesList(event){
      // event.preventDefault();
      // console.log('handleRefreshRecipesList')
      // this.props.fetchRecipes(endpoint)
    }
    handleCurrentRecipeView(id,recipes,proxy){
    
    }
    null
    render() {
        return (
            <div className="IndexComponent">
              <SearchComponent />
              <RecipeListComponent recipes={this.props.recipes}/>
            </div>
        );
    }
}

IndexComponent.propTypes = {}

IndexComponent.defaultProps = {}

// export default IndexComponent

function mapStateToProps(state) {
  return {
    recipes: state.domainReducer.recipes,
    timeStamp: state.domainReducer.timeStamp,
    fetchRecipes: domainActions.fetchRecipes,
    fetchDeleteRecipe: domainActions.fetchDeleteRecipe
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

