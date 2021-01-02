const Discord = require('discord.js');
const client = new Discord.Client();
const generator = require('generate-password');
/*
client.on('ready', () => {
  var i = 0;
    while (i<10) { //Number of messages
var password = generator.generate({
    length: 16,
    numbers: true
    });
var channel = client.channels.get('682015187947225097');
 channel.send("https://discord.gift/" + password); //Channel ID
 //message.channel.send("https://discord.gift/" + password);
 i++;
}
});
*/

client.on('ready', () => {
 client.user.setActivity("!Nitro");
 console.log("Bot ("+client.user.tag+") Ready!");
 });

client.on('message', message => {
	if (message.content === "!nitro") {
  		var i = 0;
    	while (i < 1) { //Number of messages
			var password = generator.generate({
		    	length: 16,
		    	numbers: true
   			});
			message.author.send("https://discord.gift/" + password); //Channel ID
			message.reply("پیوی رو چک کن که ایشالله خبرا خوب توراهه 😉");
		 	i++;
		}
	}
});

client.on('message', message => {
	if (message.content === "!invite") {
		message.channel.send("متاسفم زرگ خان ما اینوایت نداریم این یه بات کاملا شخصیه 😉");
	}
});
 
client.login('NzkzODA5NTkxNzk5MzgyMDE3.X-xqyg.50rHNBQWUHY2ooqeASzKCK299Tw'); //Bot Token 
