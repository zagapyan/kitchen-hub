import React, { Component } from 'react';
import type { Children } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class AppComponent extends Component {
  props: {
    children: Children
  };
  componentDidMount(){
  }
  render() {
    return (
      <div className="app-container">
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // loadPosts: postActions.loadPosts,
    // setAppClientState: clientActions.setAppClientState,
    // authState: state.clientReducer.authState,
    // posts: state.postsReducer.posts,
    // fetching: state.postsReducer.fetching
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    // ...clientActions,
    // ...postActions
  }, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(AppComponent);