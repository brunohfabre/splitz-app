import { LinearGradient } from 'expo-linear-gradient'
import styled, { css } from 'styled-components/native'

type ContainerProps = {
  block: boolean
}

export const Container = styled.TouchableOpacity<ContainerProps>`
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

export const PrimaryShape = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [theme.secondary, theme.primary],
  start: { x: 0, y: 1 },
  end: { x: 1, y: 0 },
}))`
  height: 56px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 0 24px;

  border-radius: 16px;
`

type SecondaryShapeProps = {
  filled: boolean
}

export const SecondaryShape = styled.View<SecondaryShapeProps>`
  background-color: ${({ theme, filled }) =>
    filled ? theme.shapeSecondary : 'transparent'};

  height: 56px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 0 24px;

  border-radius: 16px;
`
