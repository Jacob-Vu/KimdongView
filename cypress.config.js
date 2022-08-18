const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://c1kimdong.badinh.edu.vn',
    projectId: "ywae2i",
    video: false  
  }
})