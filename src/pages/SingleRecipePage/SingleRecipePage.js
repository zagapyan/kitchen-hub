import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { requestFetchSingleRecipe } from '../../actions'
import styles from './SingleRecipePage.scss'

class SingleRecipePage extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const { match: { params: { id } }, requestFetchSingleRecipe } = this.props;
    requestFetchSingleRecipe({ id })
  }
  componentWillMount() { }
  render() {
    const { match: { params: { id } }, currentRecipe: { title, description, imgSrc, url } } = this.props;
    return (
      <div className="SingleRecipePage">
        <div className="container">
          <h2 className="title is-2">{title}</h2>
          {imgSrc ? <img src={imgSrc} title={title} alt={title} /> : false}
          <p>{description}</p>
          <a className="button is-primary" href={url} title={title}>Go</a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  currentRecipe: state.recipesReducer.currentRecipe,
  requestFetchSingleRecipe
})

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
  requestFetchSingleRecipe
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleRecipePage)
