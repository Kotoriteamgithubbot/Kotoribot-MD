//Module
const fs = require('fs-extra')

//Import 
fs.readdirSync('./src').forEach(function(file) {
  delete require.cache[require.resolve("./src/" + file)]
  require("./src/" + file)
})
