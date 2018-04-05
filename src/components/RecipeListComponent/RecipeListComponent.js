import React, {Component} from "react";
import PropTypes from "prop-types";
import {BeatLoader} from "react-spinners";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {fetchRecipes, filterClear} from "../../actions/domainActions";
import SearchComponent from "../SearchComponent";
import ListItemComponent from '../ListItemComponent';
import CardItemComponent from '../CardItemComponent';

import styles from "./RecipeListComponent.scss";

class RecipeListComponent extends Component {
  componentWillUnmount() {
    this
      .props
      .filterClear();
  }
  render() {
    return (
      <div className="RecipeListComponent panel">
        <div className={ this.props.isListStyle ? "panel-heading" : "panel-heading column is-12"}>
          <SearchComponent/>
        </div>
        <nav className={`RecipeListContainer ${this.props.isListStyle ? 'panel-body': 'columns panel-body column'}`}>

          {this.props.recipes
            ? (this.props.recipes.map(o => this.props.isListStyle ? (
            
            <ListItemComponent
              props={o}
              key={o
              ._id
              .toString()}/>) : (<CardItemComponent
                props={o}
                key={o
                ._id
                .toString()}/>)
            ))
            : (
              <div className="column has-text-centered is-fluid">
                <BeatLoader/>
              </div>
            )}
        </nav>
      </div>
    );
  }
}

RecipeListComponent.propTypes = {
  fetchRecipes: PropTypes.func,
  filterClear: PropTypes.func,
  recipes: PropTypes.array
};

function mapStateToProps(state) {
  return {fetchRecipes, filterClear, isListStyle: state.clientReducer.isListStyle};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchRecipes,
    filterClear
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeListComponent);
