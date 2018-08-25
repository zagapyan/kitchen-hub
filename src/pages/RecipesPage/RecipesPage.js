import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { removeToken, authRejected } from '../../actions'
import '../../actions'

const RecipesPage = ({ removeToken, authRejected }) => {
  const handleLogout = () => {
    removeToken(),
    authRejected({ message: 'logged out!' })
    return <Redirect to="/login" />
  }
  return (
    <div className="RecipesPage">
      <nav className="">
        <button onClick={handleLogout}>Logout</button>
      </nav>
      PROTECTED
    </div>
  )
};

// const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators({
  removeToken,
  authRejected
}, dispatch);

export default connect(
  ()=>({}),
  mapDispatchToProps)
  (RecipesPage)
