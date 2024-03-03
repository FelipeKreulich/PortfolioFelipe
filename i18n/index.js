// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ptBR from './locales/pt/pt-br.json'; // Certifique-se de que o caminho está correto
import enUS from './locales/en/en-us.json'; // Certifique-se de que o caminho está correto

const resources = {
  'pt-BR': ptBR,
  'en-US': enUS,
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
