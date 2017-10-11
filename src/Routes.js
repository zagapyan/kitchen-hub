import React from 'react';
import { Switch, Router, Route } from 'react-router';
import AppContainer from './containers/AppContainer';
import HomeContainer from './containers/HomeContainer';
import RecipeViewContainer from './containers/RecipeViewContainer';
import RecipePageComponent from './components/RecipePageComponent';
import NoMatchComponent from './components/NoMatchComponent';


class Routes extends React.Component{
  render(){
    return(
      <AppContainer>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/recipe/:recipe" component={RecipePageComponent} />
          <Route component={NoMatchComponent} />
        </Switch>
      </AppContainer>
    )
  }
}

export default Routes;