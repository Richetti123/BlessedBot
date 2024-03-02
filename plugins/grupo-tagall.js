const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
let oi = `*🥷🏻@boosblessedd* ${pesan}`
let teks = `*🦋 '𝗘𝗧𝗜𝗤𝗨𝗘𝗧𝗔 𝗚𝗘𝗡𝗘𝗥𝗔𝗟  ᡴꪫ*\n${oi}\n\n*✨𝙈𝙚𝙣𝙘𝙞𝙤𝙣𝙚𝙨*\n`
for (let mem of participants) {
teks += `🥷🏻⋆ @${mem.id.split('@')[0]}\n`}
teks += `╰➤ 𝔅𝔬𝔱 𝔅𝔩𝔢𝔰𝔰𝔢𝔡 🇨🇱`
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
