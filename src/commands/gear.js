const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gear')
		.setDescription('Find out Jonas\' PC specs, peripherals, and more.'),
	execute: async(interaction) => {

        return interaction.reply('**PC:** Alienware M15 R4 Laptop, RTX 3080, 32GB RAM, 4TB SSD Storage. (Temporary setup)\n**Mouse:** Logitech G Pro Wireless\n**Keyboard:** Steelseries APEX 7\n**Mousepad:** "Let\'s Go Liquid" Mousepad\n**Microphone:** HyperX Quadcast S\n**Monitor:** 2x Alienware 240hz G-Sync\n**VR:** Valve Index VR Headset')
		
	},
};