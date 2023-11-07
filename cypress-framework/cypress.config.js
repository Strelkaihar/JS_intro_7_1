const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight:1080,
  viewportWidth: 1980,
  chromeWebSecurity: false,
  retries: 1,
  env: {
    SITE_URL: 'https://techglobal-training.com/frontend'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/integration/*.cy.{js,jsx,ts,tsx}',
  },
});
