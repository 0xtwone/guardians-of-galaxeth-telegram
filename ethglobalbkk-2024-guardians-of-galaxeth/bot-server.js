require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const cors = require('cors');

const token = '7806216487:AAELcPeV7zyEapytyrWDCQzSaPRGrsJihHU';

const webAppUrl = process.env.WEBAPP_URL;

const bot = new TelegramBot(token, {polling: true});
const app = express();

app.use(cors());
app.use(express.json());

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, '欢迎来到 Guardians of Galaxeth！', {
        reply_markup: {
            inline_keyboard: [[
                {
                    text: '开始游戏',
                    web_app: {url: webAppUrl}
                }
            ]]
        }
    });
});

bot.on('web_app_data', (msg) => {
    const chatId = msg.chat.id;
    try {
        const data = JSON.parse(msg.web_app_data.data);
        if (data.action === 'gameOver') {
            bot.sendMessage(chatId, `游戏结束！你的得分是: ${data.score}`);
        }
    } catch (err) {
        console.error('Error processing web_app_data:', err);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Bot server running on port ${PORT}`);
}); 