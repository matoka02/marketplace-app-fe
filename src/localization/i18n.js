import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en.json';
import translationFI from './locales/fi.json';
import translationUK from './locales/uk.json';
// import translationRU from './locales/ru.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    fi: { translation: translationFI },
    uk: { translation: translationUK },
    // ru: { translation: translationRU },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
