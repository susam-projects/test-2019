import { createReducer } from "@utils/reducer";
import * as actions from '../constants'

const initialState = {
  firstName: undefined,
  lastName: undefined,
  errors: {},
  saved: false,
  canceled: false,
}

export default createReducer(initialState, {
  [actions.init]: (state, { profile }) => ({ ...state, ...profile, saved: false, canceled: false }),
  [actions.saved]: state => ({ ...state, saved: true }),
  [actions.cancel]: state => ({ ...state, canceled: true }),
  [actions.change]: (state, { field, value }) => ({ ...state, [field]: value, saved: false, canceled: false }),
  [actions.setErrors]: (state, { errors }) => ({ ...state, errors }),
  [actions.clear]: () => initialState,
})
