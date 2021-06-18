const Discord = require('discord.js');
const client = new Discord.Client();
const AsciiTable = require('ascii-table');
const fs = require('fs');
require('./util/eventHandler.js')(client);

/////////////////////////////////////////////

client.config = {
    prefix: "-",
    token: "ODExNTQ2ODA1NDg1NDM2OTQ4.YCzx3A.Y7yrUI4pw30WMbL_XL5cqXD_tK4",
    sahip: "510479430917816340"
}

/////////////////////////////////////////////

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdirSync('./Fade Codes').forEach(dir => {
const commandFiles = fs.readdirSync(`./Fade Codes/${dir}/`).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const komutcuklar = require(`./Fade Codes/${dir}/${file}`);
  var table = new AsciiTable('Fade Code Komut Tablosu');
  table.setHeading("Komut", 'Durum', "Diğer Kullanımlar")
  if (komutcuklar.help.name) {
  client.commands.set(komutcuklar.help.name, komutcuklar);
  table.addRow(komutcuklar.help.name, "✔️", komutcuklar.conf.aliases)
} else {
  table.addRow(komutcuklar.help.name, "❌")
  continue;
    }
    komutcuklar.conf.aliases.forEach(alias => {
      client.aliases.set(alias, komutcuklar.help.name);
    });

    console.log(table.toString())

  }
})


/////////////////////////////////////////////

client.izinler = message => {
    if(!message.guild) return;
    let permlvl = 0;
    if(message.member.hasPermission("ADMINISTRATOR")) permlvl = 8;
    if(message.member.hasPermission("MANAGE_GUILD")) permlvl = 7;
    if(message.member.hasPermission("BAN_MEMBERS")) permlvl = 6;
    if(message.member.hasPermission("KICK_MEMBERS")) permlvl = 5;
    if(message.member.hasPermission("MANAGE_ROLES")) permlvl = 4;
    if(message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 3;
    if(message.author.id == message.guild.owner.id) permlvL = 2;
    if(message.author.id == client.config.sahip) permlvl = 1;
}

/////////////////////////////////////////////

client.login(client.config.token)

/////////////////////////////////////////////