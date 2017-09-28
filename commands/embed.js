const Discord = module.require("discord.js");
const heroes = require("../heroes.json");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  let title = args[0];
  let data = JSON.parse(fs.readFileSync("./data/drafts.json", "utf8"));
  let drafts = data.drafts;
  let content = drafts[title];
  let hero = heroes[args[1]];

  if(content) {
    let title = content.name;
    let lineup = content.value;
    let color = content.color;
    let embed = new Discord.RichEmbed()
    .setColor(color)
    .addField(title, lineup, true);
    message.channel.send(embed);
    return;
  };

  if(!hero) {
    message.channel.send("riktig bruk er: `!embed tittel <heroes>` skriv `!herocodes` eller `!embeds` for oversikt");
  } else {

    let lineup = "";

    for (var i = 1; i < args.length; i++){
      if (typeof heroes[args[i]] !== 'undefined') {
        let hero = heroes[args[i]]
        lineup += `${hero.emoji}\t${hero.name}\n`;
      }
    }

    let title = args[0];
    let color = "#"+((1<<24)*Math.random()|0).toString(16);
    let embed = new Discord.RichEmbed()
    .setColor(`#ff3377`)
    .addField(title, lineup, true)
    .setColor(color);
    message.channel.send(embed)
    .then (function(message) {
      for (var i = 1; i < args.length; i++){
        let hero = heroes[args[i]]
        let reaction = hero.emoji.slice(-19).replace(">", "");
        message.react(reaction);
      }
    });

    if (!content) {

      let newTitle = title;
      data.drafts[newTitle] = {"name": title, "value": lineup, "color": color};
      console.log(JSON.stringify(data));
      fs.writeFile(`./data/drafts.json`, JSON.stringify(data), 'utf8', (err) => {
        if (err) console.error(err)
      });
    };

  }


  console.log(`#${message.author.username}: ${message.content}`);
}

module.exports.help = {
  name: "embed"
}
