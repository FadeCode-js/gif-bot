const Discord = require('discord.js')
const db = require('croxydb')

exports.run = async(client, message, args) => {
db.setReadable(true)

function randomgif() {

var gif = ["https://cdn.discordapp.com/attachments/608711476219478045/854297561976406046/mangifkendra_7.gif", "https://cdn.discordapp.com/attachments/608711476219478045/854297410616164362/mangifkendra_5.gif", "https://cdn.discordapp.com/attachments/608711476219478045/854283326139400212/Mietha.mskl1.gif", "https://cdn.discordapp.com/attachments/608711476219478045/854271788392775710/23.gif", "https://cdn.discordapp.com/attachments/608711476219478045/854270435557376030/a_1d690b0808b237e36d4f2f3a55fa0a5b.gif", "https://cdn.discordapp.com/attachments/608711476219478045/854265133940080660/eqeqeqeqeqeq.gif", "https://cdn.discordapp.com/attachments/608711476219478045/854261471591268362/a_02a12cda13fa6a236b05165e46585e1f.gif", "https://cdn.discordapp.com/attachments/608711476219478045/854258792845410355/18-1.gif", "https://cdn.discordapp.com/attachments/608711476219478045/854257668243456010/9CFB158F-6B60-4B08-AF8F-EB368900F6E9.gif", "https://cdn.discordapp.com/attachments/608711476219478045/854247703143383070/35.gif", "https://cdn.discordapp.com/attachments/608711476219478045/854247679140036628/31.gif", "https://cdn.discordapp.com/attachments/608711476219478045/854247648063520778/24.gif", "https://cdn.discordapp.com/attachments/608711476219478045/854247626382639104/19.gif", "https://cdn.discordapp.com/attachments/608711476219478045/854299381444378634/GIF_11.gif", "https://cdn.discordapp.com/attachments/608711476219478045/854296931239723058/a_60c208cb4eb163c3e46638cdbe58271c.gif", "https://cdn.discordapp.com/attachments/608711476219478045/854294832743055370/a_6c2f8cdca45d7e6faecedb11c4e94001.gif", "https://cdn.discordapp.com/attachments/608711476219478045/854244009135702046/5.gif", "https://cdn.discordapp.com/attachments/608711476219478045/854243027153190912/image7.gif", "https://cdn.discordapp.com/attachments/608711476219478045/854239917969506324/a_34b615c8d21ebc2fd01ec63f7bc27301-2.gif", "https://cdn.discordapp.com/attachments/608711476219478045/854229009783848980/a_b4db12601ed44e6ef4134ab41b3ad1aa.gif", "https://cdn.discordapp.com/attachments/608711476219478045/854228888267653144/sworex_gif_2.gif"]
return gif[Math.floor(Math.random() * gif.length)]
}

const embed = new Discord.MessageEmbed()
.setTitle("__Man Gif:__ ")
.setColor("BLURPLE")
.setImage(randomgif())
message.channel.send(embed)

db.add(`gifsayisi_${message.author.id}`, 1)

}

exports.conf = {
    enabled: true,
    guidlOnly: true,
    aliases: ["mangif", "erkekgif", "erkek-gif"],
    permlvl: 0
}

exports.help = {
    name: "man-gif"
}