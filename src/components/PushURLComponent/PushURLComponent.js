import React, { Component } from "react";
import PropTypes from "prop-types";
import { Plus } from "react-feather";
import { setStatus, removeStatus } from "../../actions/clientActions";
import { sendURL, fetchRecipes } from "../../actions/domainActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styles from "./PushURLComponent.scss";
import endpoint from "../../utils/endpoint";

class PushURLComponent extends Component {
  constructor(props) {
    super(props);
  }
  null;
  handleAddRecipe(event) {
    event.preventDefault();
    const validURL = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
    const URLValue = this.refs.url.value;
    if (validURL.test(URLValue)) {
      this.props.sendURL(URLValue);
      this.refs.url.value = "";
    } else {
      this.props.setStatus({
        statusText: "Invalid Url Input... please provide a proper url",
        statusClass: "is-warning"
      });

      setTimeout(() => this.props.removeStatus(), 5000);
    }
  }
  render() {
    return (
      <div className="PushURLComponent level">
        <article
          className={`section message ${this.props.statusClass} ${
            this.props.statusShow ? "" : "hidden"
          }`}
        >
          <div className="container">
            <div className="message-header">
              <p>Message</p>
              <button
                className="delete"
                onClick={() => this.props.removeStatus()}
              />
            </div>
            <div className="message-body">{this.props.statusText}</div>
          </div>
        </article>
        <form
          className="field has-addons column is-paddingless"
          onSubmit={this.handleAddRecipe.bind(this)}
        >
          <div className="control is-expanded">
            <input
              className="input "
              type="text"
              ref="url"
              placeholder="Add a recipe Link"
            />
          </div>
          <div className="control">
            <button className="button" type="submit">
              <Plus size="14" />
            </button>
          </div>
        </form>
      </div>
    );
  }
}

PushURLComponent.propTypes = {
  sendURL: PropTypes.func,
  setStatus: PropTypes.func,
  removeStatus: PropTypes.func,
  statusClass: PropTypes.string,
  statusShow: PropTypes.bool,
  statusText: PropTypes.string
};

PushURLComponent.defaultProps = {};

function mapStateToProps(state) {
  return {
    sendURL,
    setStatus,
    removeStatus,
    statusClass: state.clientReducer.statusClass,
    statusShow: state.clientReducer.statusShow,
    statusText: state.clientReducer.statusText
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      sendURL,
      setStatus,
      removeStatus
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PushURLComponent);
