import { connect } from 'react-redux'
import { change, load, save } from '../../actions'
import Profile from '../../components/desktop/Profile'

export default connect(
  state => ({
    firstName: state.profile.profile.firstName,
    lastName: state.profile.profile.lastName,
    errors: state.profile.profile.errors,
  }),
  dispatch => ({
    onChangeFirstName: value => dispatch(change('firstName', value)),
    onChangeLastName: value => dispatch(change('lastName', value)),
    onSave: () => dispatch(save()),
    onCancel: () => dispatch(load()),
  }),
)(Profile)
