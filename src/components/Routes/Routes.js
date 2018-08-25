import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HeaderComponent from '../HeaderComponent'
import FooterComponent from '../FooterComponent'
import IndexComponent from '../IndexComponent'
import RecipePageComponent from '../RecipePageComponent'
import EditPageComponent from '../EditPageComponent'
import NoMatchComponent from '../NoMatchComponent'
import LoginComponent from '../LoginComponent'
import style from './Routes.scss'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => rest.isAuthed
      ? (<Component {...props} />)
      : (<Redirect to={{ pathname: "/login", state: { from: props.location } }} />)
    } />);

class Routes extends Component {
  constructor(props) {
    super(props)
  }
  static propTypes = {
    isAuthed: PropTypes.bool
  }
  render() {
    return (
      <main className="Routes">
        {this.props.isAuthed ? 'You are authenticateed' : 'Nope'}
        <HeaderComponent isAuthed={this.props.isAuthed} />
        <Switch>
          <Route exact path="/login" component={LoginComponent} />
          {/* <Redirect exact path="/" to="/page/1"/>
            <Route exact path="/page/:pageNumber" component={IndexComponent}/> */}
          <PrivateRoute exact path="/" component={IndexComponent} {...this.props} />
          <PrivateRoute exact path="/tags/:tag" component={IndexComponent} {...this.props} />
          <PrivateRoute exact path="/recipe/:recipe" component={RecipePageComponent} {...this.props} />
          <PrivateRoute exact path="/edit/:recipe" component={EditPageComponent} {...this.props} />
          <Route component={NoMatchComponent} />
        </Switch>
        <FooterComponent />
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthed: state.domainReducer.isAuthed,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      // ...domainActions,
      // pageReset,
      // pageChange
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);