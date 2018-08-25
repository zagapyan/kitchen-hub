import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const SplashPage = ({}) => (
  <div className="SplashPage">
    <h1>Welcome to KitchenHub!</h1>
    <Link to="/recipes">Get Started</Link>
  </div>
);

SplashPage.propTypes = {}

SplashPage.defaultProps = {}

export default SplashPage
