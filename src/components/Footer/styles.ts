import { LinearGradient } from 'expo-linear-gradient'
import styled from 'styled-components/native'

type ContainerProps = {
  paddingBottom: number
}

export const Container = styled(LinearGradient)<ContainerProps>`
  position: absolute;

  left: 0;
  bottom: 0;
  right: 0;

  flex-direction: row;

  padding: 24px;

  padding-bottom: ${({ paddingBottom }) => paddingBottom}px;
`
