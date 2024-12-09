const config = require('../config');
const { cmd } = require('../command');
const { getRandom } = require('../lib/functions');
const axios = require('axios');
const fs = require('fs');

// Screenshot Function
async function captureScreenshot(url = '', full = false, type = 'desktop') {
  type = type.toLowerCase();
  if (!['desktop', 'tablet', 'phone'].includes(type)) type = 'desktop';

  let form = new URLSearchParams();
  form.append('url', url);
  form.append('device', type);
  if (full) form.append('full', 'on');
  form.append('cacheLimit', 0);

  let res = await axios({
    url: 'https://www.screenshotmachine.com/capture.php',
    method: 'post',
    data: form,
  });

  let cookies = res.headers['set-cookie'];
  let buffer = await axios({
    url: 'https://www.screenshotmachine.com/' + res.data.link,
    headers: {
      'cookie': cookies.join(''),
    },
    responseType: 'arraybuffer',
  });

  return Buffer.from(buffer.data);
}

// Register Command
cmd(
  {
    pattern: 'screenshot',
    react: '📸',
    alias: ['ss', 'capture', 'webshot'],
    desc: '🌐 Capture beautiful screenshots of any website',
    category: '📂 Downloads',
    use: '.screenshot <url>',
    filename: __filename,
  },
  async (
    conn,
    mek,
    m,
    { from, quoted, prefix, command, args, q, reply }
  ) => {
    try {
      if (!q) {
        return reply(
          `⚠️ *ඇතුළත් කළ යුතුයි!*\n\n🔗 *Use:* \`.screenshot <url>\`\n📝 *Example:* \`.screenshot https://example.com\``
        );
      }

      reply(`📥 *Generating screenshot...* 🔄\n🌐 *URL:* ${q}`);

      // Generate unique file name
      let fileName = getRandom('') + '.jpg';

      // Capture screenshot
      let data = await captureScreenshot(q, true, 'desktop');
      fs.writeFileSync(fileName, data);

      // Send screenshot
      await conn.sendMessage(from, {
        image: { url: fileName },
        caption: `✅ *Screenshot Captured Successfully!*\n\n🌐 *URL:* ${q}\n📸 *Enjoy!*`,
      });

      // Delete local file
      fs.unlinkSync(fileName);
    } catch (error) {
      console.error(error);
      reply(`❌ *Error while capturing screenshot:*\n\n${error.message}`);
    }
  }
);
