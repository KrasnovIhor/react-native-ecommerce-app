module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '~': './',
          assets: './src/assets',
          components: './src/components',
          constants: './src/constants',
          navigation: './src/navigation',
          screens: './src/screens',
          types: './src/types',
          utils: './src/utils',
          hooks: './src/hooks',
          services: './src/services',
          providers: './src/providers',
          store: './src/store',
          api: './src/api',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
