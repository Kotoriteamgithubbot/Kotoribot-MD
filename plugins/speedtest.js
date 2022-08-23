let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
let handler = async (client, m) => {
    m.reply('Testing Speed...');
    let o;
    try {
        o = await exec('python speed.py');
    } catch (e) {
        o = e;
    } finally {
        let { stdout, stderr } = o;
        if (stdout.trim()) m.reply(stdout);
        if (stderr.trim()) m.reply(stderr);
    }
}
handler.login = true
handler.command = /^speedtest$/i

module.exports = handler
