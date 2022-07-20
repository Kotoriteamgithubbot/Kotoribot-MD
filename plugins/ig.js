const hx = require('hxz-api')

let handler = async (client, m, text) => {
  if (!(args[0])) throw `Masukkan link Instagram yang ingin didownload!`
  hx.igdl(args[0]).then(async (r) => {
  for (let i = 0; i < r.medias.length; i++) {
    conn.sendFile(m.chat, r.medias[i].url, '', `*${wm}*`, m)
    }
  })
}

handler.group = true

module.exports = {handler}
