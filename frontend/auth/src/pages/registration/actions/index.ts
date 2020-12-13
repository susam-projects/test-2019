import { auth } from '@frontend/common/actions/security'
import gql from 'graphql-tag'
import stub from './stub'
import * as actions from '../constants'

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})

export const register = () => async (dispatch, getState, client) => {
  const { email, password } = getState().auth.registration

  try {
    const { data } = await client.mutate({
      mutation: gql`
      mutation Register($input: RegisterUserInput!) {
        register(input: $input) {
          errors {
            email
            password
          }
        }
      }
    `,
      variables: {
        input: {
          email,
          password,
        },
      },
    })

    if (data.register.errors) {
      dispatch(setErrors(data.register.errors))

    } else {
      dispatch(auth({
        token: stub.token,
        expiresIn: stub.expiresIn,
      }))
      dispatch(clear())
    }

  } catch (e) {
    dispatch(setErrors({
      email: e.message,
      password: e.message,
    }))

    // just to give some time to see the errors
    setTimeout(() => {
      dispatch(auth({
        token: stub.token,
        expiresIn: stub.expiresIn,
      }))
      dispatch(clear())
    }, 800)
  }
}

export const setErrors = errors => ({
  type: actions.setErrors,
  errors: { ...errors },
})

export const clear = () => ({
  type: actions.clear,
})
