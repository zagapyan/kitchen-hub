import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './SingleRecipeViewComponent.css'

class SingleRecipeViewComponent extends Component {
    constructor(props) {
        super(props)
    }
    null
    componentDidMount(){}
    componentDidUpdate(nextProps){}
    render() {
        console.log(this.props)
        return (
            <div className="SingleRecipeViewComponent">
                <pre>{this.props.recipeID ? JSON.stringify(this.props.recipeID) : 'none'}</pre>
                I am a Single recipe
            </div>
        );
    }
}

SingleRecipeViewComponent.propTypes = {}

SingleRecipeViewComponent.defaultProps = {}

export default SingleRecipeViewComponent
