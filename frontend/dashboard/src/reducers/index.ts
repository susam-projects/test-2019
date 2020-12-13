import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import security from '@aunited/common/reducers/security'
import auth from '@aunited/auth/reducers'
import users from '@aunited/users/reducers'
import config from './config'
import locale from './locale'
import me from './me'

export default combineReducers({
  auth,
  config,
  locale,
  me,
  router,
  security,
  users,
})
