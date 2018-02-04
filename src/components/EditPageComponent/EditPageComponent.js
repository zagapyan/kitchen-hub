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
    this.props.fetchSingleRecipe(id)
  }
  render() {
    return (
      <div className="EditPageComponent">
        <HeaderComponent />
        <div className="container">
          <h1 className="title is-2 has-text-left">Edit Recipe</h1>
          <div className="section">
            <form htmlFor="" className="field">
              <label className="label has-text-left">Title</label>
              <div className="control">
                <input type="text" className="input" refs="title"/>
              </div>
              <label className="label has-text-left">Description</label>
              <div className="control">
                <input type="text" className="input" refs="description"/>
              </div>
              <label className="label has-text-left">Image Source</label>
              <div className="control">
                <input type="text" className="input" refs="imgSrc"/>
              </div>
              <div className="control">
                
              </div>
              <button type="submit" className="button">Update</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

EditPageComponent.propTypes = {}

function mapStateToProps(state) {
  return {
    fetchSingleRecipe,
    currentRecipe: state.domainReducer.currentRecipe
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