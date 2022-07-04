module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    amd: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': ['off'],
    'no-unused-vars': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ]
  }
};
