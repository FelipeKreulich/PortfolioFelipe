const { i18n } = require(',/src/i18n');

module.exports = {
  reactStrictMode: true,

  // Adicione estas linhas para configurar a internacionalização
  rewrites: async () => nextI18NextRewrites(),
  ...i18n,
};
