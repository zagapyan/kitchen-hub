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
    this.props.fetchTags
  }
  render() {
    return (
      <div className="EditPageComponent">
        <HeaderComponent />
        <div className="section">
          <div className="container">
            <h1 className="title is-2 has-text-left">Edit Recipe</h1>
            <div className="panel">
              <form htmlFor="" className="field">
                <div className="columns">
                  <div className="column">
                    <label className="label has-text-left">Title</label>
                    <h2 className="title is-3 has-text-left">{this.props.currentRecipe.title}</h2>
                    <div className="control">
                      <input type="text" className="input" refs="title"/>
                    </div>
                    <label className="label has-text-left">Description</label>
                    <p className="has-text-left">{this.props.currentRecipe.description}</p>
                    <div className="control">
                      <input type="text" className="input" refs="description"/>
                    </div>
                  </div>
                  <div className="column">
                    <label className="label has-text-left">Image Source</label>
                    <img src={this.props.currentRecipe.imgSrc} />
                    <div className="control">
                      <input type="text" className="input" refs="imgSrc"/>
                    </div>
                  </div>
                </div>
                <button type="submit" className="button">Update</button>
              </form>
            </div>
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