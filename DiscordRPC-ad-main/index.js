// RPC MADE BY Gh0st JINXZ#3697 | GIVE CREDITS WHEN USING TY
var rpc = require("discord-rpc");
// RPC MADE BY Gh0st JINXZ#3697 | GIVE CREDITS WHEN USING TY
var setTitle = require('console-title');
// RPC MADE BY Gh0st JINXZ#3697 | GIVE CREDITS WHEN USING TY
const client = new rpc.Client({ transport: 'ipc' })
// RPC MADE BY Gh0st JINXZ#3697 | GIVE CREDITS WHEN USING TY
client.on('ready', () => {
    // RPC MADE BY Gh0st JINXZ#3697 | GIVE CREDITS WHEN USING TY
    client.request('SET_ACTIVITY', {
        // RPC MADE BY Gh0st JINXZ#3697 | GIVE CREDITS WHEN USING TY
        pid: process.pid,
        // RPC MADE BY Gh0st JINXZ#3697 | GIVE CREDITS WHEN USING TY
        activity: {
            // RPC MADE BY Gh0st JINXZ#3697 | GIVE CREDITS WHEN USING TY
            details: "Hello! Thanks for clicking",
            // RPC MADE BY Gh0st JINXZ#3697 | GIVE CREDITS WHEN USING TY
            state: "Please consider joining my discord server",
            // RPC MADE BY Gh0st JINXZ#3697 | GIVE CREDITS WHEN USING TY
            assets: {
                // RPC MADE BY Gh0st JINXZ#3697 | GIVE CREDITS WHEN USING TY
                large_image: "img2",
                // RPC MADE BY Gh0st JINXZ#3697 | GIVE CREDITS WHEN USING TY
                large_text: "RPC by Gh0st JINXZ#3697" // THIS WILL SHOW AS "Playing <Status>" from the outisde
                // RPC MADE BY Gh0st JINXZ#3697 | GIVE CREDITS WHEN USING TY
            },
            // RPC MADE BY Gh0st JINXZ#3697 | GIVE CREDITS WHEN USING TY
            buttons: [{ label: "Join the discord :)", url: "https://discord.gg/QWAxfm9apZ" }]
            // RPC MADE BY Gh0st JINXZ#3697 | GIVE CREDITS WHEN USING TY
        }
        // RPC MADE BY Gh0st JINXZ#3697 | GIVE CREDITS WHEN USING TY
    })
    // RPC MADE BY Gh0st JINXZ#3697 | GIVE CREDITS WHEN USING TY
})
// RPC MADE BY Gh0st JINXZ#3697 | GIVE CREDITS WHEN USING TY
setTitle('Discord RPC | v1.0.0 | Github: NotJINXZ/DiscordRPC-ad');
// RPC MADE BY Gh0st JINXZ#3697 | GIVE CREDITS WHEN USING TY
console.log("Thank you for supporting me. DM Gh0st JINXZ#3697 on discord for a free role in the server :)")
// RPC MADE BY Gh0st JINXZ#3697 | GIVE CREDITS WHEN USING TY
console.warn("Don't close this window unless you want to stop the program.")
// RPC MADE BY Gh0st JINXZ#3697 | GIVE CREDITS WHEN USING TY
client.login({ clientId: "929461756928090184" }).catch(console.error);
// RPC MADE BY Gh0st JINXZ#3697 | GIVE CREDITS WHEN USING TY