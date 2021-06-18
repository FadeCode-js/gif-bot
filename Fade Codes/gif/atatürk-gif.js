const Discord = require('discord.js')
const db = require('croxydb')

exports.run = async(client, message, args) => {
db.setReadable(true)

function randomgif() {

var gif = ["https://cdn.discordapp.com/attachments/615598641754931230/852930410115498026/ezgif-3-a08e3a61b80f.gif", "https://cdn.discordapp.com/attachments/615598641754931230/853270643269173248/ataturk-1.gif", "https://cdn.discordapp.com/attachments/615598641754931230/855004335532802088/5.gif", "https://cdn.discordapp.com/attachments/615598641754931230/855004352665616394/6.gif", "https://cdn.discordapp.com/attachments/615598641754931230/855033186207924224/15.gif", "https://cdn.discordapp.com/attachments/615598641754931230/855033188253696011/16.gif", "https://cdn.discordapp.com/attachments/615598641754931230/855033192897708052/17.gif", "https://cdn.discordapp.com/attachments/615598641754931230/855033200929144863/4.gif", "https://cdn.discordapp.com/attachments/615598641754931230/855033211680063508/5.gif", "https://cdn.discordapp.com/attachments/615598641754931230/855033214535204864/3.gif", "https://cdn.discordapp.com/attachments/615598641754931230/855033216330498048/12.gif", "https://cdn.discordapp.com/attachments/615598641754931230/855033216771293184/7.gif", "https://cdn.discordapp.com/attachments/615598641754931230/855033222047596554/11.gif", "https://cdn.discordapp.com/attachments/615598641754931230/855033228988383232/Swqly_101.gif", "https://cdn.discordapp.com/attachments/615598641754931230/855033230923399176/8.gif", "https://cdn.discordapp.com/attachments/615598641754931230/855033237155217428/13.gif", "https://cdn.discordapp.com/attachments/615598641754931230/855033239780196372/1.gif", "https://cdn.discordapp.com/attachments/615598641754931230/855033238972268544/9.gif", "https://cdn.discordapp.com/attachments/615598641754931230/855033250888417320/6.gif", "https://cdn.discordapp.com/attachments/615598641754931230/855033253071945738/10.gif", "https://cdn.discordapp.com/attachments/615598641754931230/855033253689294868/14.gif"]
return gif[Math.floor(Math.random() * gif.length)]
}

const embed = new Discord.MessageEmbed()
.setTitle("__Atatürk Gif:__ ")
.setColor("BLURPLE")
.setImage(randomgif())
message.channel.send(embed)

db.add(`gifsayisi_${message.author.id}`, 1)

}

exports.conf = {
    enabled: true,
    guidlOnly: true,
    aliases: ["atatürkgif", "mustafakemalgif", "mustafa-kemal-gif", "mka-gif", "mkagif"],
    permlvl: 0
}

exports.help = {
    name: "atatürk-gif"
}