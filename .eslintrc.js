module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    indent: ['error', 2],
    quotes: ['off', 'single'],
    semi: ['error', 'never'],
    'space-before-function-paren': ['warn', 'always'],
    'vue/name-property-casing': ['warn', 'kebab-case'],
    'vue/component-definition-name-casing': ['warn', 'kebab-case'],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'vue/require-default-prop': 'off',
    'vue/order-in-components': 'off',
    'arrow-parens': ['warn', 'as-needed'],
    'import/order': 'off',
    'no-mixed-operators': 'off',
    'vue/first-attribute-linebreak': 'off',
    'vue/no-reserved-props': 'off'
  }
}
