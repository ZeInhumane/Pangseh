module.exports = {
    name: "jerick",
    description: "Pings Jerick",
    execute(message, args) {
        setInterval(botStatus, 1000);
        function botStatus() {
           message.channel.send('<@272202473827991557> is the best');
        }
    },
};