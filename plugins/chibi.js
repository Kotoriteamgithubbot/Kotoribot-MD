const loadplugin = async(client, m) => {
    client.sendMessage(m.chat, { text: 'chibi' })
}

module.exports = { loadplugin }
