import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from "react-router-dom";
import styles from './CardItemComponent.scss'

const CardItemComponent = ({props}) => (
  <div className="column is-one-quarter">
    <div className="CardItemComponent card">
    <NavLink to={`/recipe/${props._id}`}>
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            src={props.imgSrc}
            onError={(e)=>{e.target.src = `${process.env.PUBLIC_URL}/fallback.jpg`}}
            alt={props.title}/></figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-6">{props.title}</p>
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
