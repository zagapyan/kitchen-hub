import React from 'react'
import { Link } from 'react-router-dom'

const SplashPage = ({ }) => (
  <div className="SplashPage">
    <div className="container">
      <h1 className="title is-3">Welcome to savr!</h1>
      <Link to="/recipes" className="button is-primary">Get Started</Link>
    </div>
  </div>
);

export default SplashPage
