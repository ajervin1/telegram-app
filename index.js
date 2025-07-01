// Import Telegram Bot
process.env.NTBA_FIX_350 = '1';

const TelegramBot = require("node-telegram-bot-api")
const path = require('path');
const fs = require('fs')

// Credentials required to connect to the Telegram bot
const token = '7831043785:AAFNZiRWL7b8Y4TYNIZo01SqytYdLELqspI';
const CHAT_ID = "5975819827"
// Create Bot Client
// Create a bot using 'polling' (long polling)
const bot = new TelegramBot(token, {polling: false});

// Matches "/echo [whatever]"
// bot.on('message', async (msg) => {
// 	const chatId = msg.chat.id;
// 	const videoPath = path.join(__dirname, 'video.mp4');
// 	await bot.sendVideo(chatId, videoPath, {},{
// 		filename: 'nameoffile',
// 		contentType: "video/mp4"
// 	});
// });
async function sendVideoToTelegram(videoPath) {
	await bot.sendVideo(CHAT_ID, videoPath, {}, {
		filename: 'nameoffile',
		contentType: "video/mp4"
	});
}

// Todo Read Downloads Directory

// Todo Send Video to Telegram Function
function listDirectory(directory) {
	const files = fs.readdirSync(directory);
	return files.map(file => {
		const filePath = path.join(directory, file);
		return filePath
	})
}

// Function to send file to Telegram
async function sendFileToTelegram(filePath) {
	await bot.sendDocument(CHAT_ID, filePath);
	console.log(`File sent: ${filePath}`);
}

async function main() {
	const downloads_directory = path.join(__dirname, "downloads");

	const videoFiles = listDirectory(downloads_directory);

	for (const filePath of videoFiles) {
		await sendFileToTelegram(filePath)
	}
}
main()