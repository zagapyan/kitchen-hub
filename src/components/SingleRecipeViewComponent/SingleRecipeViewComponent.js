import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BookOpen, Edit } from "react-feather";
import {
  fetchSingleRecipe
} from "../../actions/domainActions";
import styles from "./SingleRecipeViewComponent.scss";

class SingleRecipeViewComponent extends Component {
  componentDidMount() {
    this.props.fetchSingleRecipe(this.props.recipeID);
  }
  render() {
    const currentRecipe = this.props.currentRecipe;
    if (currentRecipe) {
      return (
        <div className="SingleRecipeViewComponent">
          <div className="section">
            <div className="container">
              <div className="card" key={currentRecipe._id}>
                <div className="card-image">
                  <figure className="image">
                    <Link to={`/edit/${currentRecipe._id}`} className="edit">
                      <Edit size="24" stroke="#333333" />
                    </Link>
                    <img
                      src={currentRecipe.imgSrc}
                      alt={currentRecipe.title}
                      style={{ objectFit: "cover", maxHeight: 200 }}
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image">
                        <BookOpen size="36" stroke="#333333" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <a
                        className="title is-4"
                        href={currentRecipe.url}
                        target="_blank"
                      >
                        {currentRecipe.title}
                      </a>
                    </div>
                  </div>
                  <div className="content">
                    <p className="subtitle is-6 has-text-left">
                      {currentRecipe.description}
                    </p>
                    <div className="field has-addons">
                      <a
                        className="button"
                        href={currentRecipe.url}
                        target="_blank"
                      >
                        Go
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else
      return (
        <div className="section">
          <div className="container">
            <div className="card">
              <div className="card-content">
                <div className="content">
                  <h2 className="title is-4">No Recipe Found</h2>
                  <h3 className="subtitle">Try a different recipe?</h3>
                  <Link className="button is-primary" to="/">
                    Click Here to Return Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

SingleRecipeViewComponent.propTypes = {
  recipeID: PropTypes.string,
  recipes: PropTypes.array
};

SingleRecipeViewComponent.defaultProps = {
  recipeID: "",
  recipes: []
};

function mapStateToProps(state) {
  return {
    fetchSingleRecipe,
    currentRecipe: state.domainReducer.currentRecipe,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchSingleRecipe,

    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(
  SingleRecipeViewComponent
);

// export default SingleRecipeViewComponent
