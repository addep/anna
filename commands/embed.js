const Discord = module.require("discord.js");
const e = require("../emoji.json");

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
  .setDescription(`Test Embed`)
  .setColor(`#ff0066`)
  .addField(`${e.clinkz}`);
  message.channel.send({embed: embed});
}

module.exports.help = {
  name: "embed"
}
