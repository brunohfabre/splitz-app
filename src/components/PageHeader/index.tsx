import CaretLeft from '@assets/icons/CaretLeft.svg'
import { Heading } from '@components/Heading'
import { IconButton } from '@components/IconButton'
import { useNavigation } from '@react-navigation/native'

import { Container, TitleContainer } from './styles'

type PageHeaderProps = {
  title: string
  showBackButton?: boolean
}

export function PageHeader({ title, showBackButton = true }: PageHeaderProps) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <Container>
      {showBackButton && (
        <IconButton onPress={handleGoBack}>
          <CaretLeft />
        </IconButton>
      )}

      <TitleContainer showBackButton={showBackButton}>
        <Heading size="lg">{title}</Heading>
      </TitleContainer>
    </Container>
  )
}
