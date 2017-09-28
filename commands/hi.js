const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
  console.log("hi");
  message.channel.send(`hi`);
}

module.exports.help = {
  name: "hi"
}
