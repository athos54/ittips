module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    "jest/globals": true

  },
  extends: [
    'next/core-web-vitals',
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'eslint-plugin-testing-library',
    'jest'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off'
  }
}
