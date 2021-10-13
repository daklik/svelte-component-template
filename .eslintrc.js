module.exports = {
    parserOptions: {
      ecmaVersion: 2019,
      sourceType: 'module'
    },
    env: {
      es6: true,
      browser: true,
      node: true,
      "jest/globals": true
    },
    extends: [
      'eslint:recommended'
    ],
    plugins: [
      'svelte3',
      'jest'
    ],
    ignorePatterns: [
      'dist/'
    ],
    overrides: [
      {
        files: ['**/*.svelte'],
        processor: 'svelte3/svelte3'
      }
    ],
    rules: {
      semi: ['error', 'never']
    },
    settings: {
      // ...
    }
  }