const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { config } = require('dotenv');

// .env processes.
config({
    path: `./.env`
});

// Establish the command files that will be dynamic.
const commands = [];
const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));

// Establish guild bot will respond to and the bot's ID
const clientId = '941078870734544937';
const guildId = '252841088300220443';

for (const file of commandFiles) {
    const command = require(`../commands/${file}`);
    commands.push(command.data.toJSON());

}

const rest = new REST({version: '9'}).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Started refreshing application / commands.');

        await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: commands},
        );

        console.log('Successfully reloaded application / commands.');

    } catch (err) {
        console.error(err);
    }
})();