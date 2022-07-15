/**
© Aine Team
Under License CloudbyPsn
*/

//Module
const fs = require('fs')

//Database
const dbplugin = JSON.parse(fs.readFileSync('./lib/plugin/data.json'));

const plugin = async(client, m, command) => {
   Object.keys(dbplugin).forEach((i) => {
        if (dbplugin[i].command === command) {
            let fileplugin = ".../plugins/" + dbplugin[i].plugin + ".js"
            return require(fileplugin)
        }
    })
}

module.exports = { plugin }
