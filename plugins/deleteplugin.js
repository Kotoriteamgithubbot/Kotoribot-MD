/**
© Create by Aine Team
Under license CloudbyPsn 
*/

let handler = async(client, m, text) => {
    if (!text) return client.sendMessage(m.chat, { text: 'Masukkan path plugin!' }, { quoted: m })
    let path = "./plugins/" + text + ".js"
    await require('fs').unlinkSync(path)
    m.reply(`Delete ${path} file!`)
}

handler.owner = true

module.exports = { handler }
