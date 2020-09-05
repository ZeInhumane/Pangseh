const User = require('../models/user');
const mongoose = require('mongoose');
const Discord = require('discord.js');

module.exports = {
    name: "daily",
    description: "Shows the amount of currency a player has",
    aliases:['dailies'],
    cooldown:5,
    execute(message, args) {
        User.findOne({ userID: message.author.id }, (err, user) => {
            if (user == null) {
                message.channel.send("You have not set up a player yet! Do =start to start.");
            }
            else {
                user.currency += 5;
                message.channel.send(user.currency);
            }
            user.save()
                    .then(result => console.log(result))
                    .catch(err => console.error(err));
                message.channel.send('You have successfully claimed your daily of ' + user.currency);
        });
    }
}