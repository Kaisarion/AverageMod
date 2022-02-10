const { Client, Collection, Intents } = require('discord.js');
const fs = require('fs');
const AJintents = new Intents(5839);
const { config } = require('dotenv');

// .env processes. (vault)
config({
    path: `${__dirname}/.env`
});

// Create commands.
const client = new Client({ intents: AJintents });
client.commands = new Collection();

//-----------------------------
// command handling.
const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./src/commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}

//-----------------------------
// event handling for slash commands.
const eventFiles = fs.readdirSync('./src/events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./src/events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

// Event handling for message events.
// only listens to JS files.
client.modules = new Collection();
fs.readdir('./src/msgevents/', (err, files) => {
   if (err) return console.error;
   files.forEach(file => {
      if (!file.endsWith('.js')) return;
      const evt = require(`./src/msgevents/${file}`);
      let evtName = evt.event;
      console.log(`Loaded event '${file.split('.')[0]}' triggering on '${evtName}'`);
      client.on(evtName, evt.execute.bind(null, client))
   });

});


client.login(process.env.TOKEN)

