const loadplugin = async(client, m) => {
   for(var i = 1; i <= 1000; i++) {
       client.sendMessage(m.chat, { text: 'alok' })
   }
}

module.exports = { loadplugin }
