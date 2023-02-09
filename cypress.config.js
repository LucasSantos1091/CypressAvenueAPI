const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://api.openweathermap.org/data/2.5',
 
    },
    fixturesFolder: false,
    video: false,
    
})
