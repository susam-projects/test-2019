import gql from 'graphql-tag'
import * as actions from '../constants';
import stub from './stub';

export const load = () => async (dispatch, getState, client) => {
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
          }
        }
      `,
    })
  } catch (e) {
    dispatch({
      type: actions.load,
      profile: stub,
    })
  }
}

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
      // dispatch({
      //   type: actions.saved,
      // })

      dispatch({
        type: actions.clear,
      })
    }
  } catch (e) {
    // dispatch({
    //   type: actions.saved,
    // })

    dispatch({
      type: actions.clear,
    })
  }
}

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})

export const clear = () => ({
  type: actions.clear,
})
