import styled, { css } from 'styled-components/native'

export const Container = styled.View``

type InputContainerProps = {
  isFocused: boolean
  isErrored: boolean
}

export const InputContainer = styled.View<InputContainerProps>`
  flex-direction: row;

  border-bottom-width: 2px;
  border-bottom-color: #d9d9d9;

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

export const Input = styled.TextInput`
  flex: 1;
  height: 56px;

  font-family: 'Inter_400Regular';
  font-size: 16px;
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
