/**
© Aine Team
Under License CloudbyPsn
*/

//Module
const fs = require('fs')

async function plugin(client, m, command, q = '') {
    if (fs.existsSync(`./plugins/${command}.js`)) {
       const fileplugin = "../../plugins/" + command + ".js"
       require(fileplugin).loadplugin(client, m, command, q)     
    }
}

module.exports = { plugin }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
