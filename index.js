// Import Telegram Bot
const TelegramBot = require("node-telegram-bot-api")

// Credentials required to connect to the Telegram bot
const TELEGRAM_BOT_API_TOKEN = "7831043785:AAFNZiRWL7b8Y4TYNIZo01SqytYdLELqspI"
const TELEGRAM_CHAT_ID = "5975819827"
// Create Bot Client
const bot = new TelegramBot(TELEGRAM_BOT_API_TOKEN)

async function sendChatMessage(TELEGRAM_CHAT_ID, message){
	await bot.sendMessage(TELEGRAM_CHAT_ID, message)
}

async function main(){
	await sendChatMessage(TELEGRAM_CHAT_ID, "Hello World")
}
main()