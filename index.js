require("dotenv").config();
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

["commands", "cooldowns", "buttons", "selects"].forEach(x => { client[x] = new Collection(); });

client.once(Events.ClientReady, c => {
    console.log(`-- Connexion au Service ${c.user.username} --\n--- Authentification Autorisée ---\n---- Service ${c.user.username} actif ----`);
});

client.login(process.env.TOKEN);
