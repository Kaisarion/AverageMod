module.exports = {
    name: 'supportreply',
    event: 'messageCreate',
    execute: async (client, message) => {
 

        // Check if user is a moderator or not.
        if (!message.guild) return;
        if (!message.member.roles.cache.has('252845216359383042')) return;

        if(message.content.startsWith("..modreply")) {

             // defines success and error to await before sending success/error message
     client.success = (channel, suc, msg) => {
        channel.send(`✅ **${suc}**\n${msg}`);
     };

     client.error = (channel, err, msg) => {
        channel.send(`❌ **${err}**\n${msg}`);
     };

     // get mentioned user in beginning arg
     const member = message.mentions.members.first() || message.guild.members.cache.get(args[1]);

     // if no user is mentioned, reply in the channel to the user
     if (args.length === 0) {
        return message.reply('❌ **ERROR!** you need to mention a user to reply to.');
     }

     if (member === undefined) {
        return message.reply('❌ **ERROR!** the user you mentioned is not in this server.')
     }

     let msgreply = args.slice(2).join(' ');

     // dm the mentioned user the text after mentioned
     const replyMsg = new Discord.MessageEmbed()
        .setTitle('You\'ve received a modmail reply from the AverageJonas staff!')
        .setDescription(`・→ <:avgHi:814620061478289469> Hello there, **${member.user.username}!** \n` +
           `**${message.author}** has replied to your request in the AverageJonas Discord: ${msgreply}`)
        .setColor(embedcolor)
        .setFooter('You cannot reply to this message. Please re-initiate a request if you have any further questions.')
     if (message.guild) {
        member.send(replyMsg)
           .then(() => message.channel.send(`I've replied to ${member.user.tag} for you, **${message.author.username}!**`))
           .then(() => message.channel.send(`・→ :: **${message.author}** has replied to **${member.user}'s help request:** \n` +
              `**${message.author}** said: ${msgreply}`))
           .catch((err) => {
              client.error(message.channel, 'Error!', 'Failed to send a DM to them! They either have DMs off, left the server, or I am a bad bot.');
              return console.error(err);
           });
     }

        } else return;

    
 
     
    }
 }