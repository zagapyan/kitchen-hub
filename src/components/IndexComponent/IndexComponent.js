import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styles from "./IndexComponent.scss";
import HeaderComponent from "../HeaderComponent";
import RecipesPageComponent from "../RecipesPageComponent";
import PushURLComponent from "../PushURLComponent";
import PaginationComponent from "../PaginationComponent";
import { pageReset, pageChange } from "../../actions/clientActions";
import * as domainActions from "../../actions/domainActions";

class IndexComponent extends Component {
  handlePageUp = () => this.props.pageUp(this.props.page);
  componentWillMount() {}
  componentDidMount() {
    const tag = this.props.match.params.tag;
    const page = this.props.match.params.pageNumber;
    this.handleChangePage({page});
  }
  componentWillReceiveProps(nextProps) {
    const tag = this.props.match.params.tag;
    const page = nextProps.page;

    if (nextProps.match.params.tag !== this.props.match.params.tag) {
      let tag = nextProps.match.params.tag;
      this.handleFetchRecipes({ tag, page });
    }
    if (
      this.props.triggerNextAction !== nextProps.triggerNextAction &&
      nextProps.triggerNextAction === true
    ) {
      this.handleFetchRecipes({ tag, page });
    }
    if(this.props.page !== nextProps.page){
      this.handleFetchRecipes({ tag, page });
    }
    if (
      this.props.match.params.pageNumber !== nextProps.match.params.pageNumber
    ){
      // console.log('new page number from router')
      this.handleChangePage({ page: nextProps.match.params.pageNumber });
    }
  }
  componentWillUnmount(){
    // this.props.pageReset()
  }
  handleFetchRecipes(options) {
    this.props.fetchRecipes(options);
  }
  handleChangePage(data){
    this.props.pageChange(data)
  }
  render() {
    // return full list unless filtering is turned on
    let recipes = !!this.props.filtering
      ? this.props.filteredRecipes
      : this.props.recipes;
    return (
      <div className="IndexComponent">
        <HeaderComponent />
        <div className="section">
          <div className="container">
            <PushURLComponent />
            <RecipesPageComponent
              recipes={recipes}
              isTagPage={!!this.props.match.params.tag}
            />
            {/* <PaginationComponent
              props={{
                currentPage: this.props.match.params.pageNumber
              }}
            /> */}
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
  pageUp: PropTypes.func,
  pageDown: PropTypes.func,
  pageChange: PropTypes.func,
  pageReset: PropTypes.func,
  page: PropTypes.number
};

function mapStateToProps(state) {
  return {
    recipes: state.domainReducer.recipes,
    filtering: state.domainReducer.filtering,
    filteredRecipes: state.domainReducer.filteredRecipes,
    fetchRecipes: domainActions.fetchRecipes,
    triggerNextAction: state.domainReducer.triggerNextAction,
    isFetchLocked: state.clientReducer.isFetchLocked,
    pageReset: state.clientReducer.pageReset,
    pageChange: state.clientReducer.pageChange,
    page: state.clientReducer.page,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...domainActions,
      pageReset,
      pageChange
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexComponent);
