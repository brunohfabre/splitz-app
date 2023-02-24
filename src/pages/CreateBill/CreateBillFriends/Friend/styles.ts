import styled, { css } from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  flex-direction: row;

  align-items: center;
`

export const Content = styled.View`
  flex: 1;

  padding: 0 8px;
`

type RadioButtonProps = {
  isSelected: boolean
}

export const RadioButton = styled.View<RadioButtonProps>`
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;

  border-radius: 12px;
  border-width: 2px;
  border-color: #d9d9d9;

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: #aaaaaa;
      border-color: #aaaaaa;
    `}
`
