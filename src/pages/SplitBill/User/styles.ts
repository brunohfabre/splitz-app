import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`

export const Content = styled.View`
  flex: 1;
  margin-left: 8px;
`

export const NameText = styled.Text`
  font-family: 'Inter_600SemiBold';
  font-size: 16px;
  color: #000000;
`

export const EmailText = styled.Text`
  font-family: 'Inter_400Regular';
  font-size: 14px;
  color: #888888;
`
