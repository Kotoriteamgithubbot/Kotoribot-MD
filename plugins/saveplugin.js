/**
© Create by Aine Team
Under license CloudbyPsn 
*/

const loadplugin = async(client, m, command, q) => {
    if (!q) return client.sendMessage(m.chat, { text: 'Masukkan path plugin!' }, { quoted: m })
    if (!m.quoted) return client.sendMessage(m.chat, { text: 'Reply code!' }, { quoted: m })
    if (!m.quoted.text) return client.sendMessage(m.chat, { text: 'Reply code!' }, { quoted: m })
    let code = `${m.quoted.text} 

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})`
    let path = q
    await require('fs').writeFileSync(path, code)
    m.reply(`Saved ${path} to file!`)
}

module.exports = { loadplugin }
