/**
© Create by Aine Team
Under license CloudbyPsn 
*/

let handler = async(m, { client, text }) => {
    if (!text) return client.sendMessage(m.chat, { text: 'Masukkan path plugin!' }, { quoted: m })
    let path = "./plugins/" + text + ".js"
    let readdir = require('fs').readdirSync('./plugins')
    let arr = readdir.map(v => v.replace('.js', ''))
    if (!require('fs').existsSync(path)) return m.reply(`'${text}' tidak ditemukan!\n\n${arr.map(v => ' ' + v).join('\n')}`)
    let code = await require('fs').readFileSync(path, 'utf-8')
    m.reply(code)
}

handler.owner = true
handler.command = /^(gp|getplugin)$/i

module.exports = handler
