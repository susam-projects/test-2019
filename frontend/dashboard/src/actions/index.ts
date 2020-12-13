import gql from 'graphql-tag'
import * as actions from '../constants/me'

export const init = () => async (dispatch, getState, client) => {
  const stub = {
    id: 1,
    email: 'crockford@lmao.com',
    profile: {
      firstName: 'Дуглас',
      lastName: 'Крокфорд',
    },
  }
  try {
    const { data } = await client.query({
      fetchPolicy: 'network-only',
      query: gql`
        query Me {
          me {
            id
            email
            profile {
              firstName
              lastName
            }
            registeredAt
            lastLogonAt
          }
        }
      `,
    })
  } catch (e) {
    dispatch(load(stub))
  }
}

export const load = user => ({
  type: actions.load,
  user,
})

export const updateProfile = profile => ({
  type: actions.updateProfile,
  profile,
})

export const clear = () => ({
  type: actions.clear,
})
