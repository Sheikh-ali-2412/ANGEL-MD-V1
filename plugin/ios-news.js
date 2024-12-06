cmd({
    pattern: "hiru",
    react: "🍎",
    desc: tmsg,
    category: "search",
    use: '.ios',
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const data = await fetchJson(`https://vajira-api.vercel.app/news/hiru`);
let info = `*📃 Title :* ${data.result.title}
*🕒 Time:* ${data.result.date} 
*⛓️ Link:* ${data.result.link}
*📚 Description:* ${data.result.desc}
`
return await conn.sendMessage(from, { image: { url: data.img} , caption: info } , { quoted: mek })
} catch (e) {
l(e)
}
})
