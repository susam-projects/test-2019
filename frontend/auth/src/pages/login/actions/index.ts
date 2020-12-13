import { auth } from '@frontend/common/actions/security'
import gql from 'graphql-tag'
import * as actions from '../constants'
import stub from './stub'

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})

export const login = () => async (dispatch, getState, client) => {
  const { email, password } = getState().auth.login

  try {
    const { data } = await client.query({
      fetchPolicy: 'network-only',
      query: gql`
        query Login($email: String!, $password: String!) {
          login(email: $email, password: $password) {
            token {
              token
              expiresIn
            }
            errors {
              email
              password
            }
          }
        }
      `,
      variables: {
        email,
        password,
      },
    })
  } catch (e) {
    dispatch(setErrors({
      email: e.message,
      password: e.message,
    }))

    // just to give some time to see the errors
    setTimeout(() => {
      dispatch(auth(stub))
      dispatch(clear())
    }, 800)
  }
}

export interface LoginErrors {
  email: string | boolean
  password: string | boolean
}

export const setErrors = (errors: Partial<LoginErrors>) => ({
  type: actions.setErrors,
  errors: { ...errors },
})

export const clear = () => ({
  type: actions.clear,
})
