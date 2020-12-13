import { connect } from 'react-redux'
import { change, cancel, save } from '../../actions'
import Profile from '../../components/desktop/Profile'

export default connect(
  state => ({
    firstName: state.profile.firstName,
    lastName: state.profile.lastName,
    errors: state.profile.errors,
  }),
  dispatch => ({
    onChangeFirstName: value => dispatch(change('firstName', value)),
    onChangeLastName: value => dispatch(change('lastName', value)),
    onSave: () => dispatch(save()),
    onCancel: () => dispatch(cancel()),
  }),
)(Profile)
