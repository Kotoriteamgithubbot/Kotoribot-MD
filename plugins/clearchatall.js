/**
© Create by Natia Shalsabilla
Under license CloudbyPsn 
*/

let handler = async(m, { client, store }) => {
	m.reply(mess.later)
	try {
        let chats = store.chats.all().map(v => v.id).filter(v => v != 'status@broadcast')
        for (let id of chats) {
           client.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }]}, id)
           await client.delay(1500)
           client.sendMessage(id, { text: `${sign} Berhasil membersihkan semua chat` })
        }
     } catch {
        m.reply(`${sign} Gagal membersihkan semua chat`)
     }
}

handler.command = /^(clearall|clearchatall)$/i
handler.owner = true

module.exports = handler 
