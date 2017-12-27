import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
        this.props.sendURL(URLValue)
        this.refs.url.value = ''
      }
      else{
        // return false;
        this.props.triggerWarning()
        setTimeout(()=>
          this.props.removeTriggerWarning(),1500)
      }
    }
    render() {
        return (
            <div className="PushURLComponent">
              <form onSubmit={this.handleAddRecipe.bind(this)}>
                <input type="text" ref="url"/>
                <input type="submit" value="Add Recipe" />
              </form>
            </div>
        );
    }
}

PushURLComponent.propTypes = {}

PushURLComponent.defaultProps = {}

export default PushURLComponent
