import Animated from 'react-native-reanimated'

import styled from 'styled-components/native'

export const Container = styled.View`
  height: 56px;
  background-color: tomato;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Button = styled(Animated.View)`
  position: absolute;

  width: 48px;
  height: 48px;

  background-color: blue;

  left: 4px;

  align-items: center;
  justify-content: center;
`
