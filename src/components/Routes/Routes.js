import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import IndexComponent from '../IndexComponent'
import NoMatchComponent from '../NoMatchComponent'
import style from './Routes.css'

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
            <Route component={NoMatchComponent} />          
          </Switch>
        </main>
        );
    }
}

Routes.propTypes = {}

Routes.defaultProps = {}

export default Routes
