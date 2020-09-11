// BOT DISCORD OCEANBLACK ROLEPLAY 2020 - BY PANCHO //


const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

const prefix = config.prefix;

client.on('ready', () => {
    console.log('El bot ha encendido correctamente, OceanBlack Roleplay');
    client.user.setPresence({ activity: { name: 'OceanBlack Roleplay' }, status: 'online' })
});

client.on('message', async message => {
    
    if (!message.content.startsWith(prefix)) return; 
    if (message.author.bot) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g);

    if (message.content.startsWith(prefix + 'sugerencia')) {
        if (message.channel.id !== "702246315270078555") 
          return message.channel.send(`**Este no es el canal correcto para utilizar este comando.**`);
        message.delete().catch(O_o => {});
        const suggestion = args.slice(1).join(" ");
        if (!suggestion)
          return message.channel.send(`Tienes que poner una sugerencia`);
    
        const suggestembed = new Discord.MessageEmbed() 
          .setAuthor(
            "⭐ " +
             message.member.user.username +
              " ha mandado una sugerencia" +
              " ⭐"
          )
          .setFooter(client.user.username, client.user.displayAvatarURL)
          .setTimestamp()
          .addField(`**Sugerencia**:`, `${suggestion}\n\n***__¡Vota!__***`)
          .setThumbnail(message.author.avatarURL())
          .setColor("RED");
          message.channel.send(suggestembed).then(m =>  m.react("✅") + m.react("❌"))
      }
    
if(message.content.startsWith(prefix + 'encuesta')) {
    if (!message.member.hasPermission("ADMINISTRATOR"))
        return message.channel.send(`**Tu no puedes utilizar este comando.**`);
    
    const reporte = args.slice(1).join(" ");
    
    if(!reporte) return message.channel.send(`:grey_exclamation: | **Envia tu votacion**`) 
    const embed = new Discord.MessageEmbed()
        .setTitle(':e_mail: | **Encuesta** | 📌')
        .setDescription('`Votacion Activa.`')
        .setDescription(reporte)
        .setColor("RED")
        .setFooter('Votacion enviada por '+ message.author.tag)
        
        message.channel.send(embed).then(m =>  m.react("✅") + m.react("❌"))
      }
    
      if (message.content.startsWith(prefix + "anuncio")) {
        if (!message.member.hasPermission("ADMINISTRATOR"))
          return message.channel.send(`**Tu no puedes utilizar este comando.**`);
    
        const sayMessage = args.slice(1).join(" ");
    
        message.delete().catch(O_o => {});
    
        message.channel.send(sayMessage);
}

if(message.content.startsWith(prefix + 'cambios')) {
    if (!message.member.hasPermission("ADMINISTRATOR"))
        return message.channel.send(`**Tu no puedes utilizar este comando.**`);
    
    const cambios = args.slice(1).join(" ");
    
    if(!cambios) return message.channel.send(`:grey_exclamation: | **Envia tu votacion**`) 
    const cambios2 = new Discord.MessageEmbed()
        .setTitle('🔔 | **Cambios Realizados** | 📌')
//       .setDescription('`Cambios .`')
        .setDescription(cambios)
        .setColor("RED")
        .setFooter('Cambios enviados por '+ message.author.tag)
        .setTimestamp()
        
        message.channel.send(cambios2).then(m =>  m.react("✅") + m.react("❌"))
      }
    
      if (message.content.startsWith(prefix + "anuncio")) {
        if (!message.member.hasPermission("BAN_MEMBERS"))
          return message.channel.send(`**Tu no puedes utilizar este comando.**`);
    
        const sayMessage = args.slice(1).join(" ");
    
        message.delete().catch(O_o => {});
    
        message.channel.send(sayMessage);
}

if (message.content.startsWith(prefix + "verificar")) {
    if (message.channel.id !== "702246300581888012") 
       return message.channel.send(`**Este no es el canal correcto para utilizar este comando.**`);
           const embed = new Discord.MessageEmbed()
             .setColor("RED")
             .setDescription("✅ ¡" +message.author.username + " Felicitaciones, pasaste la verificación correctamente!");
        message.channel.send(embed)
        message.author.send("Te has verificado correctamente, ya podrás ver todos los canales del Servidor, disfruta de OceanBlack Roleplay!")
        message.member.roles.add("702246283045371966");
        message.member.roles.remove("702246284446269510");
    message.delete().catch(O_o => {});
}

if (message.content.startsWith(prefix + 'ip')) {
    const ip = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription("IP: Próximamente, servidor en desarrollo.");
    message.channel.send(ip)
}

if (message.content.startsWith(prefix + 'foro')) {
    const foro = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription("Foro: En desarrollo");
    message.channel.send(foro)
}

if (message.content.startsWith(prefix + 'web')) {
  const web = new Discord.MessageEmbed()
      .setColor("RED")
      .setDescription("Web: En desarrollo");
  message.channel.send(web)
}

if (message.content.startsWith(prefix + "ayuda")) {
  const ayuda = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("Comandos del Bot Oficial de OB:RP")
    .setTimestamp()
    .setFooter(client.user.username)
    .setDescription(
      '"**-ip**" ━ Puedes visualizar la IP del Servidor\n\n"**-foro**" ━ Te mostrará el Foro oficial del Servidor\n\n**"-sugerencia"** ━ Podrás enviar una sugerencia para el Servidor, deberás usarlo en el canal de sugerencias\n\n**"-web"** ━ Podrás obtener la URL de la web');
  message.channel.send(ayuda);
}

if (message.content.startsWith(prefix + "ayudastaff")) {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
          return message.channel.send(`**Tu no puedes utilizar este comando.**`);
  const ayuda2 = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("Comandos para los Staff's de OB:RP")
    .setTimestamp()
    .setFooter(client.user.username)
    .setDescription(
      '"**-anuncio**" ━ Comando para mandar anuncios, exclusivo para **Moderadores** en adelante\n\n"**-encuesta**" ━ Comando para realizar encuestas, exclusivo para **Administradores**\n\n**"-cambios"** ━ Comando para postear los cambios del servidor, exlusivo para **Administradores**');
  message.channel.send(ayuda2);
}

// ---------------------- SISTEMA DE WHITELIST ------------------------------------------- //

if (message.content.startsWith(prefix + "whitelist")) {
    if (!message.guild.me.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("Falta de permisos.").then(m => m.delete(60000)); //Si el bot no tiene permisos devuelva False
    const everyone = message.guild.roles.cache.find(m => m.name == "@everyone"); //Hace que el bot busque un rol llmado everyone

    const certificador = message.guild.roles.cache.find(
      r => r.name == "「Certificador」"
    );
    if (!certificador)
      return message.channel.send(
        "❌ Error ``|`` Necesita crear el rango ``「Certificador」`` ❌"
      ).then(m => m.delete(900000));

 //   const nombrech = message.author.discriminator
 //     .replace(/[^a-zA-z0-9 ]/g, "")
 //     .trim()
 //     .toLowerCase();
    if (message.guild.channels.cache.find(m => m.name.replace(/-/g, " ") == message.author.discriminator))
      return message.channel.send("AAA");

    const cate = message.guild.channels.cache.find(c => c.name === "whitelist" && c.type == "category");
    if (!cate)
      return await message.guild.channels.create("whitelist", {
        type: "category"
      }); 

    return message.guild.channels.create("whitelist-" + message.author.discriminator, {
        type: "text",
        permissionOverwrites: [
          {
            id: everyone.id, 
            deny: ["VIEW_CHANNEL", "SEND_MESSAGES"] 
          },
          {
            id: certificador.id, 
            allow: ["VIEW_CHANNEL", , "SEND_MESSAGES"] 
          },
          {
            id: message.author.id,
            allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
          }
        ],
        parent: cate.id
      })
      
//      .then(m => {
//       message.channel.send(
//          "Hola"
//        ),
//        message.guild.channels.cache.find(m => m.name.replace(/-/g, " ") == message.author.discriminator)
//          .send(m => {
//            message.channel.send(
//               "Hola"
//            );
//      })
      .catch(e => {
        message.channel.send(`Parece que hubo un error`), console.log(e);
      });
  }

  if (message.content.startsWith(prefix + "aprobar")) {
    const user = message.mentions.users.first();
    const mensaje = args.slice(1).join(" ");
    if (!message.guild.me.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("No tengo permisos.");
    const certificador = message.guild.roles.cache.find(
      r => r.name == "「Certificador」"
    );//buscamos el rol
    if (!certificador)
      return message.channel.send("No existe el rol 「Certificador」");
    //Sí no existe hacemos una respuesta
    if (!message.member.roles.cache.has(certificador.id))
      return message.channel.send(
        ":x: Error | No tienes permisos para aprobar la whitelist :x:."
      );//si no lo tienes elaboramos otra respuesta
    const cate = message.guild.channels.cache.find(
      c => c.name == "whitelist" && c.type == "category"
    ); //Que busque una categoria llamada Whitelist
    if (!cate)
      message.channel.send(
        ":x: Error | No hay ninguna whitelist solicitada :x:."
      ); // Así mismo pero puedes agregarle que necesitan permisos X para eliminar whitelist
//    if (!message.channel.parent != cate)
//      return message.channel.send(
//        ":x: Error | Este canal no es correcto :x:."
//      );//Si el canal no es correcto que no pase nada y que mande esa respuesta
    if (message.mentions.users.size < 1)
      return message.reply("Debes mencionar a alguien.").catch(console.error);
    if (!mensaje) return message.channel.send("Escriba la razón de la aprobación.");
    const aprobar = new Discord.MessageEmbed()
      .setColor("RED")
      .setAuthor(`✅Whitelist APROBADA✅`, client.user.avatarURL)
      .setTimestamp()
      .addField(`Certificador:`, `${message.author}`, true)
      .addField(`Mensaje del Certificador:`, `**${mensaje}**`);
    user.send(aprobar);
    client.channels.cache
      .get("706179854630125578")
      .send(message.author + " aprobó ✅ la whitelist de: " + user)
    return message.channel
      .delete()
      .catch(e => message.channel.send('Parece que hubo un error'));
    //si ocurre un error que lo mande al canal 
  } 

  if (message.content.startsWith(prefix + "rechazar")) {
    const user = message.mentions.users.first();
    const mensaje = args.slice(1).join(" ");
    if (!message.guild.me.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("No tengo permisos.");
    const certificador = message.guild.roles.cache.find(
      r => r.name == "「Certificador」"
    );//buscamos el rol
    if (!certificador)
      return message.channel.send("No existe el rol 「Certificador」");
    //Sí no existe hacemos una respuesta
    if (message.mentions.users.size < 1)
      return message.reply("Debes mencionar a alguien.").catch(console.error);
    if (!mensaje) return message.channel.send("Escriba la razón de rechazo.");
    const rechazar = new Discord.MessageEmbed()
      .setColor("RED")
      .setAuthor(`❌Whitelist RECHAZADA❌`, client.user.avatarURL)
      .setTimestamp()
      .addField(`Certificador:`, `${message.author}`, true)
      .addField(`Mensaje del Certificador:`, `**${mensaje}**`);
    user.send(rechazar);
    client.channels.cache
      .get("706179854630125578")
      .send(message.author + " rechazó ❌ la whitelist de: " + user)
    return message.channel
      .delete()
      .catch(e => message.channel.send('Parece que hubo un error'));
    //si ocurre un error que lo mande al canal 
  } 

if (message.content.startsWith(prefix + "pedirformulario")) {
    const cate = message.guild.channels.cache.find(c => c.name == "whitelist" && c.type == "category");
    if (!cate)
      return message.channel.send(
        ":x: Error | Este canal no es correcto :x:."
      );
    var forms = ["Preguntas Whitelist OceanBlack\nPara ti, que es el rol?", "Preguntas Whitelist OceanBlack a\n", "Preguntas Whitelist OceanBlack asd\n"];
    const mensaje = args.slice(0).join(" ");
    message.channel.send(
      `${
        forms[Math.floor(Math.random() * forms.length)]
      }`
    );
  }

// ---------------------- SISTEMA DE WHITELIST ------------------------------------------- //

});

client.login(process.env.TOKEN);
