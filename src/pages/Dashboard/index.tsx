import { SafeAreaView, TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { toMoney } from 'vanilla-masker'

import { Avatar } from '@components/Avatar'
import { Heading } from '@components/Heading'
import { IconButton } from '@components/IconButton'
import { Bell, ArrowDown, ArrowUp, Plus, Percent } from '@components/icons'
import { Text } from '@components/Text'
import { useNavigation } from '@react-navigation/native'
import { useBills } from '@services/bills'
import { useFriendships } from '@services/friendships'
import { useAuthStore } from '@stores/authStore'
import { getFirstAndLastName } from '@utils/getFirstAndLastName'

import { Footer } from './Footer'
import { Shimmer } from './Shimmer'
import {
  AddFriendButtonAvatar,
  AddFriendButtonContainer,
  BillContainer,
  BillContent,
  BillInfo,
  BillsContainer,
  BillsContent,
  BillType,
  BillValue,
  Container,
  Content,
  Friend,
  FriendsContainer,
  FriendsContent,
  Header,
  SectionHeader,
  SummaryContainer,
  SummaryContent,
  UserContainer,
} from './styles'

export function Dashboard() {
  const navigation = useNavigation()
  const insets = useSafeAreaInsets()

  const user = useAuthStore((state) => state.user)

  const userShortName = getFirstAndLastName(user.name)

  const { data: friendships, isLoading: isFriendshipsLoading } =
    useFriendships()
  const { data: bills, isLoading: isBillsLoading } = useBills()

  const summaryValue = bills?.reduce((acc, bill) => {
    if (bill.isSplit) {
      return acc - bill.billUsers[0].value
    }

    if (bill.type === 'INCOME') {
      return acc + bill.totalValue
    }

    if (bill.type === 'OUTCOME') {
      return acc - bill.totalValue
    }

    return 0
  }, 0)

  function handleNavigateToProfile() {
    navigation.navigate('profile')
  }

  function handleNavigateToNotifications() {
    navigation.navigate('notifications')
  }

  function handleNavigateToBills() {
    navigation.navigate('bills')
  }

  function handleNavigateToFriendships() {
    navigation.navigate('friendships')
  }

  function handleNavigateToAddFriend() {
    navigation.navigate('add-friend')
  }

  return (
    <Container>
      <SafeAreaView>
        <Header>
          <UserContainer onPress={handleNavigateToProfile}>
            <Avatar sourceUri={user.avatarUrl} />

            <Heading>{userShortName}</Heading>
          </UserContainer>

          <IconButton
            variant="secondary"
            onPress={handleNavigateToNotifications}
          >
            <Bell size={16} color="white" weight="bold" />
          </IconButton>
        </Header>
      </SafeAreaView>

      {(!friendships && isFriendshipsLoading) || (!bills && isBillsLoading) ? (
        <Shimmer />
      ) : (
        <>
          <Content
            contentContainerStyle={{
              paddingBottom: insets.bottom + 24 + 12 + 56,
            }}
          >
            <SummaryContainer>
              <SectionHeader>
                <Text size="sm" style={{ color: '#A1A1A1' }}>
                  Your balance
                </Text>
              </SectionHeader>

              <SummaryContent>
                <Heading size="3xl">
                  {toMoney(summaryValue, {
                    unit: 'R$',
                  })}
                </Heading>
              </SummaryContent>
            </SummaryContainer>

            <FriendsContainer>
              <SectionHeader>
                <Text size="sm" style={{ color: '#A1A1A1' }}>
                  Friends
                </Text>

                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={handleNavigateToFriendships}
                >
                  <Text size="sm" style={{ color: '#A1A1A1' }}>
                    See more
                  </Text>
                </TouchableOpacity>
              </SectionHeader>

              <FriendsContent
                horizontal
                contentContainerStyle={{ paddingHorizontal: 24 }}
              >
                <AddFriendButtonContainer
                  activeOpacity={0.6}
                  onPress={handleNavigateToAddFriend}
                >
                  <AddFriendButtonAvatar>
                    <Plus size={16} />
                  </AddFriendButtonAvatar>
                  <Text size="sm" style={{ marginTop: 8, color: '#aaaaaa' }}>
                    Add
                  </Text>
                </AddFriendButtonContainer>

                {friendships.map((friendship) => (
                  <Friend key={friendship.id}>
                    <Avatar />
                    <Text size="sm" style={{ marginTop: 8 }}>
                      Name
                    </Text>
                  </Friend>
                ))}
              </FriendsContent>
            </FriendsContainer>

            <BillsContainer>
              <SectionHeader>
                <Text size="sm" style={{ color: '#A1A1A1' }}>
                  Recent activity
                </Text>

                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={handleNavigateToBills}
                >
                  <Text size="sm" style={{ color: '#A1A1A1' }}>
                    See more
                  </Text>
                </TouchableOpacity>
              </SectionHeader>

              <BillsContent>
                {bills.map((bill) => (
                  <BillContainer key={bill.id}>
                    <BillContent>
                      <BillType>
                        {bill.type === 'INCOME' && <ArrowDown />}

                        {bill.type === 'OUTCOME' && !bill.billUsers.length && (
                          <ArrowUp size={16} />
                        )}

                        {bill.type === 'OUTCOME' && !!bill.billUsers.length && (
                          <Percent />
                        )}
                      </BillType>

                      <BillInfo>
                        <Heading size="sm">{bill.name}</Heading>
                        <Text size="xs">{bill.createdAt}</Text>
                      </BillInfo>
                    </BillContent>

                    <BillValue>
                      {bill.billUsers.length ? (
                        <>
                          <Heading size="lg">
                            {toMoney(bill.billUsers[0].value, {
                              unit: 'R$',
                            })}
                          </Heading>

                          <Text size="sm">
                            {toMoney(bill.totalValue, {
                              unit: 'R$',
                            })}
                          </Text>
                        </>
                      ) : (
                        <Heading size="lg">
                          {toMoney(bill.totalValue, {
                            unit: 'R$',
                          })}
                        </Heading>
                      )}
                    </BillValue>
                  </BillContainer>
                ))}
              </BillsContent>
            </BillsContainer>
          </Content>

          <Footer />
        </>
      )}
    </Container>
  )
}
