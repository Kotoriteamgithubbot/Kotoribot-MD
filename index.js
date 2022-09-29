/**
- Create By Kotoriteam
- Powered by CloudbyPsn
- Owned by Kotorirpg-MD
 */
process.on('uncaughtException', console.error) //Safe Log Error
require('./config') //File Config
const { 
     BufferJSON, 
     WA_DEFAULT_EPHEMERAL,
     generateWAMessageFromContent, 
     proto,  
     generateWAMessageContent, 
     generateWAMessage,
     prepareWAMessageMedia,
     areJidsSameUser, 
     getContentType, 
     WAFlag 
} = require('baileys');
const fs = require('fs-extra');
const util = require('util');
const chalk = require('chalk');
const { exec, spawn, execSync } = require('child_process');
const axios = require('axios');
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');
const path = require('path');
const os = require('os');
const osu = require('node-os-utils');
const cron = require('node-cron');
const { TiktokDownloader } = require('./lib/tiktokdl.js');
const si = require('systeminformation');
const moment = require('moment-timezone');
const { JSDOM } = require('jsdom');
const speed = require('performance-now');
const hx = require('hxz-api');
const hxz = require('./lib/hxz-api.js');
const bdr = require('rumus-bdr');
const yogipw = require('tod-api');
const { color, bgcolor } = require('./lib/color.js');
const thiccysapi = require('textmaker-thiccy');
const toHur = require('@develoka/angka-terbilang-js');
const mathjs = require('mathjs');
const { performance } = require('perf_hooks');
const { Primbon } = require('scrape-primbon');
const { EmojiAPI } = require('emoji-api');
const imgbbUploader = require('imgbb-uploader');
const primbon = new Primbon();
const { sizeFormatter } = require('human-readable');
const emoji = new EmojiAPI();
const nodemailer = require('nodemailer');
const Hogan = require('hogan.js');
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, FileSize, generateProfilePicture } = require('./lib/function.js');
const { addBalance, kurangBalance, getBalance } = require('./lib/balance.js');
const didyoumean = require('didyoumean');
const similarity = require('similarity');
const { aiovideodl } = require('./lib/scraper.js');
const cheerio = require ('cheerio');
const textpro = require('./lib/textpro.js');
const { detikNews } = require('./lib/detik.js')
const { wikiSearch } = require('./lib/wiki.js');
const { Gempa } = require('./lib/gempa.js');
const ms = require('ms');
const brainly = require('brainly-scraper');
const fetch = require('node-fetch');
const { covid } = require('./lib/covid.js'); 
const { jadwaltv }= require('./lib/jadwaltv.js');
const { yta, ytv, searchResult } = require('./lib/ytdl.js');
const { ssweb } = require('./lib/anubis.js');
const yts = require('yt-search')
const { UploadFileUgu, webp2mp4File, TelegraPh, floNime } = require('./lib/uploader.js');
const { toAudio, toPTT, toVideo, ffmpeg } = require('./lib/converter.js');
const { eBinary, dBinary } = require('./lib/binary.js');
const { genMath, modes } = require('./lib/math.js');
 
// Database Rpg
const _buruan = JSON.parse(fs.readFileSync('./database/game/bounty.json'));
const _health = JSON.parse(fs.readFileSync('./database/game/health.json'));

//Database Game
const tebaklagu = db.data.game.tebaklagu = []
const _family100 = db.data.game.family100 = []
const kuismath = db.data.game.math = []
const tebakgambar = db.data.game.tebakgambar = []
const tebakkata = db.data.game.tebakkata = []
const caklontong = db.data.game.lontong = []
const caklontong_desk = db.data.game.lontong_desk = []
const tebakkalimat = db.data.game.kalimat = []
const tebaklirik = db.data.game.lirik = []
const tebaktebakan = db.data.game.tebakan = []
const vote = db.data.others.vote = []
const _cmd = db.data.others.typecmd = []

//Database
const balance = JSON.parse(fs.readFileSync('./database/balance.json'));
const _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/level.json'))

//Waktu dan Tanggal 
let d = new Date(new Date + 3600000)
let locale = 'id'
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const regards = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const wib = moment.tz('Asia/Jakarta').format("HH:mm:ss")
const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
})
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
    
//Baileys
module.exports = client = async (client, m, chatUpdate, store) => {
try {
//Cmd
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : ""
const isCmd = body.startsWith(prefix)
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const text = args.join(" ")
const pushname = m.pushName || ''
const botNumber = await client.decodeJid(client.user.id);
const itsMe = m.sender == botNumber ? true : false
const isCreator = [{ id: botNumber }, ...global.owner].map(v => v.id.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) //Fixed
const accountUsers = typeof global.db.data.users[m.sender] === 'object' ? global.db.data.users[m.sender].account !== "guest" ? global.db.data.users[m.sender].account : "notlogin" : "notlogin"
const isLogin = accountUsers !== "notlogin" ? (typeof global.db.data.account[accountUsers] === 'object' ? true : false) : false
const isPremium =  accountUsers !== "notlogin" ? (global.db.data.account[accountUsers].premium ? true : isCreator ? true : false) : false
const from = m.chat
const quoted = ((m.quoted || m).mtype == 'buttonsMessage') ? m.quoted[Object.keys(m.quoted)[1]] : ((m.quoted || m).mtype == 'templateMessage') ? m.quoted.hydratedTemplate[Object.keys(m.quoted.hydratedTemplate)[1]] : ((m.quoted || m).mtype == 'product') ? m.quoted[Object.keys(m.quoted)[0]] : m.quoted ? m.quoted : m
const qmsg = (quoted.msg || quoted)
const mime = qmsg.mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Group
const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
 
// Other
const isLeveling = m.isGroup ? _leveling.includes(from) : false

// Quoted
const content = JSON.stringify(m.message)
const q = args.join(' ')
const isImage = (m.type === 'imageMessage')
const isVideo = (m.type === 'videoMessage')
const isMedias = (m.mtype === 'imageMessage' || m.mtype === 'videoMessage')
const isQuotedImage = m.mtype === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = m.mtype === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedLoca = m.mtype === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedContact = m.mtype === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocs = m.mtype === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedTeks = m.mtype === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = m.mtype === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedProd = m.mtype === 'extendedTextMessage' && content.includes('productMessage')
const isQuotedReply = m.mtype === 'extendedTextMessage' && content.includes('Message')

//Database Formatter
try {
        let isNumber = x => typeof x === 'number' && !isNaN(x)
        let user = global.db.data.users[m.sender]
        if (typeof user !== 'object') global.db.data.users[m.sender] = {}
        if (user) {
            if (!isNumber(user.afkTime)) user.afkTime = -1
            if (!('afkReason' in user)) user.afkReason = ''
            if (!('account' in user)) user.account = "guest"
        } else global.db.data.users[m.sender] = {
           afkTime: -1,
           afkReason: '',
           account: "guest"
        }
        let chats = global.db.data.chats[m.chat]
        if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
        if (chats) {
           if (!('mute' in chats)) chats.mute = false
           if (!('autosticker' in chats)) chats.autosticker = false
           if (!('antilink' in chats)) chats.antilink = false
           if (!('changelog' in chats)) chats.changelog = true
        } else global.db.data.chats[m.chat] = {
          mute: false,
          antilink: false
        }
        let bot = global.db.data.bot
        if (typeof bot !== 'object') global.db.data.bot = {}
        if (!isNumber(bot.totalhit)) bot.totalhit = 0
        if (!('mail' in bot)) bot.mail = "cloudbypsn@gmail.com"
        if (!('passmail' in bot)) bot.passmail = "sgxqlnnoulgzrphv"

        let account = isLogin ? global.db.data.account[accountUsers] : false
        let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
        if (account  && typeof account === 'object') {
           if (!('banned' in account)) account.banned = false
           if (!('neybot' in account)) account.neybot = 0
           if (!('premium' in account)) account.premium = isCreator ? true : isPremium
           if (!('limit' in account)) account.limit = limitUser
           if (!('cloud' in account)) account.cloud = "notcreated"
           if (!('expiredbanned' in account)) account.expiredbanned = "notcreated"
           if (!('expiredpremium' in account)) account.expiredpremium = "notcreated"
        }
} catch (err) {
   console.error(err)
}

// Auto Group sticker
if (global.db.data.chats[m.chat].autosticker) {
    if (/image/.test(mime) && !/webp/.test(mime)) {
        let mediac = await client.downloadMediaMessage(qmsg)
        await client.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
     } else if (/video/.test(mime)) {
        if (qmsg.seconds > 11) return
        let mediac = await client.downloadMediaMessage(qmsg)
        await client.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
     }
}

//Buat Angka Acak
function randomNomor(angka) {
     return Math.floor(Math.random() * angka) + 1
}
            
//Menampilkan Log Pesan dan Menambah Game Money
if (m.message) {
   addBalance(m.sender, randomNomor(574), balance)
   console.log('\x1b[1;34m~\x1b[1;37m>', '[\x1b[1;33mCMD\x1b[1;37m]', time, color(`${prefix + command} [${args.length}]`, 'cyan'), 'from', color(m.pushName), 'in', color(groupName, 'orange'))
}

// Leveling 
const getLevelingXp = (userId) => {
     let position = false
     Object.keys(_level).forEach((i) => {
           if (_level[i].jid === userId) {
               position = i
           }
      })
      if (position !== false) {
          return _level[position].xp
      }
}

const getLevelingLevel = (userId) => {
     let position = false
     Object.keys(_level).forEach((i) => {
          if (_level[i].jid === userId) {
              position = i
          }
      })
      if (position !== false) {
          return _level[position].level
      }
}

const getLevelingId = (userId) => {
     let position = false
     Object.keys(_level).forEach((i) => {
          if (_level[i].jid === userId) {
              position = i
          }
      })
      if (position !== false) {
          return _level[position].jid
      }
}

const addLevelingXp = (userId, amount) => {
     let position = false
     Object.keys(_level).forEach((i) => {
           if (_level[i].jid === userId) {
               position = i
            }
      })
      if (position !== false) {
           _level[position].xp += amount
           fs.writeFileSync('./database/level.json', JSON.stringify(_level))
      }
}

const addLevelingLevel = (userId, amount) => {
     let position = false
     Object.keys(_level).forEach((i) => {
          if (_level[i].jid === userId) {
              position = i
          }
      })
      if (position !== false) {
          _level[position].level += amount
          fs.writeFileSync('./database/level.json', JSON.stringify(_level))
      }
}

const addLevelingId = (userId) => {
     const obj = {jid: userId, xp: 1, level: 1}
      _level.push(obj)
     fs.writeFileSync('./database/level.json', JSON.stringify(_level))
}

//Mendapatkan Rank User Saat Ini
const getUserRank = (userId) => {
     let position = null
     let found = false
     _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
     Object.keys(_level).forEach((i) => {
          if (_level[i].id === userId) {
              position = i
              found = true
          }
      })
     if (found === false && position === null) {
         const obj = { id: userId, xp: 0, level: 1 }
         _level.push(obj)
         fs.writeFileSync('./database/level.json', JSON.stringify(_level))
         return 99
      } else {
         return position + 1
     }
}

const xpGain = new Set()

const isGained = (userId) => {
    return !!xpGain.has(userId)
}

const addCooldown = (userId) => {
    xpGain.add(userId)
    setTimeout(() => {
        return xpGain.delete(userId)
    }, 60000) // Each minute
}

//Rank
var levelRole = getLevelingLevel(m.sender)
var role = 'Copper V'
if (levelRole <= 5) {
    role = 'Copper IV'
} else if (levelRole <= 10) {
    role = 'Copper III'
} else if (levelRole <= 15) {
    role = 'Copper II'
} else if (levelRole <= 20) {
    role = 'Copper I'
} else if (levelRole <= 25) {
    role = 'Silver V'
} else if (levelRole <= 30) {
    role = 'Silver IV'
} else if (levelRole <= 35) {
    role = 'Silver III'
} else if (levelRole <= 40) {
    role = 'Silver II'
} else if (levelRole <= 45) {
    role = 'Silver I'
} else if (levelRole <= 50) {
    role = 'Gold V'
} else if (levelRole <= 55) {
    role = 'Gold IV'
} else if (levelRole <= 60) {
    role = 'Gold III'
} else if (levelRole <= 65) {
    role = 'Gold II'
} else if (levelRole <= 70) {
    role = 'Gold I'
} else if (levelRole <= 75) {
    role = 'Platinum V'
} else if (levelRole <= 80) {
    role = 'Platinum IV'
} else if (levelRole <= 85) {
    role = 'Platinum III'
} else if (levelRole <= 90) {
    role = 'Platinum II'
} else if (levelRole <= 95) {
    role = 'Platinum I'
} else if (levelRole < 100) {
    role = 'Exterminator'
}

var levelRoles = getLevelingLevel(m.sender)
var roles = 'Cop V'
if (levelRoles <= 5) {
    roles = 'Cop IV'
} else if (levelRoles <= 10) {
    roles = 'Cop III'
} else if (levelRoles <= 15) {
    roles = 'Cop II'
} else if (levelRoles <= 20) {
    roles = 'Cop I'
} else if (levelRoles <= 25) {
    roles = 'Sil V'
} else if (levelRoles <= 30) {
    roles = 'Sil IV'
} else if (levelRoles <= 35) {
    roles = 'Sil III'
} else if (levelRoles <= 40) {
    roles = 'Sil II'
} else if (levelRoles <= 45) {
    roles = 'Sil I'
} else if (levelRoles <= 50) {
    roles = 'Gol V'
} else if (levelRoles <= 55) {
    roles = 'Gol IV'
} else if (levelRoles <= 60) {
    roles = 'Gol III'
} else if (levelRoles <= 65) {
    roles = 'Gol II'
} else if (levelRoles <= 70) {
    roles = 'Gol I'
} else if (levelRoles <= 75) {
    roles = 'Plat V'
} else if (levelRoles <= 80) {
    roles = 'Plat IV'
} else if (levelRoles <= 85) {
    roles = 'Plat III'
} else if (levelRoles <= 90) {
    roles = 'Plat II'
} else if (levelRoles <= 95) {
    roles = 'Plati I'
} else if (levelRoles < 100) {
    roles = 'Exter'
}

//Function Leveling
if (m.isGroup && isLeveling && isUser && client.public) {
    const currentLevel = getLevelingLevel(m.sender)
    const checkId = getLevelingId(m.sender)
    try {
         addCooldown(m.sender)
         if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
         const amountXp = Math.floor(Math.random() * 10) + 200
         const requiredXp = 200 * (Math.pow(2, currentLevel) - 1)
         const getLevel = getLevelingLevel(m.sender)
         addLevelingXp(m.sender, amountXp)
         if (requiredXp <= getLevelingXp(m.sender)) {
             addLevelingLevel(m.sender, 1)
             teks = `*──「 LEVEL UP 」──*\n\n❑ *Name*:  @${m.sender.split("@")[0]}\n❑ *XP*: ${getLevelingXp(m.sender)}\n❑ *Level*: ${getLevel} -> ${getLevelingLevel(m.sender)}\n❑ *Role*: ${role} \n\nCongrats!! 🎉`
             client.sendMessage(m.chat, {text: teks, mentions:[m.sender]}, {quoted:m})
         }
      } catch (err) {
          console.error(err)
      }
}

//Update mengubah Variabel Agar Pengkondisian Lebih Dimengerti
if (isCmd) {
    const currentLevel = getLevelingLevel(m.sender)
    const checkId = getLevelingId(m.sender)
    try {                                        
         if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
         const amountXp = Math.floor(Math.random() * 10) + 30
         const requiredXp = 30 * (Math.pow(2, currentLevel) - 1)
         const getLevel = getLevelingLevel(m.sender)
         addLevelingXp(m.sender, amountXp)
         if (requiredXp <= getLevelingXp(m.sender)) {
             addLevelingLevel(m.sender, 1)
         }             
     } catch (err) {
        console.error(err)
     }
}

//Function Hitung Mundur
async function hitungmundur(bulan, tanggal) { 
     let from = new Date(`${bulan} ${tanggal}, 2022 00:00:00`).getTime();
     let now = Date.now();
     let distance = from - now;
     let days = Math.floor(distance / (1000 * 60 * 60 * 24));
     let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     let seconds = Math.floor((distance % (1000 * 60)) / 1000);
     return days + "Hari " + hours + "Jam " + minutes + "Menit " + seconds + "Detik"
}

//Email sender
function sendMail(mailTo, mailSubject, mailHtml, mailText) {
   const transporter = nodemailer.createTransport({
      service : 'gmail',
      auth : { user : global.db.data.bot.mail, pass : global.db.data.bot.passmail }
   });

   return transporter.sendMail({
      from : global.db.data.bot.mail,
      to : mailTo,
      subject : mailSubject,
      html: Hogan.compile(fs.readFileSync('./src/html/' + mailHtml + '.html', 'utf8')).render({ quoted: mailText })
   });
}

//Pembuat Otp
function makeOtp(n) {
    for (var varMakeOtp_1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", 
"o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F",
 "G", "H", "I",  "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W",
 "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
 varMakeOtp_2 = n, varMakeOtp_3 = new Array, varMakeOtp_4 = 0; varMakeOtp_4 <= varMakeOtp_2 - 1; varMakeOtp_4++) {
        varMakeOtp_3[varMakeOtp_4] = varMakeOtp_1[parseInt(Math.random() * varMakeOtp_1.length)];
        varMakeOtp_3 = varMakeOtp_3;
        varMakeOtp_5 = varMakeOtp_3.join("")
    }
    return varMakeOtp_5
}

//Apakah limit User habis
const isLimit = (sender) => { 
    if (isCreator && isPremium) { return false }
    if (isLogin && global.db.data.account[accountUsers]) { 
	    let limits = global.db.data.account[accountUsers].limit
	    (limits <= 0 ) ? true : false
    }
}

//Mengurangi limit User
const reduceLimit = (sender, amount) => {
    if (isLogin && global.db.data.account[accountUsers]) {
       let currentLimit = global.db.data.account[accountUsers].limit
       if ( currentLimit == 'Infinity' ) {
          global.db.data.account[accountUsers].limit = 'Infinity'
       } else {
          global.db.data.account[accountUsers].limit = currentLimit - amount
       }
   }
} 

//Add List Command To JSON
const addTypeCmd = (command, counter) => {
    let location = false
    Object.keys(_cmd).forEach((i) => {
        if (_cmd[i].id === command) {
            location = i
        }
    })
    if (location !== false) {
        _cmd[location].total += counter
    } else {
        const datacmd = {
             id: command,
             total: counter
        }
        _cmd.push(datacmd)
    }
}

//Function Rpg
const { 
     addInventoriDarah, 
     cekDuluJoinAdaApaKagaDiJson, 
     addDarah, 
     kurangDarah, 
     getDarah 
}  = require('./lib/game/health.js')

const { 
    cekInventoryAdaAtauGak, 
    addInventori,  
    addBesi, 
    addEmas, 
    addEmerald,
    addUmpan,
    addPotion,
    kurangBesi, 
    kurangEmas, 
    kurangEmerald, 
    kurangUmpan,
    kurangPotion,
    getBesi, 
    getEmas, 
    getEmerald,
    getUmpan,
    getPotion
} = require('./lib/game/alat_tukar.js')

const { 
     cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
     addAyam, 
     addKelinci, 
     addDomba, 
     addSapi,
     addGajah,
     kurangIkan,
     kurangAyam, 
     kurangKelinci, 
     kurangDomba, 
     kurangSapi,
     kurangGajah,
     getIkan,
     getAyam, 
     getKelinci, 
     getDomba,
     getSapi,
     getGajah
} = require('./lib/game/bounty.js')

let DarahAwal =  global.rpg.darahawal
const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
const isCekDarah = getDarah(m.sender)
const isUmpan = getUmpan(m.sender)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isAyam = getAyam(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInventory = cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const ikan = ['🐟','🐠','🐡']   
   
//Flaming Text
let arrOptions = ['flaming', 'fluming', 'flarun', 'flasmurf']
let resultRandomFlam = arrOptions[Math.floor(Math.random() * arrOptions.length)]

//Format Angka
function formatNumber(number) {
   var number_string = number.toString(),
   remaining = number_string.length % 3,
   variabel = number_string.substr(0, remaining),
   thousand = number_string.substr(remaining).match(/\d{3}/g);
		
   if (thousand) {
     separator = remaining ? '.' : '';
	 variabel += separator + thousand.join('.');
   }
  return variabel
}

//Add Hit
if (isCmd) global.db.data.bot.totalhit++
 
//Afk
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
    let user = global.db.data.users[jid]
    if (!user) continue
    let afkTime = user.afkTime
    if (!afkTime || afkTime < 0) continue
    let reason = user.afkReason || ''
    m.reply(`Jangan tag dia!\nDia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}\nSelama ${clockString(new Date - afkTime)}`.trim())
}

if (db.data.users[m.sender].afkTime > -1) {
    let user = global.db.data.users[m.sender]
    m.reply(`Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}\nSelama ${clockString(new Date - user.afkTime)}`.trim())
    user.afkTime = -1
    user.afkReason = ''
}

//Detect Group Invite 
if (m.mtype === 'groupInviteMessage') {
    client.sendMessage(m.chat, { text: "Ketik .join <linkgroup> untuk bergabung ke group whatsapp anda" }, { quoted: m })
}

//Antilink Auto Kick
if (global.db.data.chats[m.chat].antilink) {
    const linkGroupAntilink = await client.groupInviteCode(from)
    if (budy.includes('https://chat.whatsapp.com/' + linkGroupAntilink)) {
        m.reply(`\`\`\`「 Detect Link 」\`\`\`\n\nAnda tidak akan dikick bot karena yang anda kirim adalah link group yg ada di group ini`)
    } else if (isUrl(m.text)) {
       const adminTextAntilink = `\`\`\`「 Detect Link 」\`\`\`\n\nAdmin telah mengirim link, admin dibebaskan untuk mengirim link apapun`
       if (isAdmins) return m.reply(adminTextAntilink)
       if (m.key.fromMe) return m.reply(adminTextAntilink)
       if (isCreator) return m.reply(adminTextAntilink)
       const targetKickAntilink = m.sender
       await client.groupParticipantsUpdate(m.chat, [targetKickAntilink], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
       client.sendMessage(from, {text:`\`\`\`「 Detect Link 」\`\`\`\n\n@${targetKickAntilink.split("@")[0]} Telah dikick karena mengirim link di group ini`, contextInfo:{mentionedJid:[targetKickAntilink]}}, {quoted:m})
    }
}

// Mute
if (db.data.chats[m.chat].mute && command != "unmute") {
   return
}

//Function Register
if (typeof global.db.data.users[m.sender].pendingRegister === 'object') {
   if (budy == global.db.data.users[m.sender].pendingRegister.otp) {
       //Auto Login
       const configPendingRegister = global.db.data.users[m.sender].pendingRegister
       global.db.data.account[configPendingRegister.username] = {
	  password: configPendingRegister.password,
	  email: configPendingRegister.email
       }
       global.db.data.users[m.sender].account = configPendingRegister.username
       m.reply('Pendaftaran berhasil! Sekarang kamu dapat menggunakan bot.');
       delete global.db.data.users[m.sender].pendingRegister
    } else if (command == `bataldaftar`) {
       delete global.db.data.users[m.sender].pendingRegister
       m.reply(mess.success)
    } else return await client.sendButtonText(m.chat, [{ buttonId: `.bataldaftar`, buttonText: { displayText: 'Batal' }, type: 1 }], 'Kode konfirmasi salah!\n\nJika kode sama dengan yang dikirim email namun tetap gagal, silahkan chat owner wa.me/6283170659182', wm, m)
}

//Function Check OTP Reset Password
if (global.db.data.users[m.sender].confirmPasswordReset) {
   if (budy == global.db.data.users[m.sender].confirmPasswordReset) {
      const confirmKey = await client.sendMessage(m.chat, { text: 'Balas pesan ini untuk mengganti password!' })
      global.db.data.users[m.sender].chatConfirmKey = confirmKey.key.id
      global.db.data.users[m.sender].pendingResetPassword = true
      delete global.db.data.users[m.sender].confirmPasswordReset
   } else if (command == `batalganti`) {
      delete global.db.data.users[m.sender].confirmPasswordReset
      m.reply(mess.success)
   } else return await client.sendButtonText(m.chat, [{ buttonId: `.batalganti`, buttonText: { displayText: 'Batal' }, type: 1 }], 'Kode konfirmasi salah!\n\nJika kode sama dengan yang dikirim email namun tetap gagal, silahkan chat owner wa.me/6283170659182', wm, m)
}

//Function Input New Password
if (global.db.data.users[m.sender].pendingResetPassword) {
  if (m.quoted && m.quoted.id == global.db.data.users[m.sender].chatConfirmKey) {
     if (!budy.trim()) return m.reply('Password yang ingin diubah tidak boleh kosong!')
     const textChangePassword = `Password baru kamu : ${budy.trim()}\n\nTekan tombol Konfirmasi untuk melanjutkan atau tekan tombol Batal untuk membatalkan!`
     client.sendButtonText(m.chat, [{ buttonId: `${prefix}batalganti`, buttonText: { displayText: 'Batal' }, type: 1 }, { buttonId: `${prefix}konfirmasipassword`, buttonText: { displayText: 'Konfirmasi' }, type: 1 }], textChangePassword, wm, m)
     delete global.db.data.users[m.sender].pendingResetPassword
     global.db.data.users[m.sender].temporaryPassword = budy.trim()
     delete global.db.data.users[m.sender].chatConfirmKey
  }  else return m.reply('Balas pesan sebelumnya untuk mengganti password!')
}

//Function Confirmation Reset Password
if (global.db.data.users[m.sender].temporaryPassword) {
    if (command == `batalganti`) {
	delete global.db.data.users[m.sender].temporaryPassword
        m.reply(mess.success)
    } else if (command == `konfirmasipassword`) {
    	global.db.data.account[accountUsers].password = global.db.data.users[m.sender].temporaryPassword
        m.reply(`Sukses mengganti password! Ketik .profile untuk melihat password baru kamu`)
        delete global.db.data.users[m.sender].temporaryPassword
    } else return
}

//Write Database Every 1 Minute
setInterval(() => {
   fs.writeFileSync('./database.json', JSON.stringify(global.db.data, null, 2))
}, 60 * 1000)

//Reset Limit Every 12 Hours
cron.schedule('00 12 * * *', () => {
    let user = Object.keys(global.db.data.account)
    for (let username of user) {
     let limitUser = global.db.data.account[username].premium  ? global.limitawal.premium : global.limitawal.free
     global.db.data.account[username].limit = limitUser
    }
    console.log('Reseted Limit')
}, {
    scheduled: true,
    timezone: "Asia/Jakarta"
})

//Tebak Lagu
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
    let hadippp = randomNomor(1000)
    addBalance(m.sender, hadippp, balance)
    kuis = true
    jawaban = tebaklagu[m.sender.split('@')[0]]
    if (budy.toLowerCase() == jawaban) {
        await client.sendButtonText(m.chat, [{ buttonId: `${prefix}tebak lagu`, buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, wm, m)
        delete tebaklagu[m.sender.split('@')[0]]
    } else m.reply('*Jawaban Salah!*')
}

//Tebak Gambar
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
    let hadippp = randomNomor(1000)
    addBalance(m.sender, hadippp, balance)
    kuis = true
    jawaban = tebakgambar[m.sender.split('@')[0]]
    if (budy.toLowerCase() == jawaban) {
        await client.sendButtonText(m.chat, [{ buttonId: `${prefix}tebak gambar`, buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, wm, m)
        delete tebakgambar[m.sender.split('@')[0]]
    } else m.reply('*Jawaban Salah!*')
}

//Tebak Kata
if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
    let hadippp = randomNomor(1000)
    addBalance(m.sender, hadippp, balance)
    kuis = true
    jawaban = tebakkata[m.sender.split('@')[0]]
    if (budy.toLowerCase() == jawaban) {
        await client.sendButtonText(m.chat, [{ buttonId: `${prefix}tebak kata`, buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, wm, m)
        delete tebakkata[m.sender.split('@')[0]]
    } else m.reply('*Jawaban Salah!*')
}

//Cak Lontong 
if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
    let hadippp = randomNomor(1000)
    addBalance(m.sender, hadippp, balance)
    kuis = true
    jawaban = caklontong[m.sender.split('@')[0]]
   deskripsi = caklontong_desk[m.sender.split('@')[0]]
   if (budy.toLowerCase() == jawaban) {
       await client.sendButtonText(m.chat, [{ buttonId: `${prefix}tebak lontong`, buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, wm, m)
       delete caklontong[m.sender.split('@')[0]]
       delete caklontong_desk[m.sender.split('@')[0]]
   } else m.reply('*Jawaban Salah!*')
}

//Tebak Kalimat
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
    let hadippp = randomNomor(1000)
    addBalance(m.sender, hadippp, balance)
    kuis = true
    jawaban = tebakkalimat[m.sender.split('@')[0]]
    if (budy.toLowerCase() == jawaban) {
        await client.sendButtonText(m.chat, [{ buttonId: `${prefix}tebak kalimat`, buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, wm, m)
        delete tebakkalimat[m.sender.split('@')[0]]
    } else m.reply('*Jawaban Salah!*')
}

//Tebak Lirik
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
    let hadippp = randomNomor(1000)
    addBalance(m.sender, hadippp, balance)
    kuis = true
    jawaban = tebaklirik[m.sender.split('@')[0]]
    if (budy.toLowerCase() == jawaban) {
        await client.sendButtonText(m.chat, [{ buttonId: `${prefix}tebak lirik`, buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, wm, m)
        delete tebaklirik[m.sender.split('@')[0]]
    } else m.reply('*Jawaban Salah!*')
}

//Tebak Tebakan
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
    let hadippp = randomNomor(1000)
    addBalance(m.sender, hadippp, balance)
    kuis = true
    jawaban = tebaktebakan[m.sender.split('@')[0]]
    if (budy.toLowerCase() == jawaban) {
        await client.sendButtonText(m.chat, [{ buttonId: `${prefix}tebak tebakan`, buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, wm, m)
        delete tebaktebakan[m.sender.split('@')[0]]
    } else m.reply('*Jawaban Salah!*')
}

//Family100
if (('family100'+m.chat in _family100) && isCmd) {
    let hadippp = randomNomor(1000)
    addBalance(m.sender, hadippp, balance)
    kuis = true
    let room = _family100['family100'+m.chat]
    let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
    let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
    if (!isSurender) {
        let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
        if (room.terjawab[index]) return !0
        room.terjawab[index] = m.sender
    }
    let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
    let caption = `Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
    return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
    client.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
    if (isWin || isSurender) delete _family100['family100'+m.chat]
}

//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
    let win = ''
    let tie = false
    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
        if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
            client.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
            delete this.suit[roof.id]
            return !0
        }
        roof.status = 'play'
        roof.asal = m.chat
        clearTimeout(roof.waktu)
        //delete roof[roof.id].waktu
        client.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
         if (!roof.pilih) client.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
         if (!roof.pilih2) client.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
         roof.waktu_milih = setTimeout(() => {
             if (!roof.pilih && !roof.pilih2) client.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
             else if (!roof.pilih || !roof.pilih2) {
                 win = !roof.pilih ? roof.p2 : roof.p
                 client.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
             }
            delete this.suit[roof.id]
            return !0
        }, roof.timeout)
    }
    let jwb = m.sender == roof.p
    let jwb2 = m.sender == roof.p2
    let g = /gunting/i
    let b = /batu/i
    let k = /kertas/i
    let reg = /^(gunting|batu|kertas)/i
    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
        roof.pilih = reg.exec(m.text.toLowerCase())[0]
        roof.text = m.text
        m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
        if (!roof.pilih2) client.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
    }
    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
        roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
        roof.text2 = m.text
        m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
        if (!roof.pilih) client.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
    }
    let stage = roof.pilih
    let stage2 = roof.pilih2
    if (roof.pilih && roof.pilih2) {
        clearTimeout(roof.waktu_milih)
        if (b.test(stage) && g.test(stage2)) win = roof.p
        else if (b.test(stage) && k.test(stage2)) win = roof.p2
        else if (g.test(stage) && k.test(stage2)) win = roof.p
        else if (g.test(stage) && b.test(stage2)) win = roof.p2
        else if (k.test(stage) && b.test(stage2)) win = roof.p
        else if (k.test(stage) && g.test(stage2)) win = roof.p2
        else if (stage == stage2) tie = true
        client.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
        delete this.suit[roof.id]
    }
}

//Cerpen
async function cerpen (category) {
    return new Promise((resolve, reject) => {
        let title = category.toLowerCase().replace(/[()*]/g, "")
        let judul = title.replace(/\s/g, "-")
        let page = Math.floor(Math.random() * 5)
        axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
        .then((get) => {
            let $ = cheerio.load(get.data)
            let link = []
            $('article.post').each(function (a, b) {
                link.push($(b).find('a').attr('href'))
            })
            let random = link[Math.floor(Math.random() * link.length)]
            axios.get(random)
            .then((res) => {
                let $$ = cheerio.load(res.data)
                let hasil = {
                    title: $$('#content > article > h1').text(),
                    author: $$('#content > article').text().split('Cerpen Karangan: ')[1].split('Kategori: ')[0],
                    kategori: $$('#content > article').text().split('Kategori: ')[1].split('\n')[0],
                    lolos: $$('#content > article').text().split('Lolos moderasi pada: ')[1].split('\n')[0],
                    cerita: $$('#content > article > p').text()
                }
                resolve(hasil)
            })
        })
    })
}

//Math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
    kuis = true
    jawaban = kuismath[m.sender.split('@')[0]]
    if (budy.toLowerCase() == jawaban) {
        await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
        delete kuismath[m.sender.split('@')[0]]
    } else m.reply('*Jawaban Salah!*')
}

//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
    let ok
    let isWin = !1
    let isTie = !1
    let isSurrender = !1
    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
    isSurrender = !/^[1-9]$/.test(m.text)
    if (m.sender !== room.game.currentTurn) { // nek wayahku
        if (!isSurrender) return !0
        let hadippp = randomNomor(1000)
        addBalance(m.sender, hadippp, balance)
     }
     if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
         m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
         return !0
     }
     if (m.sender === room.game.winner) isWin = true
     else if (room.game.board === 511) isTie = true
     let arr = room.game.render().map(v => {
           return {
                X: '❌',
                O: '⭕',
                1: '1️⃣',
                2: '2️⃣',
                3: '3️⃣',
                4: '4️⃣',
                5: '5️⃣',
                6: '6️⃣',
                7: '7️⃣',
                8: '8️⃣',
                9: '9️⃣',
          }[v]
     })
     if (isSurrender) {
         room.game._currentTurn = m.sender === room.game.playerX
         isWin = true
     }
     let winner = isSurrender ? room.game.currentTurn : room.game.winner
     let str = `     「 Tictactoe Game 」
Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
     if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
     room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
     if (room.x !== room.o) await client.sendText(room.x, str, m, { mentions: parseMention(str) } )
     await client.sendText(room.o, str, m, { mentions: parseMention(str) } )
     if (isTie || isWin) {
         delete this.game[room.id]
     }
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
    let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
    let { text, mentionedJid } = hash
    let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
       userJid: client.user.id,
       quoted: m.quoted && m.quoted.fakeObj
    })
    messages.key.fromMe = areJidsSameUser(m.sender, client.user.id)
    messages.key.id = m.key.id
    messages.pushName = m.pushName
    if (m.isGroup) messages.participant = m.sender
    let msg = {
        ...chatUpdate,
        messages: [proto.WebMessageInfo.fromObject(messages)],
        type: 'append'
     }
     client.ev.emit('messages.upsert', msg)
}

const levelMenu = getLevelingLevel(m.sender)
const xpMenu = getLevelingXp(m.sender)
const reqXp  = 200 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
if (!isInventory){ addInventori(m.sender) }
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }

//List Menu
const textTemplateMenu = `Hai, selamat ${regards} ${pushname}! 👋

*Waktu:* 
${wib} WIB
${wita} WITA
${wit} WIT
*Hari:* ${week}
*Tanggal:* ${date}
*Uptime:* ${runtime(process.uptime())}
*Total Hit:* ${formatNumber(global.db.data.bot.totalhit)}

*Level:* ${levelMenu}
*Xp:* ${formatNumber(xpMenu)}\ ${formatNumber(reqXp)}
*Role:* ${role}
*Game Money:* ${formatNumber(getBalance(m.sender, balance))} IDR

*Health:* ${getDarah(m.sender)}
*Besi:* ${getBesi(m.sender)}
*Emas:* ${getEmas(m.sender)}
*Emerald:* ${getEmerald(m.sender)}
*Potion:* ${getPotion(m.sender)}

*Akun*: ${global.db.data.users[m.sender].account}
*Saldo Neybot:* ${isLogin ? formatNumber(global.db.data.account[accountUsers].neybot) : "notlogin"} IDR
*Limit:* ${isLogin ? (global.db.data.account[accountUsers].limit !== 'Infinity' ? formatNumber(global.db.data.account[accountUsers].limit) : global.db.data.account[accountUsers].limit) : "notlogin"}
*Status:* ${isPremium ? 'Premium' : 'Gratis'}

*Fun*
▢ ${prefix}suit
▢ ${prefix}tictactoe
▢ ${prefix}delttt
▢ ${prefix}math
▢ ${prefix}family100

*Account*
▢ ${prefix}login
▢ ${prefix}register
▢ ${prefix}resetpassword 
▢ ${prefix}logout

*Anonymous*
▢ ${prefix}anonymous
▢ ${prefix}start
▢ ${prefix}keluar
▢ ${prefix}next 

*Convert*
▢ ${prefix}stiker
▢ ${prefix}attp
▢ ${prefix}ttp
▢ ${prefix}smeme
▢ ${prefix}take
▢ ${prefix}toimage
▢ ${prefix}tovideo
▢ ${prefix}togif
▢ ${prefix}tourl
▢ ${prefix}tovn
▢ ${prefix}tomp3
▢ ${prefix}toaudio
▢ ${prefix}ebinary
▢ ${prefix}dbinary
▢ ${prefix}translate

*Main*
▢ ${prefix}afk
▢ ${prefix}delete
▢ ${prefix}ping
▢ ${prefix}speedtest
▢ ${prefix}donasi
▢ ${prefix}request
▢ ${prefix}owner
▢ ${prefix}clearchat
▢ ${prefix}runtime
▢ ${prefix}react

*Search*
▢ ${prefix}play
▢ ${prefix}google
▢ ${prefix}brainly
▢ ${prefix}ssweb

*Plugin*
▢ ${prefix}getplugin
▢ ${prefix}saveplugin
▢ ${prefix}deleteplugin
▢ ${prefix}debounce

*Downloader*
▢ ${prefix}ytmp3
▢ ${prefix}ytmp4
▢ ${prefix}igstory
▢ ${prefix}instagram
▢ ${prefix}facebook
▢ ${prefix}ringtone

*Group*
▢ ${prefix}mute
▢ ${prefix}kick
▢ ${prefix}hidetag
▢ ${prefix}ephemeral
▢ ${prefix}add
▢ ${prefix}link
▢ ${prefix}group
▢ ${prefix}join
▢ ${prefix}leave
▢ ${prefix}promote
▢ ${prefix}demote
▢ ${prefix}announce
▢ ${prefix}getprofile
▢ ${prefix}tagall

*Owner*
▢ ${prefix}public
▢ ${prefix}act
▢ ${prefix}broadcast
▢ ${prefix}clearchatall
▢ ${prefix}getsession
▢ ${prefix}getdatabase
▢ ${prefix}self
▢ ${prefix}notice
▢ ${prefix}setppbot
▢ ${prefix}exec
▢ ${prefix}eval`

//Template Donasi
const textTemplateDonate = `Ingin mensupport Bot ini?

*Payment ↓*

*Pulsa Smartfren:*
0882-0162-83596
*Dana/Ovo/Gopay:* 
0882-0162-83596
*Saweria:*
https://www.saweria.co/staflightgreen
*Trakteer:*
https://trakteer.id/staflightgreen/tip`

const textTemplateLogin = `*Masuk*

Format :

.login username | password`

const textTemplateRegister = `*Buat Akun*

Format :

.register email | username | password

Mohon gunakan email valid untuk pengiriman kode konfirmasi!`

//Ada quoted (False or True)
const thereQuoted = m.quoted? "true":"false"

//Ditangani oleh Handler?
var handlerPlugin = false;

if (isCmd && command) {
     fs.readdirSync('./plugins').forEach(function(file) {
     	try {
             delete require.cache[require.resolve("./plugins/" + file)]
             let handler = require("./plugins/" + file)
             if (handler.command.test(command)) {
                if (handler.owner && !isCreator) return client.sendMessage(m.chat, { text: mess.owner }, { quoted: m })
                if (handler.login && !isLogin) return client.sendMessage(m.chat, { text: mess.logout }, { quoted: m })
                if (handler.logout && isLogin) return client.sendMessage(m.chat, { text: mess.login }, { quoted: m })
                if (handler.premium && !isPremium) return client.sendMessage(m.chat, { text: mess.prem }, { quoted: m })
                if (handler.group && !m.isGroup) return client.sendMessage(m.chat, { text: mess.group }, { quoted: m })
                if (handler.private && m.isGroup) return client.sendMessage(m.chat, { text: mess.private }, { quoted: m })
                const responseplugin = handler(m, { client, store, text, args, prefix, budy, command })
                if (responseplugin) {
                   handlerPlugin = true
                   return addTypeCmd(command, 1)
                }
             } //Risnaldy Mufki
          } catch (err) {
              notify(client, `File: ./plugins/${file}\n\n${err}`)
              //Autosend Error
          }
     })
}
    
//Switch Command
switch(command) {
case 'family100': 
if (!isLogin) return m.reply(mess.logout)
if ('family100'+m.chat in _family100) {
   m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
   throw false
}
const fetchQuest = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
const randomQuest = fetchQuest[Math.floor(Math.random() * fetchQuest.length)]
const resultQuest = `*Jawablah Pertanyaan Berikut :*\n${randomQuest.soal}\n\nTerdapat *${randomQuest.jawaban.length}* Jawaban ${randomQuest.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: 'family100'+m.chat,
pesan: await client.sendText(m.chat, resultQuest, m),
...randomQuest,
terjawab: Array.from(randomQuest.jawaban, () => false),
hadiah: 6,
}
addTypeCmd(command, 1)
break
case 'leave': 
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
m.reply(mess.later)
await client.groupLeave(m.chat)
addTypeCmd(command, 1)
break
case 'setppbot': case 'setbotpp':
if (!isLogin) return m.reply(mess.logout)
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
m.reply(mess.wait)
const mediaSetProfilePictureBot = await client.downloadAndSaveMediaMessage(qmsg)
const resultGenerate = await generateProfilePicture(mediaSetProfilePictureBot)
 await client.query({
      tag: 'iq',
      attrs: {
         to: botNumber,
         type:'set',
         xmlns: 'w:profile:picture'
       },
       content: [
           {
              tag: 'picture',
              attrs: { type: 'image' },
              content: resultGenerate.img
            }
        ]
})
m.reply(mess.success)
addTypeCmd(command, 1)
break
case 'tagall': 
if (!isLogin) return m.reply(mess.logout)
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
let textTagall = `*👥 Tag All*
 
${args.join(" ") ? args.join(" ") : 'kosong'}\n\n`
 
for (let mem of participants) {
      textTagall += `• @${mem.id.split('@')[0]}\n`
}
client.sendMessage(m.chat, { text: textTagall, mentions: participants.map(a => a.id) }, { quoted: m })
addTypeCmd(command, 1)
break
case 'announce':
if (!isLogin) return m.reply(mess.logout)
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
for (let mem of participants) {
     const textAnnounce = `${monospace}Hai ${client.getName(mem.id)} pemberitahuan dari admin ${client.getName(m.sender)} di grup ${groupName}:${monospace}
 
${args.join(" ") ? args.join(" ") : 'kosong'}\n\n${wm}`
     client.sendMessage(mem.id, { text: textAnnounce }, { quoted: m })
     sleep(2000)
}
addTypeCmd(command, 1)
break
case 'getcase': 
if (!isLogin) return m.reply(mess.logout)
if (!args[0]) return m.reply('Mau ngambil case apa?')
try {
   m.reply('case ' + `'${args[0]}'` + fs.readFileSync('./index.js').toString().split(`case '${args[0]}'`)[1].split(`break`)[0] + `break`)
} catch {
   m.reply('Case tidak ditemukan!')
}
addTypeCmd(command, 1)
break
case 'profile': case 'profil':
if (!isLogin) return m.reply(mess.logout)
const configAllProfile = `*Profil Akun*

• Username : ${global.db.data.users[m.sender].account}
• Password : ${global.db.data.account[accountUsers].password}
• Email : ${global.db.data.account[accountUsers].email}
• Limit : ${global.db.data.account[accountUsers].limit}
• Premium : ${isPremium ? 'Yes' : 'No'}`
   m.reply(configAllProfile)
addTypeCmd(command, 1)
break
case 'resetpassword': case 'resetpw':
if (!isLogin) return m.reply(mess.logout)
global.db.data.users[m.sender].confirmPasswordReset = makeOtp(6)
await sendMail(global.db.data.account[accountUsers].email, 'Konfirmasi Reset Password', 'resetPasswordTemplate', `http://wa.me/${client.decodeJid(client.user.id)}?text=${global.db.data.users[m.sender].confirmPasswordReset}`)
m.reply('Silahkan ketik kode konfirmasi yang dikirim diemail untuk mengubah password.\n\nJika belum terkirim tunggu 1-5 menit!')
addTypeCmd(command, 1)
break
case 'mute': 
if (!isLogin) return m.reply(mess.logout)
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
db.data.chats[m.chat].mute = true
m.reply('Done!')
addTypeCmd(command, 1)
break
case 'unmute':
if (!isLogin) return m.reply(mess.logout)
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
db.data.chats[m.chat].mute = false
m.reply('Done!')
addTypeCmd(command, 1)
break
case 'sticker': case 's': case 'stiker': case 'stick': case 'stik':
if (!isLogin) return m.reply(mess.logout)
if (/image/.test(mime)) {
   m.reply(mess.wait)
   const mediaImageSticker = await client.downloadMediaMessage(qmsg)
   const encStickerImg = await client.sendImageAsSticker(m.chat, mediaImageSticker, m, { packname: global.packname, author: pushname })
   await fs.unlinkSync(encStickerImg)
} else if (/video/.test(mime)) {
   m.reply(mess.wait)
   if (qmsg.seconds > 11) return m.reply('Maksimal 10 detik!')
   const mediaVideoSticker = await client.downloadMediaMessage(qmsg)
   const encStickerVid = await client.sendVideoAsSticker(m.chat, mediaVideoSticker, m, { packname: global.packname, author: pushname })
   await fs.unlinkSync(encStickerVid)
} else {
    m.reply(`Kirim Reply Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
addTypeCmd(command, 1)
break
case 'toimage': case 'toimg': 
if (!isLogin) return m.reply(mess.logout)
if (!/webp/.test(mime)) return m.reply(`Balas stiker dengan caption *${prefix + command}*`)
m.reply(mess.wait)
const mediaToImage = await client.downloadAndSaveMediaMessage(qmsg)
const ranMediaToImage = await getRandom('.png')
exec(`ffmpeg -i ${mediaToImage} ${ranMediaToImage}`, (err) => {
    fs.unlinkSync(mediaToImage)
    if (err) return m.reply(err)
    const bufferToImage = fs.readFileSync(ranMediaToImage)
    client.sendMessage(m.chat, { image: bufferToImage }, { quoted: m })
    fs.unlinkSync(ranMediaToImage)
})
addTypeCmd(command, 1)
break
case 'tomp4': case 'tovideo': 
if (!isLogin) return m.reply(mess.logout)
if (!/webp/.test(mime)) return m.reply(`Balas stiker dengan caption *${prefix + command}*`)
m.reply(mess.wait)
const mediaToVideo = await client.downloadAndSaveMediaMessage(qmsg)
const webpVideoToMp4 = await webp2mp4File(mediaToVideo)
await client.sendMessage(m.chat, { video: { url: webpVideoToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(mediaToVideo)
addTypeCmd(command, 1)
break
case 'toaud': case 'toaudio':
if (!isLogin) return m.reply(mess.logout)
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
m.reply(mess.wait)
const mediaToAudio = await client.downloadMediaMessage(qmsg)
const toAudio = await toAudio(mediaToAudio, 'mp4')
client.sendMessage(m.chat, { audio: toAudio, mimetype: 'audio/mpeg'}, { quoted : m })
addTypeCmd(command, 1)
break
case 'tomp3':
if (!isLogin) return m.reply(mess.logout)
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
m.reply(mess.wait)
const mediaToMp3 = await client.downloadMediaMessage(qmsg)
const toMp3 = await toAudio(mediaToMp3, 'mp4')
client.sendMessage(m.chat, { document: toMp3, mimetype: 'audio/mpeg', fileName: `Convert By ${client.user.name} (${m.id}).mp3`}, { quoted : m })
addTypeCmd(command, 1)
break
case 'tovn': case 'toptt':
if (!isLogin) return m.reply(mess.logout)
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
if (!m.quoted) return m.reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
m.reply(mess.wait)
const mediaToPtt = await client.downloadMediaMessage(qmsg)
const toPtt = await toPTT(mediaToPtt, 'mp4')
client.sendMessage(m.chat, { audio: toPtt, mimetype:'audio/mpeg', ptt:true }, { quoted: m })
addTypeCmd(command, 1)
break
case 'togif': 
if (!isLogin) return m.reply(mess.logout)
if (!/webp/.test(mime)) return m.reply(`Balas stiker dengan caption *${prefix + command}*`)
m.reply(mess.wait)
const mediaToGif = await client.downloadAndSaveMediaMessage(qmsg)
const webpGifToMp4 = await webp2mp4File(mediaToGif)
await client.sendMessage(m.chat, { video: { url: webpGifToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(mediaToGif)
addTypeCmd(command, 1)
break
case 'tourl':
if (!isLogin) return m.reply(mess.logout)
m.reply(mess.wait)
const mediaToUrl = await client.downloadAndSaveMediaMessage(qmsg)
if (/image/.test(mime)) {
   const linkTelegraImage = await TelegraPh(mediaToUrl)
   m.reply(util.format(linkTelegraImage))
} else if (!/image/.test(mime)) {
   const linkUguFile = await UploadFileUgu(mediaToUrl)
   m.reply(util.format(linkUguFile))
}
await fs.unlinkSync(mediaToUrl)
addTypeCmd(command, 1)
break
case 'ephemeral':
if (!isLogin) return m.reply(mess.logout)
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === '1') {
   await client.groupToggleEphemeral(m.chat, 1*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === '7') {
   await client.groupToggleEphemeral(m.chat, 7*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === '90') {
    await client.groupToggleEphemeral(m.chat, 90*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'off') {
    await client.groupToggleEphemeral(m.chat, 0).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else {
     const sectionsEphemeral = [{
          title: "CHANGE EPHEMERAL GROUP",
          rows: [
              { title: "Ephemeral 1 day", rowId: `${prefix}ephemeral 1`, description: `Activate the ephemeral group for 1 day`},
              { title: "Ephemeral 7 day's", rowId: `${prefix}ephemeral 7`, description: `Activate the ephemeral group for 7 day's`},
              { title: "Ephemeral 90 days's", rowId: `${prefix}ephemeral 90`, description: `Activate the ephemeral group for 90 day's`},
              { title: "Ephemeral Off", rowId: `${prefix}ephemeral off`, description: `Deactivate this Ephemeral group`}
          ]
     }]
     client.sendListMsg(m.chat, `Please select the following Ephemeral Options List !`, client.user.name, `Hello Admin ${groupMetadata.subject}`, `Click Here`, sectionsEphemeral, m)
}
addTypeCmd(command, 1)
break
case 'ebinary': 
if (!isLogin) return m.reply(mess.logout)
if (!text) throw `Example : ${prefix + command} text`
const eBinaryResult = await eBinary(text)
m.reply(eBinaryResult)
addTypeCmd(command, 1)
break
case 'dbinary': 
if (!isLogin) return m.reply(mess.logout)
if (!text) throw `Example : ${prefix + command} text`
const dBinaryResult = await dBinary(text)
m.reply(dBinaryResult)
addTypeCmd(command, 1)
break
case 'listonline': case 'liston': 
if (!isLogin) return m.reply(mess.logout)
const idListOnline = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
const arrListonline = [...Object.keys(store.presences[idListOnline]), botNumber]
client.sendText(m.chat, 'List Online:\n\n' + arrListonline.map(v => '• @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: arrListonline })
addTypeCmd(command, 1)
break
case 'attp': case 'ttp': 
if (!isLogin) return m.reply(mess.logout)
if (!text) return m.reply(`Example : ${prefix + command} text`)
await client.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, '', '', m, { asSticker: true })
addTypeCmd(command, 1)
break
case 'antilink': 
if (!isLogin) return m.reply(mess.logout)
if (!m.isGroup) return  m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
if (args[0] === "on") {
if (global.db.data.chats[m.chat].antilink) return m.reply("Antilink sudah aktif sebelumnya!")
   global.db.data.chats[m.chat].antilink = true
   m.reply("Antilink aktif!")
} else if (args[0] === "off") {
    if (!global.db.data.chats[m.chat].antilink) return m.reply("Sudah Tidak Aktif Sebelumnya!")
    global.db.data.chats[m.chat].antilink = false
    m.reply("Antilink tidak aktif!")
} else {
    const buttonsAntilink = [
        { buttonId: `${prefix}antilink on`, buttonText: { displayText: 'On' }, type: 1 },
        { buttonId: `${prefix}antilink off`, buttonText: { displayText: 'Off' }, type: 1 }
    ]
    await client.sendButtonText(m.chat, buttonsAntilink, "Mode Antilink", wm, m)
}
addTypeCmd(command, 1)
break
case 'afk': 
if (!isLogin) return m.reply(mess.logout)
let userAfk = global.db.data.users[m.sender]
userAfk.afkTime = + new Date
userAfk.afkReason = text
m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
addTypeCmd(command, 1)
break	
case 'runtime': case 'uptime':
if (!isLogin) return m.reply(mess.logout)
const textRuntimeorUptime = `*${client.user.name}* R U N T I M E
Waktu Aktif ${runtime(process.uptime())}\n\n${wm}`
client.sendMessage(m.chat, { text: textRuntimeorUptime }, { quoted: m })
addTypeCmd(command, 1)
break
case 'owner': case 'creator': 
if (!isLogin) return m.reply(mess.logout)
client.sendContact(m.chat, owner, m)
addTypeCmd(command, 1)
break
case 'delete': case 'del': 
if (!isLogin) return m.reply(mess.logout)
if (!m.quoted) return m.reply(mess.reply)
if (!m.quoted.isBaileys) return m.reply('Pesan tersebut bukan dikirim oleh bot!')
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender }})
addTypeCmd(command, 1)
break
case 'public': 
if (!isLogin) return m.reply(mess.logout)
if (!isCreator) return m.reply(mess.owner)
client.public = true
m.reply('Sukses Change To Public Usage')
addTypeCmd(command, 1)
break
case 'self': 
if (!isLogin) return m.reply(mess.logout)
if (!isCreator) return m.reply(mess.owner)
client.public = false
m.reply('Sukses Change To Self Usage') 
addTypeCmd(command, 1)          
break
case 'menu':
case 'help':
if (!isLogin) return m.reply(mess.logout)
const templateButtonsMenu = [{ urlButton: { displayText: 'Website', url: 'http://localhost:8080/' }}, { quickReplyButton: { displayText: 'Profile', id: `${prefix}profile` }}]
const templateMessageMenu = {
  text: textTemplateMenu,
  footer: wm,
  templateButtons: templateButtonsMenu
}
client.sendMessage(m.chat, templateMessageMenu)
addTypeCmd(command, 1)
break
case 'donasi': case 'donate': 
if (!isLogin) return m.reply(mess.logout)
if (!q) return client.sendButtonText(m.chat, [{ buttonId: `${prefix}donasi neybot`, buttonText: { displayText: 'NeyBot' }, type: 1 }], textTemplateDonate, wm, m)
	
if (args[0] === 'neybot') {
	client.sendMessage(from, { text: 'Maaf fitur ini masih dalam pengembangan!' }, { quoted: m })
} 

addTypeCmd(command, 1)
break
case 'login':
if (m.isGroup) return m.reply(mess.privacy)
if (isLogin) return m.reply(mess.login)
if (!q) return m.reply(textTemplateLogin)
if (!q.includes('|')) return m.reply("Gunakan '|' sebagai pemisah!")
const userNameLogin = q.split('|')[0].trim()
const passWordLogin = q.split('|')[1].trim()

if (!userNameLogin || !passWordLogin) return m.reply('Ketikkan username dan password!')

if (typeof global.db.data.account[userNameLogin] === 'object' && global.db.data.account[userNameLogin].password === passWordLogin) {
	global.db.data.users[m.sender].account = userNameLogin
	m.reply(mess.success)
} else m.reply('Username dan password salah atau tidak terdaftar! Silahkan daftar terlebih dahulu dengan .register')
addTypeCmd(command, 1)
break
case 'register':
if (m.isGroup) return m.reply(mess.privacy)
if (isLogin) return m.reply(mess.login)
if (!q) return m.reply(textTemplateRegister)
if (!q.includes('|')) return m.reply("Gunakan '|' sebagai pemisah!")

const eMailRegister = q.split('|')[0].trim().toString()
const userNameRegister = q.split('|')[1].trim().toString()
const passWordRegister = q.split('|')[2].trim().toString()

if (!eMailRegister || !userNameRegister || !passWordRegister) return m.reply('Ketikkan email, username dan password untuk melakukan pendaftaran!')
if (global.db.data.account[userNameRegister]) {
    m.reply(mess.register)
} else {
  global.db.data.users[m.sender].pendingRegister = { otp: makeOtp(6), username: userNameRegister, password: passWordRegister, email: eMailRegister }
  await sendMail(eMailRegister, 'Konfirmasi Email', 'otpTemplate', `http://wa.me/${client.decodeJid(client.user.id)}?text=${global.db.data.users[m.sender].pendingRegister.otp}`)
  m.reply('Silahkan ketik kode konfirmasi yang dikirim diemail.\n\nJika belum terkirim tunggu 1-5 menit!')
}
addTypeCmd(command, 1)
break
case 'logout':
if (!isLogin) return m.reply(mess.logout)
global.db.data.users[m.sender].account = "guest"
m.reply(mess.success) 
break
case 'kuismath':
case 'math': 
if (!isLogin) return m.reply(mess.logout)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
if (!text) return m.reply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
const resultmath = await genMath(text.toLowerCase())
client.sendText(m.chat, `*Berapa hasil dari: ${resultmath.soal.toLowerCase()}*?\n\nWaktu: ${(resultmath.waktu / 1000).toFixed(2)} detik`, m).then(() => {
      kuismath[m.sender.split('@')[0]] = resultmath.jawaban
})
await sleep(resultmath.waktu)
 if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + resultmath.jawaban)
    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
    delete kuismath[m.sender.split('@')[0]]
}
addTypeCmd(command, 1)            
break
case 'google': 
if (!isLogin) return m.reply(mess.logout)
if (!text) return m.reply(`Example : ${prefix + command} Jokowi Dodo`)
let google = require('google-it')
let teksgoogle = `Google Search From : ${text}\n\n`
google({'query': text}).then(res => {
     for (let g of res) {
          teksgoogle += `• *Title* : ${g.title}\n`
          teksgoogle += `• *Description* : ${g.snippet}\n`
          teksgoogle += `• *Link* : ${g.link}\n\n────────────────────────\n\n`
      } 
})
try {
    let url = 'https://google.com/search?q=' + encodeURIComponent(text)
    let ss = await ssweb(url)
    client.sendImage(m.chat, ss, teksgoogle, m)
} catch(e){
    m.reply(teksgoogle)
}
addTypeCmd(command, 1)   
break
case 'brainly':
if (!isLogin) return m.reply(mess.logout)
if (!text) return m.reply(mess.query)
const resbrainly = await brainly(text)
const answerbrainly = resbrainly.data.map((v, i) => `_*PERTANYAAN KE ${i + 1}*_\n${v.pertanyaan}\n${v.jawaban.map((v,i) => `*JAWABAN KE ${i + 1}*\n${v.text}`).join('\n')}`).join('\n\n•------------•\n\n')
m.reply(answerbrainly)
addTypeCmd(command, 1)
break
case 'react':
if (!isLogin) return m.reply(mess.logout)
if (!q) client.sendMessage(m.chat, { text: 'Emojinya Mana?' }, { quoted: m })
if (!m.quoted) client.sendMessage(m.chat, { text: 'Reply Chatnya!' }, { quoted: m })
client.relayMessage(m.chat, { reactionMessage: { key: { id: m.quoted.id, remoteJid: m.chat, fromMe: true }, text: q }}, { messageId: m.id })
addTypeCmd(command, 1)
break
case 'play': case 'ytplay':
if (!isLogin) return m.reply(mess.logout)
if (!q) client.sendMessage(m.chat, { text: mess.query }, { quoted: m })
const youtubeSearch = await yts(text)
const resultSearchYoutube = youtubeSearch.videos[Math.floor(Math.random() * youtubeSearch.videos.length)]
let buttons = [
    {buttonId: `${prefix}ytmp3 ${resultSearchYoutube.url}`, buttonText: {displayText: 'Audio' }, type: 1},
    {buttonId: `${prefix}ytmp4 ${resultSearchYoutube.url}`, buttonText: {displayText: 'Video' }, type: 1}
]
let buttonMessage = {
     image: { url: resultSearchYoutube.thumbnail },
     caption: `• Title : ${resultSearchYoutube.title}
• Ext : Search
• ID : ${resultSearchYoutube.videoId}
• Duration : ${resultSearchYoutube.timestamp}
• Viewers : ${resultSearchYoutube.views}
• Upload At : ${resultSearchYoutube.ago}
• Author : ${resultSearchYoutube.author.name}
• Channel : ${resultSearchYoutube.author.url}
• Description : ${resultSearchYoutube.description}
• Url : ${resultSearchYoutube.url}`,
       footer: client.user.name,
       buttons: buttons,
       headerType: 4
}
client.sendMessage(m.chat, buttonMessage, { quoted: m })
addTypeCmd(command, 1)
break
case 'ytmp3': case 'ytaudio':
if (!isLogin) return m.reply(mess.logout)
let { yta } = require('./lib/y2mate')
if (!q) client.sendMessage(m.chat, { text: mess.linkm }, { quoted: m })
let qualityaudio = args[1] ? args[1] : '128kbps'
let mediaaudio = await yta(text, qualityaudio)
if (mediaaudio.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(mediaaudio))
client.sendImage(m.chat, mediaaudio.thumb, `⭔ Title : ${mediaaudio.title}\n⭔ File Size : ${mediaaudio.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
client.sendMessage(m.chat, { audio: { url: mediaaudio.dl_link }, mimetype: 'audio/mpeg', fileName: `${mediaaudio.title}.mp3` }, { quoted: m })
addTypeCmd(command, 1)
break
case 'ytmp4': case 'ytvideo': 
if (!isLogin) return m.reply(mess.logout)
let { ytv } = require('./lib/y2mate')
if (!q) client.sendMessage(m.chat, { text: mess.linkm }, { quoted: m })
let qualityvideo = args[1] ? args[1] : '360p'
let mediavideo = await ytv(text, qualityvideo)
if (mediavideo.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(mediavideo))
client.sendMessage(m.chat, { video: { url: mediavideo.dl_link }, mimetype: 'video/mp4', fileName: `${mediavideo.title}.mp4`, caption: `⭔ Title : ${mediavideo.title}\n⭔ File Size : ${mediavideo.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
addTypeCmd(command, 1)
break
case 'ssweb' : 
if (!text) throw 'Masukan Query url'
if (!isUrl(text)) throw 'harus url ngab!!'
const resultPictureWeb = await ssweb(text)
client.sendMessage(m.chat, { image: { url: resultPictureWeb }, caption: resultPictureWeb }, { quoted: m })
break
case 'suitpvp': case 'suit': 
if (!isLogin) return m.reply(mess.logout)
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) return m.reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[0].id}`, m.chat, { mentions: [owner[0].id + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
    chat: await client.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
    id: id,
    p: m.sender,
    p2: m.mentionedJid[0],
    status: 'wait',
    waktu: setTimeout(() => {
          if (this.suit[id]) client.sendText(m.chat, `_Waktu suit habis_`, m)
          delete this.suit[id]
     }, 60000), poin, poin_lose, timeout
   }
addTypeCmd(command, 1)
break
case 'ttc': case 'ttt': case 'tictactoe': 
if (!isLogin) return m.reply(mess.logout)
let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply('Kamu masih didalam game')
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (args.join(" ") ? room.name === args.join(" ") : true))
if (room) {
    m.reply('Partner ditemukan!')
    room.o = m.chat
    room.game.playerO = m.sender
    room.state = 'PLAYING'
    let arr = room.game.render().map(v => {
        return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
        }[v]
    })
   let str = `Room ID: ${room.id}
   
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
    if (room.x !== room.o) await client.sendText(room.x, str, m, { mentions: parseMention(str) } )
    await client.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
   room = {
       id: 'tictactoe-' + (+new Date),
       x: m.chat,
       o: '',
       game: new TicTacToe(m.sender, 'o'),
       state: 'WAITING'
   }
   if (args.join(" ")) room.name = args.join(" ")
   m.reply('Menunggu partner' + (args.join(" ") ? ` mengetik command dibawah ini ${prefix}${command} ${args.join(" ")}` : ''))
   this.game[room.id] = room
}
addTypeCmd(command, 1)
break
case 'delttc': case 'delttt': 
if (!isLogin) return m.reply(mess.logout)
const sessionRoomTictactoe = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender)) 
if (!sessionRoomTictactoe) return m.reply('Kamu sedang tidak berada di room tictactoe !')
delete this.game[sessionRoomTictactoe.id]
m.reply('Berhasil delete session room tictactoe !')  
addTypeCmd(command, 1)
break
case 'speed':case 'ping': case 'botstatus': case 'statusbot': 
if (!isLogin) return m.reply(mess.logout)
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
     cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
     return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
     last.total += cpu.total
     last.speed += cpu.speed / length
     last.times.user += cpu.times.user
     last.times.nice += cpu.times.nice
     last.times.sys += cpu.times.sys
     last.times.idle += cpu.times.idle
     last.times.irq += cpu.times.irq
     return last
}, {
   speed: 0,
   total: 0,
   times: {
       user: 0,
       nice: 0,
       sys: 0,
       idle: 0,
       irq: 0
    }
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
m.reply(respon)
addTypeCmd(command, 1)
break
case 'broadcast':
if (!isLogin) return m.reply(mess.logout)
if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return m.reply('Masukkan isi pesannya')
const sendbroadcastto = await store.chats.all()
for (let i of sendbroadcastto) {
      client.sendMessage(i.id, { text:  '*Notification Broadcast*\n\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎' + q })
      await sleep(5000)
}
addTypeCmd(command, 1)
break
case 'notice':
if (!isLogin) return m.reply(mess.logout)
if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return m.reply('Masukkan isi pesannya')
for (let i = 0; i < owner.length; i++) {
     client.sendMessage(owner[i].id + '@s.whatsapp.net', { text:  '*Announcement For Owner*\n\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎' + q })
     await sleep(5000)  
}
addTypeCmd(command, 1)
break
case 'request':
if (!isLogin) return m.reply(mess.logout)
if (!q) return m.reply('Ketikkan fitur yang akan diminta!')
const textrequest = `*Request Fitur*\n\nPengirim: ${(m.sender).split('@')[0]}\nPermintaan: ${q}`
//Owners
owner.forEach((parseOwner) => {
      client.sendMessage(parseOwner.id + '@s.whatsapp.net', { text: textrequest }, { quoted : m })
}) 
//Group Team
groupTeam.forEach((parseGroup) => {
      client.sendMessage(parseGroup, { text: textrequest }, { quoted: m })
}) 
m.reply('*Terimakasih telah membantu meningkatkan layanan kami!*')
addTypeCmd(command, 1)
break
case 'join': 
if (!isLogin) return m.reply(mess.logout)
if (!text) return client.sendMessage(m.chat, { text: mess.linkm }, { quoted: m })
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) client.sendMessage(m.chat, { text: 'Link Invalid!' }, { quoted: m })
m.reply(mess.wait)
const resultlinkjoin = args[0].split('https://chat.whatsapp.com/')[1]
await client.groupAcceptInvite(resultlinkjoin).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
addTypeCmd(command, 1)
break
case 'kick': 
if (!isLogin) return m.reply(mess.logout)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
const userskick = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
await client.groupParticipantsUpdate(m.chat, userskick, 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
addTypeCmd(command, 1)
break
case 'add': 
if (!isLogin) return m.reply(mess.logout)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
const usersadd = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
await client.groupParticipantsUpdate(m.chat, usersadd, 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
addTypeCmd(command, 1)
break
case 'promote': 
if (!isLogin) return m.reply(mess.logout)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
const userspromote = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
await client.groupParticipantsUpdate(m.chat, userspromote, 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
addTypeCmd(command, 1)
break
case 'demote': 
if (!isLogin) return m.reply(mess.logout)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
const usersdemote = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
await client.groupParticipantsUpdate(m.chat, usersdemote, 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
addTypeCmd(command, 1)
break
case 'group': case 'grup': 
if (!isLogin) return m.reply(mess.logout)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
if (args[0] === 'close') {
   await client.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
    await client.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
    const buttonsgroup = [
       { buttonId: `${prefix}group open`, buttonText: { displayText: 'Open' }, type: 1 },
       { buttonId: `${prefix}group close`, buttonText: { displayText: 'Close' }, type: 1 }
    ]
    await client.sendButtonText(m.chat, buttonsgroup, `Mode Group`, wm, m)
 }
addTypeCmd(command, 1)
break
case 'linkgroup': case 'linkgc': case 'link':
if (!isLogin) return m.reply(mess.logout) 
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
const responselinkgroup = await client.groupInviteCode(m.chat)
client.sendText(m.chat, `https://chat.whatsapp.com/${responselinkgroup}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
addTypeCmd(command, 1)
break
case 'hidetag': 
if (!isLogin) return m.reply(mess.logout)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
client.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
addTypeCmd(command, 1)
break
case 'getdatabase':
if (!isLogin) return m.reply(mess.logout)
if (!isCreator) return m.reply(mess.owner)
m.reply(mess.wait)
const databaseget = await fs.readFileSync('./database.json')
await client.sendMessage(m.chat, { document: databaseget, mimetype: 'application/json', fileName: 'database.json' }, { quoted: m })
addTypeCmd(command, 1)
break
case 'getsession':
if (!isLogin) return m.reply(mess.logout)
if (!isCreator) return m.reply(mess.owner)
m.reply(mess.wait)
const sessionget = await fs.readFileSync('./session.json')
await client.sendMessage(m.chat, { document: sessionget, mimetype: 'application/json', fileName: 'session.json' }, { quoted: m })
addTypeCmd(command, 1)
break
case 'eval':
if (!isCreator) return m.reply(mess.owner)
if (!text) return
try {
  let evaled = await eval(text)
  if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
  await m.reply(evaled)
} catch (err) {
  await m.reply(String(err))
}
addTypeCmd(command, 1)
break
case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				let buttons = [
                    { buttonId: '.start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                client.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await client.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, wm, m)
            }
			break
            case 'keluar': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                let room = Object.values(db.data.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: '.start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await client.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete db.data.anonymous[room.id];
            }
            break
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                if (Object.values(db.data.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: '.keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, wm, m)
                    throw false
                }
                let room = Object.values(db.data.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: '.next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: '.keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await client.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, wm, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await client.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, wm, m)
                } else {
                    let id = + new Date
                    db.data.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: '.keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, wm, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                let romeo = Object.values(db.data.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: '.start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await client.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete db.data.anonymous[romeo.id]
                let room = Object.values(db.data.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: '.next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: '.keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await client.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, wm, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await client.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, wm, m)
                } else {
                    let id = + new Date
                    db.data.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: '.keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, wm, m)
                }
                break
            }
// Default
default:
       if (handlerPlugin) return //Do not run while the plugin is responding.
       if (isCmd && prefix) {
           //Match List Command JSON
           did = didyoumean(command, _cmd, 'id') 
           sim = similarity(command, did)    
           if (did == null) return m.reply('*Command mungkin belum tersedia*. Silahkan ketik .request') 
           m.reply(`*Maksud kamu ${prefix + did}?*\n\n_Kecocokan ${sim * 100}%_`) 
       }
       if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
          let room = Object.values(db.data.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
          if (room) {
             if (/^.*(next|start)/.test(m.text)) return
             if (['.next', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
             let other = [room.a, room.b].find(user => user !== m.sender)
             m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                 contextInfo: {
                     ...m.msg.contextInfo,
                     forwardingScore: 0,
                     isForwarded: true,
                     participant: other
                 }
              } : {})
           }
           return !0
       }
     }
   } catch (err) {
     console.log(err)
     m.reply(util.format(err)).catch()
   }
}

//Menghapus Cache File ketika Diubah
let file = require.resolve(__filename)
fs.watchFile(file, () => {
   fs.unwatchFile(file)
   console.log(chalk.redBright(`Update ${__filename}`))
   delete require.cache[file]
   require(file)
})
