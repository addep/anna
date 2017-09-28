const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  let data = JSON.parse(fs.readFileSync("./data/drafts.json", "utf8"));
  let msg = "";
  let codeBlock = "```";
  let draftCount = Object.keys(data.drafts).length;
  let draftArray = Object.keys(data.drafts);
  for (var i = 0; i < draftCount; i++){
      let draft = draftArray[i];
      msg += `${draft}` + `,\t`;
  }
  message.channel.send(codeBlock + msg + codeBlock);

}

module.exports.help = {
  name: "embeds"
}
