import styled, { css } from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  background-color: #d9d9d9;
  height: 56px;
  align-items: center;
  justify-content: center;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
    `}
`

export const ButtonText = styled.Text`
  font-size: 16px;
  font-family: 'Inter_600SemiBold';
  color: #000000;
`
