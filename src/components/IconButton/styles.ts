import { LinearGradient } from 'expo-linear-gradient'
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`

export const PrimaryShape = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [theme.secondary, theme.primary],
  start: { x: 0, y: 1 },
  end: { x: 1, y: 0 },
}))`
  width: 48px;
  height: 48px;

  align-items: center;
  justify-content: center;

  border-radius: 16px;
`

export const SecondaryShape = styled.View`
  width: 48px;
  height: 48px;

  background-color: ${({ theme }) => theme.shapeSecondary};

  align-items: center;
  justify-content: center;

  border-radius: 16px;
`
