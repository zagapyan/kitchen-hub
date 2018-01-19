import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BeatLoader } from 'react-spinners'
import { NavLink } from 'react-router-dom'
import { Edit, Trash2, Star } from 'react-feather'
import styles from './RecipeListComponent.css'

const RecipeListComponent = (props) => (
  <div className="RecipeListComponent">
    <ul>
      {
        props.recipes ? props.recipes.map(o=>
            <li key={o._id.toString()}>
              <NavLink to={`/recipe/${o._id}`}>{o.title}</NavLink>
              <button className=""><Edit /></button>
              <button className=""><Trash2 /></button>
              <button className=""><Star /></button>
              <span>
                { o.tags ? o.tags.map((i,k)=>
                  <pre key={`${o._id}${k}`}>i.name</pre>)
                  : false }
              </span>
            </li>
          ) : <BeatLoader />
      }
    </ul>
  </div>
);

RecipeListComponent.propTypes = {}

RecipeListComponent.defaultProps = {}

export default RecipeListComponent
