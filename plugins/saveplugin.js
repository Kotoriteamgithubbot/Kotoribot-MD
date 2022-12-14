/**
© Create by Adesty
Under license CloudbyPsn 
*/

let handler = async(m, { client, text }) => {
    if (!text) return client.sendMessage(m.chat, { text: 'Masukkan path plugin!' }, { quoted: m })
    if (!m.quoted) return client.sendMessage(m.chat, { text: 'Reply code!' }, { quoted: m })
    if (!m.quoted.text) return client.sendMessage(m.chat, { text: 'Reply code!' }, { quoted: m })
    let path = "./plugins/" + text + ".js"
    await require('fs').writeFileSync(path, m.quoted.text)
    m.reply(`Saved ${path} to file!`)
}

handler.owner = true
handler.login = true
handler.command = /^(sp|saveplugin)$/i

module.exports = handler
