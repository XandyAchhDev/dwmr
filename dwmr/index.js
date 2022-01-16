/* Webhook request => Webhook message sender */

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const { exit } = require('process');

clear()

console.log(
    chalk.yellow(
        figlet.textSync('DWMR', { horizontalLayout: 'full' })
    )
);

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
const webhooklink = chalk.green(`?`+chalk.reset(` Webhook URL: `))

readline.question(webhooklink, name => {
    const msgcontent = chalk.green(`?`+chalk.reset(` Message content: `))
    readline.question(msgcontent, content1 => {
        const webusername = chalk.green(`?`+chalk.reset(` Webhook username: `))
        readline.question(webusername, username1 => {
            const avatarur = chalk.green(`?`+chalk.reset(` Webhook avatarURL: `))
            readline.question(avatarur, avatr => {
                const { WebhookClient } = require('discord.js');
                const webhook = new WebhookClient({url:name})
                webhook.send({
                    username: username1,
                    content: content1,
                    avatarURL: avatr
                })
                readline.close()
            })
        });
    });
})  