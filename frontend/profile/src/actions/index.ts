import gql from 'graphql-tag'
import * as actions from '../constants';

export const save = () => async (dispatch, getState, client) => {
  try {
    const { firstName, lastName } = getState().profile

    const { data } = await client.mutate({
      mutation: gql`
      mutation UpdateProfile($input: UpdateProfileInput!) {
        updateProfile(input: $input) {
          errors {
            email
            password
          }
        }
      }
    `,
      variables: {
        input: {
          firstName,
          lastName,
        },
      },
    })

    if (data.updateProfile.errors) {
      dispatch({
        type: actions.setErrors,
        errors: data.updateProfile.errors,
      })

    } else {
      dispatch({
        type: actions.saved,
      })
    }

  } catch (e) {
    dispatch({
      type: actions.saved,
    })
  }
}

export const cancel = () => ({
  type: actions.cancel,
})

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})

export const clear = () => ({
  type: actions.clear,
})
