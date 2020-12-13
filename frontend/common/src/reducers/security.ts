import { Action } from "redux";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { createReducer } from '@utils/reducer'
import * as actions from '../constants/security'

const initialState = {
  token: '',
  expiresIn: '' as '' | number,
}

const reducer = createReducer(initialState, {
  [actions.auth]: (state, { token, expiresIn }: actions.AuthAction) => ({
    token,
    expiresIn,
  }),
  [actions.logout]: () => initialState,
})

export default persistReducer(
  {
    storage,
    key: 'token',
    keyPrefix: 'aunited',
    version: 1,
  },
  reducer,
)
