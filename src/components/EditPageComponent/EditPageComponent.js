import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Plus } from "react-feather";
import HeaderComponent from "../HeaderComponent";
import { fetchSingleRecipe, updateRecipe, addTag } from "../../actions/domainActions";
import styles from "./EditPageComponent.scss";

class EditPageComponent extends Component {
  payload = {};
  componentDidMount() {
    let id = this.props.match.params.recipe;
    this.props.fetchSingleRecipe(id);
  }
  handleUpdateRecipe() {
    const payload = {
      _id: this.props.match.params.recipe,
      title: this.payload.title.value || this.props.currentRecipe.title,
      description: this.payload.description.value || this.props.currentRecipe.description,
      imgSrc: this.payload.imgSrc.value || this.props.currentRecipe.imgSrc,
      tags: this.payload.tags || this.props.currentRecipe.tags
    }
    this.props.updateRecipe(payload)
  }
  handleAddTag(){
    const tags = this.props.currentRecipe.tags || [];
    const testTag = this.payload.tag.value || '';
    console.log('handleAddTag')
    if(testTag !== ''){
      console.log('does not === blank')
      if(!tags.includes(testTag)){
        this.props.addTag(testTag, tags)
        this.payload.tag.value = '';
      }
      else return false;
    }
    return false;
  }
  render() {
    return (
      <div className="EditPageComponent">
        <HeaderComponent />
        <div className="section">
          <div className="container">
            <div className="card">
              <div className="card-content">
                <h1 className="title is-2 has-text-left">Edit Recipe</h1>
                <div className="panel">
                  <div className="columns">
                    <div className="column">
                      <div className="field">
                        <label className="label has-text-left">Title</label>
                        <h2 className="title is-6 has-text-left">
                          {this.props.currentRecipe.title ||
                            "No Title Provided"}
                        </h2>
                        <div className="control">
                          <input
                            type="text"
                            className="input"
                            ref={input => {
                              this.payload.title = input;
                            }}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label has-text-left">
                          Description
                        </label>
                        <p className="has-text-left">
                          {this.props.currentRecipe.description ||
                            "No description provided"}
                        </p>
                        <div className="control">
                          <input
                            type="text"
                            className="input"
                            ref={input => {
                              this.payload.description = input;
                            }}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label has-text-left">Tags</label>
                        {this.props.currentRecipe.tags ? (
                          <ul className="level">
                            {this.props.currentRecipe.tags.map((tag, key) => (
                              <li className="level-item">
                                <span class="tag is-primary is-medium">
                                  {tag}
                                  <button
                                    class="delete is-small"
                                    onClick={() => console.log("delete")}
                                  />
                                </span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          false
                        )}
                      </div>
                      <div className="field has-addons is-paddingless">
                        
                        <div className="control is-expanded">
                          <input
                            type="text"
                            className="input"
                            ref={input => {
                              this.payload.tag = input;
                            }}
                          />
                        </div>
                        <div className="control">
                          <button
                            className="button"
                            onClick={ this.handleAddTag.bind(this) }
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <label className="label has-text-left">
                        Image Source
                      </label>
                      <img src={this.props.currentRecipe.imgSrc} />
                      <div className="control">
                        <input
                          type="text"
                          className="input"
                          ref={input => {
                            this.payload.imgSrc = input;
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={this.handleUpdateRecipe.bind(this)}
                    className="button is-primary"
                  >
                    Update
                  </button>
                  <a
                    href={this.props.currentRecipe.url}
                    target="_blank"
                    className="button"
                  >
                    View Page
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EditPageComponent.propTypes = {
  currentRecipe: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    imgSrc : PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string)
  })
};

function mapStateToProps(state) {
  return {
    fetchSingleRecipe,
    updateRecipe,
    addTag,
    currentRecipe: state.domainReducer.currentRecipe
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchSingleRecipe,
      updateRecipe,
      addTag
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPageComponent);
