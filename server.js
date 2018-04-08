require('dotenv').config()
const Discord = require('discord.js')
const bot = new Discord.Client()
const PREFIX = '!'

bot.on('ready', () => {
    bot.on('guildMemberAdd', member => {
        member.createDM().then(channel => {
            return channel.send('Welcome to the server ' + member.displayName)
        }).catch(console.error)
    })
    bot.on('message', message => {
        let userMention = ' <@' + message.author.id + '>'
        if (message.content[0] === PREFIX) {
            if (message.content.includes(PREFIX + 'hello')) {
                message.channel.send({
                    embed: {
                        color: 3447003,
                        description: 'Hello ' + userMention + ' !',
                    }
                })
            }
        }
    })
})
bot.login(process.env.DISCORD_TOKEN).catch(console.error)
