import { LinearGradient } from 'expo-linear-gradient'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const Content = styled.View`
  flex: 1;
  margin: 8px 24px;
`

export const ValueContainer = styled.View`
  padding: 0 24px 12px;

  align-items: center;
`

export const FriendsContainer = styled.ScrollView`
  flex: 1;

  margin-top: 24px;
`

export const Footer = styled(LinearGradient)`
  position: absolute;

  left: 0;
  bottom: 0;
  right: 0;

  padding: 24px;
`
