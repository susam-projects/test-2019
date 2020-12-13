import { Action } from 'redux'

export const logout = '@@aunited/common/security/LOGOUT'
export const auth = '@@aunited/common/security/AUTH'

export interface AuthAction extends Action<typeof auth> {
  token: string
  expiresIn: number
}

export interface LogoutAction extends Action<typeof logout> {}
