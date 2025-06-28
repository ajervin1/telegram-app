// Import Telegram Bot
const TelegramBot = require("node-telegram-bot-api")

// Credentials required to connect to the Telegram bot
const token = '7831043785:AAFNZiRWL7b8Y4TYNIZo01SqytYdLELqspI';
const CHAT_ID = "5975819827"
// Create Bot Client
// Create a bot using 'polling' (long polling)
const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.on('message', async (msg) => {
	const chatId = msg.chat.id;
	const message = msg.text;
	await bot.sendMessage(chatId, "Message has been entered in the chat");
})