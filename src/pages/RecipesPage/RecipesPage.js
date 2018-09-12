import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
// import { removeToken, authRejected } from '../../actions'
import { testIfValidUrl, fetchMetaData } from '../../utils/functions';
import '../../actions'
import './RecipesPage.css'

class RecipesPage extends Component {
  constructor(props) {
    super(props);
    this.urlInput = React.createRef();
  }

  componentDidMount() {
    this.handleFetchList()
  }

  componentWillUnmount() {
    this.setState({
      modalActive: false,
      preSendPrompt: { ...this.props.preSendPrompt }
    })
  }

  static defaultProps = { url: '', preSendPrompt: { title: '', description: '', imgSrc: '' }, modalActive: false }
  state = { ...this.defaultProps }

  handleFetchList = () => {
    console.log('fetchingList')
  }

  handleSendUrl = () => {
    const isValidUrl = testIfValidUrl(this.state.url)
    if (isValidUrl) {
      const currentUrl = this.state.url;
      fetchMetaData(currentUrl)
        .then(result =>
          this.setState({
            ...this.state,
            preSendPrompt: { ...result }
          }, () => this.setState({ modalActive: true })))
        .catch(err => err)
      this.setState({ url: '' });
      this.urlInput.current.value = '';
    } else {
      console.log('invalid status');
    }
  }

  handleModalClose = () => this.setState({
    modalActive: false,
    preSendPrompt: { ...this.props.preSendPrompt }
  })

  // handleLogout = () => {
  //   const { removeToken, authRejected } = this.props;
  //   removeToken()
  //   authRejected({ message: 'logged out!' })

  //   return <Redirect to="/login" />
  // }

  handleChange = (url) => this.setState({ url })

  render() {
    return (
      <React.Fragment>
        <div className="RecipesPage">
          <div className="container">
            <div className="field has-addons">
              <div className="control is-expanded">
                <input className="input" type="text" ref={this.urlInput} onChange={input => this.handleChange(input.target.value)} />
              </div>
              <div className="control">
                <button className="button is-primary" onClick={() => this.handleSendUrl()}>Send</button>
              </div>
            </div>
          </div>
        </div>
        <div className={`modal ${this.state.modalActive ? 'is-active' : ''}`}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <h2 className="modal-card-title">Your Recipe</h2>
              <button className="modal-close is-large" onClick={() => this.handleModalClose()}></button>
            </header>
            <section className="modal-card-body">
              {
                this.state.preSendPrompt !== undefined
                  ? (
                    <React.Fragment>
                      {this.state.preSendPrompt.imgSrc.length ? <img src={this.state.preSendPrompt.imgSrc} title={this.state.preSendPrompt.title} className="modal-image" /> : false}
                      {this.state.preSendPrompt.title.length ? <h1>{this.state.preSendPrompt.title}</h1> : false}
                      {this.state.preSendPrompt.description ? <p>{this.state.preSendPrompt.description}</p> : false}
                    </React.Fragment>
                  )
                  : false
              }
            </section>
            <footer className="modal-card-foot">
              <button className="button is-success" onClick={() => console.log('send recipe')}>Save changes</button>
              <button className="button" onClick={() => this.handleModalClose()}>Cancel</button>
            </footer>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

// const mapStateToProps = state => ({})
// const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  () => ({}),
  dispatch => bindActionCreators({}, dispatch)
)(RecipesPage)