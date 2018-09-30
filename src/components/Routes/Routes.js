// @flow
import React, { Component } from 'react'
import { Router, Route, Redirect, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { history } from '../../store'
import SplashPage from '../../pages/SplashPage'
import RecipesPage from '../../pages/RecipesPage'
import LoginPage from '../../pages/LoginPage'
import { checkToken, removeToken, authRejected } from '../../actions'
import Logo from '../../images/icons8-bento-96.png'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => {
    return rest.isAuthed
      ? <Component {...props} />
      : <Redirect to='/login' />
  }} />
)

class Routes extends Component {
  componentDidMount() {
    const { checkToken } = this.props;
    checkToken();
  }
  handleLogout = () => {
    const { removeToken, authRejected } = this.props;
    removeToken()
    authRejected({ message: 'logged out!' })

    return <Redirect to="/login" />
  }
  render() {
    const { isAuthed, hasToken, user } = this.props;
    const renderIfAuthed = ({ isAuthed, hasToken }) => isAuthed && hasToken ? (
      <span className="level-right">
        <span className=" level-item">
          {user ? <p className="title is-4">Hello {user.username}!</p> : false}
          <button className="button is-primary" onClick={this.handleLogout}>Logout</button><br />
        </span>
      </span>
    ) : false;
    return (
      <Router history={history}>
        <div className="Routes">
          <nav className="container">
            <section className="level">
              <span className="level-left">
                <span className="level-item">
                  <h1 className="title is-4 level-item">
                    <img id="logo" src={Logo} title="SAVR" alt="SAVR" />
                    SAVR
                </h1>
                </span>
              </span>
              {renderIfAuthed({ isAuthed, hasToken })}
            </section>
          </nav>
          <Switch>
            <Route exact path="/" component={SplashPage} />
            <PrivateRoute exact path="/recipes" component={RecipesPage} isAuthed={isAuthed} hasToken={hasToken} />
            <Route exact path="/login" component={LoginPage} />
          </Switch>
          <div style={{ width: '100%', position: 'fixed', bottom: 0, background: 'rgba(0,0,0,.7)', color: '#ffffff', padding: 20, boxSizing: 'border-box' }}>
            <h6 style={{ margin: 0 }}>Auth Status</h6>
            <span>isAuthed : {JSON.stringify(isAuthed)}</span><br />
            <span>hasToken : {JSON.stringify(hasToken)}</span><br />
          </div>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthed: state.authenticationReducer.isAuthed,
    hasToken: state.tokenReducer.hasToken,
    user: state.authenticationReducer.user
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  removeToken,
  authRejected,
  checkToken
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (Routes)
