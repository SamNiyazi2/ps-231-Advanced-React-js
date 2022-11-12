// 07/20/2020 07:58 am - SSN - [20200720-0738] - [001] - M03 - Full-stack JavaScript with React.js
// Copied from:
// https://github.com/samerbuna/.files/blob/master/.eslintrc.js

module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
        },
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'react/prop-types': ['off'],
        'react/display-name': ['off'],
        'react/no-unescaped-entities': ['off'],
        indent: ['error', 4, { SwitchCase: 1 }],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-console': [
            'warn',
            { allow: ['clear', 'info', 'error', 'dir', 'trace'] },
        ],
        curly: 'error',
        'no-else-return': 'error',
        'no-unneeded-ternary': 'error',
        'no-useless-return': 'error',
        'no-var': 'error',
        'one-var': ['error', 'never'],
        'prefer-arrow-callback': 'error',
        strict: 'error',
        'symbol-description': 'error',
        yoda: ['error', 'never', { exceptRange: true }],
    },
};
