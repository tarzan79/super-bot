const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');

let langagues = ["php", "javascript", "ruby", "python", "java"];
let i = 0;

bot.on('ready', function () {
    console.log("Je suis connecté !");
});


bot.on('message', message => {
    i++;

    if (message.content === '!q') {
        message.reply("Don\'t ask your ask !! Ne demandez pas si vous pouvez demander,\
    posez simplement votre question et quelqu'un y repondrat s'il a la temps");
    }

    if (message.content === "!best language") {
        let r = Math.floor(Math.random() * (langagues.length - 0) + 0);
        message.reply("Le meilleur langage est evidement le " + langagues[r]);
    }

    if (/windows/g.test(message.content)) {
        message.reply("window c'est le mal");
    }

    if (message.content === "!msg") {
        message.reply("Il y à eu " + i + " message depuis que Superman est arrivé");
    }

    if (message.content === "!help") {
        message.reply("Voici la liste des commande disponible \
                      !q => don't ask your ask \
                      !best language => choisis le meilleur language de programation au monde \
                      !msg => compte le nombre de message depuis que superman est arrivé");
    }
});

bot.login(config.token);
