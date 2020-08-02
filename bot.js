const Discord = require('discord.js');
const ayarlar = require('./ayarlar.json');
var prefix = ayarlar.prefix;




client.on('message', msg => {
if (msg.content.toLowerCase === 'sa') {
msg.reply('Aleykum Selam Hosgeldin!')
}

})





      
      
      
      
      
      
      
      
      
      client.login(ayarlar.token);
