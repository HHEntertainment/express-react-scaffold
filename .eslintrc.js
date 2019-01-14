const isProduction = process.env.NODE_ENV === 'production';

const off = 0;
const warn = 1;
const error = 2;

module.exports = {
  extends: ['airbnb', 'plugin:import/errors', 'plugin:import/warnings'],
  plugins: ['import'/* , 'lodash-fp' */],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  rules: {
    'comma-dangle': [
      error,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'only-multiline',
      },
    ],
    'global-require': off,
    'dot-location': [error, 'property'],
    'eol-last': error,
    'function-paren-newline': [error, 'consistent'],
    'import/no-deprecated': warn,
    'import/no-unresolved': off,
    'import/extensions': off,
    'import/prefer-default-export': off,
    indent: off,
    'jsx-a11y/anchor-is-valid': off,
    'jsx-a11y/click-events-have-key-events': off,
    'jsx-a11y/heading-has-content': off,
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/label-has-for': off,
    'jsx-a11y/mouse-events-have-key-events': off,
    'jsx-a11y/no-autofocus': off,
    'jsx-a11y/no-noninteractive-element-interactions': off,
    'lines-between-class-members': [error, 'always', { exceptAfterSingleLine: true }],
    /*
    'lodash-fp/consistent-compose': error,
    'lodash-fp/consistent-name': [error, 'fp'],
    'lodash-fp/no-argumentless-calls': error,
    'lodash-fp/no-chain': error,
    'lodash-fp/no-extraneous-args': error,
    'lodash-fp/no-extraneous-function-wrapping': error,
    'lodash-fp/no-extraneous-iteratee-args': error,
    'lodash-fp/no-for-each': off,
    'lodash-fp/no-partial-of-curried': error,
    'lodash-fp/no-single-composition': error,
    'lodash-fp/no-submodule-destructuring': error,
    'lodash-fp/no-unused-result': error,
    'lodash-fp/prefer-compact': error,
    'lodash-fp/prefer-composition-grouping': error,
    'lodash-fp/prefer-constant': [error, { arrowFunctions: false }],
    'lodash-fp/prefer-flat-map': error,
    'lodash-fp/prefer-get': error,
    'lodash-fp/prefer-identity': [error, { arrowFunctions: false }],
    'lodash-fp/preferred-alias': off,
    'lodash-fp/use-fp': error,
    */
    'max-len': [error, 150, { ignoreComments: true }],
    'implicit-arrow-linebreak': off,
    'no-console': isProduction ? error : warn,
    'no-mixed-operators': off,
    'no-multiple-empty-lines': [error, { max: 1, maxEOF: 0, maxBOF: 0 }],
    'no-implicit-coercion': error,
    'no-shadow': off,
    'no-underscore-dangle': off,
    'no-unused-vars': [error, { args: 'after-used', ignoreRestSiblings: true }],
    'object-curly-newline': [error, { consistent: true }],
    'padding-line-between-statements': [
      error,
      { blankLine: 'always', prev: '*', next: ['return', 'if', 'for', 'switch'] },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
    ],
    'prefer-spread': off,
    
    'react/jsx-filename-extension': [error, { extensions: ['.js', '.jsx'] }],
    'react/jsx-no-target-blank': error,
    'react/no-find-dom-node': off,
    'react/no-typos': error,
    'react/no-unused-state': off,
    'react/prefer-stateless-function': off,
  },
  parser: 'babel-eslint',
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
};
