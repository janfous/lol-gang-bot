module.exports = {
    name: 'stocks',
    description: 'stocks',
    async execute(message, args) {

        const Discord = require('discord.js');
        const yahooFinance = require('yahoo-finance');

        if (args.length >= 1) {
            yahooFinance.quote({
                symbol: args.toString(),
                modules: ['price']
            }, function (err, result) {
                if (result) {
                    const messageBlock = new Discord.MessageEmbed()
                        .setColor("ORANGE")
                        .addField(result.price.symbol, result.price.regularMarketPrice + result.price.currencySymbol)

                    message.channel.send(messageBlock);
                }
                else {
                    console.log(err)
                }
            });
        }
        else {
            const messageBlock = new Discord.MessageEmbed()
                .setColor("ORANGE")
                .addField("How-to:", "If you want to see what price is 1 share of company you are looking for,\n write is as !stock [stock symbol]")

            message.channel.send(messageBlock);
        }
    },
};