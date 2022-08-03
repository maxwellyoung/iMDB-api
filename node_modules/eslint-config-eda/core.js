module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    requireConfigFile: false,
  },
  env: {
    browser: true,
    node: true,
    es2020: true,
    jest: true,
  },
  plugins: ['import', 'node', 'promise', 'jest'],
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/react',
    'plugin:promise/recommended',
    'prettier',
  ],
  settings: {
    'import/resolver': { node: { extensions: ['.js'] } },
  },
  rules: {
    'promise/always-return': 0,
  },
}
