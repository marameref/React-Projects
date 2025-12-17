const { App } = require('@slack/bolt');

// Fill these in with the tokens you saved earlier!
const app = new App({
  token: 'xoxb-10169340898256-10134697090003-lY0Dshut3SecVdemkUBoeX4h',
  appToken: 'xapp-1-A0A4ZB7N8BS-10169393128352-3d7c9dcc3cbde67a348425e841fa20d73092331ffabac93ab0f59591ad0981ff',
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