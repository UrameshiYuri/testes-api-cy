const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'mochawesome',

  reporterOptions: {
    reportDir: 'mochawesome-report',
    overwrite: false,
    reportFilename: "index.html",
    html: true,
    json: false
  },

e2e: {
  baseUrl: 'http://localhost:3000',
  supportFile: false,

  setupNodeEvents(on, config) {
    return config
  }
}
})