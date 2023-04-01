import { Text, View } from 'react-native'
import { Button } from './Button'

type DialogProps = {
  open: boolean
  onOpenChange: (state: boolean) => void
  title: string
  description?: string
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
  cancelText,
}: DialogProps) {
  function handleClose() {
    onOpenChange(false)
  }

  if (!open) {
    return <></>
  }

  return (
    <View className="absolute top-0 right-0 bottom-0 left-0 z-50 p-6 bg-black/50 justify-center">
      <View className="bg-shape-primary rounded-2xl p-6" style={{ gap: 24 }}>
        <View style={{ gap: 12 }}>
          <Text className="text-lg font-semibold text-text-title">{title}</Text>

          {description && (
            <Text className="text-base text-text-base">{description}</Text>
          )}
        </View>

        <View style={{ gap: 12 }}>
          <Button variant="primary" onPress={onAction}>
            {actionText ?? 'Yes'}
          </Button>
          <Button variant="secondary" onPress={handleClose}>
            {cancelText ?? 'Cancel'}
          </Button>
        </View>
      </View>
    </View>
  )
}
