module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@lib': './src/lib',
            '@pages': './src/pages',
            '@stores': './src/stores',
            '@utils': './src/utils',
            '@hooks': './src/hooks',
            '@services': './src/services',
          },
        },
      ],
    ],
  }
}
