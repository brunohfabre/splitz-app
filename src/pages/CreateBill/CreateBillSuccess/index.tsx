import { SafeAreaView } from 'react-native'

import CircleWavyCheck from '@assets/icons/CircleWavyCheck.svg'
import { Button } from '@components/Button'
import { Heading } from '@components/Heading'
import { Text } from '@components/Text'
import { useNavigation, useRoute } from '@react-navigation/native'

import { Container, IconContainer, InfoContainer } from './styles'

const phrases = {
  INCOME: 'You add new income bill. 😃',
  OUTCOME: 'You add new outcome bill. 😃',
  SPLIT: 'You have shared your account with your friends. 🥳',
}

export function CreateBillSuccess() {
  const navigation = useNavigation()
  const route = useRoute()

  const { type, isSplit } = route.params as { type: string; isSplit: boolean }

  function handleNavigateBackToDashboard() {
    navigation.goBack()
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <IconContainer>
          <CircleWavyCheck />
        </IconContainer>

        <InfoContainer>
          <Heading size="4xl">Congrats.</Heading>
          <Text size="md" style={{ marginTop: 8 }}>
            {isSplit ? phrases.SPLIT : phrases[type]}
          </Text>
        </InfoContainer>

        <Button onPress={handleNavigateBackToDashboard}>Back to home</Button>
      </Container>
    </SafeAreaView>
  )
}
