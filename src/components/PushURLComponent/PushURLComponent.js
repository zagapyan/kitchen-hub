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
        setTimeout(()=>this.props.fetchRecipes(endpoint), 1000)
      }
      else{
        console.log('url is invalid')

        this.props.setStatus({
            statusText: 'Invalid Url Input... please provide a proper url',
            statusClass: 'is-warning'
        })

        setTimeout(()=>
          this.props.removeStatus(),3000)
      }
    }
    render() {
        return (
            <div className="PushURLComponent">
              <form className="field" onSubmit={this.handleAddRecipe.bind(this)}>
                <div className="control">
                  <input className="input is-small" type="text" ref="url"/>
                  {/* <input type="submit" value="Add Recipe" /> */}
                  <button className="button is-small" type="submit"><Plus size="14"/></button>
                </div>
              </form>
              <div className={`section ${this.props.statusClass} ${this.props.statusShow}`}>
                { JSON.stringify(this.props) }
              </div>
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