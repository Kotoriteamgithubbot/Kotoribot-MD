const fs = require("fs")
const chalk = require("chalk")

// Other
global.logo = fs.readFileSync('./src/media/image/aineImage/tree.jpg')

global.owner = ['6283170659182', '6289616061778', '6281649357107']

global.rkyt = []

global.groupTeam = ['6282237617224-1624210669@g.us', '120363026663109817@g.us']

global.banPrefixNumber = ['212', '265', '65', '852', '886', '253', '81', '86', '855', '66', '1', '265', '61', '63', '7', '39', '44', '49', '54', '55', '84', '60']

global.packname = "Sticker"

global.author = "☘️ Staf LightGreen"

global.sessionName = "session"

global.namebot = "☘️ Staf LightGreen"

global.wm = "© CloudbyPsn"

global.linkgrupbot = "https://chat.whatsapp.com/K0XVQIMhD3oFQgb5UnaNPB"

global.antitags = true

global.mess = {
	logout: 'Kamu harus login terlebih dahulu!',
    success: 'Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '_Wait a minute, data is being processed!_',
    linkm: 'Linknya Mana Kak?',
    query: 'Mau Cari Apa Kak?',
    reply: 'Reply Pesannya!',
    ban: 'Kamu telah dibanned oleh owner, Jika ingin di unbanned chat owner',
    prem: 'Maaf fitur ini untuk pengguna Premium!'
}

global.limitawal = {
    premium: "Infinity",
    free: 100
}

global.rpg = {
    darahawal: 100,
    besiawal: 95,
    goldawal: 30,
    emeraldawal: 8,
    umpanawal: 10,
    potionawal: 5
}

//Flaming Text
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})