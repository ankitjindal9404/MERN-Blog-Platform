import eslintPluginJest from 'eslint-plugin-jest';

export default [
  {
    languageOptions: {
      sourceType: 'module', // Use ES module syntax
      ecmaVersion: 2026, // Use the appropriate ECMAScript version
      globals: {
        // Jest globals
        beforeAll: 'readonly',
        afterAll: 'readonly',
        describe: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        jest: 'readonly',
      }
    },
    plugins: {
      jest: eslintPluginJest,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'jest/valid-expect': 'error',
      'jest/no-disabled-tests': 'warn',
    },
  }
];
