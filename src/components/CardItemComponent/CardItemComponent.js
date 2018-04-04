import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from "react-router-dom";
import RecipeControlComponent from "../RecipeControlComponent";

import styles from './CardItemComponent.scss'

const CardItemComponent = ({props}) => (
  <div className="column is-one-quarter">
    <div className="CardItemComponent card">
    <NavLink to={`/recipe/${props._id}`}>
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src={props.imgSrc}
            onError={(e)=>{e.target.src = `${process.env.PUBLIC_URL}/fallback.jpg`}}
            alt={props.title}/></figure>
      </div>
      <div className="card-content">
        <div className="media">
          {/* <RecipeControlComponent props={props} className="recipe-control"/> */}
          <div className="media-content">
            <p className="title is-6">{props.title}</p>
          </div>
        </div>
      </div>
    </NavLink>
      
    </div>
  </div>
);

CardItemComponent.propTypes = {}

CardItemComponent.defaultProps = {}

export default CardItemComponent
