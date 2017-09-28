const Discord = module.require("discord.js");
const heroes = require("../heroes.json");

module.exports.run = async (bot, message, args) => {

  let msg = "";
  let codeBlock = "```";
  let herocount = Object.keys(heroes).length;
  let heroArray = Object.keys(heroes);

  for (var i = 0; i < herocount; i++){
      let hero = heroes[heroArray[i]];
      let emoji = hero.emoji;
      msg += `${hero.keyword}` + `,\t`;
  }

  message.channel.send(codeBlock + msg + codeBlock);

}

module.exports.help = {
  name: "herocodes"
}
