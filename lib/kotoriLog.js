/**
   * Create By Natia Shalsabilla.
   * Contact Me on mailto://natiashalsabilla@gmail.com
*/

exports.sendLog = (from, conn, text = '', options = []) => {
    return conn.sendMessage(from, { text: String(text) }, ...options)
}
