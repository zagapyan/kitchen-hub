import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import IndexComponent from '../IndexComponent'
import RecipePageComponent from '../RecipePageComponent'
import NoMatchComponent from '../NoMatchComponent'
import style from './Routes.scss'

class Routes extends Component {
    constructor(props) {
        super(props)
    }
    null
    render() {
        return (
        <main className="Routes">
          <Switch>
            <Route exact path="/" component={IndexComponent}/>
            <Route exact path="/recipe/:recipe" component={RecipePageComponent}/>
            <Route component={NoMatchComponent} />          
          </Switch>
        </main>
        );
    }
}

export default Routes
