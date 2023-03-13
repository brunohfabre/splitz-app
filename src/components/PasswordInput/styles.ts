import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  gap: 4px;
`

type InputContainerProps = {
  isFocused: boolean
  isErrored: boolean
}

export const InputContainer = styled.View<InputContainerProps>`
  flex-direction: row;

  background-color: ${({ theme }) => theme.shapePrimary};

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

export const Input = styled.TextInput`
  flex: 1;
  height: 56px;

  font-family: 'Inter_400Regular';
  font-size: 16px;
  color: ${({ theme }) => theme.textBase};

  padding: 0 16px;
`

export const SuffixButton = styled.TouchableOpacity`
  width: 40px;

  align-items: center;
  justify-content: center;
`

export const Error = styled.Text`
  color: red;
  margin-top: 4px;
`
