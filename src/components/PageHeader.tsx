import { SafeAreaView, Text, View } from 'react-native'
import { IconButton } from './IconButton'
import { ChevronLeft } from './icons'
import { clsx } from 'clsx'
import { useNavigation } from '@react-navigation/native'

type PageHeaderProps = {
  canGoBack?: boolean
  title?: string
}

export function PageHeader({ canGoBack = true, title }: PageHeaderProps) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <SafeAreaView>
      <View
        className={clsx(
          'p-6 flex-row justify-between items-center',
          !canGoBack && 'justify-center',
        )}
      >
        {canGoBack && (
          <IconButton
            variant="secondary"
            icon={<ChevronLeft />}
            onPress={handleGoBack}
          />
        )}

        {title && (
          <View className="h-12 justify-center">
            <Text className="text-gray-50 text-lg font-semibold">{title}</Text>
          </View>
        )}

        {canGoBack && <View className="h-12 w-12" />}
      </View>
    </SafeAreaView>
  )
}
