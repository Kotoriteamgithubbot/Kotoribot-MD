/**
© Create by Aine Team
Under license CloudbyPsn 
*/

let handler = async(client, m, { text }) => {
    if (!text) return client.sendMessage(m.chat, { text: 'Masukkan path plugin!' }, { quoted: m })
    let path = "./plugins/" + text
    let code = await require('fs').readFileSync(path, 'utf-8')
    m.reply(code)
}

handler.owner = true

module.exports = { handler }
