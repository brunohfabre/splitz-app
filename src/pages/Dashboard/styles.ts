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

export const SectionHeader = styled.View`
  margin: 0 24px 12px;

  flex-direction: row;
  justify-content: space-between;
`

export const SummaryContainer = styled.View`
  margin-top: 8px;
`

export const SummaryContent = styled.View`
  margin: 0 24px;
`

export const FriendsContainer = styled.View`
  margin-top: 32px;
`

export const FriendsContent = styled.ScrollView``

export const AddFriendButtonContainer = styled.TouchableOpacity`
  align-items: center;
`

export const AddFriendButtonAvatar = styled.View`
  border-width: 2px;
  border-color: #d9d9d9;
  border-style: dashed;

  width: 48px;
  height: 48px;
  border-radius: 24px;

  align-items: center;
  justify-content: center;
`

export const Friend = styled.View`
  align-items: center;
  margin-left: 12px;
`

export const BillsContainer = styled.View`
  margin-top: 32px;
`

export const BillsContent = styled.View`
  padding: 0 24px;
`

export const BillContainer = styled.View`
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  margin-bottom: 12px;
`

export const BillContent = styled.View`
  flex-direction: row;
  align-items: center;
`

export const BillType = styled.View`
  width: 48px;
  height: 48px;

  background-color: #d9d9d9;

  align-items: center;
  justify-content: center;
`

export const BillInfo = styled.View`
  margin-left: 12px;
`

export const BillValue = styled.View`
  align-items: flex-end;
`
