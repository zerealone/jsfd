# JSFD
An npm package to help people with discord.js functions (The functions are similar to BDFD functions, that's why the package called JSFD).

## How to use
```js
const { Client, GatewayIntentBits } = require('discord.js'); //the discord.js library. you must add this in order to use also JSFD and to connect to your bot.
const client = new Client({ intents: [GatewayIntentBits.Guilds] }); //the bot intenets. you can change this to whatever you want.
const JSFD = require('jsfd'); //adds the package

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`); //once the client ready, this message will be sent to the console
});

client.on('interactionCreate', async cmd => { //when an interaction creates. If you use other variable (that is not 'cmd' like here in the example) please change where there is 'cmd' also in the next lines to that var
  if (!cmd.isChatInputCommand()) return;
  if(cmd.commandName === 'ping'){ //you need to register your slash commands before use this.
      let message = JSFD.message(cmd)
      await cmd.reply(message.code(`<@$authorID> Pong! 🏓`)); //reply to the interaction with '<@{the interaction author id}> Pong! 🏓'
    }
});
```
The code used in the `message.code` function is just an example. A full list of the available functions are below, at the end of this README file. 

### `message.code()`
`message.code` is a function that convert the string that is in the `('')` to a discord.js function.

### `JSFD.message()`
This function **must** to be before the `message.code` function, to make this work. If there is no valid `JSFD.message()` function, there will be many errors.

## Functions List
- `$authorID` - The interaction author id.
- `$messageID` - The interaction message id.
- `$botID` - The id of the bot.
- `$channelID` - The id of the channel the interaction sent in.
- `$guildID` - The id of the guild the interaction sent in.
- `$interactionName` - The name of the interaction used.
- `$avatarUrl` - The url of the avatar of the interaction author. (Added in `0.17.0`)
- `$year` - The current year. (Added in `0.17.0`)
- `$month` - The current month. (Added in `0.17.0`)
- `$fullDate` - The full date. (Added in `0.17.0`)
- `$time` - The current time. (Added in `0.17.0`)
- `$memberGuildIcon` - The icon of the author of the interaction in the guild (the custom avatar), if he have one.
If the author does not have one, it will return the normal avatar of the user. (Added in `0.17.0`)
- `$uptime` - The uptime in minutes, hours and seconds. (Added in `0.17.0`)
- `$guildName` - The guild name. (Added in `0.17.0`)

## Issues?
Go to the `issues` tab and report it there. If you need other help, or have any ideas, you can open an issue for an idea, or just DM me on discord : `ZeRealOne#3663`.
