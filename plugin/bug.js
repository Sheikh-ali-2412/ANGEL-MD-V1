const axios = require('axios');
const { cmd, commands } = require('../command');
const config = require('../config');
const { xeontext1 } = require('../my_data/xeontext1'); 


//======================================================================================================================
cmd({
    pattern: "bug",
    desc: "Send a bug report message.",
    react: "✔",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { reply }) => {
    try {
        const senderNumber = m.sender;

       
        return reply(xeontext1);
    } catch (e) {
        console.log(e);
        // Handle any errors by replying with the error message
        return reply(`${e}`);
    }
});
