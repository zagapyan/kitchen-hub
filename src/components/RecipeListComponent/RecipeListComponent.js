import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BeatLoader } from 'react-spinners'
import { Link } from 'react-router-dom'
import styles from './RecipeListComponent.css'

const RecipeListComponent = (props) => (
  <div className="RecipeListComponent">
    <ul>
      {
        props.recipes ? props.recipes.map(o=>
          <li><Link key={o._id.toString()} to={`/recipes/${o._id}`}>
            {o.title}</Link></li>
          ) : <BeatLoader />
      }
    </ul>
  </div>
);

RecipeListComponent.propTypes = {}

RecipeListComponent.defaultProps = {}

export default RecipeListComponent
