/**
© Created by Kotori Team
Under license CloudbyPsn 
*/

//Module
let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)

//Function
const act = (client) => {
  client.sendMessage('Checking for updates from github...')
  let o
  try {
      o = await exec('git pull')
  } catch (e) {
      o = e
  } finally {
      let { stdout, stderr } = o
      if (stdout.trim()) client.sendMessage(stdout)
      if (stderr.trim()) client.sendMessage(stderr)
  }
}

module.exports = act