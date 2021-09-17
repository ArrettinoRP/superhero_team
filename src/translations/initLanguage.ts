import i18n, {LanguageDetectorModule} from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import en from './en';
import es from './es';

const LANGUAGES = {
  en,
  es,
};

const LANG_CODES = Object.keys(LANGUAGES);

const LANGUAGE_DETECTOR: LanguageDetectorModule = {
  type: 'languageDetector',
  detect: () => {
    const findBestAvailableLanguage =
      RNLocalize.findBestAvailableLanguage(LANG_CODES);

    const languages = findBestAvailableLanguage?.languageTag || 'en';
    return languages;
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

export const initLanguage = () => {
  i18n
    .use(LANGUAGE_DETECTOR)
    .use(initReactI18next)
    .init({
      resources: LANGUAGES,
      react: {
        useSuspense: false,
      },
      interpolation: {
        escapeValue: false,
      },
    });
};
