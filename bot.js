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

client.on('message', message => {
	if (message.content === "!gen") {
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
	if (message.content === "!drop") {
		var i = 0;
	    while (i < 10) { //Number of messages
		var password = generator.generate({
		    length: 16,
		    numbers: true
	    });
			var channel = client.channels.get('682015187947225097');
		 	message.channel.send("https://discord.gift/" + password);
			i++;
		}
	}
});

client.on('message', message => {
	if (message.content === "!spam") {
		var i = 0;
	    while (i < 100) { //Number of messages
		var password = generator.generate({
		    length: 16,
		    numbers: true
	    });
			var channel = client.channels.get('682341815139303464');
		 	channel.send("https://discord.gift/" + password);
			i++;
		}
	}
});

client.on('message', message => {
	if (message.content === "!spamlots") {
		var i = 0;
	    while (i < 1000) { //Number of messages
		var password = generator.generate({
		    length: 16,
		    numbers: true
	    });
			var channel = client.channels.get('682341815139303464');
		 	channel.send("https://discord.gift/" + password);
			i++;
		}
	}
});

client.on('message', message => {
	if (message.content === "!credit") {
		message.channel.send("Credit to Hiteke for main code. Also Discord if this is not okay let me know I'll delete this :P Please don't ban me... -Xp10d3");
	}
});
 
client.login('NzkzODA5NTkxNzk5MzgyMDE3.X-xqyg.50rHNBQWUHY2ooqeASzKCK299Tw'); //Bot Token 
