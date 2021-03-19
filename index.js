const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
    console.log(Date.now() + " Ping Received");
    response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


const Discord = require('Discord.js');
const env = require('dotenv');
const fs = require('fs');

env.config();

const prefix = process.env.PREFIX;
const token = process.env.TOKEN;

const client = new Discord.Client();
client.commands = new Discord.Collection();

const command_folder = fs.readdirSync("./commands");

for (const folder of command_folder) {
    const command_files = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of command_files) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}


client.login(token);

client.on("message", message => {

    if (message.author.bot) {
        return;
    }

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    switch (command) {
        case `based`:
            client.commands.get("based").execute(message, args);
            break;
    }

});

