import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const Header = styled.View`
  padding: 24px;

  flex-direction: row;
  justify-content: space-between;
`

export const UserContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  flex-direction: row;
  align-items: center;
`

export const UserName = styled.Text`
  font-family: 'Inter_600SemiBold';
  font-size: 16px;
  color: #000000;
  margin-left: 12px;
`

export const Content = styled.ScrollView`
  flex: 1;
`
