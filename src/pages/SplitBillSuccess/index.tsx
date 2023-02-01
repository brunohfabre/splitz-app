import { SafeAreaView } from 'react-native'

import CircleWavyCheck from '@assets/icons/CircleWavyCheck.svg'
import { Button } from '@components/Button'
import { Heading } from '@components/Heading'
import { Text } from '@components/Text'
import { StackActions, useNavigation } from '@react-navigation/native'

import { Container, IconContainer, InfoContainer } from './styles'

export function SplitBillSuccess() {
  const navigation = useNavigation()

  function handleNavigateBackToDashboard() {
    navigation.dispatch(StackActions.popToTop())
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
            You have shared your account with your friends. 🥳
          </Text>
        </InfoContainer>

        <Button onPress={handleNavigateBackToDashboard}>Back to home</Button>
      </Container>
    </SafeAreaView>
  )
}
