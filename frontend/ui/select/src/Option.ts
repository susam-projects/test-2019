import { OptionHTMLAttributes } from 'react'
import { switchProp } from 'styled-tools'
import styled from '@emotion/styled'

export interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {
  color?: string
  transform?: 'uppercase' | 'lowercase'
}

const Option = styled.option<OptionProps>(
  ({ theme, color }) => ({
    fontFamily: theme.fontFamily.sf,
    fontWeight: theme.fontWeights.normal,
    fontSize: theme.fontSizes.n,
    lineHeight: theme.lineHeights.m,
    color: theme.colors[color],
  }),
  switchProp('transform', {
    uppercase: {
      textTransform: 'uppercase',
    },
    lowercase: {
      textTransform: 'lowercase',
    },
  }),
)

Option.defaultProps = {
  color: 'black',
}

export { Option }
