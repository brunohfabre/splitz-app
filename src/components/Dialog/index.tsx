import { Button } from '@components/Button'
import { Heading } from '@components/Heading'
import { Text } from '@components/Text'
import { Portal } from '@gorhom/portal'

import { ActionsContainer, Container, Content, Overlay } from './styles'

type DialogProps = {
  open: boolean
  onOpenChange: (state: boolean) => void
  title: string
  description: string
  actionText: string
  onAction: () => void
  isActionLoading?: boolean
  cancelText?: string
}

export function Dialog({
  open,
  onOpenChange,
  title,
  description,
  actionText,
  onAction,
  isActionLoading,
  cancelText = 'Cancel',
}: DialogProps) {
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
    <Portal>
      <Overlay>
        <Container>
          <Content>
            <Heading size="lg">{title}</Heading>
            <Text size="md">{description}</Text>
          </Content>

          <ActionsContainer>
            <Button style={{ flex: 1, margin: 6 }} onPress={handleCloseDialog}>
              {cancelText}
            </Button>
            <Button
              style={{ flex: 1, margin: 6 }}
              onPress={handleActionDialog}
              isLoading={isActionLoading}
            >
              {actionText}
            </Button>
          </ActionsContainer>
        </Container>
      </Overlay>
    </Portal>
  )
}
