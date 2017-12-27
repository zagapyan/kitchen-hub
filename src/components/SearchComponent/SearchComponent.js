import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
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
        <input
          type="text"
          placeholder="Filter"
          onChange={this.filterListByTitle.bind(this)}
          ref="searchComponentInput"/>
        <select>
          <option>title</option>
          <option>tag</option>
        </select>
      </div>
      );
  }
}

SearchComponent.propTypes = {}

SearchComponent.defaultProps = {}

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
