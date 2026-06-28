async function listgc(sock, sender, message) {
  try {
    const groups = await sock.groupFetchAllParticipating();
    const groupList = Object.values(groups).map(group => ({
      id: group.id,
      name: group.subject,
      size: group.size,
      announce: group.announce,
    }));

    groupList.sort((a, b) => b.size - a.size);

    const totalGrub    = groupList.length;
    const grubTerbuka  = groupList.filter(g => !g.announce).length;
    const grubTertutup = groupList.filter(g => g.announce).length;

    let detail = '';
    groupList.forEach((group, index) => {
      const status = group.announce ? '🔒 Tertutup' : '🟢 Terbuka';
      detail += `
ㅤ  │┊  ☍ .  *${index + 1}. ${group.name}*
ㅤ  │┊       𝗂𝖽      :  ${group.id}
ㅤ  │┊       𝗆𝖾𝗆𝖻𝖾𝗋  :  ${group.size}
ㅤ  │┊       𝗌𝗍𝖺𝗍𝗎𝗌  :  ${status}
`;
    });

    const msg = `
ㅤ  ㅤ       *(ㅤ  ㅤ  ${global.botName} ㅤ  ㅤ )* 
ㅤ  𝗅𝗂𝗌𝗍  𝗀𝗋𝗈𝗎𝗉  •  𝗍𝗈𝗍𝖺𝗅  ${totalGrub}  𝗀𝗋𝗎𝗉

ㅤ   🕸   •   🕷─── *𝖺  𝗆𝗈𝗈𝗇𝗅𝗂𝗀𝗁𝗍  ╮*  
ㅤ  *𝗀𝗋𝗈𝗎𝗉   𝗅𝗂𝗌𝗍   𝖺𝗏𝖺𝗂𝗅𝖺𝖻𝗅𝖾   𝗇𝗈𝗐 - !*
ㅤ  │┊  ☍ .  𝗍𝗈𝗍𝖺𝗅     :  *${totalGrub}* grup
ㅤ  │┊  ☍ .  𝗍𝖾𝗋𝖻𝗎𝗄𝖺   :  *${grubTerbuka}* grup
ㅤ  │┊  ☍ .  𝗍𝖾𝗋𝗍𝗎𝗍𝗎𝗉  :  *${grubTertutup}* grup
ㅤ  ╰─────────────────────
${detail}
ㅤ 🐾  ╮ \`𝗉𝗈𝗐𝖾𝗋𝖾𝖽  𝖻𝗒\`   :   ${global.botName}  .  📓
ㅤ  ╰✪ ${global.botWeb}  ¡!  ${global.botOwner}`;

    await sock.sendMessage(sender, { text: msg });

  } catch (error) {
    console.error('Gagal mendapatkan daftar grup:', error);
    await sock.sendMessage(sender, { text: '❌ Gagal mengambil daftar grup, coba lagi nanti.' });
  }
}

export default listgc;
