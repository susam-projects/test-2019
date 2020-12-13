import { createReducer } from "@utils/reducer";
import * as actions from '../constants'

const initialState = {
  firstName: '',
  lastName: '',
  errors: {},
}

export default createReducer(initialState, {
  [actions.load]: (state, { profile }) => ({ ...state, ...profile }),
  [actions.change]: (state, { field, value }) => ({ ...state, [field]: value }),
  [actions.setErrors]: (state, { errors }) => ({ ...state, errors }),
  [actions.clear]: () => initialState,
})
