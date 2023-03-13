import { BackgroundPattern } from '@components/BackgroundPattern'
import { Button } from '@components/Button'
import { Heading } from '@components/Heading'
import { CaretRight } from '@components/icons'
import { Text } from '@components/Text'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  CurrentStep,
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
    <BackgroundPattern>
      <Container>
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

        <Button
          onPress={handleNavigateToSlideTwo}
          icon={<CaretRight weight="bold" size={16} />}
        >
          Next
        </Button>
      </Container>
    </BackgroundPattern>
  )
}
