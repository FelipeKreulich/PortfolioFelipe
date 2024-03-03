// i18n/index.js
const i18n = require('i18next');
const { initReactI18next } = require('react-i18next');
const LanguageDetector = require('i18next-browser-languagedetector');

const PTBR = require('./locales/pt/pt-br.json');
const ENUS = require('./locales/en/en-us.json');

const resources = {
  'pt-BR': PTBR,
  'en-US': ENUS,
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'pt-BR',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
