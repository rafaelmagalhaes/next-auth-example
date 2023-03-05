module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "prettier",
    // 'airbnb',
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "next/core-web-vitals",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["prettier", "react", "react-hooks", "@typescript-eslint"],
  ignorePatterns: [
    "**/__tests__",
    "**/proto",
    "**/proto-grpc-web",
    "**/dist",
    "**/components/vendor",
  ],
  // add your custom rules here
  rules: {
    "no-console": ["error", { allow: ["warn", "error", "info"] }],
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
    "no-use-before-define": "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "import/no-relative-packages": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
  },
  globals: { _: true },
};
