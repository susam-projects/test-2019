import React, { ChangeEvent, useCallback } from 'react';
import { ifProp } from 'styled-tools'
import styled from '@emotion/styled'

export interface SelectElementProps {
  color?: string
  borderColor?: string
  disabled?: boolean
}

export interface SelectProps {
  placeholder?: string
  onChange?: (value: string) => void
  value?: string
}

const SelectElement = styled.select<SelectElementProps>(
  ({ theme, color, borderColor, disabled }) => ({
    fontFamily: theme.fontFamily.sf,
    fontWeight: theme.fontWeights.normal,
    fontSize: theme.fontSizes.s,
    lineHeight: theme.lineHeights.s,
    color: theme.colors[color],
    width: '100%',
    height: 40,
    boxSizing: 'border-box',
    borderRadius: `${theme.borderRadius.n}px`,
    outline: 'none',
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors[borderColor]}`,
    padding: '0 20px',
    boxShadow: '0 2px 4px 0 rgba(41, 50, 70, 0.1)',
    transition: '100ms ease all',
  }),
  ifProp('disabled', ({ theme }: any) => ({
    border: `1px solid ${theme.colors.blueHaze}`,
    color: `${theme.colors.blueHaze}`,
  })),
)

const Select = ({
  onChange,
  ...props
}: SelectProps) => {

  const handleChange = useCallback(({ target }: ChangeEvent<HTMLInputElement>) => {
    onChange(target.value)
  }, [onChange])

  return (
    <SelectElement
      onChange={handleChange}
      {...props}
    />
  )
}

Select.defaultProps = {
  color: 'blueBayoux',
  borderColor: 'lightGray',
  onChange: () => {},
}

export { Select }
