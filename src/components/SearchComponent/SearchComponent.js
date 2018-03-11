import React, {Component} from "react";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Grid, List, XCircle} from "react-feather";
import styles from "./SearchComponent.scss";
import {toggleListStyle} from '../../actions/clientActions'
import {filterRecipe, filterClear} from "../../actions/domainActions";

class SearchComponent extends Component {
  constructor(props) {
    super(props);
  }
  filterListByTitle(event) {
    this
      .props
      .filterRecipe(event.target.value);
  }
  handleFilterClear() {
    this
      .props
      .filterClear();
    this.refs.searchComponentInput.value = "";
  }
  handleListStyle = () => {
    console.log('handleListStyle')
    this
      .props
      .toggleListStyle()
  }
  render() {
    return (
      <div className="SearchComponent">
        <div className="field has-addons">
          {this.props.isListStyle
            ? (
              <div className="control">
                <button className="button is-small" onClick={() => this.handleListStyle()}>
                  <Grid size="14"/></button>
              </div>
            )
            : (
              <div className="control">
                <button className="button is-small" onClick={() => this.handleListStyle()}>
                  <List size="14"/></button>
              </div>
            )}
          <div className="control">
            <span className="button is-static is-small">Recipes</span>
          </div>
          <div className="control is-expanded">
            <input
              className="input is-small column"
              type="text"
              placeholder="Filter"
              onChange={this
              .filterListByTitle
              .bind(this)}
              ref="searchComponentInput"/>
          </div>
          <div className="control">
            <button
              className={`button is-small`}
              onClick={this
              .handleFilterClear
              .bind(this)}>
              <XCircle size="12"/>
            </button>
          </div>
        </div>
        <div className="field has-addons">
          {/* <div className="control">
            <div className="select is-small">
              <select>
                <option>title</option>
                <option>tag</option>
              </select>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

SearchComponent.propTypes = {
  filterRecipe: PropTypes.func
};

function mapStateToProps(state) {
  console.log(state)
  return {filterRecipe, filterClear, isListStyle: state.clientReducer.isListStyle};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    filterRecipe,
    filterClear,
    toggleListStyle
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
