import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './en/translation.json';
import esTranslation from './es/translation.json';
import ptTranslation from './pt/translation.json';
import frTranslation from './fr/translation.json';
import jaTranslation from './ja/translation.json';
import koTranslation from './ko/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: esTranslation },
      en: { translation: enTranslation },
      pt: { translation: ptTranslation },
      fr: { translation: frTranslation },
      ja: { translation: jaTranslation },
      ko: { translation: koTranslation },
    },
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
