import LoginComponent from './LoginComponent'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

const mapStateToProps = (state, ownProps) => {
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginComponent)
