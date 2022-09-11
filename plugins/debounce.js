/**
© Created by Natia Shalsabilla
Under license CloudbyPsn 
*/

//Module
const { exec }  = require('child_process');

let handler = async(m, { client }) => {
    await m.reply('Sedang Mereset Bot...\nMohon tunggu sekitar 1 menit')
    exec('npm restart')
    await m.reply('Selesai Mereset Bot...')
}

handler.command =  /^debounce$/i
handler.owner = true

module.exports = handler
