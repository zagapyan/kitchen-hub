import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './HeaderComponent.css'

class HeaderComponent extends PureComponent {
    constructor(props) {
        super(props)
    }
    null
    render() {
        return (
            <section class="hero is-primary">
              <div class="hero-body">
                <div class="container">
                  <h1 class="title is-3 has-text-left">
                    <Link class="link is-info" to="/">KitchenHub</Link>
                  </h1>
                  <h2 class="subtitle has-text-left">
                    an application by Zigmund Sun Oo©
                  </h2>
                </div>
              </div>
            </section>
          
        );
    }
}

HeaderComponent.propTypes = {}

HeaderComponent.defaultProps = {}

export default HeaderComponent
