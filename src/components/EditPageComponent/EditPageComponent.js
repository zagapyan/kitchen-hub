import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Plus } from "react-feather";
import HeaderComponent from "../HeaderComponent";
import {
  fetchSingleRecipe,
  updateRecipe,
  assignTags,
  addTag,
  toggleActive
} from "../../actions/domainActions";
import styles from "./EditPageComponent.scss";

class EditPageComponent extends Component {
  payload = {};
  componentDidMount() {
    let id = this.props.match.params.recipe;
    this.props.fetchSingleRecipe(id);
  }
  componentDidUpdate(nextProps) {
    if (this.props.currentRecipe !== nextProps.currentRecipe){
      this.props.assignTags(this.props.currentRecipe.tags);
    }
  }
  handleUpdateRecipe() {
    const payload = {
      _id: this.props.match.params.recipe,
      title: this.payload.title.value || this.props.currentRecipe.title,
      description:
        this.payload.description.value || this.props.currentRecipe.description,
      // imgSrc: this.payload.imgSrc.value || this.props.currentRecipe.imgSrc,
      tags: this.props.editableTags || this.props.currentRecipe.tags || []
    };
    this.props.updateRecipe(payload);
  }
  handleAddTag() {
    const tags = this.props.editableTags || [];
    const testTagValue = this.payload.tag.value || "";
    console.log(testTagValue, tags);
    if (testTagValue !== "") {
      if (!tags.includes({ value: testTagValue })) {
        this.props.addTag({ value: testTagValue, active: true }, tags);
        this.payload.tag.value = "";
      } else return false;
    }
    return false;
  }
  handleKeyPress = (e)=>{
    if (e.key === 'Enter') {
      this.handleAddTag();
    }
  }
  handletoggleActive = (key)=>{  
    this.props.toggleActive(key, this.props.editableTags)
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
                        {this.props.editableTags ? (
                          <ul className="field is-grouped is-grouped-multiline">
                            {this.props.editableTags.map((tag, key) =>{
                              if(tag.active){
                                return(
                                  <li className="control" key={`tag_${key}`}>
                                    {tag.active}
                                    <span className="tags has-addons">
                                      <span className="tag is-primary">{tag.value}</span>
                                      <span className="tag is-primary is-delete" onClick={ ()=> this.handletoggleActive(key) }></span>
                                    </span>
                                  </li>
                                )
                              }
                              else{
                                return(<li className="control" key={`tag_${key}`}>
                                {tag.active}
                                <span className="tags has-addons">
                                  <a className={`tag is-primary ${tag.active ? '': 'inactive'}`} onClick={ ()=> this.handletoggleActive(key)}>{tag.value}</a>
                                </span>
                              </li>)
                              }
                            })}
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
                            onKeyPress={ this.handleKeyPress }
                          />
                        </div>
                        <div className="control">
                          <button
                            className="button"
                            onClick={this.handleAddTag.bind(this)}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <label className="label has-text-left">
                        Image
                      </label>
                      <img src={this.props.currentRecipe.imgSrc} />
                      {/* <div className="control">
                        <input
                          type="text"
                          className="input"
                          ref={input => {
                            this.payload.imgSrc = input;
                          }}
                        />
                      </div> */}
                    </div>
                  </div>
                  <div className="level">
                    <div className="level-left">
                      <button
                        onClick={ this.handleUpdateRecipe.bind(this) }
                        className="button is-primary level-item update"
                      >
                        Update
                      </button>
                    </div>
                    <div className="level-right">
                      <a
                        href={this.props.currentRecipe.url}
                        target="_blank"
                        className="button level-item"
                      >
                        View Page
                      </a>
                    </div>
                  </div>
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
    // imgSrc: PropTypes.string,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        active: PropTypes.bool
      })
    )
  }),
  editableTags: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      active: PropTypes.bool
    })
  )
};

function mapStateToProps(state) {
  return {
    fetchSingleRecipe,
    updateRecipe,
    assignTags,
    addTag,
    toggleActive,
    currentRecipe: state.domainReducer.currentRecipe,
    editableTags: state.domainReducer.editableTags
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchSingleRecipe,
      updateRecipe,
      assignTags,
      addTag,
      toggleActive
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPageComponent);
