const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('time')
		.setDescription('Find out Jonas\' local time.'),
	execute: async(interaction) => {

        axios.get('https://decapi.me/misc/time?timezone=Europe/Oslo').then(function (time) {
        return interaction.reply(`It is currently ${time.data} for Jonas. (Norway)`)

        });
		
	},
};