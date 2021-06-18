const Discord = require('discord.js')
const db = require('croxydb')

exports.run = async(client, message, args) => {
db.setReadable(true)

function randomgif() {

var gif = ["https://cdn.discordapp.com/attachments/608711473652563968/855030638738669588/6d8b72b2fc304847bc73821cb2634c8b.gif", "https://cdn.discordapp.com/attachments/608711473652563968/855031313072783360/a_e5fffd06e5ea896bfb6fa4e66b54609d.gif", "https://cdn.discordapp.com/attachments/608711473652563968/855031313580949514/a_9138341d218c80391dd8ab64debc531a.gif", "https://cdn.discordapp.com/attachments/608711473652563968/855031692811960360/Swqly_60.gif", "https://cdn.discordapp.com/attachments/608711473652563968/855035082389192714/20210617_134306.gif", "https://cdn.discordapp.com/attachments/608711473652563968/855035292229435452/15.gif", "https://cdn.discordapp.com/attachments/608711473652563968/855035382268821504/Zenard_9.gif", "https://cdn.discordapp.com/attachments/608711473652563968/855039622043795486/woman_12.gif", "https://cdn.discordapp.com/attachments/845689915936866305/845690424350081045/image0-40.gif", "https://cdn.discordapp.com/attachments/845689915936866305/845690490921680966/1.11.gif", "https://cdn.discordapp.com/attachments/845689915936866305/845690433534296074/a_04bd27d6f309cb7ae230fd34511e344b-1.gif", "https://cdn.discordapp.com/attachments/845689915936866305/845690410478206996/397.gif", "https://cdn.discordapp.com/attachments/845689915936866305/845690461448568862/a_eeb179cfc35e31b5550f7670d65f91c7.gif", "https://cdn.discordapp.com/attachments/845689915936866305/845690493367091200/a_219011f015a13766bc896be4cf4efc5e-1.gif", "https://cdn.discordapp.com/attachments/845689915936866305/845690508147425300/8-1.gif", "https://cdn.discordapp.com/attachments/845689915936866305/845690519442423829/1_5.gif", "https://cdn.discordapp.com/attachments/845689915936866305/845690548354285619/a_58366e123a713a6fa52fff25bcfef62a.gif", "https://cdn.discordapp.com/attachments/608711473652563968/855036585367044106/lui24.gif", "https://cdn.discordapp.com/attachments/608711473652563968/855036830172839956/indir_1_2.gif", "https://cdn.discordapp.com/attachments/608711473652563968/855037993940549692/paris_girl.gif", "https://cdn.discordapp.com/attachments/608711473652563968/855037995984224266/16.gif"]
return gif[Math.floor(Math.random() * gif.length)]
}

const embed = new Discord.MessageEmbed()
.setTitle("__Woman Gif:__ ")
.setColor("BLURPLE")
.setImage(randomgif())
message.channel.send(embed)

db.add(`gifsayisi_${message.author.id}`, 1)

}

exports.conf = {
    enabled: true,
    guidlOnly: true,
    aliases: ["womangif", "kadıngif", "kadın-gif"],
    permlvl: 0
}

exports.help = {
    name: "woman-gif"
}