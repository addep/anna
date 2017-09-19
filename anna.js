const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

const config = require("./config.json");



client.on("ready", () => {
  console.log("I am ready");
});

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  if (message.content.startsWith(config.prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(config.prefix + "foo")) {
    message.channel.send("bar!");
  }
});

client.on("message", (message) => {
  if(message.content.startsWith(config.prefix + "prefix")) {
    let newPrefix = message.content.split(" ").slice(1, 2)[0];
    config.prefix = newPrefix;
    fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
    message.channel.send('New prefix: ' +config.prefix);
  };
});

client.on("message", (message) => {
  if(message.content.startsWith(config.prefix + "embed")) {
    message.channel.send({embed: {
      color: 1235644,
      title: "A terrifying combination",
      description: "<:batrider:357884527844261888> Bat Ryder \n<:kunkka:357884916563705857> Kunkka",
    }})
  }

});

client.login(config.token);
