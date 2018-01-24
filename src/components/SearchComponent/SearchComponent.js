import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
// import { Grid, List } from 'react-feather'
import styles from './SearchComponent.css'
import * as domainActions from '../../actions/domainActions';

class SearchComponent extends Component {
  constructor(props) {
      super(props)
  }
  filterListByTitle(event){
    this.props.filterRecipe(event.target.value)
  }
  render() {
      return (
        <div className="SearchComponent">
          <div className="field">
            <div className="control">
              <input
                  className="input is-small column"
                  type="text"
                  placeholder="Filter"
                  onChange={this.filterListByTitle.bind(this)}
                  ref="searchComponentInput"/>
              {/* <div className="select is-small">
                <select>
                  <option>title</option>
                  <option>tag</option>
                </select>
              </div>
              <button className="button is-small">
                <Grid size="14"/></button>
              <button className="button is-small">
                <List size="14"/></button> */}
            </div>
          </div>
        </div>
      );
  }
}

SearchComponent.propTypes = {
  filterRecipe: PropTypes.func,
}

function mapStateToProps(state) {
  return {
    filterRecipe: domainActions.filterRecipe
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
(SearchComponent);
