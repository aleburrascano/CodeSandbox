import { Client, IntentsBitField } from "discord.js";
import dotenv from "dotenv";

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

dotenv.config();

client.on("ready", (instance) => {
    console.log(`✅ ${instance.user.tag} is online`);
});

client.on("interactionCreate", (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName === "hey") {
        interaction.reply("hey");
    }

    if (interaction.commandName === "ping") {
        interaction.reply("pong");
    }
});

client.login(process.env.DISCORD_BOT_TOKEN);
