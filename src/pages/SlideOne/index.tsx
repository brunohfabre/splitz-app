import { SafeAreaView } from 'react-native'

import Cube from '@assets/icons/Cube.svg'
import { Button } from '@components/Button'
import { Heading } from '@components/Heading'
import { Text } from '@components/Text'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  CurrentStep,
  IconContainer,
  InfoContainer,
  Step,
  StepsContainer,
} from './styles'

export function SlideOne() {
  const navigation = useNavigation()

  function handleNavigateToSlideTwo() {
    navigation.navigate('slide-two')
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <IconContainer>
          <Cube />
        </IconContainer>

        <InfoContainer>
          <Heading size="4xl">Pay and send invoices.</Heading>
          <Text size="md" style={{ marginTop: 8 }}>
            Everything you need is now in one app.
          </Text>
        </InfoContainer>

        <StepsContainer>
          <CurrentStep />
          <Step />
        </StepsContainer>

        <Button onPress={handleNavigateToSlideTwo}>Next</Button>
      </Container>
    </SafeAreaView>
  )
}
