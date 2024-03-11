const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client();
const fs = require('fs');

let blockedUserIDs = [];

function loadBlockedUsers() {
  try {
    const data = fs.readFileSync('blocked_users.json', 'utf8');
    blockedUserIDs = JSON.parse(data);
  } catch (err) {
    // If the file doesn't exist, create an empty array
    blockedUserIDs = [];
  }
}

function saveBlockedUsers() {
  fs.writeFileSync('blocked_users.json', JSON.stringify(blockedUserIDs), 'utf8');
}

loadBlockedUsers();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({
    status: 'dnd',
  });
});

client.on('message', (message) => {
  if (blockedUserIDs.includes(message.author.id)) {
    return; // Do nothing if the user is blocked
  }
  else if (message.content.endsWith('Quoi') && message.author.id !== client.user.id) {
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
  else if (message.content.startsWith('feur!arretedemefeurstp')) {
    // Add user ID to the blocked list
    blockedUserIDs.push(message.author.id);
    saveBlockedUsers(); // Save the updated list to JSON
    message.reply('✅');
  }
  else if (message.content.startsWith('feur!join')) {
    const args = message.content.slice('feur!join'.length).trim().split(' ');
    const inviteCode = args[0];

    try {
      client.acceptInvite(inviteCode, { bypassOnboarding: true, bypassVerify: true });
      message.reply('✅');
    } catch (error) {
      if (error.statusCode === 500) {
        message.reply(':x: Oups, comment résoudre un captcha? ')
      } else {
        console.error(error);
      }
    }
  }
});

process.on('uncaughtException', function (err) {
  console.log(err);
});

client.login('token');
