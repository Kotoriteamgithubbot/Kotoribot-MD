/**
© Created by Aine Team
Under license CloudbyPsn 
*/

//Module
const { spawn }  = require('child_process');

const loadplugin = async(client, m, command) => {
    await m.reply('Sedang Mereset Bot...\nMohon tunggu sekitar 1 menit')
    process.send('reset')
}

module.exports = { loadplugin }
