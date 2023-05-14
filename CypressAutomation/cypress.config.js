const { defineConfig } = require("cypress");
const getspecFiles = require("cypress-gitlab-parallel-runner")

module.exports = defineConfig({
  "video": false,
  "viewportHeight": 1000,
  "viewportWidth": 1280,
  "projectId": '32z714',
  e2e: {
    
    setupNodeEvents(on, config) {
      getspecFiles("./cypress/e2e", true)
      // implement node event listeners here
    },
  },
});
