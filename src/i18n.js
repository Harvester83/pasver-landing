import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationAz from './locales/az/translation.json';
import translationEn from './locales/en/translation.json';
import translationRu from './locales/ru/translation.json';

const resources = {
  az: {
    translation: translationAz,
  },
  en: {
    translation: translationEn,
  },  
  ru: {
    translation: translationRu,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: 'az',
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
