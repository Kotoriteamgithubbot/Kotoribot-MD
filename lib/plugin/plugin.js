/**
© Aine Team
Under License CloudbyPsn
*/

//Module
const fs = require('fs')

const plugin = async(client, m, command) => {
    let fileplugin = "../../plugins/" + command + ".js"
    return require(fileplugin).loadplugin(client, m)     
}

module.exports = { plugin }
