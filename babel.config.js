module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ts', '.tsx', '.ios.js', '.android.js', '.js', '.json'],
        alias: {},
      },
    ],
  ],
}
