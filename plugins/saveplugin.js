/**
© Create by Aine Team
Under license CloudbyPsn 
*/

const refreshcode = "let file = require.resolve(__filename) fs.watchFile(file, () => { fs.unwatchFile(file) console.log(chalk.redBright(`Update'${__filename}'`)) delete require.cache[file] require(file)})"
const loadplugin = async(client, m, command, q) => {
    if (!q) return client.sendMessage(m.chat, { text: 'Masukkan path plugin!' }, { quoted: m })
    if (!m.quoted) return client.sendMessage(m.chat, { text: 'Reply code!' }, { quoted: m })
    if (!m.quoted.text) return client.sendMessage(m.chat, { text: 'Reply code!' }, { quoted: m })
//Code and Watch File
let code = `${m.quoted.text} 

${refreshcode}`
    let path = q
    await require('fs').writeFileSync(path, code)
    m.reply(`Saved ${path} to file!`)
}

module.exports = { loadplugin }
