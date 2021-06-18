const Discord = require('discord.js')
const db = require('croxydb')

exports.run = async(client, message, args) => {
db.setReadable(true)

function randomgif() {

var gif = ["https://cdn.discordapp.com/attachments/608711480346542102/855000839554203658/Couple_PP_Gif_89.gif", "https://cdn.discordapp.com/attachments/608711480346542102/855007593562505246/7.gif", "https://cdn.discordapp.com/attachments/608711480346542102/855007670623797258/10.gif", "https://cdn.discordapp.com/attachments/608711480346542102/855007737993756702/13.gif", "https://cdn.discordapp.com/attachments/608711480346542102/855015696286482443/A193B013-C22B-484B-AE5A-37E05720A79F.gif", "https://cdn.discordapp.com/attachments/608711480346542102/855030591350636564/a_5aa199db963f2441a3e2e27c3c24b11a.gif", "https://cdn.discordapp.com/attachments/608711480346542102/855030594819325972/a_5ad87afd24f1f5e8ba4aa2534520af13.gif", "https://cdn.discordapp.com/attachments/608711480346542102/855030598703120404/a_c042258e418d2c57f57dff1549e5289d.gif", "https://cdn.discordapp.com/attachments/608711480346542102/855030609234624512/Swqly_18.gif", "https://cdn.discordapp.com/attachments/608711480346542102/855030613861466152/Swqly_67.gif", "https://cdn.discordapp.com/attachments/608711480346542102/855033782847406110/423543.gif", "https://cdn.discordapp.com/attachments/608711480346542102/855033790865997824/132456.gif", "https://cdn.discordapp.com/attachments/608711480346542102/855033802300981268/1234253.gif", "https://cdn.discordapp.com/attachments/608711480346542102/855033790794563595/21354.gif", "https://cdn.discordapp.com/attachments/608711480346542102/855033902820491284/4325364.gif", "https://cdn.discordapp.com/attachments/608711480346542102/855033930976722954/231243564.gif", "https://cdn.discordapp.com/attachments/608711480346542102/855033962224549918/2134567879.gif", "https://cdn.discordapp.com/attachments/608711480346542102/855033972491812864/2134567890.gif", "https://cdn.discordapp.com/attachments/608711480346542102/855033983929548810/21343546758.gif", "https://cdn.discordapp.com/attachments/608711480346542102/855034008508956692/23145675869.gif", "https://cdn.discordapp.com/attachments/608711480346542102/855034044844605460/213425364758.gif"]
return gif[Math.floor(Math.random() * gif.length)]
}

const embed = new Discord.MessageEmbed()
.setTitle("__Couple Gif:__ ")
.setColor("BLURPLE")
.setImage(randomgif())
message.channel.send(embed)

db.add(`gifsayisi_${message.author.id}`, 1)

}

exports.conf = {
    enabled: true,
    guidlOnly: true,
    aliases: ["couplegif", "sevgiligif", "sevgili-gif"],
    permlvl: 0
}

exports.help = {
    name: "couple-gif"
}