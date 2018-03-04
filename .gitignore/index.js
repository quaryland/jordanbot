const Discord = require ("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Besoin d'aide ? !help");
    console.log("Le bot a bien ete connecte")
});

bot.login("NDE5ODgyMzczNjEwNDcxNDI2.DX3rzg.DRQ4-yfJqBX2NJDa24lsQNJzAN4");
