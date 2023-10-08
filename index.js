require("dotenv").config();
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const { consolaTime, consolaLogs } = require("./Fonctions/timeConsole")

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

process.on('exit', code => console.log(`Le processus s'est arrêté avec le code: ${code}`));
process.on('uncaughtException', (err, origin) => console.log(`UNCAUGHT_EXECPTION: ${err}`, `Origine: ${origin}`));
process.on('unhandledRejection', (reason, promise) => console.log(`UNHANDLED_REJECTION: ${reason}\n-----\n`, promise));
process.on('warning', (...args) => console.log(...args));

["commands", "cooldowns", "buttons", "selects"].forEach(x => { client[x] = new Collection(); });

client.once(Events.ClientReady, c => {
    consolaTime(`-- ✅ La connexion avec ${c.user.username} est établie.`);
});

client.login(process.env.TOKEN);

/**
 * Création et Actualisation du fichier LOGS
 */
const fs = require('fs');
const path = require('path');

const logsFolderPath = path.join(__dirname, 'logs');

if (!fs.existsSync(logsFolderPath)) {
    fs.mkdirSync(logsFolderPath);
}

(async() => {
    const currentDate = await consolaLogs();
    const logFileName = `${currentDate}.txt`;
    const logFilePath = path.join(logsFolderPath, logFileName);

    const logStream = fs.createWriteStream(logFilePath, { flags: 'a' })

    console.log = (message) => {
        const formattedMessage = `${message}\n`;
        process.stdout.write(formattedMessage);
        logStream.write(formattedMessage);
    };
})();