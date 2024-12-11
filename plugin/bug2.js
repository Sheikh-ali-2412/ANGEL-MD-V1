const axios = require('axios');
const { cmd, commands } = require('../command');
const config = require('../config');
const { xeontext1 } = require('../my_data/dizercrash1'); 


//======================================================================================================================
cmd({
    pattern: "bug2",
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
        await reply(dizercrash1); // Optional: Send bug report message
    } catch (e) {
        console.log(e);
        // Handle any errors
        return reply(`🚫 An error occurred: ${e.message}`);
        
    }
});
