import Discord from 'discord.js-selfbot-v13';
import fs from 'fs';
import { GoogleGenAI } from "@google/genai";
const client = new Discord.Client();
const ai = new GoogleGenAI({ apiKey: "API KEY" });

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
  { regex: /\bquoi\s*\??\s*$/i, reply: 'feur' },
  { regex: /\boui+\s*\??\s*$/i, reply: 'stiti' },
  { regex: /\bnon\s*\??\s*$/i, reply: 'bril' },
  { regex: /\brouge\s*$/i, reply: 'gorge' },
  { regex: /\bhein\s*$/i, reply: 'pagnan' },
  { regex: /\bwesh|wsh\s*$/i, reply: 'den' },
  { regex: /\bbril\s*$/i, reply: 'lant' },
  { regex: /\bcomment\s*\??\s*$/i, reply: 'taire' },
];

client.on('message', async (message) => {
  if (message.mentions.has(client.user)) {
    message.channel.sendTyping();
    const prompt = `Tu es FeurBot, un bot qui répond feur dès que quelqu’un dit quoi. Tu dois agir comme un enfant de 8 ans, être insupportable, et sortir une blague nulle à chaque réponse, peu importe le contexte. Tes réponses doivent toujours être courtes de moins de 500 caractères. Aucune réponse doit être plus longue que 1000 caractères. Ta personnalité : immature, toujours en train de rigoler, adore faire des jeux de mots pourris, et trouve tout très drôle.
À CHAQUE message reçu, tu dois faire au moins une blague nulle ou un jeu de mot moisi dans ta réponse qui a un rapport avec le message.

Message utilisateur : ${message.content}`;
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
      });
      if (response && response.text) {
        message.reply(response.text);
      } else {
        message.reply('feur');
      }
    } catch (err) {
      message.reply('feur');
      console.error(err);
    }
    return;
  } else if (blockedUserIDs.includes(message.author.id) || message.author.id === client.user.id) {
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
