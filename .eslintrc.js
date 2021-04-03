module.exports = {
  root: true,
  extends: ['@gfez/react-native', 'plugin:prettier/recommended', 'prettier/react'],
  plugins: ["workspaces"],
  rules: {
    "workspaces/no-relative-imports": "error",
    "workspaces/require-dependency": "error",
  }
}