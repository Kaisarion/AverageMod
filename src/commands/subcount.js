const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('subcount')
		.setDescription('Find out Jonas\' total Twitch subscriber count.'),
	execute: async(interaction) => {

        axios.get('https://decapi.me/twitch/subcount/AverageJonas').then(function (subs) {
        return interaction.reply(`There are currently ${subs.data} subscribers to the Shock Dart God.`)

        });
		
	},
};