const Discord = require('discord.js')

exports.run = async(client, message, args) => {

var prefix = client.config.prefix

const embed = new Discord.MessageEmbed()
.setTitle("__YARDIM MENÜSÜ__")
.setFooter("Fade Code Gif Bot Altyapısı © 2021", message.author.avatarURL({ dynamic: true, size: 1024 }))
.setColor("BLURPLE")
.setDescription(`

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

__**GIF KOMUTLARIM**__

> ${prefix}animal-gif
> ${prefix}atatürk-gif
> ${prefix}couple-gif
> ${prefix}man-gif
> ${prefix}woman-gif

__**KULLANICI KOMUTLARIM**__

> ${prefix}istatistik
> ${prefix}ping
> ${prefix}yardım

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

`)
message.channel.send(embed)

}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permlvl: 0
}

exports.help = {
    name: "yardım"
}