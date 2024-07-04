export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`*[❗] Hola @${m.sender.split`@`[0]}, *[❗] Hola @⁨~Lizz 🦋⁩, ¡Qué onda, 🍪 Este es un bot para grupos de WhatsApp. 📲 Cualquier cosa, comunícate con mi dueño 5610035034📞 si deseas adquirir uno: . O entra al grupo de WhatsApp aquí: 👉https://chat.whatsapp.com/DbvFdi5FdDzF441vYsIsHT  🍪*`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
