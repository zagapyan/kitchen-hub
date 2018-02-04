import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HeaderComponent from '../HeaderComponent'
import { fetchSingleRecipe } from '../../actions/domainActions'
import styles from './EditPageComponent.scss'

class EditPageComponent extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount(){
    let id = this.props.match.params.recipe;
    
  }
  render() {
    return (
      <div className="EditPageComponent">
        <HeaderComponent />
        <div className="">
          <h1 className="title is-1">{this.props.match.params.recipe}</h1>
          <div className="section">
            {JSON.stringify(this.props)}
          </div>
        </div>
      </div>
    );
  }
}

EditPageComponent.propTypes = {}

function mapStateToProps(state) {
  return {
    fetchSingleRecipe
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchSingleRecipe
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(EditPageComponent);