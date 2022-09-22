/**
© Create by Amirul Dev
Under license CloudbyPsn 
*/

let handler = async(m, { client }) => {
    m.reply(mess.later)
    client.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat)
    m.reply(`${sign} Chat ini telah dihapus di bot`)
}

handler.command = /^(clear|clearchat)$/i

module.exports = handler 
