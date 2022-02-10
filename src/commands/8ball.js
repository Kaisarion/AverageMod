const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('8ball')
		.setDescription('Get your fortune from the infamous AverageBot!')
		.addStringOption(option => option.setName('question').setDescription('The question you want the fortune of.').setRequired(true)),
	execute: async(interaction) => {
        const question = interaction.options.getString('question')

           let responses = [
              'Yep',
              'Sova says no ):',
              'Definitely!',
              'Absolutely',
              'AverageBot\'s sources say no.',
              'Reply hazy, try again later?',
              'Not in a million years!'
           ];
  
           let response = responses[Math.floor(Math.random() * responses.length)];
  
           const responsebed = new MessageEmbed()
           .setTitle('`🎱` 8 ball')
           .setColor('#daffff')
           .setThumbnail(interaction.user.displayAvatarURL({dynamic: true}))
           .addField(`${interaction.user.username}'s question:`, question)
           .addField('AverageBot\'s reply:', response)
        

        return interaction.reply({embeds: [responsebed]})
		
    },
};