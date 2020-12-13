import { defineMessages } from 'react-intl'

const namespace: string = 'profile'

export default defineMessages({
  firstName: {
    id: `${namespace}.firstName`,
    defaultMessage: 'Имя',
  },
  firstNamePlaceholder: {
    id: `${namespace}.firstNamePlaceholder`,
    defaultMessage: 'Ваше имя',
  },
  lastName: {
    id: `${namespace}.lastName`,
    defaultMessage: 'Фамилия',
  },
  lastNamePlaceholder: {
    id: `${namespace}.lastNamePlaceholder`,
    defaultMessage: 'Ваша фамилия',
  },
})
