const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mock')
		.setDescription('Mock some text.')
		.addStringOption(option => option.setName('text').setDescription('The text to mock.').setRequired(true)),
	execute: async(interaction) => {
        const mock = interaction.options.getString('text')

        let tomock = mock
        .join(' ')
        .split('')
        .map((c, i) => i % 2 ? c.toUpperCase() : c)
        .join('')

        return interaction.reply({content: tomock})
		
	},
};