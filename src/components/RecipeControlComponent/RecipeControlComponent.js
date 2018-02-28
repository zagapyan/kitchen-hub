import React from "react";
import PropTypes from "prop-types";
import styles from "./RecipeControlComponent.scss";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Trash2 } from "react-feather";
import { deleteRecipe, fetchRecipes } from "../../actions/domainActions";

class RecipeControlComponent extends React.Component {
  handleDeleteRecipe(recipe) {
    let id = recipe.props._id;
    this.props.deleteRecipe(id);
    setTimeout(() => this.props.fetchRecipes(), 1000);
  }
  fuck(props) {
    console.log(props);
  }
  render() {
    let { props } = this.props;
    return (
      <span className="RecipeControlComponent level">
        <ul className="level-item is-marginless">
          {props.tags
            ? props.tags
                .map((tag, key) => (
                  <li key={key} className="level-item">
                    <Link to={`/tags/${tag}`} className="tag is-primary">
                      {tag}
                    </Link>
                  </li>
                ))
                .reverse()
                .slice(0, 3)
            : false}
          {props.tags && window.location.pathname !== "/" ? (
            <li className="level-item">
              <Link to="/" className="tag is-danger">
                Clear
              </Link>
            </li>
          ) : (
            false
          )}
        </ul>
        <button
          className="button is-small"
          onClick={this.handleDeleteRecipe.bind(this, this.props)}
        >
          <Trash2 size="14" />
        </button>
      </span>
    );
  }
}

RecipeControlComponent.propTypes = {
  deleteRecipe: PropTypes.func,
  fetchRecipes: PropTypes.func
};

function mapStateToProps(state) {
  return {
    deleteRecipe,
    fetchRecipes
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      deleteRecipe,
      fetchRecipes
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(
  RecipeControlComponent
);
