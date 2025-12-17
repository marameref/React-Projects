require('dotenv').config(); // This loads the .env file
const { App } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,   // Uses the variable from .env
  appToken: process.env.SLACK_APP_TOKEN, // Uses the variable from .env
  socketMode: true,
});

// Logic for the /hello command
app.command('/hello', async ({ command, ack, say }) => {
  await ack(); // Tell Slack we received the command
  await say(`Hello <@${command.user_id}>! Your bot is working! 🎉`);
});

// Logic to log every message it hears
app.message(async ({ message }) => {
  console.log(`The bot heard: "${message.text}"`);
});

(async () => {
  await app.start();
  console.log('⚡️ Your Slack bot is running and waiting for messages!');
})();