const Discord = module.require("discord.js");
const heroes = require("../heroes.json");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {

    let title = args[0];

    if(!(heroes[args[1]])) return message.channel.send("!embed tittel <heroes>")

    if((heroes[args[1]])) {

      let lineup = "";

      for (var i = 1; i < args.length; i++){
        if (typeof heroes[args[i]] !== 'undefined') {
          let hero = heroes[args[i]]
          lineup += `${hero.emoji}\t${hero.name}\n`;
        }
      }

      let embed = new Discord.RichEmbed()
      .setColor(`#ff3377`)
      .addField(title, lineup)
      .setColor("#"+((1<<24)*Math.random()|0).toString(16));
      message.channel.send(embed)

      .then (function(message) {
        for (var i = 1; i < args.length; i++){
          let hero = heroes[args[i]]
          let reaction = hero.emoji.slice(-19).replace(">", "");
          message.react(reaction);
        }
      });

      console.log(`#${message.author.username}: ${message.content}`);
    }
}

module.exports.help = {
  name: "embed"
}
