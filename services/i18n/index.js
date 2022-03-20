import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enCommon from './translations/en/common.json';
import enError from './translations/en/error.json';
import enValidation from './translations/en/validation.json';
import frCommon from './translations/fr/common.json';
import frError from './translations/fr/error.json';
import frValidation from './translations/fr/validation.json';

export const initTranslation = () => {
  return (
    i18n
      // detect user language
      // learn more: https://github.com/i18next/i18next-browser-languageDetector
      // pass the i18n instance to react-i18next.
      .use(initReactI18next)
      // init i18next
      // for all options read:
      // https://www.i18next.com/overview/configuration-options
      .init({
        debug: true,
        fallbackLng: 'fr',
        interpolation: {
          escapeValue: false, // not needed for react as it escapes by default
          // To avoid translating before init i18n and crash app. According to
          // offcial documentation: if your interpolation variables are user
          // provided or loaded from an external source, we strongly suggest
          // to set this option to true
          skipOnVariables: true,
        },
        resources: {
          en: {
            common: enCommon,
            validation: enValidation,
            error: enError,
          },
          fr: {
            common: frCommon,
            validation: frValidation,
            error: frError,
          },
        },
      })
  );
};

export default i18n;
