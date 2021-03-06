const Discord = require('discord.js')
const db = require('croxydb')
const moment = require('moment')
require('moment-duration-format')

exports.run = async(client, message, args) => {

    const duration = moment.duration(client.uptime).format("D [gün], H [saat], m [dakika], s [saniye]")
    var a = db.fetch(`gifsayisi_${message.author.id}`)
    if(a == undefined) a = 0
    if(a == "none") a = 0

const embed = new Discord.MessageEmbed()
.setColor('BLURPLE')
.setAuthor(`${client.user.username} İstatistikleri`, client.user.displayAvatarURL({dynamic: true}))
.addField(":satellite: Gecikme", `**${client.ws.ping}** ms`, true)
.addField(":alarm_clock: Çalışma Süresi", duration, true)
.addField(":people_hugging: Kullanıcılar", client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
.addField(":control_knobs: Kanallar", client.channels.cache.size, true)
.addField(":desktop: Sunucular", client.guilds.cache.size.toLocaleString(), true)
.addField(":comet: `discord.js` sürümü", Discord.version, true)
.addField("Kullanıcının ürettiği gif sayısı", a, true)
.setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({ dynamic: true, size: 1024 }))
.setTimestamp()
message.channel.send(embed)



}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["say", "gifsay", "gif-say", "stats", "stat", "i"],
    permlvl: 0
}

exports.help = {
    name: "istatistik"
}