const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ranks')
		.setDescription('Find out Jonas\' rank in his played games.'),
	execute: async(interaction) => {

        return interaction.reply('**Valorant:** Immortal 1 | Episode 1 - Act Rank: Radiant\n**Apex Legends:** Diamond 4\n**Dota 2:** Crusader 1')
		
	},
};