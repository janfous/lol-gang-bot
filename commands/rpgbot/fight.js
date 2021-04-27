module.exports = {
    name: 'fight',
    description: 'fight',
    execute(message, args) {

        const Discord = require('discord.js');

        //TODO zprovoznit databázi @janfous

        // const Database = require('@replit/database');
        // const db = new Database();
        // db.set("key", "value");
        // let key = db.get("key");
        // console.log(key);

        let reg = new RegExp("<@!([0-9]+)>");

        //TODO Vylepšit profil

        let adventureCount = "Still a peasant";
        let s_eventCount = "Out of luck";
        let inventory = ["Apple", "Healing potion", "Divorce papers"];
        let rank = "Villager";

        let separator = ', ';
        inventory = inventory.join(separator);

        //TODO vytvořit encountery

        const embed = new Discord.MessageEmbed()
            .setColor("#237300")
            .setAuthor(message.author.username, message.author.avatarURL())
            .addFields(
                { name: "Rank: ", value: rank, inline: true},
                { name: "Adventures: ", value: adventureCount, inline: true },
            )
            .addField("Inventory: ", inventory)
            .addField("Special events: ", s_eventCount, true)

        message.channel.send({embed});

    }
}