const User = require('../models/user');
const mongoose = require('mongoose');
const Discord = require('discord.js');

module.exports = {
    name: "currency",
    description: "Shows the amount of currency a player has",
    aliases:['cash', 'balance', 'fat'],
    cooldown:5,
    execute(message, args) {
        User.findOne({ userID: message.author.id }, (err, user) => {
            if (user == null) {
                message.channel.send("You have not set up a player yet! Do =start to start.");
            }
            else {
                user.currency += 5;
                let embed = new Discord.MessageEmbed()
                    .setTitle('Currency')
                    .setColor('#000000')
                embed.addField(user.currency, "​");
                message.channel.send(embed);
            }
            user.save()
                    .then(result => console.log(result))
                    .catch(err => console.error(err));
                message.channel.send('You have successfully claimed your daily of ' + user.currency);
        });
    }
}