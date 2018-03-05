const Discord = require ("discord.js");

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

const prefix = '!';

let msg = message.content.toUpperCase(); 
    let sender = message.author; 
    let cont = message.content.slice(prefix.length).split(" "); 
    let args = cont.slice(1);



if (msg === prefix + 'PING') { 
    message.channel.send('Ping!');

}
