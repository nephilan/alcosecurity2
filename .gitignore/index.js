const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "a.";
 

function game1(){

  client.user.setActivity("「👮」Protège " + client.guilds.size + "s. Anti-Raid ®『🚫』 ");

  setTimeout(game2, 3000);
};

function game2(){

  client.user.setActivity("a.help");

  setTimeout(game3, 3000);
};

function game3(){

  client.user.setActivity("Crée par nephilian");

  setTimeout(game4, 3000);
};

function game4(){

client.user.setActivity("Joyeuse annèe")

setTimeout(game5, 3000)
}

function game5(){

client.user.setActivity("「👮」Bot H24 Online")

setTimeout(game6, 3000)
}

function game6(){

client.user.setActivity("#Go5servs")

setTimeout(game7, 3000)
}

function game7(){

client.user.setActivity("「💪」On compte sur vous")

setTimeout(game8, 3000)
}

function game8(){

client.user.setActivity("「👮」Protéction Actif.")

setTimeout(game9, 3000)
}

function game9(){

client.user.setActivity("「⚠️」grosse maintenance demain")

setTimeout(game10, 3000)
}

function game10(){

    client.user.setActivity("「⚠️」toujours en developement")    
    setTimeout(game1, 3000)
}

client.on("ready", guild => {

  console.log("Connecté");

  setTimeout(game1, 3000);
});
client.on("message", message => {
  if(message.content.startsWith(prefix + "test")) {
    message.channel.send("Pong !")
  }

  if(message.content.startsWith(prefix + "ping")) {
    message.channel.send("Pong !")
  }

  if(message.content.startsWith(prefix + "beep")) {
    message.channel.send("Boop !")
  }

  if(message.content.startsWith(prefix + "serveur")) {
    message.channel.send(`Server name: **${message.guild.name}**\nTotal members: **${message.guild.members.size}**`)
  }

  if (message.content === "Slt"){
      message.reply("hey");
      console.log("commande slt effectué");
  }

  if (message === prefix + "embed") {
      var embed = new Discord.RichEmbed()
          .setTitle("EMBED")
          .setDescription("ceci est un embed")
          .addField("a.help","page d'aide", true)
          .addField("Embed01","Embed 01 ! :) Ajoutez moi sur votre discord (https://discordapp.com/api/oauth2/authorize?client_id=521756896449921024&permissions=2146958839&redirect_uri=https%3A%2F%2Fdiscordapp.com%2Fapi%2Foauth2%2Fauthorize%3Fclient_id%3D521756896449921024%26permissions%3D2146958839%26scope%3Dbot&scope=bot)", true)
          .setColor("0xFF8000")
          .setFooter("Bon moment parmis nous :)!")
      message.channel.sendEmbed(embed);
  }


});

client.on('message', message => {
    console.log(message.content);
if (message.content === prefix + "help") {
        message.delete(message.author);
        var help_embed = new Discord.RichEmbed()
            .setColor("#0800F6")
            .setTitle("Voici la page d'aide !")
            .addField("Modération - (3)", "a.clear a.mute a.unmute")
            .addField("Administration - (2)", "a.ban a.kick")
            .addField("Fun - (3)", "a.say a.vcs a.8ball")
            .addField("Autres - (3)", "a.info a.invite a.serveur")
            .addField("Anti-Raid - (0)", "En développement")
            .setFooter("acroziaprotect V.3.1.0", client.user.displayAvatarURL)
            .setTimestamp()
        message.channel.send(help_embed);
        console.log("Un utilisateur a effectué la commande d'aide !");
    }
});

client.login(process.env.TOKEN);
