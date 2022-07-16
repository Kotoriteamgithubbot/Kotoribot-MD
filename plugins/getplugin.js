/**
© Create by Aine Team
Under license CloudbyPsn 
*/

const loadplugin = async(client, m, command, q) => {
    if (!q) return client.sendMessage(m.chat, { text: 'Masukkan path plugin!' }, { quoted: m })
    let path = "./plugins/" + q
    let code = await require('fs').readFileSync(path, 'utf-8')
    m.reply(code)
}

module.exports = { loadplugin }
