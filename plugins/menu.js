const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({

    pattern: "menu",

    react: "🧚‍♂️",

    alias: ["panel","commands"],

    desc: "Get bot\'s command list.",

    category: "main",

    use: '.menu',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let menumsg = `
┏━━━━━━━━━━━━━━━━━━━━━━━━
> ʜɪɪ *${pushname}*
┗━━━━━━━━━━━━━━━━━━━━━━━━
> ┌─〈 ${config.BOT_NAME} 〉─◆*
╭─────────────···▸*
> ▸* *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
> ▸* *ᴍᴏᴅᴇ* : *[${config.MODE}]*
> ▸* *ᴘʀᴇғɪx* : *[${config.PREFIX}]*
> ▸* *ʀᴀᴍ ᴜsᴇ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
> ▸* *ᴠᴇʀsɪᴏɴs* : *ᴠ.1.0.0*
> ▸* *ᴍᴇɴᴜ ᴄᴍᴅ* : *ᴍᴇɴᴜ ʟɪsᴛ*
┗━━━━━━━━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━━━━━●●►
> 📥  *1*  DOWNLOAD
> 🔄  *2*  CONVERT
> 🔎  *3*  SERCH
> 👨‍💻  *4*  OWNER
> 🪀  *5*  GROUP
> 🫅  *6*  MAIN
> ✨  *7*  AI
> 🎳  *8*  RANDOM
> 🎳  *9* WALLPAPERS
> 🧣  *10*  OTHER
> 📃 *11* ALL CMD
┗━━━━━━━━━━━━━━━━━━━━━━●●►

🔢 *Reply the number you awant to select...* 
`
let downloadmenu = `
┏━━━━━━━━━━━━━━━━━━━━━━━━
> ʜɪɪ *${pushname}*
┗━━━━━━━━━━━━━━━━━━━━━━━━
┏━━━ *📥 DOWNLOADER-CMD 📥* 
┋ *.ғʙ <ᴜʀʟ>*
┋ *.ɪɴꜱᴛᴀ <ᴜʀʟ>*
┋ *.ᴠɪᴅᴇᴏ <ᴜʀʟ>*
┋ *.ɢᴅʀɪᴠᴇ <ᴜʀʟ>*
┋ *.ᴛᴡɪᴛᴛᴇʀ <ᴜʀʟ>*
┋ *.ᴛᴛ<ᴜʀʟ>*
┋ *.ᴍᴇᴅɪᴀғɪʀᴇ <ᴜʀʟ>*
┋ *.ꜱᴏɴɢ <ϙᴜᴇʀʏ>*
┋ *.ᴘʟᴀʏ <ᴜʀʟ>*
┋ *.ᴠɪᴅᴇᴏ <ϙᴜᴇʀʏ>*
┋ *.ᴠɪᴅᴇᴏ <ᴜʀʟ>*
┋ *.ɪᴍɢ <ϙᴜᴇʀʏ>*
┋ *.ᴀᴘᴋ <ɴᴀᴍᴇ>*
┋ *.ᴅᴀʀᴀᴍᴀ <ᴛɪᴛᴛʟᴇ>*
┋ *.ᴘʟᴀʏ2 <ᴛɪᴛᴛʟᴇ>*
┗━━━━━━━━━━━━━━━━━━━━━━●●►
`
let convertmenu = `
┏━━━━━━━━━━━━━━━━━━━━━━━━
> ʜɪɪ *${pushname}*
┗━━━━━━━━━━━━━━━━━━━━━━━━
┏━━━ *🎡 CONVERTER-CMD 🎡* 
┋ *.sᴛɪᴄᴋᴇʀ*
┗━━━━━━━━━━━━━━━━━━━━━━●●►
`
let searchmenu = `
┏━━━━━━━━━━━━━━━━━━━━━━━━
> ʜɪɪ *${pushname}*
┗━━━━━━━━━━━━━━━━━━━━━━━━
┏━━━ *🔎 SEARCH-CMD 🔍* 
┋ *.ʏᴛꜱ  <ᴛᴇxᴛ>*
┋ *.ʟᴏʟɪ <ᴛᴇxᴛ>*
┋ *.ᴍᴏᴠɪᴇ <ᴛᴇxᴛ>*
┋ *.ɪᴍɢ <ᴛᴇxᴛ>*
┋ *.ᴡᴇᴀᴛʜᴇʀ <ᴄɪᴛʏ>*
┗━━━━━━━━━━━━━━━━━━━━━━●●►
`

let ownermenu = `
┏━━━━━━━━━━━━━━━━━━━━━━━━
> ʜɪɪ *${pushname}*
┗━━━━━━━━━━━━━━━━━━━━━━━━
┏━━━ *👨‍💻 OWNER-CMD 👨‍💻*
┋ *.ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*
┋ *.ᴏᴡɴᴇʀ*
┋ *.ʀᴇᴘᴏ*
┋ *.ꜱʏꜱᴛᴇᴍ*
┋ *.ꜱᴛᴀᴛᴜꜱ*
┋ *.ʙʟᴏᴄᴋ*
┋ *.ᴜɴʙʟᴏᴄᴋ*
┋ *.sʜᴜᴛᴅᴏᴡɴ*
┋ *.ᴄʟᴇᴀʀᴄʜᴀᴛs*
┋ *.sᴇᴛᴘᴘ*
┋ *.ʙʀᴏᴀᴅᴄᴀsᴛ*
┋ *.ᴊɪᴅ*
┋ *.ɢᴊɪᴅ*
┋ *.ʀᴇꜱᴛᴀʀᴛ*
┗━━━━━━━━━━━━━━━━━━━━━━●●►
`

let groupmenu = `
┏━━━━━━━━━━━━━━━━━━━━━━━━
> ʜɪɪ *${pushname}*
┗━━━━━━━━━━━━━━━━━━━━━━━━
┏━━━ *👥 GROUP-CMD 👥*
┋ *.ʀᴇᴍᴏᴠᴇ <ʀᴇᴘʟʏ ғᴏʀ ᴅᴇʟᴇᴛᴇ sᴍs>*
┋ *.ᴅᴇʟᴇᴛᴇ <ʀᴇᴘʟʏ ғᴏʀ ᴅᴇʟᴇᴛᴇ sᴍs>*
┋ *.ᴀᴅᴅ*
┋ *.ᴋɪᴄᴋ*
┋ *.sᴇᴛɢᴏᴏᴅʙʏᴇ <ᴛᴇxᴛ>*
┋ *.sᴇᴛᴡᴇʟᴄᴏᴍᴇ <ᴛᴇxᴛ>*
┋ *.ᴘʀᴏᴍᴏᴛᴇ*
┋ *.ᴅᴇᴍᴏᴛᴇ*
┋ *.ᴛᴀɢᴀʟʟ*
┋ *.ɢᴇᴛᴘɪᴄ*
┋ *.ɪɴᴠɪᴛᴇ*
┋ *.ʀᴇᴠᴏᴋᴇ*
┋ *.ᴊᴏɪɴʀᴇǫᴜᴇsᴛs*
┋ *.ᴀʟʟʀᴇǫ*
┋ *.ᴍᴜᴛᴇ*
┋ *.ᴜɴᴍᴜᴛᴇ*
┋ *.ʟᴏᴄᴋɢᴄ*
┋ *.ᴜɴʟᴏᴄᴋɢᴄ*
┋ *.ʟᴇᴀᴠᴇ*
┋ *.ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ*
┋ *.ᴜᴘᴅᴀᴛᴇɢᴅᴇsᴄ*
┋ *.ᴊᴏɪɴ*
┋ *.ʜɪᴅᴇᴛᴀɢ*
┋ *.ɢɪɴғᴏ*
┋ *.ᴅɪsᴀᴘᴘᴇᴀʀ ᴏɴ*
┋ *.ᴅɪsᴀᴘᴘᴇᴀʀ ᴏғғ*
┋ *.ᴅɪsᴀᴘᴘᴇᴀʀ 7ᴅ 24ʜ 90ᴅ*
┋ *.sᴇɴᴅᴅᴍ*
┗━━━━━━━━━━━━━━━━━━━━━━●●►
`

let mainmenu = `
┏━━━━━━━━━━━━━━━━━━━━━━━━
> ʜɪɪ *${pushname}*
┗━━━━━━━━━━━━━━━━━━━━━━━━
┏━━━ *📃 MAIN-CMD 📃*
┋ *.ᴍᴇɴᴜ*
┋ *.ᴍᴇɴᴜ2*
┋ *.ᴍᴇɴᴜ3*
┋ *.ᴀʙᴏᴜᴛ*
┋ *.sᴄʀɪᴘᴛ*
┋ *.ʀᴇᴘᴏ*
┋ *.ᴀʟɪᴠᴇ*
┋ *.ʙᴏᴛɪɴꜰᴏ*
┋ *.ꜱᴛᴀᴛᴜꜱ*
┋ *.ꜱᴜᴘᴘᴏʀᴛ*
┋ *.ᴘɪɴɢ*
┋ *.ᴘɪɴɢ2*
┋ *.ꜱʏꜱᴛᴇᴍ*
┗━━━━━━━━━━━━━━━━━━━━━━●●►
`

let AImenu = `
┏━━━━━━━━━━━━━━━━━━━━━━━━
> ʜɪɪ *${pushname}*
┗━━━━━━━━━━━━━━━━━━━━━━━━
┏━━━ *🧠 AI-CMD 🧠* 
┋ *.ɢᴘᴛ <ᴛᴇxᴛ>*
┋ *.ᴀɪ <ᴛᴇxᴛ>*
┗━━━━━━━━━━━━━━━━━━━━━━●●►
`
let randommenu = `
┏━━━━━━━━━━━━━━━━━━━━━━━━
> ʜɪɪ *${pushname}*
┗━━━━━━━━━━━━━━━━━━━━━━━━
┏━━━ *⛱️ RANDOM-CMD ⛱️*
┋ *.ᴋɪɴɢ*
┋ *.ᴅᴏɢ*
┋ *.ᴀɴɪᴍᴇ*
┋ *.ᴀɴɪᴍᴇɢɪʀʟ*
┋ *.ᴀɴɪᴍᴇɢɪʀʟ1*
┋ *.ᴀɴɪᴍᴇɢɪʀʟ2*
┋ *.ᴀɴɪᴍᴇɢɪʀʟ3*
┋ *.ᴀɴɪᴍᴇɢɪʀʟ4*
┋ *.ᴀɴɪᴍᴇɢɪʀʟ5*
┗━━━━━━━━━━━━━━━━━━━━━━●●►
`
let othermenu = `
┏━━━━━━━━━━━━━━━━━━━━━━━━
> ʜɪɪ *${pushname}*
┗━━━━━━━━━━━━━━━━━━━━━━━━
┏━━━ *🌐 OTHER-CMD 🌐* 
┋ *.ᴛʀᴛ*
┋ *.ᴊᴏᴋᴇ*
┋ *.ᴍᴏᴠɪᴇ*
┋ *.ꜰᴀᴄᴛ*
┋ *.ɢɪᴛʜᴜʙꜱᴛᴀʟᴋ*
┋ *.ɢᴘᴀꜱꜱ*
┋ *.ʜᴀᴄᴋ*
┋ *.ǫᴜᴏᴛᴇ*
┋ *.ꜱʀᴇᴘᴏ*
┋ *.ᴅᴇꜰɪɴᴇ*
┗━━━━━━━━━━━━━━━━━━━━━━●●►
`
let wallpapersmenu = `
┏━━━━━━━━━━━━━━━━━━━━━━━━
> ʜɪɪ *${pushname}*
┗━━━━━━━━━━━━━━━━━━━━━━━━
┏━━━  *🏜️ WALLPAPERS-CMD 🏜️* 
┋ *.ɪᴍɢ*
┗━━━━━━━━━━━━━━━━━━━━━━●●►
`

let = allmenu = `
┏━━━━━━━━━━━━━━━━━━━━━━━━
> ʜɪɪ *${pushname}*
┗━━━━━━━━━━━━━━━━━━━━━━━━
> ┌─〈 ${config.BOT_NAME} 〉─◆*
╭─────────────···▸*
> ▸* *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
> ▸* *ᴍᴏᴅᴇ* : *[${config.MODE}]*
> ▸* *ᴘʀᴇғɪx* : *[${config.PREFIX}]*
> ▸* *ʀᴀᴍ ᴜsᴇ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
> ▸* *ᴠᴇʀsɪᴏɴs* : *ᴠ.1.0.0*
> ▸* *ᴍᴇɴᴜ ᴄᴍᴅ* : *ᴍᴇɴᴜ ʟɪsᴛ*
┗━━━━━━━━━━━━━━━━━━━━━━━━
┏━━━ *📥 DOWNLOADER-CMD 📥* 
┋ *.ғʙ <ᴜʀʟ>*
┋ *.ɪɴꜱᴛᴀ <ᴜʀʟ>*
┋ *.ᴠɪᴅᴇᴏ <ᴜʀʟ>*
┋ *.ɢᴅʀɪᴠᴇ <ᴜʀʟ>*
┋ *.ᴛᴡɪᴛᴛᴇʀ <ᴜʀʟ>*
┋ *.ᴛᴛ<ᴜʀʟ>*
┋ *.ᴍᴇᴅɪᴀғɪʀᴇ <ᴜʀʟ>*
┋ *.ꜱᴏɴɢ <ϙᴜᴇʀʏ>*
┋ *.ᴘʟᴀʏ <ᴜʀʟ>*
┋ *.ᴠɪᴅᴇᴏ <ϙᴜᴇʀʏ>*
┋ *.ᴠɪᴅᴇᴏ <ᴜʀʟ>*
┋ *.ɪᴍɢ <ϙᴜᴇʀʏ>*
┋ *.ᴀᴘᴋ <ɴᴀᴍᴇ>*
┋ *.ᴅᴀʀᴀᴍᴀ <ᴛɪᴛᴛʟᴇ>*
┋ *.ᴘʟᴀʏ2 <ᴛɪᴛᴛʟᴇ>*
┗━━━━━━━━━━━━━━━━━━━━━━●●►
┏━━━ *🔎 SEARCH-CMD 🔍* 
┋ *.ʏᴛꜱ  <ᴛᴇxᴛ>*
┋ *.ʟᴏʟɪ <ᴛᴇxᴛ>*
┋ *.ᴍᴏᴠɪᴇ <ᴛᴇxᴛ>*
┋ *.ɪᴍɢ <ᴛᴇxᴛ>*
┋ *.ᴡᴇᴀᴛʜᴇʀ <ᴄɪᴛʏ>*
┗━━━━━━━━━━━━━━━━━━━━━━●●►
┏━━━ *🧠 AI-CMD 🧠* 
┋ *.ɢᴘᴛ <ᴛᴇxᴛ>*
┋ *.ᴀɪ <ᴛᴇxᴛ>*
┗━━━━━━━━━━━━━━━━━━━━━━●●►
┏━━━ *👨‍💻 OWNER-CMD 👨‍💻*
┋ *.ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*
┋ *.ᴏᴡɴᴇʀ*
┋ *.ʀᴇᴘᴏ*
┋ *.ꜱʏꜱᴛᴇᴍ*
┋ *.ꜱᴛᴀᴛᴜꜱ*
┋ *.ʙʟᴏᴄᴋ*
┋ *.ᴜɴʙʟᴏᴄᴋ*
┋ *.sʜᴜᴛᴅᴏᴡɴ*
┋ *.ᴄʟᴇᴀʀᴄʜᴀᴛs*
┋ *.sᴇᴛᴘᴘ*
┋ *.ʙʀᴏᴀᴅᴄᴀsᴛ*
┋ *.ᴊɪᴅ*
┋ *.ɢᴊɪᴅ*
┋ *.ʀᴇꜱᴛᴀʀᴛ*
┗━━━━━━━━━━━━━━━━━━━━━━●●►
┏━━━ *👥 GROUP-CMD 👥*
┋ *.ʀᴇᴍᴏᴠᴇ <ʀᴇᴘʟʏ ғᴏʀ ᴅᴇʟᴇᴛᴇ sᴍs>*
┋ *.ᴅᴇʟᴇᴛᴇ <ʀᴇᴘʟʏ ғᴏʀ ᴅᴇʟᴇᴛᴇ sᴍs>*
┋ *.ᴀᴅᴅ*
┋ *.ᴋɪᴄᴋ*
┋ *.sᴇᴛɢᴏᴏᴅʙʏᴇ <ᴛᴇxᴛ>*
┋ *.sᴇᴛᴡᴇʟᴄᴏᴍᴇ <ᴛᴇxᴛ>*
┋ *.ᴘʀᴏᴍᴏᴛᴇ*
┋ *.ᴅᴇᴍᴏᴛᴇ*
┋ *.ᴛᴀɢᴀʟʟ*
┋ *.ɢᴇᴛᴘɪᴄ*
┋ *.ɪɴᴠɪᴛᴇ*
┋ *.ʀᴇᴠᴏᴋᴇ*
┋ *.ᴊᴏɪɴʀᴇǫᴜᴇsᴛs*
┋ *.ᴀʟʟʀᴇǫ*
┋ *.ᴍᴜᴛᴇ*
┋ *.ᴜɴᴍᴜᴛᴇ*
┋ *.ʟᴏᴄᴋɢᴄ*
┋ *.ᴜɴʟᴏᴄᴋɢᴄ*
┋ *.ʟᴇᴀᴠᴇ*
┋ *.ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ*
┋ *.ᴜᴘᴅᴀᴛᴇɢᴅᴇsᴄ*
┋ *.ᴊᴏɪɴ*
┋ *.ʜɪᴅᴇᴛᴀɢ*
┋ *.ɢɪɴғᴏ*
┋ *.ᴅɪsᴀᴘᴘᴇᴀʀ ᴏɴ*
┋ *.ᴅɪsᴀᴘᴘᴇᴀʀ ᴏғғ*
┋ *.ᴅɪsᴀᴘᴘᴇᴀʀ 7ᴅ 24ʜ 90ᴅ*
┋ *.sᴇɴᴅᴅᴍ*
┗━━━━━━━━━━━━━━━━━━━━━━●●►
┏━━━ *📃 MAIN-CMD 📃*
┋ *.ᴍᴇɴᴜ*
┋ *.ᴀʙᴏᴜᴛ*
┋ *.sᴄʀɪᴘᴛ*
┋ *.ʀᴇᴘᴏ*
┋ *.ᴀʟɪᴠᴇ*
┋ *.ʙᴏᴛɪɴꜰᴏ*
┋ *.ꜱᴛᴀᴛᴜꜱ*
┋ *.ꜱᴜᴘᴘᴏʀᴛ*
┋ *.ᴘɪɴɢ*
┋ *.ᴘɪɴɢ2*
┋ *.ꜱʏꜱᴛᴇᴍ*
┗━━━━━━━━━━━━━━━━━━━━━━●●►
┏━━━ *🎡 CONVERTER-CMD 🎡* 
┋ *.sᴛɪᴄᴋᴇʀ*
┗━━━━━━━━━━━━━━━━━━━━━━●●►
┏━━━ *⛱️ RANDOM-CMD ⛱️*
┋ *.ᴋɪɴɢ*
┋ *.ᴅᴏɢ*
┋ *.ᴀɴɪᴍᴇ*
┋ *.ᴀɴɪᴍᴇɢɪʀʟ*
┋ *.ᴀɴɪᴍᴇɢɪʀʟ1*
┋ *.ᴀɴɪᴍᴇɢɪʀʟ2*
┋ *.ᴀɴɪᴍᴇɢɪʀʟ3*
┋ *.ᴀɴɪᴍᴇɢɪʀʟ4*
┋ *.ᴀɴɪᴍᴇɢɪʀʟ5*
┗━━━━━━━━━━━━━━━━━━━━━━●●►
┏━━━  *🏜️ WALLPAPERS-CMD 🏜️* 
┋ *.ɪᴍɢ*
┗━━━━━━━━━━━━━━━━━━━━━━●●►
┏━━━ *🌐 OTHER-CMD 🌐* 
┋ *.ᴛʀᴛ*
┋ *.ᴊᴏᴋᴇ*
┋ *.ᴍᴏᴠɪᴇ*
┋ *.ꜰᴀᴄᴛ*
┋ *.ɢɪᴛʜᴜʙꜱᴛᴀʟᴋ*
┋ *.ɢᴘᴀꜱꜱ*
┋ *.ʜᴀᴄᴋ*
┋ *.ǫᴜᴏᴛᴇ*
┋ *.ꜱʀᴇᴘᴏ*
┋ *.ᴅᴇꜰɪɴᴇ*
┗━━━━━━━━━━━━━━━━━━━━━━●●►
`


const sentMsg = await conn.sendMessage(from, { image: {url: config.ALIVE_IMG}, caption: menumsg }, { quoted: mek });
const messageID = sentMsg.key.id; 



conn.ev.on('messages.upsert', async (messageUpdate) => {
const mek = messageUpdate.messages[0];
if (!mek.message) return;
const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
const from = mek.key.remoteJid;
const sender = mek.key.participant || mek.key.remoteJid;


const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;

if (isReplyToSentMsg) {

await conn.sendMessage(from, { react: { text: '🆗', key: mek.key } });

if (messageType === '1') {
await conn.sendMessage(from, { image: {url: config.ALIVE_IMG}, caption: downloadmenu }, { quoted: mek });
} else if (messageType === '2') {
await conn.sendMessage(from, { image: {url: config.ALIVE_IMG}, caption: convertmenu }, { quoted: mek });
} else if (messageType === '3') {
await conn.sendMessage(from, { image: {url: config.ALIVE_IMG}, caption: searchmenu }, { quoted: mek });
} else if (messageType === '4') {
await conn.sendMessage(from, { image: {url: config.ALIVE_IMG}, caption: ownermenu }, { quoted: mek });
} else if (messageType === '5') {
await conn.sendMessage(from, { image: {url: config.ALIVE_IMG}, caption: groupmenu }, { quoted: mek });
} else if (messageType === '6') {
await conn.sendMessage(from, { image: {url: config.ALIVE_IMG}, caption: mainmenu }, { quoted: mek });
} else if (messageType === '7') {
await conn.sendMessage(from, { image: {url: config.ALIVE_IMG}, caption: AImenu }, { quoted: mek });
} else if (messageType === '8') {
await conn.sendMessage(from, { image: {url: config.ALIVE_IMG}, caption:  wallpapersmenu }, { quoted: mek });
} else if (messageType === '9') {
await conn.sendMessage(from, { image: {url: config.ALIVE_IMG}, caption: randommenu }, { quoted: mek });
} else if (messageType === '10') {
await conn.sendMessage(from, { image: {url: config.ALIVE_IMG}, caption: othermenu }, { quoted: mek });
} else if (messageType === '11') {
await conn.sendMessage(from, { image: {url: config.ALIVE_IMG}, caption: allmenu }, { quoted: mek });
}
}
});

} catch (e) {
console.log(e);
reply(`⚠️ * Error➤*‼️ ${e}`);
}
});*/
