const config = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");

const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
const prefix = config.prefix;


fs.readdir("./commands/", (err, files) => {
  if(err) console.error(err);
  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if(jsfiles.length <= 0) {
    console.log("Kommandomappen er tom.");
    return;
  }

  console.log(`Henter ${jsfiles.length} kommandoer...`);

  jsfiles.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${i + 1}: ${f} lastet`)
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", () => {
  console.log("alt klart");
  console.log(bot.commands);
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArray = message.content.split(/\s+/g);
  let command = messageArray[0];
  let args = messageArray.slice(1);

  if(!command.startsWith(prefix)) return;
  let cmd = bot.commands.get(command.slice(prefix.length));
  if(cmd) cmd.run(bot, message, args);
});

bot.login(config.token);
