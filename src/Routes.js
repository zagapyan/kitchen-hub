import React from 'react';
import { Switch, Router, Route } from 'react-router';
import AppContainer from './containers/AppContainer';
import HomeContainer from './containers/HomeContainer';
import RecipeViewContainer from './containers/RecipeViewContainer';
import RecipePageContainer from './containers/RecipePageContainer';
import NoMatchComponent from './components/NoMatchComponent';


class Routes extends React.Component{
  render(){
    return(
      <AppContainer>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/recipe/:recipe" component={RecipePageContainer} />
          <Route component={NoMatchComponent} />
        </Switch>
      </AppContainer>
    )
  }
}

export default Routes;