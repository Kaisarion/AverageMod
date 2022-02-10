module.exports = {
   name: 'modmail',
   event: 'messageCreate',
   execute: async (client, message) => {
      // AJ Modmail Event
      if (!message.guild) return;
        if (message.channel.id === '902384176295182336') {
            // Ensure bot messages are ignored.
            if (message.author.bot) return;

           const modMailCh = client.channels.resolve('738542068393312366');

           // Defining the success variables
           client.success = async (channel, suc, msg) => {
              let mess = await channel.send(`✅ **${suc}**\n${msg}`);
              mess.delete({ timeout: 10000 })
                 .catch(console.log('Issue deleting help success message, must of already been deleted.')); // Error handling
           };

           client.error = async (channel, err, msg) => {
              let mess = await channel.send(`❌ **${err}**\n${msg}`);
              mess.delete({ timeout: 10000 })
                 .catch(console.log('Issue deleting help error message, must of already been deleted.')); // Error handling
           };

           // Attachment handling.
           const attachments = message.attachments.map((a) => a.url);
           await modMailCh.send(`There's a new help message from **${message.author.tag}** (${message.author}) ;; ${message.content}`, {
              split: true,
              files: attachments
           });

           // Remove the message from the guild chat as it may contain sensitive information.
           if (message.guild) {
              message.delete().catch((err) => console.error(err));
           }
           await client.success(message.channel, `${message.author}, your message has been sent!`, 'I have safely informed server staff for you! expect a response soon.')
        }

    
   }
}