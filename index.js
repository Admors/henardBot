require("dotenv").config();
const { Client, Events, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, c => {
    console.log(`-- Connexion au Service ${c.user.username} --\n--- Authentification Autorisée ---\n---- Service ${c.user.username} actif ----`);
});

client.login(process.env.TOKEN);