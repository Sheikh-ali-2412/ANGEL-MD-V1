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


const axios = require('axios');
const { cmd } = require('../command');
const config = require('../config');
const { xeontext1 } = require('../my_data/xeontext1'); // Import your bug text

//======================================================================================================================
cmd({
    pattern: "bug",
    desc: "Simulate a hacker-style bug progress animation.",
    react: "🕵️‍♂️",
    category: "fun",
    filename: __filename
},
async (conn, mek, m, { reply, isOwner }) => {
    try {
        // Owner check
        if (!isOwner) {
            return reply("❌ You are not the owner! This command is restricted.");
        }

        // Define the progress bar stages
        const progressSteps = [
            '```[██████████] 10%``` ⏳',
            '```[███████████████████] 20%``` ⏳',
            '```[███████████████████████] 30%``` ⏳',
            '```[██████████████████████████] 40%``` ⏳',
            '```[███████████████████████████████] 50%``` ⏳',
            '```[█████████████████████████████████████] 60%``` ⏳',
            '```[██████████████████████████████████████████] 70%``` ⏳',
            '```[██████████████████████████████████████████████] 80%``` ⏳',
            '```[██████████████████████████████████████████████████] 90%``` ⏳',
            '```[████████████████████████████████████████████████████] 100%``` ✅',
            'Bug report complete!'
        ];

        // Send each progress step with a delay
        for (const step of progressSteps) {
            await reply(step);
            await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay
        }

        // Final text after progress bar finishes
        await reply(xeontext1); // Optional: Send bug report message
    } catch (e) {
        console.log(e);
        // Handle any errors
        return reply(`🚫 An error occurred: ${e.message}`);
    }
});
