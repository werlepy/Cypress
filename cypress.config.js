const { defineConfig } = require("cypress");

const createBundler = require ("@bahmutov/cypress-esbuild-preprocessor")
const { addCucumberPreprocessorPlugin } = require ("@badeball/cypress-cucumber-preprocessor")
const { createEsbuildPlugin } = require ("@badeball/cypress-cucumber-preprocessor/esbuild")

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://automationpratice.com.br/',
    specPattern: "cypress/e2e/feature/*.feature",
    
    setupNodeEvents(on, config) {
      addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      
      return config;
    },
  },
});
