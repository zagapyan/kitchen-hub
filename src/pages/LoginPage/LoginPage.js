// @flow
import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { requestSendAuth } from '../../actions'
import { Redirect } from 'react-router-dom';


class LoginPage extends Component {
  render() {
    const {isAuthed, hasToken, requestSendAuth} = this.props;
    let identifier = '';
    let password = '';
    if(isAuthed && hasToken){
      return(<Redirect to="/recipes" />)
    }
    return (
      <div className="LoginPage">
        <h1>Login</h1>
        <input type="text" onChange={input => identifier = input.target.value }/><br />
        <input type="password" onChange={input => password = input.target.value }/><br />
        <button onClick={() => requestSendAuth({ identifier, password })}>Log In</button>
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