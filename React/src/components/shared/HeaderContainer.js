import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { push } from "react-router-redux"
import { HeaderTemplate } from '../components/templates/header'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    pushRoute: location => dispatch(push(location)),
  }, dispatch)

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HeaderTemplate)
)
