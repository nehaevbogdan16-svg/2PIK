const TelegramBot = require('node-telegram-bot-api');

const fs = require('fs');

const token = 'ТВОЙ_ТОКЕН';

const bot = new TelegramBot(token, { polling: true });

const DB_PATH = '../server/database.json';

bot.onText(/\/add (.+)/, (msg, match) => {

    const [nickname, role, id] = match[1].split(',');

    const data = JSON.parse(fs.readFileSync(DB_PATH));

    data.push({ nickname, role, id, avatar: "" });

    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

    bot.sendMessage(msg.chat.id, "Добавлен ✅");

});

bot.onText(/\/delete (.+)/, (msg, match) => {

    let data = JSON.parse(fs.readFileSync(DB_PATH));

    data = data.filter(m => m.id !== match[1]);

    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

    bot.sendMessage(msg.chat.id, "Удалён ❌");

});

bot.onText(/\/list/, (msg) => {

    const data = JSON.parse(fs.readFileSync(DB_PATH));

    const text = data.map(m => `${m.nickname} (${m.role})`).join('\n');

    bot.sendMessage(msg.chat.id, text);

});
