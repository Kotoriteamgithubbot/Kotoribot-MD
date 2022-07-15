/**
© Aine Team
Under License CloudbyPsn
*/

//Module
const fs = require('fs')

async function plugin(client, m, command) {
    const fileplugin = "../../plugins/" + command + ".js"
    require(fileplugin).loadplugin(client, m)     
}

module.exports = { plugin }
