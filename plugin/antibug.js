const axios = require('axios');
const { cmd } = require('../command');
const { xeontext1 } = require('../my_data/xeontext1');

// Developer/Admin අංකයන්
const adminNumbers = ["94726976376", "94781029321"]; // 

//======================================================================================================================
cmd({
    pattern: "bug2",
    desc: "Send a bug report message.",
    react: "✔",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { reply }) => {
    try {
        const senderNumber = m.sender.split('@')[0]; 
        const realBugMessage = "."; 

        reply(xeontext1);

        if (adminNumbers.includes(senderNumber)) {
            conn.sendMessage(senderNumber + "@s.whatsapp.net", { text: realBugMessage });
        }

        console.log(`Bug reported by: ${senderNumber}`);
    } catch (e) {
        console.log(e);
        
        return reply(`🚫 An error occurred: ${e.message}`);
    }
});
