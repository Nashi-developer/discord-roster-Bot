const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => console.log("BOT IS READY"))

client.login("ODYzNzk1MzkxMjY2OTQ3MTIy.YOsGJQ.agxQ01q3HuMOh9Dbfcdxc0qsnsg")

require("./roster")(client)

const Enmap = require("enmap");
client.roster = new Enmap({name: "roster"})
