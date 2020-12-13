import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { AuthDesktop as Auth } from '@frontend/auth'
import { ListDesktop as Users } from '@frontend/users'
import { ProfileDesktop as Profile } from '@frontend/profile'
import App from './App'
import { updateProfile } from '../../actions'
import { clear as clearProfileDraft } from '@frontend/profile/actions'

const Routes = ({ me, draftProfile, onSaveProfile, onCancelEditProfile }) => {
  useEffect(() => {
    if (draftProfile.saved) {
      onSaveProfile(draftProfile)
    }
    if (draftProfile.canceled) {
      onCancelEditProfile()
    }
  }, [draftProfile.saved, onSaveProfile])

  return (
    <Switch>
      <Route path='/auth' component={Auth} />
      <App>
        <Switch>
          <Route path='/' exact component={Users} />
          <Route path='/profile' exact>
            <Profile defaultProfile={me.profile} />
          </Route>
        </Switch>
      </App>
    </Switch>
  )
}

export default connect(
  state => ({
    draftProfile: state.profile,
    me: state.me,
  }),
  (dispatch, { history }) => ({
    onSaveProfile: profile => {
      dispatch(updateProfile(profile))
      history.push('/')
    },
    onCancelEditProfile: () => {
      dispatch(clearProfileDraft())
      history.push('/')
    },
  }),
)(Routes)
