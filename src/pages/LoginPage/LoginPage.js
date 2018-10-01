// @flow
import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { requestSendAuth } from '../../actions'
import { Redirect } from 'react-router-dom';


class LoginPage extends Component {
  render() {
    const { isAuthed, hasToken, requestSendAuth } = this.props;
    let identifier = '';
    let password = '';
    if (isAuthed && hasToken) {
      return (<Redirect to="/recipes" />)
    }
    return (
      <div className="LoginPage">
        <div className="container">
          <div className="field">
            <div className="control">
              <h1 className="title is-1">Login</h1>
              <input className="input" type="text" onChange={input => identifier = input.target.value} /><br />
              <input className="input" type="password" onChange={input => password = input.target.value} /><br />
              <button className="button is-primary" onClick={() => requestSendAuth({ identifier, password })}>Log In</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  isAuthed: state.authenticationReducer.isAuthed,
  hasToken: state.tokenReducer.hasToken
})
const mapDispatchToProps = dispatch => bindActionCreators({
  requestSendAuth
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)