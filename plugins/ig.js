const hx = require('hxz-api')

let handler = async (client, m, text) => {
  if (!(text)) throw `Masukkan link Instagram yang ingin didownload!`
  hx.igdl(text).then(async (r) => {
  for (let i = 0; i < r.medias.length; i++) {
    client.sendFile(m.chat, r.medias[i].url, '', `*${wm}*`, m)
    }
  })
}

handler.group = true
handler.command = ['ig', 'instagram', 'igdl']

module.exports = { handler }
