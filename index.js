const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (message) => {
  if (message.content.endsWith('Quoi') && message.author.id !== client.user.id) {
    message.channel.sendTyping();
    setTimeout(function() {
        message.reply('feur');
    }, 2000);
  }
  else if (message.content.endsWith('quoi') && message.author.id !== client.user.id) {
    message.channel.sendTyping();
    setTimeout(function() {
        message.reply('feur');
    }, 2000);
  }     
  else if (message.content.endsWith('Quoi?') && message.author.id !== client.user.id) {
    message.channel.sendTyping();
    setTimeout(function() {
        message.reply('feur');
    }, 2000);
  }
  else if (message.content.endsWith('quoi?') && message.author.id !== client.user.id) {
    message.channel.sendTyping();
    setTimeout(function() {
        message.reply('feur');
    }, 2000);
  }     
  else if (message.content.endsWith('koi?') && message.author.id !== client.user.id) {
    message.channel.sendTyping();
    setTimeout(function() {
        message.reply('feur');
    }, 2000);
  }
  else if (message.content.endsWith('Koi?') && message.author.id !== client.user.id) {
    message.channel.sendTyping();
    setTimeout(function() {
        message.reply('feur');
    }, 2000);
  }    
  else if (message.content.endsWith('koi') && message.author.id !== client.user.id) {
    message.channel.sendTyping();
    setTimeout(function() {
        message.reply('feur');
    }, 2000);
  }  
  else if (message.content.endsWith('Koi') && message.author.id !== client.user.id) {
    message.channel.sendTyping();
    setTimeout(function() {
        message.reply('feur');
    }, 2000);
  }    
  else if (message.content.endsWith('Oui?') && message.author.id !== client.user.id) {
    message.channel.sendTyping();
    setTimeout(function() {
        message.reply('stiti');
    }, 2000);
  }
  else if (message.content.endsWith('oui?') && message.author.id !== client.user.id) {
    message.channel.sendTyping();
    setTimeout(function() {
        message.reply('stiti');
    }, 2000);
  }   
  else if (message.content.endsWith('Oui') && message.author.id !== client.user.id) {
    message.channel.sendTyping();
    setTimeout(function() {
        message.reply('stiti');
    }, 2000);
  } 
  else if (message.content.endsWith('oui') && message.author.id !== client.user.id) {
    message.channel.sendTyping();
    setTimeout(function() {
        message.reply('stiti');
    }, 2000);
  }
  else if (message.content.endsWith('ouii') && message.author.id !== client.user.id) {
    message.channel.sendTyping();
    setTimeout(function() {
        message.reply('stitii');
    }, 2000);
  }
  else if (message.content.endsWith('ouiii') && message.author.id !== client.user.id) {
    message.channel.sendTyping();
    setTimeout(function() {
        message.reply('stitiii');
    }, 2000);
  }     
  else if (message.content.endsWith('non') && message.author.id !== client.user.id) {
    message.channel.sendTyping();
    setTimeout(function() {
        message.reply('bril');
    }, 2000);
  }
  else if (message.content.endsWith('Non') && message.author.id !== client.user.id) {
    message.channel.sendTyping();
    setTimeout(function() {
        message.reply('bril');
    }, 2000);
  }  
  else if (message.content.endsWith('Non?') && message.author.id !== client.user.id) {
    message.channel.sendTyping();
    setTimeout(function() {
        message.reply('bril');
    }, 2000);
  }  
  else if (message.content.endsWith('non?') && message.author.id !== client.user.id) {
    message.channel.sendTyping();
    setTimeout(function() {
        message.reply('bril');
    }, 2000);
  }    
  else if (message.content.endsWith('rouge') && message.author.id !== client.user.id) {
    message.channel.sendTyping();
    setTimeout(function() {
        message.reply('gorge');
    }, 2000);
  }
  else if (message.content.endsWith('QUOI') && message.author.id !== client.user.id) {
    message.channel.sendTyping();
    setTimeout(function() {
        message.reply('FEUR');
    }, 2000);
  }
  else if (message.content.endsWith('Hein') && message.author.id !== client.user.id) {
    message.channel.sendTyping();
    setTimeout(function() {
        message.reply('pagnan');
    }, 2000);
  }
  else if (message.content.endsWith('hein') && message.author.id !== client.user.id) {
    message.channel.sendTyping();
    setTimeout(function() {
        message.reply('pagnan');
    }, 2000);
  }
  else if (message.content.endsWith('Wesh') && message.author.id !== client.user.id) {
    message.channel.sendTyping();
    setTimeout(function() {
        message.reply('den');
    }, 2000);
  }
  else if (message.content.endsWith('wesh') && message.author.id !== client.user.id) {
    message.channel.sendTyping();
    setTimeout(function() {
        message.reply('den');
    }, 2000);
  }
  else if (message.content.endsWith('wsh') && message.author.id !== client.user.id) {
    message.channel.sendTyping();
    setTimeout(function() {
        message.reply('den');
    }, 2000);
  }
  else if (message.content.endsWith('Wsh') && message.author.id !== client.user.id) {
    message.channel.sendTyping();
    setTimeout(function() {
        message.reply('den');
    }, 2000);
  }   
});

process.on('uncaughtException', function (err) {
  console.log(err);
});

client.login('token');
