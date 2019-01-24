const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "g:";
 
client.login('NTM4MDMwMDc5Nzg4NDQ5ODE0.Dyt4sA.IUiCH47U9G0b1oxZ9wz1TBSMlzA');
 
client.on('message', message =>{
    if(message.content === prefix + "ping"){
        message.channel.sendMessage('pong');
        console.log('répond à ping');
    }
});


client.on('guildMemberAdd', member =>{
    let embed = new Discord.RichEmbed()
        .setDescription(':tada: **' + member.user.username + '** a rejoint le serveur, vas lire les <#511466304994279424> et prendre tes <#517031215555936277> ')
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
        .setColor ('red')
    member.guild.channels.get('511467975195361290').send(embed)
    member.addRole('511487295418007562')
 
});
 
client.on('guildMemberRemove', member =>{
    let embed = new Discord.RichEmbed()
        .setDescription(':cry: **' + member.user.username + '** a quitté, à bientôt !')
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('511467975195361290').send(embed)
 
});