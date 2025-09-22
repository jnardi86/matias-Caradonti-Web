'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  es: { common: require('../locales/es/common.json') },
  en: { common: require('../locales/en/common.json') }
};

export function ensureI18n() {
  if (!i18n.isInitialized) {
    i18n
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        resources,
        fallbackLng: 'es',
        supportedLngs: ['es', 'en'],
        defaultNS: 'common',
        interpolation: { escapeValue: false },
        detection: {
          order: ['querystring', 'cookie', 'localStorage', 'navigator'],
          caches: ['cookie', 'localStorage']
        }
      });
  }
  return i18n;
}
