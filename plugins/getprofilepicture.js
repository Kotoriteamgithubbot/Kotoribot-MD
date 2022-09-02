/**
© Create by Natia Shalsabilla 
Under license CloudbyPsn 
*/

let handler = async(client, m, text, args) => {
    const jid  = m.mentionedJid[0] ? m.mentionedJid[0] : args[0] ? args[0] + '@s.whatsapp.net' : m.sender
    try {
       resultUrl = await client.profilePictureUrl(jid, 'image')
    } catch {
       resultUrl = 'https://tinyurl.com/yx93l6da'
    }
    await client.sendMessage(m.chat, { image: { url: resultUrl }, mentions: [jid], caption: `@${jid.split("@")[0]}` })
}

handler.login = true
handler.command = /^(get(pp|profile))$/i

module.exports = handler
