module.exports = {
    name: 'crypto',
    description: 'crypto',
    async execute(message, args) {

        const Discord = require('discord.js');
        const yahooFinance = require('yahoo-finance');

        if (args.length >= 1) {
            // Because cryptocurrencies like to be called X-USD
            const crypto = args.toString();
            let regex = new RegExp("(-USD$)");
            let newCrypto = crypto.concat("-USD");

            if (message.content.match(regex)) {
                newCrypto = crypto;
            }


            yahooFinance.quote({
                symbol: newCrypto,
                modules: ['price']
            }, function (err, result) {
                if (result) {
                    if (result.price.quoteType == 'CRYPTOCURRENCY') {
                        const messageBlock = new Discord.MessageEmbed()
                            .setColor("DARK_NAVY")
                            .addField(result.price.symbol, result.price.regularMarketPrice + result.price.currencySymbol)

                        message.channel.send(messageBlock);
                    }
                    else {
                        message.channel.send("Not a cryptocurrency!");
                    }
                }
                else {
                    console.log(err)
                    message.channel.send("Something went wrong. Please check that you're calling crypto in USD.");
                }
            });
        }
        else {
            const messageBlock = new Discord.MessageEmbed()
                .setColor("ORANGE")
                .addField("How-to:", "If you want to see the price of a cryptocurrency,\n write is as !crypto [crypto symbol]")

            message.channel.send(messageBlock);
        }
    },
};