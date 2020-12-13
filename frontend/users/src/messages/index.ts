import { defineMessages } from 'react-intl'

export const namespace = '@aunited/users'

export default defineMessages({
  users: {
    id: `${namespace}.users`,
    defaultMessage: 'Пользователи',
  },
  sortBy: {
    id: `${namespace}.sortBy`,
    defaultMessage: 'Сортировать по',
  },
  sortById: {
    id: `${namespace}.sortById`,
    defaultMessage: 'id',
  },
  sortByName: {
    id: `${namespace}.sortByName`,
    defaultMessage: 'имени',
  },
  sortByEmail: {
    id: `${namespace}.sortByEmail`,
    defaultMessage: 'email',
  },
  sortByRegisteredAt: {
    id: `${namespace}.sortByRegisteredAt`,
    defaultMessage: 'дате регистрации',
  },
  sortByLastLogonAt: {
    id: `${namespace}.sortByLastLogonAt`,
    defaultMessage: 'дате последнего входа',
  },
  at: {
    id: `${namespace}.at`,
    defaultMessage: 'в',
  },
  name: {
    id: `${namespace}.name`,
    defaultMessage: 'имя',
  },
  email: {
    id: `${namespace}.email`,
    defaultMessage: 'email',
  },
  registered: {
    id: `${namespace}.registered`,
    defaultMessage: 'зарегестрирован',
  },
  lastLogin: {
    id: `${namespace}.lastLogin`,
    defaultMessage: 'последний вход',
  },
})
