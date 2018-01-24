import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Plus } from 'react-feather'
import { setStatus, removeStatus } from '../../actions/clientActions'
import { sendURL, fetchRecipes } from '../../actions/domainActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styles from './PushURLComponent.css'
import endpoint from '../../utils/endpoint'

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
        setTimeout(()=>this.props.fetchRecipes(endpoint), 2500)
      }
      else{
        console.log('url is invalid')

        this.props.setStatus({
            statusText: 'Invalid Url Input... please provide a proper url',
            statusClass: 'is-warning'
        })

        setTimeout(()=>
          this.props.removeStatus(),5000)
      }
    }
    render() {
        return (
            <div className="PushURLComponent">
            <article className={`message ${this.props.statusClass} ${this.props.statusShow ? '' : 'hidden'}`}>
                <div className="section">
                  <div className="container">
                    <div className="message-header">
                      <p>Message</p>
                      <button className="delete" onClick={()=>this.props.removeStatus()}></button>
                    </div>
                    <div className="message-body">
                      {this.props.statusText}
                    </div>
                  </div>
                </div>
              </article>
              <form className="field" onSubmit={this.handleAddRecipe.bind(this)}>
                <div className="control">
                  <div className="level">
                    <div className="level-item">
                      <input className="input" type="text" ref="url" placeholder="Add a recipe Link"/>
                    </div>
                    <div className="level-left">
                      <button className="button" type="submit"><Plus size="14"/></button>
                    </div>  
                  </div>
                </div>
              </form>
            </div>
        );
    }
}

PushURLComponent.propTypes = {}

PushURLComponent.defaultProps = {}

// export default PushURLComponent


function mapStateToProps(state) {
  return {
    sendURL,    
    fetchRecipes,
    setStatus,
    removeStatus,
    statusClass: state.clientReducer.statusClass,
    statusShow: state.clientReducer.statusShow,
    statusText: state.clientReducer.statusText,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    sendURL,
    fetchRecipes,
    setStatus,
    removeStatus,
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(PushURLComponent)