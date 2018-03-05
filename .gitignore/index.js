const Discord = require ("discord.js");
const Test = require('./commands/test')

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Besoin d'aide ? !help");
    console.log("Le bot a bien ete connecte")
});
bot.login("NDE5ODgyMzczNjEwNDcxNDI2.DX3rzg.DRQ4-yfJqBX2NJDa24lsQNJzAN4");

bot.on('guildMemberAdd', function (member) {
member.createDM().then(function (channel) {
return channel.send('Bienvenue sur le server "Jordan community"' + member.displayName)
}).catch(console.error)
})

bot.on('message', message => {
    if (message.content === 'ping') {
    message.channel.sendMessage('pong');
  }
})

bot.on('message', message => {
    if (message.content === 'je taime') {
    message.channel.sendMessage('je taime aussi <3');
  }
})
