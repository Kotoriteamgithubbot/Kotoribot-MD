let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
let handler = async (m, { client, text }) => {
  m.reply('Executing...')
  let o
  try {
    o = await exec(text.trim())
  } catch (e) {
    o = e
  } finally {
    let { stdout, stderr } = o
    if (stdout.trim()) m.reply(stdout)
    if (stderr.trim()) m.reply(stderr)
  }
}

handler.command = /^exec$/i
handler.owner = true

module.exports = handler

