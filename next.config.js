// next.config.js
const { i18n } = require('./pages/i18n/index.js');

module.exports = {
  i18n: {
    locales: ['en-US', 'pt-BR'],
    defaultLocale: 'pt-BR',
  },
  reactStrictMode: true,
};
