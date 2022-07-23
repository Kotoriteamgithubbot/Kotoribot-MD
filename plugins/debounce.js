/**
© Created by Aine Team
Under license CloudbyPsn 
*/

//Module
const { spawn }  = require('child_process');

let handler = async(client, m) => {
    await m.reply('Sedang Mereset Bot...\nMohon tunggu sekitar 1 menit')
    process.send('reset')
}

handler.command = /^(debounce|restartprocess)$/i
handler.owner = true

module.exports = { handler }
