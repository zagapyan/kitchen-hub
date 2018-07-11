import React from 'react'
import PropTypes from 'prop-types'
import styles from './FooterComponent.scss'

const FooterComponent = ({}) => (
  <footer className="footer">
    <div className="container">
      <div className="content has-text-centered">
        <p>
          <strong>KitchenHub</strong> is built by <a href="//zigmundsunoo.com">Zigmund Sun Oo©</a>.
        </p>
      </div>
    </div>
  </footer>
);

FooterComponent.propTypes = {}

FooterComponent.defaultProps = {}

export default FooterComponent
