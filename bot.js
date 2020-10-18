const Discord = require('discord.js');
const { join } = require('path');
const client = new Discord.Client();
const embed = new Discord.MessageEmbed()

client.on('ready', () => {
  console.log(`The bot is ready master :) `);

    client.user.setActivity("Fortnite|>help", {
      type: "PLAYING"
    });
});

client.on('message', msg => {
    if(msg.content === '>'+'help'){
      msg.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL()
        },
        title: 'Help',
        description: 'Type ``>commands`` for the list of commands',
        fields: [{
          name: 'Also',
        value: "This bot was coded by GamerXxX_726#8515 :)",
          name: "Join Gamer X's Server ↓↓↓",
          value: "https://discord.gg/xrsvG2e"
        
      },
    ],
      }});
    }
      if(msg.content === '>'+'commands'){
        msg.channel.send({embed: {
          color: 15844367,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
          },
          title: 'Commands',
          description: 'These are the list of commands below ↓↓↓',
          fields: [{
          name: '>youtube',
          value: "This command will give you a link to Scrazy Almighty's YouTube Channel"
        },
        {
          name: '>latest',
          value: "This command will give you a link to Scrazy Almighty's Latest YouTube Video"
        }
      ],
          
        }});
      }

      if(msg.content === '>'+'youtube'){
        msg.channel.send({embed: {
          color: 15844367,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
          },
          title: 'YouTube Channel',
          description: "Click [HERE](https://www.youtube.com/channel/UCQYmNxVu735MREhHxtQ5xKg) to take a look at Scrazy Almighty's YouTube Channel"
        }});

      }
      if(msg.content === '>'+'latest'){
        msg.channel.send({embed: {
          color: 15844367,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
          },
          title: 'Latest YouTube Video',
          description: "Click [HERE](https://www.youtube.com/watch?v=QVeuiiCVR4g) to take a look at Scrazy Almighty's Latest YouTube Video"
        }});

      }
  
});

client.login(process.env.token);