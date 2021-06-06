const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "!";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : Number of members received`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : VsSeFo`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : VsSeFo ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Strix Community`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});



client.login("NjEzODgxNzg5ODYxMTk5ODcy.XV3bHg.973bCbtLtGUxoiUqfMnPrXOL5gE");
