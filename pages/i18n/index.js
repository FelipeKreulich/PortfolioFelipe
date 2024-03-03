const i18n = require('i18next');
const initReactI18next = require('react-i18next').default;
import PTBR from './locales/pt/pt-br.json';
import ENUS from './locales/en/en-us.json';
import LanguageDectector from 'i18next-browser-languagedetector';

const resources = {
  'pt-BR': PTBR,
  'en-US': ENUS,
}

i18n
  .use(initReactI18next)
  .use(LanguageDectector)
  .init({
    resources,
    lng: 'pt-BR',
    interpolation: {
      escapeValue: false,
    }
  })

export default i18n;