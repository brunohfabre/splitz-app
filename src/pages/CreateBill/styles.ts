import { Dimensions } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const PictureButton = styled.TouchableOpacity`
  margin: 8px 24px 24px;

  background-color: #ffffff;
  border-width: 2px;
  border-color: #d9d9d9;
  border-style: dashed;
  height: 112px;

  align-items: center;
  justify-content: center;
`

export const OptionsContainer = styled.View`
  flex-direction: row;

  padding: 0 24px;
`

export const Content = styled(KeyboardAwareScrollView)`
  flex: 1;
`

export const InvoiceImage = styled.Image`
  flex: 1;

  margin: 8px 24px 24px;

  width: ${Dimensions.get('window').width - 48}px;
  height: 112px;
`
