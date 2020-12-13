import { Action } from 'redux'

export const change = '@@aunited/auth/login/CHANGE'
export const clear = '@@aunited/auth/login/CLEAR'
export const setErrors = '@@aunited/auth/login/SET_ERRORS'

export interface LoginState {
  email: string
  password: string
  errors: Partial<LoginStateErrors>
}

export interface LoginStateErrors {
  email: string | boolean
  password: string | boolean
}

export interface ChangeAction extends Action {
  field: string
  value: unknown
}

export interface ClearAction extends Action {}

export interface SetErrorsAction extends Action {
  errors: Partial<LoginStateErrors>
}
