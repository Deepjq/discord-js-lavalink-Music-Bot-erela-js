const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "toggledjonly",
  aliases: ["adddjonly", "djonly", "setdjonly", ""],
  category: "⚙️ Settings",
  description: "Set's a Command to the DJ ONLY State, by typing it again, it gets to not DJ ONLY aka its a toggle",
  usage: "adddj @role",
  memberpermissions: ["ADMINISTRATOR"],
  run: async (client, message, args) => {
    //get the role of the mention
    let cmd = args[0]
    //if no pinged role return error
    if (!cmd)
      return message.channel.send(new MessageEmbed()
        .setColor(ee.wrongcolor)
        .setFooter(ee.footertext, ee.footericon)
        .setTitle("❌ Error | Please add a cmd!")
        .setDescription("Example: `toggledjonly skip`")
      );

      let musiccmds = [];
      const commands = (category) => {
          return client.commands.filter((cmd) => cmd.category.toLowerCase().includes("music")).map((cmd) => `${cmd.name}`);
      };
      for (let i = 0; i < client.categories.length; i += 1) {
          if (client.categories[i].toLowerCase().includes("music")) {
              musiccmds = commands(client.categories[i]);
          }
      }
      if(musiccmds.join(" ").toLowerCase().split(" ").includes(args[0].toLowerCase())){
          //if its in then its dj only so remove it
          if(client.settings.get(message.guild.id, `djonlycmds`).join(" ").toLowerCase().split(" ").includes(args[0].toLowerCase())){
            try{
              client.settings.remove(message.guild.id, args[0], `djonlycmds`);
              return message.channel.send(new MessageEmbed()
                .setColor(ee.color)
                .setFooter(ee.footertext, ee.footericon)
                .setTitle(`✅ Success | Set Cmd \`${args[0]}\` to NOT DJ ONLY`)
                .setDescription(`All Dj-ONLY-CMDS:\n> \`${client.settings.get(message.guild.id, `djonlycmds`).sort(function(a, b){if(a < b) { return -1; }if(a > b) { return 1; }  return 0;}).join("`, `")}\``)
              );
            }catch (e){
              console.log(String(e.stack).red);
              return message.channel.send(new MessageEmbed()
                .setColor(ee.wrongcolor)
                .setFooter(ee.footertext, ee.footericon)
                .setTitle("❌ Error | Something went wrong!")
                .setDescription("```" + e.stack + "```")
              );
            }
          }
          else {
            try{
              client.settings.push(message.guild.id, args[0], `djonlycmds`);
              return message.channel.send(new MessageEmbed()
                .setColor(ee.color)
                .setFooter(ee.footertext, ee.footericon)
                .setTitle(`✅ Success | Set Cmd \`${args[0]}\` to DJ ONLY`)
                .setDescription(`All Dj-ONLY-CMDS:\n> \`${client.settings.get(message.guild.id, `djonlycmds`).sort(function(a, b){if(a < b) { return -1; }if(a > b) { return 1; }  return 0;}).join("`, `")}\``)
              );
            }catch (e){
              console.log(String(e.stack).red);
              return message.channel.send(new MessageEmbed()
                .setColor(ee.wrongcolor)
                .setFooter(ee.footertext, ee.footericon)
                .setTitle("❌ Error | Something went wrong!")
                .setDescription("```" + e.stack + "```")
              );
            }
          }
      }else{
        return message.channel.send(new MessageEmbed()
          .setColor(ee.wrongcolor)
          .setFooter(ee.footertext, ee.footericon)
          .setTitle(`❌ Error | Could not find Music Command \`${args[0]}\``)
        );
      }
  }
};
