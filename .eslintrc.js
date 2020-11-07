module.exports = {
  'parser': 'babel-eslint',
  'env': {
    'browser': true,
    'es2020': true,
    'es6': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'eslint:recommended',
    'google'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 11,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'arrow-parens': 'off',
    'no-undef': 'off',
    'comma-dangle': 'off',
    'require-jsdoc': 'off',
  },
};
