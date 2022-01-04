module.exports = {
  input: [
    './*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/domains/**/*.{js,jsx}',
    './src/hooks/**/*.{js,jsx}',
    './src/services/**/*.{js,jsx}',
  ],
  output: './',
  options: {
    debug: false,
    removeUnusedKeys: true,
    sort: true,
    func: {
      list: ['i18next.t', 'i18n.t', 't'],
      extensions: ['.js', '.jsx'],
    },
    lngs: ['en', 'fr'],
    ns: ['common', 'validation', 'error', 'glossary', 'log'],
    defaultLng: 'en',
    defaultNs: 'common',
    defaultValue: '__STRING_NOT_TRANSLATED__',
    resource: {
      loadPath: './services/i18n/translations/{{lng}}/{{ns}}.json',
      savePath: './services/i18n/translations/{{lng}}/{{ns}}.json',
      jsonIndent: 2,
      lineEnding: '\n',
    },
    nsSeparator: ':',
    keySeparator: false,
    interpolation: {
      prefix: '{{',
      suffix: '}}',
    },
  },
};
