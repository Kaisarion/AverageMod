const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'jonasping',
    event: 'messageCreate',
    execute: async (client, message) => {
       // AJ Modmail Event

       // Check if not an @ everyone or a bot
       if (message.content.includes('@here') || message.content.includes('@everyone')) return;
       if (message.author.bot) return;

       // ignore if in DMs.
       if (!message.guild) return;

        // Trigger for pinging Jonas.

         if (message.member.roles.cache.has('739235594328080467') || message.member.roles.cache.has('729133899636277361') || message.member.roles.cache.has('252845216359383042')) {
            return;
         } else {
            if (message.content.includes('<@!188600045178847233>')) {

               message.delete().catch((err) => console.error(err));
               message.channel.send(`${message.author} Please do not ping Jonas. (<#730584520574763008>)`)
      
      
               const modlogs = client.channels.cache.get('737716214318628914')

               const log = new MessageEmbed()
               .setAuthor({ name: message.author.tag, iconURL: message.author.avatarURL({dynamic: true})})
               .setDescription(`**🗑 Message sent by ${message.author} deleted in <#${message.channel.id}>**\n${message.content}`)
               .setFooter({text: `Message ID: ${message.id}`})
               .setColor('#F9CDC4')
               .setTimestamp()

               modlogs.send({embeds: [log]})
             } else return;
         }

   
 
     
    }
 }
