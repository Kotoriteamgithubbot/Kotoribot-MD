const fs = require("fs")
const chalk = require("chalk")

// Other
global.logo = fs.readFileSync('./src/image/tree.jpg') //Logo

global.owner = [{ id: '6283170659182', email: 'natiashalsabilla@gmail.com', web: 'https://github.com/stafbotz' }, { id: '6289616061778', email: 'natasya@mail.com', web: 'example.com' }, { id: '6281649357107', email: 'desty@mail.com', web: 'example.com' }, { id: '6289653909054', email: 'anubiskun.xyz@gmail.com', web: 'https://github.com/anubiskun' }, { id: '62895347198105', email: 'arifzyn@mail.com', web: 'example.com' }, { id: '62882016042489', email: 'nadia@gmail.com', web: 'example.com' }]

global.monospace = '```' //Monospace

global.groupTeam = ['120363042653241388@g.us'] //Add your team group id

global.packname = "Sticker" //Packname Sticker

global.author = "☘️ Staf LightGreen" //Author Sticker

global.sessionName = "session.json" //Name File Session

global.namebot = "☘️ Staf LightGreen" //Optional

global.wm = "© CloudbyPsn" //Footer

global.sign = "*[WABOTJS]*" //Sign

global.notify = require("./lib/notify.js") //Send Message

global.mess = {
    logout: 'Kamu harus login terlebih dahulu! Ketik .login',	
    missing: 'Fitur ini sudah tidak tersedia!',
    later: '_Mohon tunggu sebentar!_',
    login: 'Kamu sudah login sebelumnya! Untuk keluar ketik .logout',
    register: 'Username sudah pernah terdaftar, coba username lain!',
    success: 'Success',
    privacy: 'Ini Privasimu! Harap gunakan fitur ini di Private Chat.',
    failed: 'Error!',
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
