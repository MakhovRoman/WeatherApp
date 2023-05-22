module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: [
    '@typescript-eslint',
    'react-refresh',
    'simple-import-sort'
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': 1,
    'react-refresh/only-export-components': 'warn',
    "simple-import-sort/imports": 'warn',
    "simple-import-sort/exports": "warn",
  },
}
