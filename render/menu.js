//List Menu
global.textTemplateMenu = (regards, pushname, wib, wita, wit, week, date, runtime, formatNumber, levelMenu) => {

return `Hai, selamat ${regards} ${pushname}! 👋

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
*Saldo Neybot:* ${formatNumber('0')} IDR
*Limit:* ${isLogin ? (global.db.data.account[accountUsers].limit !== 'Infinity' ? formatNumber(global.db.data.account[accountUsers].limit) : global.db.data.account[accountUsers].limit) : "notlogin"}
*Status:* ${isPremium ? 'Premium' : 'Gratis'}

*Game*
▢ ${prefix}suit
▢ ${prefix}tictactoe
▢ ${prefix}delttt

*Fun*
▢ ${prefix}react
▢ ${prefix}math

*Account*
▢ ${prefix}login
▢ ${prefix}register
▢ ${prefix}resetpassword 
▢ ${prefix}logout

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

*Main*
▢ ${prefix}afk
▢ ${prefix}delete
▢ ${prefix}ping
▢ ${prefix}speedtest
▢ ${prefix}donasi
▢ ${prefix}request
▢ ${prefix}owner
▢ ${prefix}runtime

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
▢ ${prefix}promote
▢ ${prefix}demote
▢ ${prefix}announce
▢ ${prefix}getprofile
▢ ${prefix}tagall

*Owner*
▢ ${prefix}public
▢ ${prefix}broadcast
▢ ${prefix}getsession
▢ ${prefix}self
▢ ${prefix}notice
▢ ${prefix}setppbot`
}
