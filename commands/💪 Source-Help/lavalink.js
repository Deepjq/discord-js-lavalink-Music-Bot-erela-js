//Here the command starts
const {MessageEmbed} = require("discord.js")
const config = require("../../botconfig/config.json")
const ee = require("../../botconfig/embed.json")
module.exports = {
   //definition
	name: "lavalink", //the name of the command 
	category: "💪 Source-Help", //the category this will be listed at, for the help cmd
	aliases: ["lava"], //every parameter can be an alias
	cooldown: 2, //this will set it to a 2 second cooldown
	usage: "lavalink", //this is for the help command for EACH cmd
  	description: "Shows information about Lavalink", //the description of the command

	//running the command with the parameters: client, message, args, user, text, prefix
  run: async (client, message, args, user, text, prefix) => {
        //creating a temporary message
        const embed = new MessageEmbed()
        .setTitle(`Interested in using Lavalink? use \`Erela.js\``)
        .setURL("https://www.npmjs.com/package/erela.js")
        .addField("Bot's Source Code. ", "Don't just use the source for yourself,... please [invite](https://discord.com/api/oauth2/authorize?client_id=742672021422342165&permissions=8&scope=bot) me too![\`Click here\`](https://github.com/Tomato6966/discord-js-lavalink-Music-Bot-erela-js/commit/768f6fbe3314340043cbc341fcc70700b8dc1bdb)")
        .setColor(ee.color).setFooter(ee.footertext, ee.footericon)
        .addField("Download Lavalink: ", "[\`v3.3.2.3\`](https://github.com/Frederikam/Lavalink/releases/tag/3.3.2.3)" )
        .addField("Download application.yml: ", "[\`application.yml\`](https://github.com/Tomato6966/discord-js-lavalink-Music-Bot-erela-js/blob/main/application.yml)" )
        .setDescription(`If your \`application.yml\` has the port set to \`2333\` (or any custom one set by you) and lavalink shows it started on 8080 it means that the application.yml wasn't found in the directory you started lavalink in. 
        \`\`\`/bot /lavalink - application.yml - lavalink.jar\`\`\`
        If your in /bot and you run \`java -jar ./lavalink/lavalink.jar\` it will look for application.yml in /bot. Make sure to start lavalink in the directory the \`application.yml\` is located.`)
        message.channel.send(embed); 
    }
}
