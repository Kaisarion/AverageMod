const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Retrieve the user avatar of a user\'s own profile or their server avatar, or your own.')
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription('User\'s server avatar.')
                .addUserOption(option => option.setName('member').setDescription('The user\'s avatar to show')))
        .addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('User\'s personal avatar.')
                .addUserOption(option => option.setName('member').setDescription('The user\'s avatar to show'))),
	execute: async(interaction) => {
		const user = interaction.options.getUser('member');
        const member = interaction.options.getMember('member');

        // get the subcommand server

        const avatarembed = new MessageEmbed()
        .setColor('#daffff')
        

        if (interaction.options.getSubcommand() === 'server') {
            if (user) {

                avatarembed.setAuthor({ name: user.username, iconURL: member.displayAvatarURL()})
                avatarembed.setImage(member.displayAvatarURL({ size: 1024, dynamic: true }))
                await interaction.reply({embeds: [avatarembed]})
                .catch(err => console.error(err));
            } else {
                avatarembed.setAuthor({ name: interaction.user.username, iconURL: interaction.member.displayAvatarURL()})
                avatarembed.setImage(interaction.member.displayAvatarURL({ size: 1024, dynamic: true }))
                await interaction.reply({embeds: [avatarembed]})
                .catch(err => console.error(err));
            }

        // get the subcommand user
        } else if (interaction.options.getSubcommand() === 'user') {
            if (user) {
                avatarembed.setAuthor({ name: user.username, iconURL: user.displayAvatarURL()})
                avatarembed.setImage(user.displayAvatarURL({ size: 1024, dynamic: true }))
                await interaction.reply({embeds: [avatarembed]})
                .catch(err => console.error(err));
            } else {
                avatarembed.setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL()})
                avatarembed.setImage(interaction.user.displayAvatarURL({ size: 1024, dynamic: true }))
                await interaction.reply({embeds: [avatarembed]})
                .catch(err => console.error(err));
            }
        }
	},
};