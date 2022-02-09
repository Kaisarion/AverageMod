module.exports = {
   event: 'message',
   run: async (client, message) => {

    // Trigger for pinging Jonas.
      if (message.content.includes('<@!188600045178847233>')) {
         if (message.content.includes('@here') || message.content.includes('@everyone')) return;
         if (message.author.bot) return;


         await message.delete()
         message.channel.send(`${message.author} Please do not ping Jonas. (<#730584520574763008>)`)


      }

    
   }
}