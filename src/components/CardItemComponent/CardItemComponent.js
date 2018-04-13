import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from "react-router-dom";
import RecipeControlComponent from "../RecipeControlComponent";

import styles from './CardItemComponent.scss'

const CardItemComponent = ({props}) => (
  <div className="column is-one-quarter">
    <div className="CardItemComponent card">
      <div className="card-image">
        <NavLink to={`/recipe/${props._id}`}>
          <figure className="image is-4by3">
            <img
              src={props.imgSrc}
              onError={(e)=>{e.target.src = `${process.env.PUBLIC_URL}/fallback.jpg`}}
              alt={props.title}/></figure>
        </NavLink>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <NavLink to={`/recipe/${props._id}`} className="title is-6">{props.title}</NavLink>
          </div>
        </div>
      </div>
      <div className="card-content">
        <RecipeControlComponent props={props} className="recipe-control"/>
      </div>
    </div>
  </div>
);

CardItemComponent.propTypes = {}

CardItemComponent.defaultProps = {}

export default CardItemComponent
