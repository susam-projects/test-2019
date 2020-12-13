import { createReducer } from '@utils/reducer'
import * as actions from '../constants'

const initialState: actions.LoginState = {
  email: '',
  password: '',
  errors: {},
}

export default createReducer(initialState, {
  [actions.change]: (state, { field, value }: actions.ChangeAction) => ({ ...state, [field]: value }),
  [actions.setErrors]: (state, { errors }: actions.SetErrorsAction) => ({ ...state, errors }),
  [actions.clear]: () => initialState,
})
