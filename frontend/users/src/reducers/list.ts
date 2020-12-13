import { createReducer } from '@utils/reducer'
import * as actions from '../constants/list'

const initialState = {
  rows: [],
  count: 0,
}

export default createReducer(initialState, {
  [actions.load]: (state, { list }) => ({ ...state, ...list }),
  [actions.sort]: (state, { field }) => ({
    ...state,
    rows: [...state.rows].sort(createSorter(field)),
  }),
  [actions.clear]: () => initialState,
})

const SORT_BY = {
  id: user => user.id,
  email: user => user.email,
  name: user => (`${user.profile.firstName} ${user.profile.lastName}`),
  registeredAt: user => (new Date(user.registeredAt)).getTime(),
  lastLogonAt: user => (new Date(user.lastLogonAt)).getTime(),
}

function createSorter(field: keyof typeof SORT_BY) {
  const prepare = SORT_BY[field]

  return (user1, user2) => {
    const value1 = prepare(user1)
    const value2 = prepare(user2)

    return (value1 < value2) ? -1
      : (value1 > value2) ? 1
      : 0
  }
}
