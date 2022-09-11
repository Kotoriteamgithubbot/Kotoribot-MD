/**
© Created by Kotori Team
Under license CloudbyPsn 
*/

//Module
let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)

let handler = async(m, { client }) => {
  m.reply(mess.wait)
  let o
  try {
      o = await exec('git pull')
  } catch (e) {
      o = e
  } finally {
      let { stdout, stderr } = o
      if (stdout.trim()) m.reply(stdout)
      if (stderr.trim()) m.reply(stderr)
  }
}

handler.command =  /^act$/i
handler.owner = true

module.exports = handler
