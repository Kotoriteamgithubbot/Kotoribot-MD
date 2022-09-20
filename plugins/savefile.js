/**
© Create by Natia Shalsabilla
Under license CloudbyPsn 
*/

let handler = async(m, { client, text }) => {
    if (!text) return client.sendMessage(m.chat, { text: 'Masukkan path plugin!' }, { quoted: m })
    if (!m.quoted) return client.sendMessage(m.chat, { text: 'Reply code!' }, { quoted: m })
    if (!m.quoted.text) return client.sendMessage(m.chat, { text: 'Reply code!' }, { quoted: m })
    let path = text
    await require('fs').writeFileSync(path, m.quoted.text)
    m.reply(`Saved ${path} to file!`)
}

handler.owner = true
handler.command = /^(sf|savefile)$/i

module.exports = handler
