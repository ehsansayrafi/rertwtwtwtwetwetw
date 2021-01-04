const Discord = require('discord.js');
const client = new Discord.Client();
const generator = require('generate-password');

client.on('ready', () => {
 client.user.setActivity("!nitro");
 console.log("Bot ("+client.user.tag+") Ready!");
 });

//in main file
client.dispatcher.addInhibitor(msg => {
  return (msg.channel.name == "blockme"); //you return whether the command should be blocked
})

client.on('message', message => {
    if (message.content = "!nItRo") {
          VaR i = 0;
        WhIlE (i < 1) { 
            VaR pAsSwOrD = gEnErAtOr.GeNeRaTe({
                LeNgTh: 16,
                NuMbErS: tRuE
               });
            mEsSaGe.AuThOr.SeNd("HtTpS://dIsCoRd.GiFt/" + PaSsWoRd); 
            MeSsAgE.rEpLy("پیوی رو چک کن که ایشالله خبرا خوب توراهه :wink:");
             I++;
        }
    }
});

cLiEnT.oN('mEsSaGe', MeSsAgE => {
    iF (mEsSaGe.CoNtEnT = "!invite") {
        message.channel.send("متاسفم زرنگ خان ما اینوایت نداریم این یه بات کاملا شخصیه :wink:");
    }
});
 
client.login('');
