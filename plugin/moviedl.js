const axios = require('axios');
const { cmd } = require("../command");
const { sinhalaSub } = require("mrnima-moviedl");
const apilink = 'https://www.dark-yasiya-api.site'
const cheerio = require("cheerio")

cmd({
  pattern: "sinhalasub",
  alias: ["movie"],
  react: '📑',
  category: "download",
  desc: "Search movies on SinhalaSub and get download links",
  filename: __filename
}, async (client, message, msgInfo, { from, q, reply }) => {
  try {
    if (!q) {
      return await reply("*Please provide a search query! (e.g., Deadpool)*");
    }
    
    // Search movies on SinhalaSub
    const sinhalasubInstance = await sinhalaSub();
    const searchResults = await sinhalasubInstance.search(q);
    const limitedResults = searchResults.result.slice(0, 10);

    if (!limitedResults.length) {
      return await reply("No results found for: " + q);
    }

    // Display search results
    let responseText = `📽️ *Search Results for* "${q}":\n\n`;
    limitedResults.forEach((result, index) => {
      responseText += `*${index + 1}.* ${result.title}\n🔗 Link: ${result.link}\n\n`;
    });

    const sentMessage = await client.sendMessage(from, { text: responseText }, { quoted: msgInfo });
    const sentMessageId = sentMessage.key.id;

    // Handle user reply for selection
    client.ev.on("messages.upsert", async event => {
      const newMessage = event.messages[0];
      if (!newMessage.message) return;

      const userMessage = newMessage.message.conversation || newMessage.message.extendedTextMessage?.text;
      const isReplyToSearch = newMessage.message.extendedTextMessage && newMessage.message.extendedTextMessage.contextInfo.stanzaId === sentMessageId;

      if (isReplyToSearch) {
        const selectedNumber = parseInt(userMessage.trim());
        if (!isNaN(selectedNumber) && selectedNumber > 0 && selectedNumber <= limitedResults.length) {
          const selectedMovie = limitedResults[selectedNumber - 1];
          const apiUrl = `https://www.dark-yasiya-api.site/movie/sinhalasub/movie?url=${encodeURIComponent(selectedMovie.link)}`;

          try {
            const movieDetails = await axios.get(apiUrl);
            const downloadLinks = movieDetails.data.result.dl_links || [];

            if (!downloadLinks.length) {
              return await reply("No download links found for this movie.");
            }

            // Display download links
            let downloadText = `🎥 *${movieDetails.data.result.title}*\n\n*Available Download Links:*\n`;
            downloadLinks.forEach((link, index) => {
              downloadText += `*${index + 1}.* ${link.quality} - ${link.size}\n🔗 Link: ${link.link}\n\n`;
            });

            await client.sendMessage(from, { text: downloadText }, { quoted: newMessage });
          } catch (error) {
            console.error("Error fetching movie details:", error);
            await reply("An error occurred while fetching movie details. Please try again.");
          }
        } else {
          await reply("Invalid selection. Please reply with a valid number.");
        }
      }
    });
  } catch (error) {
    console.error("Error during search:", error);
    await reply("*An error occurred while searching!*");
  }
});
