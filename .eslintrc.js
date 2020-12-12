module.exports = {
    extends: "airbnb-typescript-prettier",
    rules: {
        quotes: ['warn', 'single', { avoidEscape: true }],
        'comma-dangle': ['warn', 'always-multiline'],
        semi: ['warn', 'always'],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
};