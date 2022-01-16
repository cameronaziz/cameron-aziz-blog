module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended', 'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    'svelte3', '@typescript-eslint',
  ],
  rules: {
    semi: [
      'warn', 'always',
    ],
    'comma-dangle': [
      'warn', 'always-multiline',
    ],
    'no-comma-dangle': ['off'],
    '@typescript-eslint/comma-dangle': 'off'
  },
  overrides: [
    {
      files: [
        '*.js', '*.jsx',
      ],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': ['off']
      }
    },
  ],
  settings: {
    'svelte3/typescript': () => require('typescript')
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020
  },
  env: {
    browser: true,
    es2017: true,
    node: true
  }
};
