import styled, { css } from 'styled-components/native'

export const Container = styled.View``

type InputProps = {
  isFocused: boolean
  isErrored: boolean
}

export const Input = styled.TextInput<InputProps>`
  height: 56px;
  border-bottom-width: 2px;
  border-bottom-color: #d9d9d9;

  font-family: 'Inter_400Regular';
  font-size: 16px;

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-bottom-color: #000000;
    `}

  ${({ isErrored }) =>
    isErrored &&
    css`
      border-bottom-color: red;
    `}
`

export const Error = styled.Text`
  color: red;
  margin-top: 4px;
`
