import * as actions from '../constants/security'

export interface AuthParams {
  token: string
  expiresIn: number
}

export const auth = ({ token, expiresIn }: AuthParams): actions.AuthAction => ({
  type: actions.auth,
  token,
  expiresIn,
})

export const logout = (): actions.LogoutAction => ({
  type: actions.logout,
})
