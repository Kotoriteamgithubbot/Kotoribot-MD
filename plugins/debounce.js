/**
© Created by Natia Shalsabilla
Under license CloudbyPsn 
*/

//Module
const { exec }  = require('child_process');

let handler = async(client, m) => {
    m.reply('Sedang Mereset Bot...\nMohon tunggu sekitar 1 menit')
    await exec('npm restart')
    m.reply('Selesai Mereset Bot...')
}

handler.command =  /^debounce$/i
handler.owner = true

module.exports = handler
