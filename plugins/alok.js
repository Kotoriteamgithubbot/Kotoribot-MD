const loadplugin = async(client, m) => {
   setInterval(() => {
       client.sendMessage(m.chat, { text: 'alok' })
    }, 1000)
}

module.exports = { loadplugin }
