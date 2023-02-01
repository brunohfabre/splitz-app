import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`
export const Content = styled(KeyboardAwareScrollView).attrs({
  contentContainerStyle: {
    flex: 1,
  },
})`
  flex: 1;
  padding: 8px 24px 24px;
`

export const Form = styled.View`
  flex: 1;
`

export const OrText = styled.Text`
  font-family: 'Inter_400Regular';
  font-size: 16px;
  color: #a1a1a1;
  margin: 16px 0;
  align-self: center;
`
