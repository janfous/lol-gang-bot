module.exports = {
    name: 'google',
    description: 'google',
    execute(message, args) {

        const Discord = require('discord.js');

        //User ID
        let username = message.author.username;

        let reg1 = new RegExp("(\t|co je)", "i");
        let reg2 = new RegExp("(\t|what is)", "i");
        let reg3 = new RegExp("(\t|what the fuck is)", "i");
        let reg4 = new RegExp("(\t|wtf is)", "i");
        let reg5 = new RegExp("(\t|kdo je)", "i");
        let reg6 = new RegExp("(\t|who is)", "i");
        let reg7 = new RegExp("(\t|who tf is)", "i");
        let reg8 = new RegExp("(\t|who the fuck is)", "i");
        let reg9 = new RegExp("(\t|kde je)", "i");
        let reg10 = new RegExp("(\t|where is)", "i");
        let reg11 = new RegExp("(\t|where the fuck is)", "i");
        let reg12 = new RegExp("(what is love|\t)", "i");
        let reg13 = new RegExp("(who asked)", "i");
        let reg14 = new RegExp("who am i", "i");

        if (message.content.match(reg12)) {
            message.channel.send(".. oh baby, don't hurt me\n" +
                "Don't hurt me\n" +
                "No more");
        }
        else if (message.content.match(reg14)) {
            let createdAt = message.author.createdAt;
            const messageBlock = new Discord.MessageEmbed()
                .setColor("DARK_VIVID_PINK")
                .setAuthor(message.author.username, message.author.avatarURL())
                .addFields(
                    { name: "Account created at: ", value: createdAt.toLocaleDateString(), inline: true},
                    { name: "Tag: ", value: message.author.tag, inline: true },
                )

            message.channel.send(messageBlock);
        }
        else if (message.content.match(reg13)) {
            message.channel.send("Me :)");
        }
        else if (message.content.match(reg1)) {
            let question = message.content;
            let string = question.replace(reg1, "").toString();
            let subject = string.replace(/\s+/g, "+");

            const vars = ['https://www.google.com/search?q=', subject.trim()];
            const embedLink = vars.join('');

            const messageBlock = new Discord.MessageEmbed()
                .setColor("BLUE")
                .addField("Vygooglil jsem to za tebe:", embedLink, true)

            message.channel.send(messageBlock);
        }
        else if (message.content.match(reg2)) {
            let question = message.content;
            let string = question.replace(reg2, "");
            let subject = string.replace(/\s+/g, "+");

            const vars = ['https://www.google.com/search?q=', subject.trim()];
            const embedLink = vars.join('');

            const messageBlock = new Discord.MessageEmbed()
                .setColor("BLUE")
                .addField("I googled it for you:", embedLink, true)

            message.channel.send(messageBlock);
        }
        else if (message.content.match(reg3)) {
            let question = message.content;
            let string = question.replace(reg3, "");
            let subject = string.replace(/\s+/g, "+");

            const vars = ['https://www.google.com/search?q=', subject.trim()];
            const embedLink = vars.join('');

            const messageBlock = new Discord.MessageEmbed()
                .setColor("BLUE")
                .addField("I fucking googled it for you:", embedLink, true)

            message.channel.send(messageBlock);
        }
        else if (message.content.match(reg4)) {
            let question = message.content;
            let string = question.replace(reg4, "");
            let subject = string.replace(/\s+/g, "+");

            const vars = ['https://www.google.com/search?q=', subject.trim()];
            const embedLink = vars.join('');

            const messageBlock = new Discord.MessageEmbed()
                .setColor("BLUE")
                .addField("I googled it for you:", embedLink, true)

            message.channel.send(messageBlock);
        }
        else if (message.content.match(reg5)) {
            let question = message.content;
            let string = question.replace(reg5, "");
            let subject = string.replace(/\s+/g, "+");

            const vars = ['https://www.google.com/search?q=', subject.trim()];
            const embedLink = vars.join('');

            const messageBlock = new Discord.MessageEmbed()
                .setColor("BLUE")
                .addField("Vygooglil jsem to za tebe:", embedLink, true)

            message.channel.send(messageBlock);
        }
        else if (message.content.match(reg6)) {
            let question = message.content;
            let string = question.replace(reg6, "");
            let subject = string.replace(/\s+/g, "+");

            const vars = ['https://www.google.com/search?q=', subject.trim()];
            const embedLink = vars.join('');

            const messageBlock = new Discord.MessageEmbed()
                .setColor("BLUE")
                .addField("I googled it for you:", embedLink, true)

            message.channel.send(messageBlock);
        }
        else if (message.content.match(reg7)) {
            let question = message.content;
            let string = question.replace(reg7, "");
            let subject = string.replace(/\s+/g, "+");

            const vars = ['https://www.google.com/search?q=', subject.trim()];
            const embedLink = vars.join('');

            const messageBlock = new Discord.MessageEmbed()
                .setColor("BLUE")
                .addField("I googled it for you, you prick:", embedLink, true)

            message.channel.send(messageBlock);
        }
        else if (message.content.match(reg8)) {
            let question = message.content;
            let string = question.replace(reg8, "");
            let subject = string.replace(/\s+/g, "+");

            const vars = ['https://www.google.com/search?q=', subject.trim()];
            const embedLink = vars.join('');

            const messageBlock = new Discord.MessageEmbed()
                .setColor("BLUE")
                .addField("I googled it for you, you fucking twat:", embedLink, true)

            message.channel.send(messageBlock);        }
        else if (message.content.match(reg9)) {
            let question = message.content;
            let string = question.replace(reg9, "");
            let subject = string.replace(/\s+/g, "+");

            const vars = ['https://www.google.com/search?q=', subject.trim()];
            const embedLink = vars.join('');

            const messageBlock = new Discord.MessageEmbed()
                .setColor("BLUE")
                .addField("Vygooglil jsem to za tebe:", embedLink, true)

            message.channel.send(messageBlock);
        }
        else if (message.content.match(reg10)) {
            let question = message.content;
            let string = question.replace(reg10, "");
            let subject = string.replace(/\s+/g, "+");

            const vars = ['https://www.google.com/search?q=', subject.trim()];
            const embedLink = vars.join('');

            const messageBlock = new Discord.MessageEmbed()
                .setColor("BLUE")
                .addField("I googled it for you:", embedLink, true)

            message.channel.send(messageBlock);
        }
        else if (message.content.match(reg11)) {
            let question = message.content;
            let string = question.replace(reg11, "");
            let subject = string.replace(/\s+/g, "+");


            const vars = ['https://www.google.com/search?q=', subject.trim()];
            const embedLink = vars.join('');

            const messageBlock = new Discord.MessageEmbed()
                .setColor("BLUE")
                .addField("I googled it for you, bitch:", embedLink, true)

            message.channel.send(messageBlock);
        }
    }
}