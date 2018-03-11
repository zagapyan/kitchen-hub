import React from 'react'
import PropTypes from 'prop-types'
import { Book } from "react-feather";
import { NavLink } from "react-router-dom";
import RecipeControlComponent from "../RecipeControlComponent";
import styles from './ListItemComponent.scss'

const ListItemComponent = ({props}) => (
  <span className="panel-block">
    <span className="title-container level is-marginless">
      <span className="panel-icon">
        <Book size="14"/>
      </span>
      <NavLink to={`/recipe/${props._id}`} className="recipe-link">
        {props.title}
      </NavLink>
    </span>
    <RecipeControlComponent props={props} className="recipe-control"/>
  </span>);

ListItemComponent.propTypes = {}

ListItemComponent.defaultProps = {}

export default ListItemComponent
