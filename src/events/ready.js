const chalk = require('chalk');

module.exports = {
    name: 'ready',
    event: 'ready',
    once: true,
    execute: async(client) => {
        console.log(
            chalk.green.bold(`Ready to follow orders for AJ and mods at ${client.user.username}!`)
        )


    },
};