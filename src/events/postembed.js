const { MessageEmbed } = require('discord.js');

module.exports = {
    event: 'message',
    run: async (client, message) => {
       // AJ Modmail Event

         if (message.author.id === '679033218971861010') {
            console.log('a message from bea!')

            if (message.content.includes('bish bash boshpost')) {
                console.log('a message from bea that is my time to shine!')

                const supportinfo = new MessageEmbed()
            .setTitle('`❗️` **Need Help?**')
            .setDescription('You\'re in the right place.\nSimply send a message here and AverageBot will forward it to staff to review.\n\nTo ensure your request is answered, please ensure you ALLOW messages from server members as shown below.\nA staff member will respond to your request as soon as possible.')
            .setColor('#daffff')
            .setImage('https://i.imgur.com/YR7KTGw.png')

            const supportch = client.channels.resolve('902384176295182336')
            supportch.send({embeds: [supportinfo]}).catch(err => message.channel.send(err))

            message.channel.send('done!')
            } else return;
            


         } else return;
 
     
    }
 }