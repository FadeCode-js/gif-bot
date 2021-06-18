module.exports = client => {

var durum = ["Fade Code Gelişmiş GIF Bot Altyapısı!", "https://discord.gg/V2u2jhbqht"]


setInterval(function() {
    var durums = durum[Math.floor(Math.random() * (durum.length))]
    client.user.setPresence({
        status: "dnd",
        activity: {name: durums}
    })
}, 3 * 7500);

console.log(`Botta bulunan komut sayısı: ${client.commands.size}`)
console.log(`Bot Aktif! ${client.user.tag}`)

}