import { View } from 'react-native'

import { Footer } from '@components/Footer'

export function Shimmer() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 24, marginTop: 8 }}>
        <View
          style={{
            width: 86,
            height: 14,
            backgroundColor: '#d9d9d9',
            marginBottom: 8,
          }}
        />
        <View style={{ width: 132, height: 36, backgroundColor: '#d9d9d9' }} />

        <View style={{ marginTop: 32 }}>
          <View
            style={{
              width: 56,
              height: 14,
              backgroundColor: '#d9d9d9',
              marginBottom: 8,
            }}
          />

          <View style={{ flexDirection: 'row' }}>
            {new Array(3).fill('').map((_, index) => (
              <View
                key={String(index)}
                style={{ alignItems: 'center', marginRight: 8 }}
              >
                <View
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    backgroundColor: '#d9d9d9',
                  }}
                />
                <View
                  style={{
                    width: 32,
                    height: 14,
                    backgroundColor: '#d9d9d9',
                    marginTop: 8,
                  }}
                />
              </View>
            ))}
          </View>
        </View>

        <View style={{ marginTop: 32 }}>
          <View
            style={{
              width: 56,
              height: 14,
              backgroundColor: '#d9d9d9',
              marginBottom: 8,
            }}
          />

          <View>
            {new Array(3).fill('').map((_, index) => (
              <View
                key={String(index)}
                style={{
                  alignItems: 'center',
                  marginBottom: 12,
                  flexDirection: 'row',
                }}
              >
                <View
                  style={{
                    width: 48,
                    height: 48,
                    backgroundColor: '#d9d9d9',
                  }}
                />
                <View style={{ flex: 1, marginLeft: 12 }}>
                  <View
                    style={{
                      width: 128,
                      height: 14,
                      backgroundColor: '#d9d9d9',
                    }}
                  />
                  <View
                    style={{
                      width: 96,
                      height: 12,
                      backgroundColor: '#d9d9d9',
                      marginTop: 4,
                    }}
                  />
                </View>
                <View
                  style={{
                    width: 48,
                    height: 20,
                    backgroundColor: '#d9d9d9',
                  }}
                />
              </View>
            ))}
          </View>
        </View>
      </View>

      <Footer>
        <View
          style={{ width: '100%', height: 56, backgroundColor: '#d9d9d9' }}
        />
      </Footer>
    </View>
  )
}
