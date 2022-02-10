const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('whereareyou')
		.setDescription('Find out where Jonas is!'),
	execute: async(interaction) => {

        return interaction.reply('Jonas is currently home in Norway.')
		
	},
};