import { SafeAreaView, View } from 'react-native'

import { SwipeButton } from '@components/SwipeButton'

export function Test() {
  function handleSwipe() {
    alert('hadle swipe')
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          padding: 24,
          justifyContent: 'flex-end',
        }}
      >
        <SwipeButton onSwipe={handleSwipe} />
      </View>
    </SafeAreaView>
  )
}
