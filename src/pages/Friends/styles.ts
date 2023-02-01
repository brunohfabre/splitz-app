import { LinearGradient } from 'expo-linear-gradient'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const Content = styled.ScrollView`
  flex: 1;
`

export const Footer = styled(LinearGradient)`
  position: absolute;

  left: 0;
  bottom: 0;
  right: 0;

  padding: 24px;
`
