import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Button } from '@components/Button'
import { Heading } from '@components/Heading'
import { Text } from '@components/Text'

import { ActionsContainer, Container, Content, Overlay } from './styles'

type DialogProps = {
  open: boolean
  onOpenChange: (state: boolean) => void
  title: string
  description: string
  actionText: string
  onAction: () => void
  cancelText?: string
}

export function Dialog({
  open,
  onOpenChange,
  title,
  description,
  actionText,
  onAction,
  cancelText = 'Cancel',
}: DialogProps) {
  const insets = useSafeAreaInsets()

  function handleCloseDialog() {
    onOpenChange(false)
  }

  function handleActionDialog() {
    onAction()
    handleCloseDialog()
  }

  if (!open) {
    return <></>
  }

  return (
    <Overlay
      style={{ paddingTop: insets.top + 24, paddingBottom: insets.bottom + 24 }}
    >
      <Container>
        <Content>
          <Heading size="lg">{title}</Heading>
          <Text size="md">{description}</Text>
        </Content>

        <ActionsContainer>
          <Button style={{ flex: 1, margin: 6 }} onPress={handleCloseDialog}>
            {cancelText}
          </Button>
          <Button style={{ flex: 1, margin: 6 }} onPress={handleActionDialog}>
            {actionText}
          </Button>
        </ActionsContainer>
      </Container>
    </Overlay>
  )
}
