import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import styles from './IndexComponent.scss'
import HeaderComponent from '../HeaderComponent'
import RecipeListComponent from '../RecipeListComponent'
import PushURLComponent from '../PushURLComponent'
import { pageReset, pageUp } from '../../actions/clientActions'
import * as domainActions from '../../actions/domainActions'

class IndexComponent extends Component {
    constructor(props) {
      super(props)
    }
    componentWillMount(){
    }
    componentDidMount(){
      let tag = this.props.match.params.tag;
      let page = this.props.page;
      this.handleFetchRecipes({tag, page})
    }
    componentWillReceiveProps(nextProps){
      if(nextProps.match.params.tag !== this.props.match.params.tag){
        let tag = nextProps.match.params.tag;
        let page = this.props.page;        
        this.handleFetchRecipes({tag, page})
      }
      if(this.props.triggerNextAction !== nextProps.triggerNextAction && nextProps.triggerNextAction === true){
        let tag = this.props.match.params.tag;
        this.handleFetchRecipes({tag})
      }
    }
    componentWillUnmount() {
      // this.props.resetPagination()
    }
    handleFetchRecipes(options){
      this.props.fetchRecipes(options)
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
                  <RecipeListComponent recipes={recipes} isTagPage={!!this.props.match.params.tag}/>
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
  page: PropTypes.number
}

function mapStateToProps(state) {
  return {
    recipes: state.domainReducer.recipes, 
    filtering: state.domainReducer.filtering,
    filteredRecipes: state.domainReducer.filteredRecipes,
    fetchRecipes: domainActions.fetchRecipes,
    triggerNextAction: state.domainReducer.triggerNextAction,
    page: state.clientReducer.page,
    pageReset,
    pageUp
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    pageReset,
    pageUp,
    ...domainActions
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(IndexComponent);

