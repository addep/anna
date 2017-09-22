const Discord = module.require("discord.js");
const e = require("../emoji.json");


module.exports.run = async (bot, message, args) => {
  message.channel.send("initiating draft sequence..")

  const emoji = message.guild.emojis.map(e=>e.toString()).join(" ");

  var keys = Object.keys(e);


  var full_message = "";

  for (var i = 0; i < Math.min(50, keys.length); i++) {
    var str = e[keys[i]];
    //str = str.substring(0, str.length - 1);
    full_message += "" + str;

  }

  console.log(full_message);
  let embed = new Discord.RichEmbed()
  .setDescription(full_message);
  message.channel.send({embed : embed});


}

module.exports.help = {
  name: "draft"
}
