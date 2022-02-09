const { Client, Collection, Intents } = require('discord.js');
const fs = require('fs');
const { config } = require('dotenv');

// .env processes. (vault)
config({
    path: `${__dirname}/.env`
});

// Create commands.
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.commands = new Collection();

// Command handling.
const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./src/commands/${file}`);
    // Set a new item in the collection
    client.commands.set(command.data.name, command);


}

// Event handling.
const eventFiles = fs.readdirSync('./src/handlers').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const event = require(`./src/handlers/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }


}

client.login(process.env.TOKEN)

