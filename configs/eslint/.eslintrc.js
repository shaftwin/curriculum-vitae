module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        moduleDirectory: ['node_modules', '../../'],
      },
    },
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'max-len': ['error', { code: 80 }, { ignoreComments: true }],
    // React
    'react/destructuring-assignment': 'warn',
    'react/jsx-props-no-spreading': 'warn',
    // Hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // PropTypes
    'react/forbid-prop-types': ['warn', { forbid: ['any', 'array', 'object'] }],
    'react/prop-types': [
      'warn',
      { ignore: [], customValidators: [], skipUndeclared: false },
    ],
    'react/no-unused-prop-types': [
      'warn',
      { customValidators: [], skipShapeProps: true },
    ],
    // Ternary
    'no-nested-ternary': 'warn',
    // Global
    'no-restricted-globals': 'warn',
    // General
    camelcase: ['warn', { properties: 'never' }],
    eqeqeq: ['warn', 'always', { null: 'ignore' }],
    'import/prefer-default-export': 'off',
    // Spaces
    'no-trailing-spaces': 'error',
    // Empty multilines
    'no-multiple-empty-lines': 'error',
  },
};
