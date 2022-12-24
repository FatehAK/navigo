module.exports = {
  root: true,
  env: {
    es2022: true,
    browser: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/jsx-runtime',
    'plugin:sonarjs/recommended',
    'plugin:promise/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'global-require': 'off',
    'no-restricted-exports': 'off',
    'sonarjs/no-duplicate-string': 'off',
    'no-console': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
  },
  plugins: ['only-warn', 'react', 'sonarjs', 'promise', 'html', '@html-eslint'],
  overrides: [
    {
      files: ['*.html'],
      parser: '@html-eslint/parser',
      extends: ['plugin:@html-eslint/recommended'],
      rules: {
        'spaced-comment': 'off',
        '@html-eslint/indent': 'off',
        '@html-eslint/require-meta-charset': 'error',
        '@html-eslint/require-meta-viewport': 'error',
        '@html-eslint/require-meta-description': 'off',
        '@html-eslint/require-button-type': 'error',
        '@html-eslint/element-newline': 'off',
        '@html-eslint/no-target-blank': 'error',
        '@html-eslint/no-duplicate-id': 'error',
        '@html-eslint/no-extra-spacing-attrs': ['error', { enforceBeforeSelfClose: true }],
        '@html-eslint/require-closing-tags': ['error', { selfClosing: 'always' }],
        '@html-eslint/id-naming-convention': ['error', 'camelCase'],
      },
    },
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['pages', './src/pages'],
          ['components', './src/components'],
          ['assets', './src/assets'],
          ['src/constants', './src/constants'],
          ['src/context', './src/context'],
          ['appConfig', './appConfig'],
        ],
      },
    },
  },
};
