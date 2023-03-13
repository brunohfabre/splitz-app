import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  gap: 4px;
`

type InputProps = {
  isFocused: boolean
  isErrored: boolean
}

export const Input = styled.TextInput<InputProps>`
  height: 56px;

  font-family: 'Inter_400Regular';
  font-size: 16px;
  color: ${({ theme }) => theme.textBase};

  background-color: ${({ theme }) => theme.shapePrimary};

  padding: 0 16px;
  border-radius: 16px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.shapePrimary};

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: ${({ theme }) => theme.primary};
    `}

  ${({ isErrored }) =>
    isErrored &&
    css`
      border-color: ${({ theme }) => theme.red[500]};
    `};
`

export const Error = styled.Text`
  color: red;
  margin-top: 4px;
`
