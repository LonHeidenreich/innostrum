module.exports = {
  singleQuote: true,
  trailingComma: 'es5',
  tabWidth: 2,
  useTabs: false,
  overrides: [
    {
      files: '*.{scss,css}',
      options: {
        parser: 'css',
        singleQuote: false,
        semi: true,
      },
    },
    {
      files: '*.{json}',
      options: {
        parser: 'json',
      },
    },
  ],
};
