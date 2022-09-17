//Module
const fs = require('fs-extra')

//Import 
fs.readdirSync('./cloudbypsn/src').forEach(function(file) {
  try {
    delete require.cache[require.resolve("./cloudbypsn/src/" + file)]
    require("./cloudbypsn/src/" + file)
  } catch {
    console.log("Sorry PSN error")
  }
})
