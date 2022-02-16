const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stream')
		.setDescription('Find out if Jonas\' is streaming or not, and his stream information.'),
	execute: async(interaction) => {

        const avatar = axios.get('https://decapi.me/twitch/avatar/AverageJonas');
        const game = axios.get('https://decapi.me/twitch/game/AverageJonas');
        const uptime = axios.get('https://decapi.me/twitch/uptime/AverageJonas');
        const title = axios.get('https://decapi.me/twitch/status/AverageJonas');
        const views = axios.get('https://decapi.me/twitch/viewercount/AverageJonas');

        axios.all([avatar, game, uptime, title, views]).then(axios.spread((...responses) => {
            const avatar2 = responses[0]
            const game2 = responses[1]
            const uptime2 = responses[2]
            const title2 = responses[3]
            const views2 = responses[4]
            let livestatus;
            if (views2.data.toString() === 'AverageJonas is offline') {
              livestatus = 'No. Offline.'
            } else {
              livestatus = `Yes. Playing ${game2.data.toString()}`
            }
            // use/access the results 

            const info = new MessageEmbed()
            .setTitle('Jonas\' Stream Information')
            .setThumbnail(avatar2.data)
            .setColor('#FF10F0')
            .addFields(
                { name: 'Live?', value: livestatus },
                { name: 'Stream Title', value: title2.data.toString() },
                { name: 'Game', value: game2.data.toString() },
                { name: 'Views', value: views2.data.toString() },
                { name: 'Stream Uptime', value: uptime2.data.toString() },
            )

            return interaction.reply({embeds: [info]});
          })).catch(err => {
            console.log(err)
          })
	},
};