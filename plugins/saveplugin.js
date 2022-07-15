/**
© Create by Aine Team
Under license CloudbyPsn 
*/

const loadplugin = async(client, m, command, q) => {
    if (!q) return client.sendMessage(m.chat, { text: 'Masukkan path plugin!' }, { quoted: m })
    if (!m.quoted) return client.sendMessage(m.chat, { text: 'Reply code!' }, { quoted: m })
    if (!m.quoted.text) return client.sendMessage(m.chat, { text: 'Reply code!' }, { quoted: m })
    let path = q
    await require('fs').writeFileSync(path, m.quoted.text)
    m.reply(`Saved ${path} to file!`)
}

module.exports = { loadplugin }
