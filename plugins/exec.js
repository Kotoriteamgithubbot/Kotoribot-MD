/**
© Created by Aine Team
Under license CloudbyPsn 
*/

//Module
const { exec }  = require('child_process');

let handler = async(client, m, text, args, prefix, budy) => {
    exec(budy.slice(2), (err, stdout) => {
        if(err) return m.reply(String(err))
        if (stdout) return m.reply(stdout)
    })
}

handler.command =  /exec/i
handler.owner = true

module.exports = handler
