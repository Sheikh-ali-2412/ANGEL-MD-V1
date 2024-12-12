const axios = require('axios');
const { cmd, commands } = require('../command');
const config = require('../config');
const { xeontext1 } = require('../my_data/xeontext1');

//======================================================================================================================
cmd({
    pattern: "bug2",
    desc: "Simulate a hacker-style bug progress animation for bug2.",
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

        // Define the progress bar stages for bug2
        const progressSteps = [
            '```[███████] 10%``` ⏳',
            '```[██████████████████] 50%``` ⏳',
            '```[████████████████████████] 100%``` ✅',
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

//======================================================================================================================
cmd({
    pattern: "bug3",
    desc: "Simulate a hacker-style bug progress animation for bug3.",
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

        // Define the progress bar stages for bug3
        const progressSteps = [
            '```[███████] 10%``` ⏳',
            '```[██████████████████] 50%``` ⏳',
            '```[████████████████████████] 100%``` ✅',
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
