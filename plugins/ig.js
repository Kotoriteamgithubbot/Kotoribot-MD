const hx = require('hxz-api')

let handler = async (client, m, text) => {
  if (!(text)) throw `Masukkan link Instagram yang ingin didownload!`
  hx.igdl(args).then(async (r) => {
  for (let i = 0; i < r.medias.length; i++) {
    client.sendFile(m.chat, r.medias[i].url, '', `*${wm}*`, m)
    }
  })
}

handler.group = true

module.exports = { handler }
