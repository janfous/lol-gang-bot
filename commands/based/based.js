module.exports = {
    name: 'based',
    description: 'based',
    async execute(message, args) {

        const Discord = require('discord.js');
        const fs = require('fs');
        let data;

        fs.readFile('./data/based.json', 'utf-8', function (err, data) {
            if (err) throw err;

            data = JSON.parse(data);

            if (args.length >= 1) {

                let reg = new RegExp("<@!([0-9]+)>");

                let id = args[0];
                let match = args[0].match(reg);

                if (match.length !== 0) {
                    id = match[1];
                }

                console.log(id);


                if (data.users[id] === undefined) {
                    data.users[id] = {};
                    data.users[id].count = 0;
                }

                data.users[id].count++;

                data.users[id].last = Date.now();

                let data_w = JSON.stringify(data);

                fs.writeFileSync("./data/based.json", data_w);

            }

            //todo fix vypisuje autora zprávy, ne vyhledávanou osobu

            if (data.users[message.author.id] && data.users[message.author.id].count) {

                var last_based = new Date(0);
                last_based.setUTCMilliseconds(data.users[message.author.id].last);

                var last_based_str = last_based.getFullYear() + "-" + (last_based.getMonth()+1) + "-" + last_based.getDate() + " " + last_based.getHours() + ":" + last_based.getMinutes();

                const embed = new Discord.MessageEmbed()
                    .setColor("#fcba03")
                    .setTitle(message.author.username)
                    .addField("Based count", data.users[message.author.id].count, true)
                    .addField("Last Based At", last_based_str, true);

                console.log(message);
                console.log(embed);

                message.channel.send({embed});

            } else {
                message.channel.send("User is not yet based");
            }


        });
    },
};
