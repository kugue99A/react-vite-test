module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-recess-order',
  ],
  rules: {
    'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$',
    'keyframes-name-pattern': '^[a-z][a-zA-Z0-9]+$',
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'layer', 'apply'],
      },
    ],
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['tailwind', 'theme', 'screen'],
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.{js,ts,jsx,tsx}'],
      customSyntax: '@stylelint/postcss-css-in-js',
    },
  ],
}
