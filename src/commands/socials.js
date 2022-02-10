const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('socials')
		.setDescription('Find out Jonas\' social media.'),
	execute: async(interaction) => {

        const jonas = interaction.guild.members.cache.get('188600045178847233')
        const socials = new MessageEmbed()
        .setTitle('Jonas\' Social Medias')
        .setColor('#daffff')
        .setThumbnail(jonas.user.displayAvatarURL({dynamic: true}))
        .addFields(
            { name: 'Tiktok', value: 'https://tiktok.com/@average_jonas' },
            { name: 'Twitter', value: 'https://twitter.com/average_jonas', inline: true },
            { name: 'Main YouTube', value: 'https://youtube.com/averagejonas', inline: true },
            { name: 'Second YouTube', value: 'https://youtube.com/averagejonas2', inline: true },
            { name: 'Third YouTube', value: 'https://youtube.com/AverageJonasShorts', inline: true },
            { name: 'Instagram', value: 'https://instagram.com/average_jonas', inline: true },
            { name: 'Twitch', value: 'https://twitch.tv/averagejonas', inline: true },
        )

        return interaction.reply({embeds: [socials]})
		
	},
};