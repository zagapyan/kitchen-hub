import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './SearchComponent.css'

class SearchComponent extends Component {
  constructor(props) {
      super(props)
  }
  filterListByTitle(event){
    console.log(event.target.value);
    
  }
  render() {
      return (
        <div className="SearchComponent">
        <input
          type="text"
          placeholder="Filter"
          onChange={this.filterListByTitle.bind(this)}
          ref="searchComponentInput"/>
      </div>
      );
  }
}

SearchComponent.propTypes = {}

SearchComponent.defaultProps = {}

export default SearchComponent
