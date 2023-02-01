import { View } from 'react-native'

export function FriendShimmer() {
  return (
    <View style={{ flexDirection: 'row', marginBottom: 12 }}>
      <View
        style={{
          width: 48,
          height: 48,
          backgroundColor: '#d9d9d9',
          borderRadius: 24,
        }}
      />

      <View style={{ justifyContent: 'center', marginLeft: 8 }}>
        <View
          style={{
            height: 12,
            width: 100,
            backgroundColor: '#d9d9d9',
          }}
        />
        <View
          style={{
            height: 8,
            width: 160,
            backgroundColor: '#d9d9d9',
            marginTop: 4,
          }}
        />
      </View>
    </View>
  )
}
