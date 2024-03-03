// next.config.js
import i18n from './pages/i18n/index.js';

module.exports = {
  i18n: {
    locales: ['pt-BR', 'en-US'], // Certifique-se de definir as configurações corretas aqui
    defaultLocale: 'pt-BR', // Defina a localidade padrão
  },
  reactStrictMode: true,
};
