import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as clientActions from '../../actions/clientActions'
import {sendURL} from '../../actions/domainActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styles from './PushURLComponent.css'

class PushURLComponent extends Component {
    constructor(props) {
        super(props)
    }
    null
    handleAddRecipe(event){
      event.preventDefault();
      const validURL = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/
      const URLValue = this.refs.url.value
      if(validURL.test(URLValue)){
        console.log('url is valid')
        this.props.sendURL(URLValue)
        this.refs.url.value = ''
      }
      else{
        console.log('url is invalid')
        this.props.setStatus({
          statusText: 'Invalid Url Input... please provide a proper url',
          statusType: 'invalid'
        })
        setTimeout(()=>
          this.props.removeStatus(),3000)
      }
    }
    render() {
        return (
            <div className="PushURLComponent">
              <form onSubmit={this.handleAddRecipe.bind(this)}>
                <input type="text" ref="url"/>
                <input type="submit" value="Add Recipe" />
              </form>
              { <pre>{JSON.stringify(this.props)}</pre> }
            </div>
        );
    }
}

PushURLComponent.propTypes = {}

PushURLComponent.defaultProps = {}

// export default PushURLComponent


function mapStateToProps(state) {
  return {
    setStatus: clientActions.setStatus,
    removeStatus: clientActions.removeStatus,
    sendURL: sendURL,
    statusActive: state.clientReducer.statusActive,
    statusText: state.clientReducer.statusActive,
    statusType: state.clientReducer.statusType
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...clientActions
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(PushURLComponent);