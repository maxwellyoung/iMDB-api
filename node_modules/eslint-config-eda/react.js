const defaults = require('./index')
const a11yRules = require('./a11y-rules')

module.exports = {
  parser: defaults.parser,
  parserOptions: {
    ...defaults.parserOptions,
    ecmaFeatures: { jsx: true },
  },
  env: defaults.env,
  plugins: [...defaults.plugins, 'react', 'jsx-a11y'],
  extends: [
    ...defaults.extends,
    'plugin:react/recommended',
    'prettier/react',
    'plugin:jsx-a11y/strict',
  ],
  settings: {
    ...defaults.settings,
    react: { version: 'detect' },
    'import/resolver': { node: { extensions: ['.js', '.jsx'] } },
  },
  rules: {
    ...defaults.rules,
    ...a11yRules,
    'react/prop-types': 0,
  },
}
