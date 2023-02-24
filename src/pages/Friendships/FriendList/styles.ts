import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;

  padding: 24px 24px 0;
`

export const Content = styled(KeyboardAwareScrollView)`
  flex: 1;
`
