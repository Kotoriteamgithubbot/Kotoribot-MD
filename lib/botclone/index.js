const { 
    default: makeWASocket, 
    DisconnectReason, 
    fetchLatestBaileysVersion, 
    generateForwardMessageContent,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    generateMessageID, 
    downloadContentFromMessage,
    makeInMemoryStore,
    jidDecode, 
    proto 
} = require('@adiwajshing/baileys')
const pino = require('pino')
const qrcodes = require('qrcode');
const fs = require('fs')
const chalk = require('chalk')
const base64ToImage = require('base64-to-image');

const client = makeWASocket()

client.ev.on('connection.update', async (update) => {
     const { connection, lastDisconnect } = update	    
     if (connection === 'close' || update.qr === undefined) return
     url = await qrcodes.toDataURL(update.qr)
     buffer = await Buffer.from(url.split('data:image/png;base64,')[1], 'base64')
     fs.writeFileSync('./session.jpg', buffer)
     console.log('added clonebot')
})
    

//Menghapus Cache File ketika Diubah
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})