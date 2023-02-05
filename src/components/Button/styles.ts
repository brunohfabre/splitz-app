import styled, { css } from 'styled-components/native'

type ContainerProps = {
  block: boolean
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  background-color: #d9d9d9;
  height: 56px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 0 24px;

  ${({ block }) =>
    block &&
    css`
      flex: 1;
    `}

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

export const IconContainer = styled.View`
  margin-left: 8px;
`
