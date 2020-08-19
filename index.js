const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, bot_age } = require('./config.json');

client.once('ready', () => {
    console.log(prefix);
    console.log(bot_age);
    console.log("This updates");
});

client.login(process.env.token);

client.on('message', message => {
    if (message.content === `${prefix}start`) {
        message.channel.send('Successful registration');
    }
    if (message.content === `${prefix}battle`) {
        const battleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Battle Start! :crossed_swords:')
            .setURL('https://discord.gg/CTMTtQV')
            .setAuthor('Some name', 'https://vignette.wikia.nocookie.net/hunter-x-hunter-fanon/images/a/a9/BABC6A23-98EF-498E-9D0E-3EBFC7ED8626.jpeg/revision/latest?cb=20170930221652', 'https://discord.js.org')
            .setDescription('Some description here')
            .setThumbnail('https://vignette.wikia.nocookie.net/hunter-x-hunter-fanon/images/a/a9/BABC6A23-98EF-498E-9D0E-3EBFC7ED8626.jpeg/revision/latest?cb=20170930221652')
            .addFields(
                { name: 'Regular field title', value: 'Some value here' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Inline field title', value: 'Some value here', inline: true },
                { name: 'Inline field title', value: 'Some value here', inline: true },
            )
            .addField('Inline field title', 'Some value here', true)
            .setImage('https://i.imgur.com/wSTFkRM.png')
            .setTimestamp()
            .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

        message.channel.send(battleEmbed)
            .then(botMessage => {
                botMessage.react("⚔️");
                botMessage.react("🛡️");
            })
            .then(() => {
                const filter = (reaction, user) => (reaction.emoji.name === '⚔️' || reaction.emoji.name === '🛡️');
                const collector = battleEmbed.message.createReactionCollector(filter, { time: 10000 });
                collector.on('collect', r => r.emoji.name === '⚔️' ?
                    console.log('Reacted Yes') : console.log('Reacted No'));
            });


    }
});