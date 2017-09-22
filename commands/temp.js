
//
// bot.on("message", (message) => {
//   if (!message.content.startsWith(config.prefix) || message.author.bot) return;
//
//   if (message.content.startsWith(config.prefix + "ping")) {
//     message.channel.send("pong!");
//   } else
//   if (message.content.startsWith(config.prefix + "foo")) {
//     message.channel.send("bar!");
//   }
// });
//
// bot.on("message", (message) => {
//   if(message.content.startsWith(config.prefix + "terrifying")) {
//     message.channel.send({embed: {
//       color: 1235644,
//       title: "A terrifying combination",
//       description: "<:batrider:357884527844261888> Bat Ryder \n<:kunkka:357884916563705857> Kunkka",
//     }})
//   }
//
// });
module.exports.run = async (bot, message, args) => {
  message.channel.send("lul");
}

module.exports.help = {
  name: "lul"
}
