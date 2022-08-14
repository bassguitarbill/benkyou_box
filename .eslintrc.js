module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
     'plugin:jsx-control-statements/recommended',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jsx-control-statements',
  ],
  rules: {
    "react/jsx-no-undef": [2, { "allowGlobals": true }]
  },
};
