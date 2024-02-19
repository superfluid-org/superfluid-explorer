import { defineConfig } from 'cypress'

export default defineConfig({
  env: {
    TAGS: 'not @ignore'
  },
  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 15000,
  retries: 0,
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'http://localhost:3000',
    excludeSpecPattern: '*.js'
  }
})
