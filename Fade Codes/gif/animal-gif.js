const Discord = require('discord.js')
const db = require('croxydb')

exports.run = async(client, message, args) => {
db.setReadable(true)

function randomgif() {

var gif = ["https://cdn.discordapp.com/attachments/608711488806584330/854380244274118676/6q9p.gif", "https://cdn.discordapp.com/attachments/608711488806584330/854409243691712562/a_c3c51e01a5122977206fb6f5d05bfe54.gif", "https://cdn.discordapp.com/attachments/608711488806584330/854477390154694666/image0.gif", "https://cdn.discordapp.com/attachments/608711488806584330/854479106335178752/kedicipsi.gif", "https://cdn.discordapp.com/attachments/608711488806584330/854485244178333716/image0-5-2.gif", "https://cdn.discordapp.com/attachments/608711488806584330/854485244521742336/image0-3-1.gif", "https://cdn.discordapp.com/attachments/608711488806584330/854876314359824414/tenor.gif", "https://cdn.discordapp.com/attachments/608711488806584330/855011236096770088/4f2282d8bf56ede01b21bbe236fc23f2.gif", "https://cdn.discordapp.com/attachments/608711488806584330/855034486008709120/Swqly_33.gif", "https://cdn.discordapp.com/attachments/608711488806584330/855034494025203722/Swqly_92.gif", "https://cdn.discordapp.com/attachments/608711488806584330/855034503185694721/Swqly_88.gif", "https://cdn.discordapp.com/attachments/608711488806584330/855034504305573928/Swqly_91.gif", "https://cdn.discordapp.com/attachments/608711488806584330/855034517184970773/Swqly_25.gif", "https://cdn.discordapp.com/attachments/608711488806584330/855034519522770944/Swqly_16.gif", "https://cdn.discordapp.com/attachments/608711488806584330/855034521148719154/Swqly_2.gif"]
return gif[Math.floor(Math.random() * gif.length)]
}

const embed = new Discord.MessageEmbed()
.setTitle("__Animal Gif:__ ")
.setColor("BLURPLE")
.setImage(randomgif())
message.channel.send(embed)

db.add(`gifsayisi_${message.author.id}`, 1)

}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["animalgif", "hayvan-gif", "hayvangif", "kedi-gif", "köpek-gif", "cat-gif", "dog-gif", "kedigif", "köpekgif", "doggif", "dogif", "catgif"],
    permlvl: 0
}

exports.help = {
    name: "animal-gif"
}