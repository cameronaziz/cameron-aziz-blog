module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'
  ],
  plugins: [
    'svelte3', '@typescript-eslint'
  ],
  ignorePatterns: ['*.cjs'],
  rules: {
    semi: [
      'warn', 'always'
    ],
    'comma-dangle': ['warn', 'always-multiline']
  },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    }, { // enable the rule specifically for TypeScript files
      files: [
        '*.js', '*.jsx'
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
