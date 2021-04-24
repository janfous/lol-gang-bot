module.exports = {
    name: 'google',
    description: 'google',
    execute(message, args) {

        const Discord = require('discord.js');

        //User ID
        let username = message.author.username;
        let question = message.content;

        //TODO vytvořit funkci na výročí vytvoření accountu

        let reg1 = new RegExp("(what is love$)", "i");
        let reg2 = new RegExp("(who am i$)", "i");
        let reg3 = new RegExp("(who asked$)", "i");

        const questionForms = ["co je", "what is", "what the fuck is", "wtf is", "what tf is", "kdo je", "who is", "who tf is", "who the fuck is",
                                "who the hell is", "what the hell is", "kde je", "where is", "where the fuck is", "where tf is"]

        if (message.content.match(reg1)) {
            message.channel.send(".. oh baby, don't hurt me\n" +
                "Don't hurt me\n" +
                "No more");
        }
        else if (message.content.match(reg2)) {
            let createdAt = message.author.createdAt;
            const messageBlock = new Discord.MessageEmbed()
                .setColor("DARK_VIVID_PINK")
                .setAuthor(message.author.username, message.author.avatarURL())
                .addFields(
                    { name: "Created At: ", value: createdAt.toLocaleDateString(), inline: true},
                    { name: "Tag: ", value: message.author.tag, inline: true },
                )

            message.channel.send(messageBlock);
        }
        else if (message.content.match(reg3)) {
            message.channel.send("Me :)");
        }
        else {
            for (let i = 0; i <= questionForms.length; i++) {
                let reg = new RegExp(questionForms[i]+"|\t", "i");

                if (message.content.match(reg)) {
                    let string = question.replace(reg, "").toString();
                    let subject = string.replace(/\s+/g, "+");

                    const vars = ['https://www.google.com/search?q=', subject.trim()];
                    const embedLink = vars.join('');

                    const messageBlock = new Discord.MessageEmbed()
                        .setColor("BLUE")
                        .addField("I googled it for you:", embedLink, true)

                    message.channel.send(messageBlock);
                    break;
                }
            }
        }
    }
}