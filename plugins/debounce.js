/**
© Created by Aine Team
Under license CloudbyPsn 
*/

//Module
const { spawn }  = require('child_process');

let handler = async(client, m) => {
    if (!process.send) m.reply('Dont: node main.js\nDo: node start.js')
    await m.reply('Sedang Mereset Bot...\nMohon tunggu sekitar 1 menit')
    process.send('reset')
    m.reply('Selesai Mereset Bot...')
}

handler.command =  /debounce/i
handler.owner = true

module.exports = handler
