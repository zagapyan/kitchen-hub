// @flow
import React, { Component } from 'react'
import { Router, Route, Redirect, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { history } from '../../store'
import SplashPage from '../../pages/SplashPage'
import RecipesPage from '../../pages/RecipesPage'
import LoginPage from '../../pages/LoginPage'
import { checkToken } from '../../actions'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => {
    console.log('props: ',props,'rest: ',rest)
    return rest.isAuthed
      ? <Component {...props} />
      : <Redirect to='/login' />
    }} />
)

class Routes extends Component {
  componentDidMount() {
    const { checkToken } = this.props;
    console.log('component Did Mounte');
    checkToken();
  } 
  render() {
    const { isAuthed, hasToken } = this.props;
    return (
      <Router history={history}>
        <div className="Routes">
          <Switch>
            <Route exact path="/" component={SplashPage} />
            <PrivateRoute exact path="/recipes" component={RecipesPage} isAuthed={isAuthed} hasToken={hasToken}/>
            <Route exact path="/login" component={LoginPage} />
          </Switch>
          <div style={{width: '100%', position: 'fixed', bottom: 0, background: 'rgba(0,0,0,.7)', color: '#ffffff', padding: 20, boxSizing: 'border-box'}}>
            <h6 style={{margin: 0}}>Auth Status</h6>
            <span>isAuthed : {JSON.stringify(isAuthed)}</span><br />
            <span>hasToken : {JSON.stringify(hasToken)}</span><br />
          </div>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state =>{
  return{
    isAuthed: state.authenticationReducer.isAuthed,
    hasToken: state.tokenReducer.hasToken
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  checkToken
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (Routes)
