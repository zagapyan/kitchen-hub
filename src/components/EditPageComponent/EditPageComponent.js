import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Plus } from "react-feather";
import HeaderComponent from "../HeaderComponent";
import { fetchSingleRecipe } from "../../actions/domainActions";
import styles from "./EditPageComponent.scss";

class EditPageComponent extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let id = this.props.match.params.recipe;
    this.props.fetchSingleRecipe(id);
    // this.props.fetchTags
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
                          <input type="text" className="input" refs="title" />
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
                            refs="description"
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
                            refs="description"
                          />
                        </div>
                        <div className="control">
                          <button
                            className="button"
                            onClick={() => console.log("submit tag")}
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
                        <input type="text" className="input" refs="imgSrc" />
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="button">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EditPageComponent.propTypes = {};

function mapStateToProps(state) {
  return {
    fetchSingleRecipe,
    currentRecipe: state.domainReducer.currentRecipe
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchSingleRecipe
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPageComponent);
