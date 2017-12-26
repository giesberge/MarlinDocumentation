module.exports = {
  "env": {
    "node": false,
    "browser": true,
    "commonjs": true,
    "jquery": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "script"
  },
  "rules": {
    "accessor-pairs": "error",
    "array-bracket-spacing": "error",
    "array-callback-return": "error",
    "arrow-body-style": "error",
    "arrow-parens": "error",
    "arrow-spacing": "error",
    "block-scoped-var": "error",
    "block-spacing": "error",
    "brace-style": ["error", "1tbs"],
    "callback-return": "error",
    "camelcase": [
      "error",
      {
        "properties": "never"
      }
    ],
    "comma-dangle": "error",
    "comma-spacing": "error",
    "comma-style": "error",
    "complexity": "off",
    "computed-property-spacing": "error",
    "consistent-return": "off",
    "consistent-this": "off",
    "curly": "off",
    "default-case": "off",
    "dot-location": [
      "error",
      "object"
    ],
    "dot-notation": "off",
    "eol-last": "error",
    "func-names": [
      "error",
      "never"
    ],
    "func-style": [
      "error",
      "declaration"
    ],
    "generator-star-spacing": "error",
    "global-require": "off",
    "guard-for-in": "error",
    "handle-callback-err": "error",
    "id-blacklist": "error",
    "id-length": "off",
    "id-match": "error",
    "indent": ["error", 2],
    "init-declarations": "off",
    "jsx-quotes": "error",
    "key-spacing": "off",
    "keyword-spacing": "off",
    "linebreak-style": [
      "error",
      "unix"
    ],
    "lines-around-comment": "error",
    "max-depth": "error",
    "max-len": "off",
    "max-lines": "off",
    "max-nested-callbacks": "error",
    "max-params": "off",
    "max-statements": "off",
    "max-statements-per-line": "error",
    "multiline-ternary": "off",
    "new-parens": "error",
    "newline-after-var": "off",
    "newline-before-return": "off",
    "newline-per-chained-call": "error",
    "no-alert": "off",
    "no-array-constructor": "error",
    "no-bitwise": "warn",
    "no-caller": "error",
    "no-catch-shadow": "error",
    "no-confusing-arrow": "error",
    "no-console": "off",
    "no-continue": "error",
    "no-div-regex": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "error",
    "no-empty-function": "error",
    "no-eq-null": "off",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-extra-parens": "off",
    "no-floating-decimal": "error",
    "no-implicit-coercion": "warn",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-inline-comments": "off",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-magic-numbers": "off",
    "no-mixed-operators": "error",
    "no-mixed-requires": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-multiple-empty-lines": "error",
    "no-negated-condition": "off",
    "no-nested-ternary": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-require": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "warn",
    "no-path-concat": "error",
    "no-plusplus": "error",
    "no-process-env": "off",
    "no-process-exit": "error",
    "no-proto": "error",
    "no-prototype-builtins": "off",
    "no-restricted-globals": "error",
    "no-restricted-imports": "error",
    "no-restricted-modules": "error",
    "no-restricted-syntax": "error",
    "no-return-assign": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-spaced-func": "error",
    "no-sync": "error",
    "no-tabs": "error",
    "no-ternary": "off",
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-undefined": "error",
    "no-underscore-dangle": "error",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "warn",
    "no-use-before-define": "off",
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-escape": "error",
    "no-useless-rename": "error",
    "no-var": "off",
    "no-void": "error",
    "no-warning-comments": "warn",
    "no-whitespace-before-property": "error",
    "no-with": "error",
    "object-curly-newline": [
      "error",
      "never"
    ],
    "object-curly-spacing": [
      "error",
      "never"
    ],
    "object-property-newline": [
      "error", {
        "allowMultiplePropertiesPerLine": true
      }
    ],
    "object-shorthand": "error",
    "one-var": "off",
    "one-var-declaration-per-line": "error",
    "operator-assignment": [
      "warn",
      "always"
    ],
    "operator-linebreak": "error",
    "padded-blocks": "off",
    "prefer-arrow-callback": "off",
    "prefer-const": "error",
    "prefer-reflect": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "off",
    "quote-props": "off",
    "quotes": "off",
    "radix": [
      "error",
      "as-needed"
    ],
    "require-jsdoc": "off",
    "rest-spread-spacing": "error",
    "semi": "error",
    "semi-spacing": "error",
    "sort-imports": "error",
    "sort-vars": "error",
    "space-before-blocks": "off",
    "space-before-function-paren": "off",
    "space-in-parens": [
      "error",
      "never"
    ],
    "space-infix-ops": "off",
    "space-unary-ops": "error",
    "spaced-comment": "off",
    "strict": ["warn", "global"],
    "template-curly-spacing": "error",
    "unicode-bom": [
      "error",
      "never"
    ],
    "valid-jsdoc": "error",
    "vars-on-top": "off",
    "wrap-iife": "error",
    "wrap-regex": "error",
    "yield-star-spacing": "error",
    "yoda": [
      "error",
      "never"
    ]
  }
};
