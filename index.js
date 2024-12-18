const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client();
const fs = require('fs');

let blockedUserIDs = [];

function loadBlockedUsers() {
  try {
    const data = fs.readFileSync('blocked_users.json', 'utf8');
    blockedUserIDs = JSON.parse(data);
  } catch (err) {
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

// Responses mapping
const responses = [
  { regex: /\bquoi\b|\bquoi\?$/i, reply: 'feur' },
  { regex: /\boui+\?*$/i, reply: 'stiti' },
  { regex: /\bnon\?*$/i, reply: 'bril' },
  { regex: /\brouge$/i, reply: 'gorge' },
  { regex: /\bhein$/i, reply: 'pagnan' },
  { regex: /\bwesh|wsh$/i, reply: 'den' },
  { regex: /\bbril$/i, reply: 'lant' },
  { regex: /\bcomment\s?\??$/i, reply: 'taire' },
];

client.on('message', (message) => {
  if (blockedUserIDs.includes(message.author.id) || message.author.id === client.user.id) {
    return;
  }

  for (const response of responses) {
    const match = message.content.match(response.regex);
    if (match) {
      message.channel.sendTyping();
      setTimeout(() => {
        const reply = typeof response.reply === 'function' ? response.reply(match) : response.reply;
        message.reply(reply);
      }, 2000);
      return;
    }
  }
});

client.on('message', (message) => {
  if (message.content.startsWith('feur!arretedemefeurstp')) {
    if (blockedUserIDs.includes(message.author.id)) {
      message.reply(':x:');
    } else {
      blockedUserIDs.push(message.author.id);
      saveBlockedUsers(); 
      message.reply(':white_check_mark:');
    }
  } else if (message.content.startsWith('feur!join')) {
    const args = message.content.slice('feur!join'.length).trim().split(' ');
    const inviteCode = args[0];

    try {
      client.acceptInvite(inviteCode, { bypassOnboarding: true, bypassVerify: true })
        .then(() => {
          message.reply(':white_check_mark:');
        })
        .catch((error) => {
          if (error.message.includes('CAPTCHA_SOLVER_NOT_IMPLEMENTED')) {
            message.reply(':x: https://forms.gle/RHgfN2jjGteCVYpU6');
          } else {
            message.reply(':x:');
            console.error(error);
          }
        });
    } catch (error) {
      message.reply(':x:');
      console.error(error);
    }
  } else if (message.content.startsWith('feur!recommencedemefeurstp')) {
    const userIDToRemove = message.author.id;
    const index = blockedUserIDs.indexOf(userIDToRemove);
    if (index > -1) {
      blockedUserIDs.splice(index, 1);
      saveBlockedUsers();
      message.reply(':white_check_mark:');
    } else {
      message.reply(':x:');
    }
  }
});

process.on('uncaughtException', function (err) {
  console.log(err);
});

client.login('token');
