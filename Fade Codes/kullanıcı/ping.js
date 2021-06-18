const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (app, message, client) => {
  
  const plasmic = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription('Ping Hesaplanıyor...')
  
   let feyd = Date.now(); 
   let feydd = await message.channel.send(plasmic)
   let feyddd = (Date.now() - feyd); 
   let feydddd = (app.ws.ping).toFixed(2)
    setInterval(() => {
   const feyddddd = new Discord.MessageEmbed()
   .setDescription(`\n Mesaj Gecikme Süresi: **${feyddd}Ms** \n\n Bot Gecikme Süresi: **${feydddd}Ms**`)
   .setColor('RANDOM')
    feydd.edit(feyddddd);
    }, 5000)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ms'],
  permlvl: 0
};

exports.help = {
  name: 'ping',
  description: 'Ping komutu işte yaw',
  usage: 'ping'
};