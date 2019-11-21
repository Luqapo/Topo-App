module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  "rules": {
    "keyword-spacing": ["error", {
      "overrides": {
        "if": { "after": false },
        "while": { "after": false },
        "for": { "after": false },
        "switch": { "after": false },
        "catch": { "after": false }
      }
    }],
    "comma-dangle": ["error", "always-multiline"],
    "no-unused-vars": "warn",
    "no-param-reassign": ["error", { "props": false }],
    "no-mixed-operators": 0,
    "no-plusplus": 0,
    "no-continue": 0,
    "space-infix-ops": 0,
    "space-before-function-paren": ["error", {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "always"
    }],
    "one-var": 0,
    "no-underscore-dangle": 0,
    "one-var-declaration-per-line": 0,
    "object-curly-newline": ["error", { "consistent":true }],
    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": ["test/**/*.js", "createDb.js", "build/**/*.js"],
      "optionalDependencies": false
    }]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
      ],
      env: {
        mocha: true,
      },
    },
  ],
};
