/**
© Aine Team
Under License CloudbyPsn
*/

//Module
const fs = require('fs')

async function plugin(client, m, command, q = '') {
    if (fs.existsSync(`./plugins/${command}.js`)) {
       const fileplugin = "../../plugins/" + command + ".js"
       delete require.cache[require.resolve(fileplugin)]
       require(fileplugin).loadplugin(client, m, command, q)    
    }
}

module.exports = { plugin }
