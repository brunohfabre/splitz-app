import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Button } from '@components/Button'
import { IconButton } from '@components/IconButton'
import { Plus, Users, Wallet } from '@components/icons'
import { useNavigation } from '@react-navigation/native'

import { ButtonsContainer, Container } from './styles'

export function Footer() {
  const navigation = useNavigation()

  const insets = useSafeAreaInsets()

  function handleNavigateToBills() {
    navigation.navigate('bills')
  }

  function handleNavigateToCreateBill() {
    navigation.navigate('create-bill')
  }

  function handleNavigateToFriendships() {
    navigation.navigate('friendships')
  }

  return (
    <Container style={{ paddingBottom: 24 + insets.bottom }}>
      <ButtonsContainer>
        <Button
          variant="ghost"
          block
          icon={<Wallet size={16} weight="bold" color="white" />}
          onPress={handleNavigateToBills}
        />

        <IconButton onPress={handleNavigateToCreateBill}>
          <Plus size={16} color="black" weight="bold" />
        </IconButton>

        <Button
          variant="ghost"
          block
          icon={<Users size={16} weight="bold" color="white" />}
          onPress={handleNavigateToFriendships}
        />
      </ButtonsContainer>
    </Container>
  )
}
