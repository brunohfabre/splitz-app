const version = 24

export default {
  name: 'Splitz',
  slug: 'splitz',
  version: '0.0.24',
  owner: 'coddee',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'dark',
  plugins: [
    'expo-apple-authentication',
    [
      'expo-image-picker',
      {
        photosPermission:
          'The app accesses your photos to let you share them with your friends.',
        cameraPermission:
          'The app accesses your camera to let you share them with your friends.',
      },
    ],
  ],
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#121214',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    buildNumber: String(version),
    supportsTablet: true,
    bundleIdentifier: 'br.com.coddee.splitz',
    infoPlist: {
      NSFaceIDUsageDescription:
        'This app uses Face ID to increase user security when using the app.',
    },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#121214',
    },
    package: 'br.com.coddee.splitz',
    versionCode: version,
  },
  web: {
    favicon: './assets/favicon.png',
  },
  extra: {
    eas: {
      projectId: '27109648-e4fa-4ca0-b5b1-9b4fcfec254e',
    },
    API_URL: process.env.API_URL ?? 'http://192.168.15.12:3333',
  },
}
