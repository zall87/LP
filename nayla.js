// BY RIMURUBOTZ
// JGN DIJUAL BNH.
const respon = require('./lib/respon.js');
const { nomerowner, linkdonate, prefix, namaowner } = require('./admin/setting.json');
const { risetHome,  myHome, setHome, addHome, mySet, addSet, addCommand, myCommand, myCommand1, myCommand2, risetHadiah, myHadiah, addHadiah, addWaifu, setWaifu, risetWaifu, myWaifu, addHusbu, setHusbu, risetHusbu, myHusbu, addOfficer, setOfficer, risetOfficer, myOfficer, deleteBoom, risetBoom, addBoom, myBoom, myBoom1, addEnergi, setEnergi, risetEnergi, myEnergi, addKarakter, setKarakter, risetKarakter, myKarakter, myPlayer, risetPlayer,myLogin, addUang, addLogin, setUang, risetLogin, risetUang, myUang, addExp, setExp, risetExp, myExp, addLevel, setLevel, risetLevel, myLevel} = require('./lib/rimurubotz.js');
const { downloadMediaMessage, downloadContentFromMessage, generateWAMessage ,toBuffer, generateWAMessageFromContent, proto } = require('@adiwajshing/baileys');
const Crypto = require("crypto")
const RA = require('ra-api')
const gen = require("images-generator");
const { color, bgcolor } = require('./lib/color')
const { AnimeWallpaper } = require("anime-wallpapers");
const wall = new AnimeWallpaper();
const colors = require('colors/safe');
const fs = require('fs');
const hx = require('hxz-api');
const moment = require("moment-timezone");
const { spawn, exec } = require('child_process')
const ffmpeg = require('fluent-ffmpeg')
const path = require("path")
const { fetch, fetchJson, getBuffer } = require('./lib/anu.js');
//const session = require('./session.json');
moment.tz.setDefault('Asia/Jakarta').locale("id");
const list = "⇝";
const login = JSON.parse(fs.readFileSync('./media/text/login.json'))
const uang = JSON.parse(fs.readFileSync('./media/text/uang.json'))
const exp = JSON.parse(fs.readFileSync('./media/text/exp.json'))
const totalplayer = JSON.parse(fs.readFileSync('./media/text/totalplayer.json'))
const level = JSON.parse(fs.readFileSync('./media/text/level.json'))
const karakter = JSON.parse(fs.readFileSync('./media/text/karakter.json'))
const officer = JSON.parse(fs.readFileSync('./media/text/officer.json'))
const husbu = JSON.parse(fs.readFileSync('./media/text/husbu.json'))
const waifu = JSON.parse(fs.readFileSync('./media/text/waifu.json'))
const energi = JSON.parse(fs.readFileSync('./media/text/energi.json'))
const boom = JSON.parse(fs.readFileSync('./media/text/boom.json'))
const hadiah = JSON.parse(fs.readFileSync('./media/text/hadiah.json'))
const chat = JSON.parse(fs.readFileSync('./media/text/chat.json'))
const antilink = JSON.parse(fs.readFileSync('./media/text/group/antilink.json'))
const welcome = JSON.parse(fs.readFileSync('./media/text/group/welcome.json'))
const antitoxic = JSON.parse(fs.readFileSync('./media/text/group/antitoxic.json'))
const antitag = JSON.parse(fs.readFileSync('./media/text/group/antitag.json'))
const home = JSON.parse(fs.readFileSync('./media/text/home.json'))
const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`
}
var todoroki = "https://cin.lol/v/195160"
var levi = "https://cin.lol/v/268656"
var kaneki = "https://cin.lol/v/175093"
var asta = "https://cin.lol/v/357977"
var naruto = "https://cin.lol/v/156998"
var luffy = "https://cin.lol/v/325781"
var kurumi = "https://cin.lol/v/160556"
var asuna = "https://cin.lol/v/392976"
var emilia = "https://cin.lol/v/279333"
var nezuko = "https://cin.lol/v/319115"
var chitoge = "https://cin.lol/v/130855"
var mikasa = "https://cin.lol/v/144421"
// ?(2)

module.exports = hehe = async (nayla, nay) => {
try {
const type = Object.keys(nay.message)[0];
const body = (type === 'conversation') ? nay.message.conversation : (type == 'imageMessage') ? nay.message.imageMessage.caption : (type == 'videoMessage') ? nay.message.videoMessage.caption : (type == 'extendedTextMessage') ? nay.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? nay.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? nay.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? nay.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (nay.message.buttonsResponseMessage?.selectedButtonId || nay.message.listResponseMessage?.singleSelectReply.selectedRowId || nay.text) : ''
const budy = (type === 'conversation') ? nay.message.conversation : (type === 'extendedTextMessage') ? nay.message.extendedTextMessage.text : ''
const isCommand = body.startsWith(prefix);
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const cmd = isCommand ? body.slice(1).trim().split(/ +/).shift().toLowerCase() : null;
const time = moment(new Date()).format("HH:mm");
var datee = new Date();
var harii = datee.getDay();
var bulann = datee.getMonth();
var tanggall = datee.getDate();
const text = nay.message.conversation;
const isGroup = nay.key.remoteJid.endsWith('@g.us');
const from = nay.key.remoteJid;
const content = JSON.stringify(nay.message);
const args = body.trim().split(/ +/).slice(1);
const q = args.join(" ");
const botNumber = nayla.user.id.split(':')[0] + '@s.whatsapp.net';
const botName = nayla.user.name;
const pushname = nay.pushName;
const sender = isGroup ? (nay.key.participant ? nay.key.participant : nay.participant) : nay.key.remoteJid;
const groupMetadata = isGroup ? await nayla.groupMetadata(from) : '';
const uwong = isGroup ? await groupMetadata.participants : '';
const groupAdmins = isGroup ? await uwong.filter(v => v.admin !== null).map(a => a.id) : '';
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
const isGroupAdmins = groupAdmins.includes(sender) || false;
const groupName = isGroup ? groupMetadata.subject : "";

// ?(1)
const isAntitag = antitag.includes(sender)
const isAntitoxic = antitoxic.includes(sender)
const isWelcome = welcome.includes(sender)
const isAntilink = antilink.includes(sender)


 
const isMedia = (type === 'imageMessage' || type === 'videoMessage');
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage');
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage');
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage');
await nayla.sendReadReceipt(from, nay.key.participant, [nay.key.id]);

// LOG COMMAND
if (isGroup && command) {
console.log(colors.green.bold("[Group]") + " " + colors.brightCyan(time,) + " " + colors.black.bgYellow(cmd) + " " + colors.green("from") + " " + colors.blue(groupName));
} else if (!isGroup && command) {
console.log(colors.green.bold("[Private]") + " " + colors.brightCyan(time,) + " " + colors.black.bgYellow(cmd) + " " + colors.green("from") + " " + colors.blue(pushname));
}
// FAKE REPLY
nay1 = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {})},message: {"extendedTextMessage": {"text": `Halo! : ${pushname} 👋`}}}
// CONST SEND MESSAGE
nayla.sendnew = async (satu, dua, tiga) => {return await generateWAMessage(satu, dua, {...tiga ,userJid: nayla.authState.creds.me.id,upload: nayla.waUploadToServer})}      
const sendMenu = async (satu, dua, tiga, empat) => {
var menu1 = await generateWAMessageFromContent(from, {
"templateMessage": {"hydratedTemplate": {...empat.message,"hydratedContentText": dua,"hydratedFooterText": tiga,"hydratedButtons": [
{"urlButton": {"displayText": "👨‍💻Youtube","url": "https://youtube.com/c/RisalTmy"}},
{"urlButton": {"displayText": "👻Tiktok","url": "https://vt.tiktok.com/ZSRM3K9Mb/"}},
{"quickReplyButton": {"displayText": "💰 SAWER","id": `${prefix}donasi`}},
{"quickReplyButton": {"displayText": "🗿 KOWE","id": `${prefix}saya`,}},
{"quickReplyButton": {"displayText": "📝VERSI","id": `${prefix}versi`}}
]}}}, {})
nayla.relayMessage(satu, menu1.message, { messageId: menu1.key.id })}

const sendReply = async (satu, dua, tiga, empat) => {
var menu2 = await generateWAMessageFromContent(from, {
"templateMessage": {"hydratedTemplate": {...empat.message,"hydratedContentText": dua,"hydratedFooterText": tiga,"hydratedButtons": [
{"urlButton": {"displayText": "SOURCE CODE","url": "https://youtube.com/channel/UCeQaKIQQhDNHMOq_odQh5Sw"}}]
}}}, {})
nayla.relayMessage(satu, menu2.message, { messageId: menu2.key.id })}

const sendMedia = (satu, dua, tiga) => {
if (satu == 'sticker') {nayla.sendMessage(from, {sticker:{url:dua}},{quoted:nay})}
if (satu == 'stickers') {nayla.sendMessage(from, {sticker:{url:dua}},{quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {})},message: {"extendedTextMessage": {"text": tiga}}}})}
if (satu == 'vn') {nayla.sendMessage(from, {audio:{url:dua}, mimetype:"audio/mp4", ptt:true},{quoted:nay})}
if (satu == 'audio') {nayla.sendMessage(from, {audio:{url:dua}, mimetype:"audio/mp4"},{quoted:nay})}
if (satu == 'image') {nayla.sendMessage(from, {image:{url:dua}, caption:tiga},{quoted:nay})}
if (satu == 'video') {nayla.sendMessage(from, {video:{url:dua}, caption:tiga},{quoted:nay})}
if (satu == 'gif') {nayla.sendMessage(from, {video:{url:dua}, caption:tiga, gifPlayback:true, mimetype:"video/mp4"},{quoted:nay})}
if (satu == 'dokument') {nayla.sendMessage(from, {dokument:{url:dua}, fileName:tiga},{quoted:nay})}}

const sendButton = (satu, dua, button1, id1, button2, button22, id2, id22, button3, button33, button333, id3, id33, id333) => {
if (satu == "1") {
nyz3 = [{buttonId: id1, buttonText: {displayText: button1}, type: 1}]}
if (satu == "2") {
nyz3 = [{buttonId: id2, buttonText: {displayText: button2}, type: 1},{buttonId: id22, buttonText: {displayText: button22}, type: 1}]}
if (satu == "3") {
nyz3 = [{buttonId: id3, buttonText: {displayText: button3}, type: 1},{buttonId: id33, buttonText: {displayText: button33}, type: 1},{buttonId: id333, buttonText: {displayText: button333}, type: 1}]}
const nyz4 = {text:dua,footer: 'Loading...',buttons: nyz3,headerType: 1}
nayla.sendMessage(from, nyz4)}

const sendPng = (satu, dua, tiga, button1, id1, button2, button22, id2, id22, button3, button33, button333, id3, id33, id333) => {
if(satu == "1") {nyz5 = [{buttonId: id1, buttonText: {displayText: button1}, type: 1}]}  
if(satu == "2") {nyz5 = [{buttonId: id2, buttonText: {displayText: button2}, type: 1},{buttonId: id22, buttonText: {displayText: button22}, type: 1}]}  
if(satu == "3") {nyz5 = [{buttonId: id3, buttonText: {displayText: button3}, type: 1},{buttonId: id33, buttonText: {displayText: button33}, type: 1}, {buttonId: id333, buttonText: {displayText: button333}, type: 1}]}  
const nyz6 = {image: {url: tiga},caption: dua,footer: 'Loading...',buttons: nyz5,headerType: 4}
nayla.sendMessage(from, nyz6)}

const reply = (teksnya) => {
const nyz1 = [{index: 1, urlButton: {displayText: 'OwnerBot', url: 'https://wa.me/' + nomerowner}}]
const nyz2 = {text: "\n" + teksnya, footer: 'Loading...', templateButtons: nyz1}
nayla.sendMessage(from, nyz2,{quoted:nay1})}

const setAll = (satu, dua, tiga) => {
if (tiga == "negatif") {return satu - dua}
if (tiga == "positif") {return satu + dua}}

const genTest = (satu) => {
return gen.misc.drip({avatar: satu})
}
 
// EXP & LEVEL

var lvl = "❲▒▒▒▒▒▒▒▒▒▒❳[0]"
if(myExp(sender) >= 250) {lvl = "❲█▒▒▒▒▒▒▒▒▒❳[1]"
setLevel(sender, 1)}
if(myExp(sender) >= 750) {lvl = "❲██▒▒▒▒▒▒▒▒❳[2]"
setLevel(sender, 2)}
if(myExp(sender) >= 4000) {lvl = "❲███▒▒▒▒▒▒▒❳[3]"
setLevel(sender, 3)}
if(myExp(sender) >= 15000) {lvl = "❲████▒▒▒▒▒▒❳[4]"
setLevel(sender, 4)}
if(myExp(sender) >= 23000) {lvl = "❲█████▒▒▒▒▒❳[5]"
setLevel(sender, 5)}
if(myExp(sender) >= 39000) {lvl = "❲██████▒▒▒▒❳[6]"
setLevel(sender, 6)}
if(myExp(sender) >= 47000) {lvl = "❲███████▒▒▒❳[7]"
setLevel(sender, 7)}
if(myExp(sender) >= 53000) {lvl = "❲████████▒▒❳[8]"
setLevel(sender, 8)}
if(myExp(sender) >= 61000) {lvl = "❲█████████▒❳[9]"
setLevel(sender, 9)}
if(myExp(sender) >= 70000) {lvl = "❲██████████❳[10]"
setLevel(sender, 10)}
if (myUang(sender) <= 1) {setUang(sender, 1000)}

if (myCommand(command)){
var cmdd = myCommand(command)
}
switch (cmd) {
case `${cmdd}`:
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
reply(myCommand1(command))
break
case 'addcommand': case 'addcmd':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
q11 = q.split("&")[0];
q12 = q.split("&")[1];
if (!q) return reply(`~> *Contoh* : ${prefix + command} namafitur&balasan\n~> *EX* : ${prefix + command} hehe&huhhh`)
if (!q11) return reply(`~> *Contoh* : ${prefix + command} namafitur&balasan\n~> *EX* : ${prefix + command} hehe&huhhh`)
if (!q12) return reply(`~> *Contoh* : ${prefix + command} namafitur&balasan\n~> *EX* : ${prefix + command} hehe&huhhh`)
addCommand(q11, q12)
reply("Sukses")
break
case 'buyramuan':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
if (myUang(sender) <= 2000) return reply(`• *UANG KAMU* : ${myUang(sender)}\n*• HARGA RAMUAN* : 2000,\n\nMaaf Uang kamu kurang ${setAll(2000, myUang(sender), "negatif")} untuk beli ramuan`)
setEnergi(sender, 100)
break
case 'gacha':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
if (myUang(sender) <= 1000) return reply(`• *UANG KAMU* : ${myUang(sender)}\n*• HARGA GACHA* : 1000,\n\nMaaf Uang kamu kurang ${setAll(1000, myUang(sender), "negatif")} untuk gacha`)
if (!q) return sendPng("1", "[ *GACHA* ]\n*HARGA* : 1000\nAyo gacha dan dapatkan hadiah random diatas" + ` untuk list hadiah kamu bisa cek di ${prefix}myhadiah`,"./media/image/karakter/listhadiah.jpg","GACHA!",`${prefix}gacha y`)
gacha = ["sendok","boom","boom","boom","boom","boom","sandal","boom","boom","boom","boom","boom","minyak","boom","boom","boom","boom","boom","ikan","boom","boom","boom","boom","boom","panci","boom","boom","boom","boom","boom","mobil","boom","boom","boom","boom","boom","uang"][Math.floor(Math.random() * (["sendok","boom","boom","boom","boom","boom","sandal","boom","boom","boom","boom","boom","minyak","boom","boom","boom","boom","boom","ikan","boom","boom","boom","boom","boom","panci","boom","boom","boom","boom","boom","mobil","boom","boom","boom","boom","boom","uang"].length))]
if (q == "y"){
setUang(sender, setAll(myUang(sender), 1000, "negatif"))
Object.keys(hadiah).forEach((i) => { 
if(gacha == "boom") {
sendMedia("stickers","./media/sticker/gacha/boom.webp","YAHHH BOOM:(")}
if(gacha == "sendok") {
hadiah[i].sendok += 1
fs.writeFileSync('./media/text/hadiah.json', JSON.stringify(hadiah))
sendMedia("stickers","./media/sticker/gacha/sendok.webp","*CONGRATS*" + `\n~> ${prefix}myhadiah`)}
if(gacha == "sandal") {
hadiah[i].sandal += 1
fs.writeFileSync('./media/text/hadiah.json', JSON.stringify(hadiah))
sendMedia("stickers","./media/sticker/gacha/sandal.webp","*CONGRATS*" + `\n~> ${prefix}myhadiah`)}
if(gacha == "minyak") {
hadiah[i].minyak += 1
fs.writeFileSync('./media/text/hadiah.json', JSON.stringify(hadiah))
sendMedia("stickers","./media/sticker/gacha/minyak.webp","*CONGRATS*" + `\n~> ${prefix}myhadiah`)}
if(gacha == "ikan") {
hadiah[i].ikan += 1
fs.writeFileSync('./media/text/hadiah.json', JSON.stringify(hadiah))
sendMedia("stickers","./media/sticker/gacha/ikan.webp","*CONGRATS*" + `\n~> ${prefix}myhadiah`)}
if(gacha == "panci") {
hadiah[i].panci += 1
fs.writeFileSync('./media/text/hadiah.json', JSON.stringify(hadiah))
sendMedia("stickers","./media/sticker/gacha/panci.webp","*CONGRATS*" + `\n~> ${prefix}myhadiah`)}
if(gacha == "mobil") {
hadiah[i].mobil += 1
fs.writeFileSync('./media/text/hadiah.json', JSON.stringify(hadiah))
sendMedia("stickers","./media/sticker/gacha/mobil.webp","*CONGRATS*" + `\n~> ${prefix}myhadiah`)}
if(gacha == "uang") { 
sendMedia("stickers","./media/sticker/gacha/uang.webp","*CONGRATS*" + `\nUANG : 15000\n~> ${prefix}myhadiah`)}
setUang(sender, setAll(myUang(sender), 15000, "positif"))
})}
break
case 'myhadiah':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
const sections = [{title: "1",rows: [
{title: `SENDOK (${myHadiah(sender, "sendok")})`, rowId: "RIMURUBOTZ", description: "HARGA : 13.000"},
{title: `SANDAL (${myHadiah(sender, "sandal")})`, rowId: "RIMURUBOTZ", description: "HARGA : 20.000"},
{title: `MINYAK (${myHadiah(sender, "minyak")})`, rowId: "RIMURUBOTZ", description: "HARGA : 30.000"},
{title: `IKAN (${myHadiah(sender, "ikan")})`, rowId: "RIMURUBOTZ", description: "HARGA : 50.000"},
{title: `PANCI (${myHadiah(sender, "panci")})`, rowId: "RIMURUBOTZ", description: "HARGA : 75.000"},
{title: `MOBIL (${myHadiah(sender, "mobil")})`, rowId: "RIMURUBOTZ", description: "HARGA : 100.000"}]}]
const listMessage = { text: pushname, footer: `Ingin menjual hadiah? gunakan command ${prefix}jualhadiah`, title: "YOUR-HADIAH", buttonText: "OPEN",sections}
nayla.sendMessage(from, listMessage)
break
case 'jualhadiah':
if(!q) return sendMedia("image","./media/image/shopee.jpg",`[ *SHOPEEZ* ]\n~> *SENDOK* : 13.000\n• Jual? ${prefix}jualhadiah sendok\n\n~> *SANDAL* : 20.000\n• Jual? ${prefix}jualhadiah sandal\n\n~> *MINYAK* : 30.000\n• Jual? ${prefix}jualhadiah minyak\n\n~> *IKAN* : 50.000\n• Jual? ${prefix}jualhadiah ikan\n\n~> *PANCI* : 75.000\n• Jual? ${prefix}jualhadiah panci\n\n~> *MOBIL* : 100.000\n• Jual? ${prefix}jualhadiah mobil\n\nSilahkan cek hadiah kamu di ${prefix}myhadiah`)
Object.keys(hadiah).forEach((i) => { 
if(q == "sendok"){
if (myHadiah(sender, "sendok") == "0") return reply(`Kamu tidak memiliki koleksi hadiah sendok, silahkan cek hadiah kamu di ${prefix}myhadiah`)
reply("Sukses menjual sendok, silahkan cek uang anda")
setUang(sender, setAll(myUang(sender), 13000, "positif"))
hadiah[i].sendok -= 1
fs.writeFileSync('./media/text/hadiah.json', JSON.stringify(hadiah))}
if(q == "sandal"){
if (myHadiah(sender, "sandal") == "0") return reply(`Kamu tidak memiliki koleksi hadiah sandal, silahkan cek hadiah kamu di ${prefix}myhadiah`)
reply("Sukses menjual sandal, silahkan cek uang anda")
setUang(sender, setAll(myUang(sender), 20000, "positif"))
hadiah[i].sandal -= 1
fs.writeFileSync('./media/text/hadiah.json', JSON.stringify(hadiah))}
if(q == "minyak"){
if (myHadiah(sender, "minyak") == "0") return reply(`Kamu tidak memiliki koleksi hadiah minyak, silahkan cek hadiah kamu di ${prefix}myhadiah`)
reply("Sukses menjual minyak, silahkan cek uang anda")
setUang(sender, setAll(myUang(sender), 30000, "positif"))
hadiah[i].minyak -= 1
fs.writeFileSync('./media/text/hadiah.json', JSON.stringify(hadiah))}
if(q == "ikan"){
if (myHadiah(sender, "ikan") == "0") return reply(`Kamu tidak memiliki koleksi hadiah ikan, silahkan cek hadiah kamu di ${prefix}myhadiah`)
reply("Sukses menjual ikan, silahkan cek uang anda")
setUang(sender, setAll(myUang(sender), 50000, "positif"))
hadiah[i].ikan -= 1
fs.writeFileSync('./media/text/hadiah.json', JSON.stringify(hadiah))}
if(q == "panci"){
if (myHadiah(sender, "panci") == "0") return reply(`Kamu tidak memiliki koleksi hadiah panci, silahkan cek hadiah kamu di ${prefix}myhadiah`)
reply("Sukses menjual panci, silahkan cek uang anda")
setUang(sender, setAll(myUang(sender), 75000, "positif"))
hadiah[i].panci -= 1
fs.writeFileSync('./media/text/hadiah.json', JSON.stringify(hadiah))}
if(q == "mobil"){
if (myHadiah(sender, "mobil") == "0") return reply(`Kamu tidak memiliki koleksi hadiah mobil, silahkan cek hadiah kamu di ${prefix}myhadiah`)
reply("Sukses menjual mobil, silahkan cek uang anda")
setUang(sender, setAll(myUang(sender), 100000, "positif"))
hadiah[i].mobil -= 1
fs.writeFileSync('./media/text/hadiah.json', JSON.stringify(hadiah))}
})
break
case 'versi':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
reply("BOT INI VERSI 9999999999+ INGAT")
break
case 'saya':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sya = `[ *YOUR-INFO* ]\n*NAME* : ${pushname}\n*NOMER* : ${sender}\n*LEVEL* : ${lvl}\n*EXP* : ${myExp(sender)}\n*UANG* : ${myUang(sender)}\n*ENERGI* : ${myEnergi(sender)}\n*KARAKTER* : ${myKarakter(sender)}\n*OFFICER* : ${myOfficer(sender)}\n*HUSBU* : ${myHusbu(sender)}\n*WAIFU* : ${myWaifu(sender)}`
sendMedia("image","./media/image/login/profile.jpg", sya)
break
case 'kenapa':
reply(`༆𝙊𝙍𝘼𝙉𝙂 𝘽𝙄𝘼𝙎𝘼༆𖣘𖣘𖣘𖣘𖣘𖣘𖣘ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟𖣘𖣘𖣘𖣘𖣘𖣘𖣘ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟𖣘𖣘𖣘𖣘𖣘𖣘𖣘ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀ9999999999999ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀ`)
break
case 'buywaifu':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
if (!q) return sendMedia("image","./media/image/karakter/listwaifu.jpg",`[ *WAIFU SHOP* ]\n(1) KURUMI\n> *Harga* : 5000\n> *Buy?* : ${prefix + command} kurumi\n(2) ASUNA\n> *Harga* : 5000\n> *Buy?* : ${prefix + command} asuna\n(3) EMILIA\n> *Harga* : 5000\n> *Buy?* : ${prefix + command} emilia\n(4) NEZUKO\n> *Harga* : 5000\n> *Buy?* : ${prefix + command} nezuko\n(5) CHITOGE\n> *Harga* : 5000\n> *Buy?* : ${prefix + command} chitoge\n(6) MIKASA\n> *Harga* : 5000\n> *Buy?* : ${prefix + command} mikasa\n\n~> *Keuntungan membeli waifu?*\n• unlock fitur ${prefix}imagewaifu\n• unlock fitur ${prefix}doujinwaifu`)
if (myUang(sender) <= 5000) return reply(`• *UANG KAMU* : ${myUang(sender)}\n*• HARGA WAIFU* : 5000,\n\nMaaf Uang kamu kurang ${setAll(5000, myUang(sender), "negatif")} untuk membeli waifu ini`)
if (q == "kurumi") { setWaifu(sender, "kurumi")
setUang(sender, setAll(myUang(sender), 5000, "negatif"))
sendPng("1", "[ *SUKSES BUY* ]\nSilahkan cek Waifu kamu","./media/image/waifu/kurumi1.jpg","CEK-WAIFU",`${prefix}mywaifu`)}
if (q == "asuna") { setWaifu(sender, "asuna")
setUang(sender, setAll(myUang(sender), 5000, "negatif"))
sendPng("1", "[ *SUKSES BUY* ]\nSilahkan cek Waifu kamu","./media/image/waifu/asuna1.jpg","CEK-WAIFU",`${prefix}mywaifu`)}
if (q == "emilia") { setWaifu(sender, "emilia")
setUang(sender, setAll(myUang(sender), 5000, "negatif"))
sendPng("1", "[ *SUKSES BUY* ]\nSilahkan cek Waifu kamu","./media/image/waifu/emilia1.jpg","CEK-WAIFU",`${prefix}mywaifu`)}
if (q == "nezuko") { setWaifu(sender, "nezuko")
setUang(sender, setAll(myUang(sender), 5000, "negatif"))
sendPng("1", "[ *SUKSES BUY* ]\nSilahkan cek Waifu kamu","./media/image/waifu/nezuko1.jpg","CEK-WAIFU",`${prefix}mywaifu`)}
if (q == "chitoge") { setWaifu(sender, "chitoge")
setUang(sender, setAll(myUang(sender), 5000, "negatif"))
sendPng("1", "[ *SUKSES BUY* ]\nSilahkan cek Waifu kamu","./media/image/waifu/chitoge1.jpg","CEK-WAIFU",`${prefix}mywaifu`)}
if (q == "mikasa") { setWaifu(sender, "mikasa")
setUang(sender, setAll(myUang(sender), 5000, "negatif"))
sendPng("1", "[ *SUKSES BUY* ]\nSilahkan cek Waifu kamu","./media/image/waifu/mikasa1.jpg","CEK-WAIFU",`${prefix}mywaifu`)}
break
case 'mywaifu':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
if (myWaifu(sender) == "NaN") return reply("Maaf kamu belum memiliki waifu. silahkan beli waifu terlebih dahulu di buywaifu")
if (myWaifu(sender) == "kurumi") { sendMedia("image","./media/image/waifu/kurumi1.jpg",`[ *YOUR-WAIFU* ]\n\n~> *Name* : kurumi\n\n~> ( *UNLOCK FITUR* )\n• ${prefix}doujinwaifu\n• ${prefix}imagewaifu`)}
if (myWaifu(sender) == "asuna") { sendMedia("image","./media/image/waifu/asuna1.jpg",`[ *YOUR-WAIFU* ]\n\n~> *Name* : asuna\n\n~> ( *UNLOCK FITUR* )\n• ${prefix}doujinwaifu\n• ${prefix}imagewaifu`)}
if (myWaifu(sender) == "emilia") { sendMedia("image","./media/image/waifu/emilia1.jpg",`[ *YOUR-WAIFU* ]\n\n~> *Name* : emilia\n\n~> ( *UNLOCK FITUR* )\n• ${prefix}doujinwaifu\n• ${prefix}imagewaifu`)}
if (myWaifu(sender) == "nezuko") { sendMedia("image","./media/image/waifu/nezuko1.jpg",`[ *YOUR-WAIFU* ]\n\n~> *Name* : nezuko\n\n~> ( *UNLOCK FITUR* )\n• ${prefix}doujinwaifu\n• ${prefix}imagewaifu`)}
if (myWaifu(sender) == "chitoge") { sendMedia("image","./media/image/waifu/chitoge1.jpg",`[ *YOUR-WAIFU* ]\n\n~> *Name* : chitoge\n\n~> ( *UNLOCK FITUR* )\n• ${prefix}doujinwaifu\n• ${prefix}imagewaifu`)}
if (myWaifu(sender) == "mikasa") { sendMedia("image","./media/image/waifu/mikasa1.jpg",`[ *YOUR-WAIFU* ]\n\n~> *Name* : todoroki\n\n~> ( *UNLOCK FITUR* )\n• ${prefix}doujinwaifu\n• ${prefix}imagewaifu`)}
break
case 'doujinwaifu':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
if (myWaifu(sender) == "NaN") return reply("Maaf kamu belum memiliki waifu. silahkan beli waifu terlebih dahulu di buywaifu")
if (myWaifu(sender) == "kurumi") { sendMedia("image","./media/image/waifu/kurumi.jpg",`[ *YOUR-WAIFU* ]\n\n~> *Link-Doujin* : ${kurumi}`)}
if (myWaifu(sender) == "asuna") { sendMedia("image","./media/image/waifu/asuna.jpg",`[ *YOUR-WAIFU* ]\n\n~> *Link-Doujin* : ${asuna}`)}
if (myWaifu(sender) == "emilia") { sendMedia("image","./media/image/waifu/emilia.jpg",`[ *YOUR-WAIFU* ]\n\n~> *Link-Doujin* : ${emilia}`)}
if (myWaifu(sender) == "nezuko") { sendMedia("image","./media/image/waifu/nezuko.jpg",`[ *YOUR-WAIFU* ]\n\n~> *Link-Doujin* : ${nezuko}`)}
if (myWaifu(sender) == "chitoge") { sendMedia("image","./media/image/waifu/chitoge.jpg",`[ *YOUR-WAIFU* ]\n\n~> *Link-Doujin* : ${chitoge}`)}
if (myWaifu(sender) == "mikasa") { sendMedia("image","./media/image/waifu/mikasa.jpg",`[ *YOUR-WAIFU* ]\n\n~> *Link-Doujin* : ${mikasa}`)}
break
case 'imagewaifu':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
if (myHusbu(sender) == "NaN") return reply("Maaf kamu belum memiliki husbu. silahkan beli husbu terlebih dahulu di buyhusbu")
async function Wallpaper2() {
wallr = [1,2,3,4,5,6,7,8,9][Math.floor(Math.random() * ([1,2,3,4,5,6,7,8,9].length))]
const wallpaper = await wall.getAnimeWall1({ search: myWaifu(sender), page: 1 })
return sendMedia("image", wallpaper[wallr].thumbnail, myWaifu(sender))}
Wallpaper2()
break
case 'buyhusbu':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
if (!q) return sendMedia("image","./media/image/karakter/listhusbu.jpg",`[ *HUSBU SHOP* ]\n(1) TODOROKI\n> *Harga* : 5000\n> *Buy?* : ${prefix + command} todoroki\n(2) LEVI\n> *Harga* : 5000\n> *Buy?* : ${prefix + command} levi\n(3) KANEKI\n> *Harga* : 5000\n> *Buy?* : ${prefix + command} kaneki\n(4) ASTA\n> *Harga* : 5000\n> *Buy?* : ${prefix + command} asta\n(5) NARUTO\n> *Harga* : 5000\n> *Buy?* : ${prefix + command} naruto\n(6) LUFFY\n> *Harga* : 5000\n> *Buy?* : ${prefix + command} luffy\n\n~> *Keuntungan membeli husbu?*\n• unlock fitur ${prefix}imagehusbu\n• unlock fitur ${prefix}doujinhusbu`)
if (myUang(sender) <= 5000) return reply(`• *UANG KAMU* : ${myUang(sender)}\n*• HARGA HUSBU* : 5000,\n\nMaaf Uang kamu kurang ${setAll(5000, myUang(sender), "negatif")} untuk membeli husbu ini`)
if (q == "todoroki") { setHusbu(sender, "todoroki")
setUang(sender, setAll(myUang(sender), 5000, "negatif"))
sendPng("1", "[ *SUKSES BUY* ]\nSilahkan cek Husbu kamu","./media/image/husbu/todoroki1.jpg","CEK-HUSBU",`${prefix}myhusbu`)}
if (q == "levi") { setHusbu(sender, "levi")
setUang(sender, setAll(myUang(sender), 5000, "negatif"))
sendPng("1", "[ *SUKSES BUY* ]\nSilahkan cek Husbu kamu","./media/image/husbu/levi1.jpg","CEK-HUSBU",`${prefix}myhusbu`)}
if (q == "kaneki") { setHusbu(sender, "kaneki")
setUang(sender, setAll(myUang(sender), 5000, "negatif"))
sendPng("1", "[ *SUKSES BUY* ]\nSilahkan cek Husbu kamu","./media/image/husbu/kaneki1.jpg","CEK-HUSBU",`${prefix}myhusbu`)}
if (q == "asta") { setHusbu(sender, "asta")
setUang(sender, setAll(myUang(sender), 5000, "negatif"))
sendPng("1", "[ *SUKSES BUY* ]\nSilahkan cek Husbu kamu","./media/image/husbu/asta1.jpg","CEK-HUSBU",`${prefix}myhusbu`)}
if (q == "naruto") { setHusbu(sender, "naruto")
setUang(sender, setAll(myUang(sender), 5000, "negatif"))
sendPng("1", "[ *SUKSES BUY* ]\nSilahkan cek Husbu kamu","./media/image/husbu/naruto1.jpg","CEK-HUSBU",`${prefix}myhusbu`)}
if (q == "luffy") { setHusbu(sender, "luffy")
setUang(sender, setAll(myUang(sender), 5000, "negatif"))
sendPng("1", "[ *SUKSES BUY* ]\nSilahkan cek Husbu kamu","./media/image/husbu/luffy1.jpg","CEK-HUSBU",`${prefix}myhusbu`)}
break
case 'myhusbu':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
if (myHusbu(sender) == "NaN") return reply("Maaf kamu belum memiliki husbu. silahkan beli husbu terlebih dahulu di buyhusbu")
if (myHusbu(sender) == "todoroki") { sendMedia("image","./media/image/husbu/todoroki1.jpg",`[ *YOUR-HUSBU* ]\n\n~> *Name* : todoroki\n\n~> ( *UNLOCK FITUR* )\n• ${prefix}doujinhusbu\n• ${prefix}imagehusbu`)}
if (myHusbu(sender) == "levi") { sendMedia("image","./media/image/husbu/levi1.jpg",`[ *YOUR-HUSBU* ]\n\n~> *Name* : levi\n\n~> ( *UNLOCK FITUR* )\n• ${prefix}doujinhusbu\n• ${prefix}imagehusbu`)}
if (myHusbu(sender) == "kaneki") { sendMedia("image","./media/image/husbu/kaneki1.jpg",`[ *YOUR-HUSBU* ]\n\n~> *Name* : kaneki\n\n~> ( *UNLOCK FITUR* )\n• ${prefix}doujinhusbu\n• ${prefix}imagehusbu`)}
if (myHusbu(sender) == "asta") { sendMedia("image","./media/image/husbu/asta1.jpg",`[ *YOUR-HUSBU* ]\n\n~> *Name* : asta\n\n~> ( *UNLOCK FITUR* )\n• ${prefix}doujinhusbu\n• ${prefix}imagehusbu`)}
if (myHusbu(sender) == "naruto") { sendMedia("image","./media/image/husbu/naruto1.jpg",`[ *YOUR-HUSBU* ]\n\n~> *Name* : naruto\n\n~> ( *UNLOCK FITUR* )\n• ${prefix}doujinhusbu\n• ${prefix}imagehusbu`)}
if (myHusbu(sender) == "luffy") { sendMedia("image","./media/image/husbu/luffy1.jpg",`[ *YOUR-HUSBU* ]\n\n~> *Name* : luffy\n\n~> ( *UNLOCK FITUR* )\n• ${prefix}doujinhusbu\n• ${prefix}imagehusbu`)}
break
case 'doujinhusbu':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
if (myHusbu(sender) == "NaN") return reply("Maaf kamu belum memiliki husbu. silahkan beli husbu terlebih dahulu di buyhusbu")
if (myHusbu(sender) == "todoroki") { sendMedia("image","./media/image/husbu/todoroki.jpg",`[ *YOUR-HUSBU* ]\n\n~> *Link-Doujin* : ${todoroki}`)}
if (myHusbu(sender) == "levi") { sendMedia("image","./media/image/husbu/levi.jpg",`[ *YOUR-HUSBU* ]\n\n~> *Link-Doujin* : ${levi}`)}
if (myHusbu(sender) == "kaneki") { sendMedia("image","./media/image/husbu/kaneki.jpg",`[ *YOUR-HUSBU* ]\n\n~> *Link-Doujin* : ${kaneki}`)}
if (myHusbu(sender) == "asta") { sendMedia("image","./media/image/husbu/asta.jpg",`[ *YOUR-HUSBU* ]\n\n~> *Link-Doujin* : ${asta}`)}
if (myHusbu(sender) == "naruto") { sendMedia("image","./media/image/husbu/naruto.jpg",`[ *YOUR-HUSBU* ]\n\n~> *Link-Doujin* : ${naruto}`)}
if (myHusbu(sender) == "luffy") { sendMedia("image","./media/image/husbu/luffy.jpg",`[ *YOUR-HUSBU* ]\n\n~> *Link-Doujin* : ${luffy}`)}
break
case 'imagehusbu':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
if (myHusbu(sender) == "NaN") return reply("Maaf kamu belum memiliki husbu. silahkan beli husbu terlebih dahulu di buyhusbu")
async function Wallpaper1() {
wallt = [1,2,3,4,5,6,7,8,9][Math.floor(Math.random() * ([1,2,3,4,5,6,7,8,9].length))]
const wallpaper = await wall.getAnimeWall1({ search: myHusbu(sender), page: 1 })
return sendMedia("image", wallpaper[wallt].thumbnail, myHusbu(sender))}
Wallpaper1()
break
case 'mining':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
if (officer == "NaN") return reply(`Maaf untuk unlock fitur ini harus Mempunyai officer, Silahkan beli officer terlebih dahulu di ${prefix}buyofficer`)
mining = [112,118,119,178,192,183,293][Math.floor(Math.random() * ([112,118,119,178,192,183,293].length))]
miningg = [12,18,19,78,92,83,93][Math.floor(Math.random() * ([12,18,19,78,92,83,93].length))]
setUang(sender, setAll(myUang(sender), mining, "positif"))
setExp(sender, setAll(myExp(sender), miningg, "positif"))
sendButton("1", `~> *Status* : Sukses\n~> *Uang* : ${mining}\n~> *Exp* : ${miningg}`, "MINING!", `${prefix + command}`)
break
case 'tts':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
if(!q) return reply("Masukkan text")
if (officer == "NaN") return reply(`Maaf untuk unlock fitur ini harus Mempunyai officer, Silahkan beli officer terlebih dahulu di ${prefix}buyofficer`)
const googleTTS = require('google-tts-api'); 
const url = googleTTS.getAudioUrl(q, {
lang: 'id', slow: false, host: 'https://translate.google.com'});
sendMedia("vn", url)
break
case 'buyofficer':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
if (!q) return sendMedia("image","./media/image/karakter/listofficer.jpg",`[ *OFFICER SHOP* ]\n(1) GREENBOT\n> *Harga* : 75.000\n> *Buy?* : ${prefix + command} greenbot\n\n(2) PURPLEBOT\n> *Harga* : 75.000\n> *Buy?* : ${prefix + command} purplebot\n\n~> *Apa perbedaan Greenbot & purpleBot?* sama aja, cuman yang purplebot rasa anggur\n\n~> *Keuntungan membeli officer?*\n• Unlock Fitur mining\n• Unlock fitur tts`)
if (myUang(sender) <= 75000) return reply(`• *UANG KAMU* : ${myUang(sender)}\n*• HARGA OFFICER* : 75000,\n\nMaaf Uang kamu kurang ${setAll(75000, myUang(sender), "negatif")} untuk membeli officer ini`)
if (q == "greenbot"){
setOfficer(sender, "greenbot")
setUang(sender, setAll(myUang(sender), 75000, "negatif"))
sendMedia("image","./media/image/karakter/greenbot.jpg",`[ *SUKSES BUY OFFICER* ]\n\n*NAME* : GREENBOT\n\n~> *Apa perbedaan Greenbot & purpleBot?* sama aja, cuman yang purplebot rasa anggur\n\n~> *Keuntungan membeli officer?*\n• Unlock Fitur mining\n• Unlock fitur tts`)}
if (q == "purplebot"){
setOfficer(sender, "purplebot")
setUang(sender, setAll(myUang(sender), 75000, "negatif"))
sendMedia("image","./media/image/karakter/purplebot.jpg",`[ *SUKSES BUY OFFICER* ]\n\n*NAME* : PURPLEBOT\n\n~> *Apa perbedaan Greenbot & purpleBot?* sama aja, cuman yang purplebot rasa anggur\n\n~> *Keuntungan membeli officer?*\n• Unlock Fitur mining\n• Unlock fitur tts`)}
break
case 'myofficer':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
if (myOfficer(sender) == "NaN") return reply(`Maaf, Anda belum memiliki officer, silahkan beli officer terlebih dahulu di ${prefix}buyofficer`)
if (myOfficer(sender) == "greenbot") {sendMedia("image","./media/image/karakter/greenbot.jpg",`[ *YOUR OFFICER* ]\n\n*NAME* : GREENBOT\n\n~> *Apa perbedaan Greenbot & purpleBot?* sama aja, cuman yang purplebot rasa anggur\n\n~> *Keuntungan membeli officer?*\n• Unlock Fitur mining\n• Unlock fitur tts`)}
if (myOfficer(sender) == "purplebot") {sendMedia("image","./media/image/karakter/purplebot.jpg",`[ *YOUR OFFICER* ]\n\n*NAME* : PURPLEBOT\n\n~> *Apa perbedaan Greenbot & purpleBot?* sama aja, cuman yang purplebot rasa anggur\n\n~> *Keuntungan membeli officer?*\n• Unlock Fitur mining\n• Unlock fitur tts`)}
break
case 'tebakbom': case 'tebakboom':
reply("FITUR INI SEDANG PERBAIKAN")
/*if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
if (isGroup) return reply("ONLY PESAN PRIBADI")
bomnyaa = [1,2,3,4,5,6,7,8,9][Math.floor(Math.random() * ([1,2,3,4,5,6,7,8,9].length))]
Object.keys(boom).forEach((i) => {
if (boom[i].bomnya !== false) return codeBoom("0")
boom[i].bomnya = bomnyaa
fs.writeFileSync('./media/text/boom.json', JSON.stringify(boom))})
codeBoom("0")*/
break
case 'signin':
if (!q) return reply(`Masukkan Password,\n*=>* : ${prefix}signin password\n*CONTOH* : ${prefix}signin ABC`) 
for (let loginn of login)
if (loginn.id == sender) return sendMedia("sticker", "./media/sticker/login.webp")
 nyz7 = `[ *SUKSES SIGN IN* ]\n\n• *NAME* : ${pushname}\n• *TIME* : ${time}\n\n[ *INFO LOGIN* ]\n• *NOMER* : ${sender.split('@')[0]}\n• *PW* : ${args[0]}\n~> *NOTE* : Password bersifat pribadi, jadi jangan share password ini`
sendMedia("image","./media/image/login/sukses.jpg", nyz7)
//risetPlayer(setAll(1, totalplayer[0].user, "positif"))
addLevel(sender, 0)
addExp(sender, 1)
addLogin(sender, q)
addUang(sender, 25000)
addKarakter(sender, "NaN")
addWaifu(sender, "NaN")
addOfficer(sender, "NaN")
addHusbu(sender, "NaN")
addEnergi(sender, 100)
addHome(sender, 0)
addHadiah(sender, 0, 0, 0, 0, 0, 0)
addBoom(sender, false, false, false, false, false, false, false, false, false, false)
break
case 'login':
q1 = q.split("&")[0];
q2 = q.split("&")[1];
if(!q1) return sendPng("1", `Masukkan Nomer akun dan password,\n*=>* : ${prefix}login nomer&password\n*CONTOH* : ${prefix}login 62xxx&ABC\nbelum punya akun? silahkan buat akun(Sign ini)terlebih dahulu`,"./media/image/login/login.jpg","BUAT AKUN(Sign in)",`${prefix}signin`)
if(!q1) return sendPng("1", `Masukkan Nomer akun,\n*=>* : ${prefix}login nomer&password\n*CONTOH* : ${prefix}login 62xxx&ABC\nbelum punya akun? silahkan buat akun(Sign ini)terlebih dahulu`,"./media/image/login/login.jpg","BUAT AKUN(Sign in)",`${prefix}signin`)
if(!q2) return sendPng("1", `Masukkan Password,\n*=>* : ${prefix}login nomer&password\n*CONTOH* : ${prefix}login 62xxx&ABC\nbelum punya akun? silahkan buat akun(Sign ini)terlebih dahulu`,"./media/image/login/login.jpg","BUAT AKUN(Sign in)",`${prefix}signin`)
Object.keys(login).forEach((i) => {
Object.keys(uang).forEach((i) => {
if (login[i].id === q1 + "@s.whatsapp.net"){
if (login[i].pw === q2 ) {
reply("SUKSES LOGIN")
risetLevel(q1 + "@s.whatsapp.net", myLevel(q1 + "@s.whatsapp.net"), sender)
risetExp(q1 + "@s.whatsapp.net", myExp(q1 + "@s.whatsapp.net"), sender)
risetUang(q1 + "@s.whatsapp.net", myUang(q1 + "@s.whatsapp.net"), sender)
risetKarakter(q1 + "@s.whatsapp.net", myKarakter(q1 + "@s.whatsapp.net"), sender)
risetEnergi(q1 + "@s.whatsapp.net", myEnergi(q1 + "@s.whatsapp.net"), sender)
risetOfficer(q1 + "@s.whatsapp.net", myOfficer(q1 + "@s.whatsapp.net"), sender)
risetHusbu(q1 + "@s.whatsapp.net", myHusbu(q1 + "@s.whatsapp.net"), sender)
risetWaifu(q1 + "@s.whatsapp.net", myWaifu(q1 + "@s.whatsapp.net"), sender)
risetLogin(q1 + "@s.whatsapp.net", myLogin(q1 + "@s.whatsapp.net"), sender)
} else { return reply("Password salah!")}
} else { return reply("Nomer tersebut belum terdaftar, silahkan sign in terlebih dahulu!\nGunakan command" + ` ${prefix}signin`)}
})})
 
break
case 'dungeon':
if (isGroup) return reply("ONLY PESAN PRIBADI")
// RNDOM
if (myEnergi(sender) <= 20) return reply(`Energi kamu sekarang ${myEnergi(sender)}, dan untuk memasuki dungeon minimal energi +20, silahkan beli ramuan di ${prefix}buyramuan agar energi kamu pulih 100%`)
exp1 = [11,12,13,14,15,16,17,18,19,20][Math.floor(Math.random() * ([11,12,13,14,15,16,17,18,19,20].length))]
uang1 = [110,120,130,140,150,160,170,180,190,200][Math.floor(Math.random() * ([110,120,130,140,150,160,170,180,190,200].length))]
energi1 = [1,2,3,4,5][Math.floor(Math.random() * ([1,2,3,4,5].length))]
musuh = [1,2,3,4,5,6,7,8,9,10][Math.floor(Math.random() * ([1,2,3,4,5,6,7,8,9,10].length))]
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
if (myKarakter(sender) == "NaN") return reply(`Anda belum memiliki karakter, silahkan beli karakter terlebih dahulu di ${prefix}buykarakter`)
if (!q) return sendPng("1", `[ *DUNGEON* ]\n\nKamu akan masuk ke dungeon menggunakan karakter ${myKarakter(sender)}, Untuk info level, target, dll bisa kamu cek di ${prefix}mykarakter, Ayo jelajahi dungeon dan kalahkan target karakter anda, Setelah mengalahkan target anda akan mendapatkan hadiah(Exp, uang), Tapi tentu saja di dalam dungeon ada musuh yang anda tidak bisa kalahkan(Joker(monyetHacker)), Ketika kamu bertemu Joker tersebut uang&Exp anda akan berkurang, dan Energi anda akan otomatis menjadi 25%, Apakah anda siap?`,"./media/image/karakter/dungeon.jpg","(SIAP) SERANG SEKARANG!!",`${prefix + command} y`)
if (q == "y") {
musuh1 = [true, true, true, true, true, false, true, true, true, true, true][Math.floor(Math.random() * ([true, true, true, true, true, false, true, true, true, true, true].length))]
//musuh1 = false
if (musuh1 == true) {
if (myKarakter(sender) == "swordbot") {
sendPng("1", `[ *ATTACK* ]\n\nAnda sukses mengalahkan target karakter anda, \n• *HADIAH* ?\n~> *UANG* : ${uang1}\n~> *EXP* : ${exp1 + 10}\n• *ENERGI* ?\n~> *ENERGI SEKARANG* : ${myEnergi(sender)}\n~> *ENERGI TERKURAS* : ${energi1}\n• *NOTE* : Jika energi anda di bawah 20 maka anda tidak bisa melanjutkan pertempuran, dan silahkan beli ramuan di ${prefix}buyramuan, agar energi anda pulih sepenuhnya\n\nApakah anda bersiap untuk serangan selanjutnya?`,"./media/image/karakter/" + `${myKarakter(sender)}/target${musuh}.jpg`,"(SIAP) SERANG LAGI!!",`${prefix + command} y`)
setUang(sender, setAll(myUang(sender), uang1, "positif"))
setExp(sender, setAll(myExp(sender), exp1, "positif"))
setEnergi(sender, setAll(myEnergi(sender), energi1, "negatif"))}

if (myKarakter(sender) == "whipbot") {
sendPng("1", `[ *ATTACK* ]\n\nAnda sukses mengalahkan target karakter anda, \n• *HADIAH* ?\n~> *UANG* : ${uang1 + 1000}\n~> *EXP* : ${exp1 + 100}\n• *ENERGI* ?\n~> *ENERGI SEKARANG* : ${myEnergi(sender)}\n~> *ENERGI TERKURAS* : ${energi1 + 5}\n• *NOTE* : Jika energi anda di bawah 20 maka anda tidak bisa melanjutkan pertempuran, dan silahkan beli ramuan di ${prefix}buyramuan, agar energi anda pulih sepenuhnya\n\nApakah anda bersiap untuk serangan selanjutnya?`,"./media/image/karakter/" + `${myKarakter(sender)}/target${musuh}.jpg`,"(SIAP) SERANG LAGI!!",`${prefix + command} y`)
setUang(sender, setAll(myUang(sender), uang1 + 1000, "positif"))
setExp(sender, setAll(myExp(sender), exp1 + 100, "positif"))
setEnergi(sender, setAll(myEnergi(sender), energi1 + 5, "negatif"))
}
if (myKarakter(sender) == "gunbot") {
sendPng("1", `[ *ATTACK* ]\n\nAnda sukses mengalahkan target karakter anda, \n• *HADIAH* ?\n~> *UANG* : ${uang1 + 2000}\n~> *EXP* : ${exp1 + 200}\n• *ENERGI* ?\n~> *ENERGI SEKARANG* : ${myEnergi(sender)}\n~> *ENERGI TERKURAS* : ${energi1 + 6}\n• *NOTE* : Jika energi anda di bawah 20 maka anda tidak bisa melanjutkan pertempuran, dan silahkan beli ramuan di ${prefix}buyramuan, agar energi anda pulih sepenuhnya\n\nApakah anda bersiap untuk serangan selanjutnya?`,"./media/image/karakter/" + `${myKarakter(sender)}/target${musuh}.jpg`,"(SIAP) SERANG LAGI!!",`${prefix + command} y`)
setUang(sender, setAll(myUang(sender), uang1 + 2000, "positif"))
setExp(sender, setAll(myExp(sender), exp1 + 200, "positif"))
setEnergi(sender, setAll(myEnergi(sender), energi1 + 6, "negatif"))
}
if (myKarakter(sender) == "firebot") {
sendPng("1", `[ *ATTACK* ]\n\nAnda sukses mengalahkan target karakter anda, \n• *HADIAH* ?\n~> *UANG* : ${uang1 + 3000}\n~> *EXP* : ${exp1 + 300}\n• *ENERGI* ?\n~> *ENERGI SEKARANG* : ${myEnergi(sender)}\n~> *ENERGI TERKURAS* : ${energi1 + 7}\n• *NOTE* : Jika energi anda di bawah 20 maka anda tidak bisa melanjutkan pertempuran, dan silahkan beli ramuan di ${prefix}buyramuan, agar energi anda pulih sepenuhnya\n\nApakah anda bersiap untuk serangan selanjutnya?`,"./media/image/karakter/" + `${myKarakter(sender)}/target${musuh}.jpg`,"(SIAP) SERANG LAGI!!",`${prefix + command} y`)
setUang(sender, setAll(myUang(sender), uang1 + 3000, "positif"))
setExp(sender, setAll(myExp(sender), exp1 + 300, "positif"))
setEnergi(sender, setAll(myEnergi(sender), energi1 + 6, "negatif"))
}
if (myKarakter(sender) == "hackbot") {
sendPng("1", `[ *ATTACK* ]\n\nAnda sukses mengalahkan target karakter anda, \n• *HADIAH* ?\n~> *UANG* : ${uang1 + 4000}\n~> *EXP* : ${exp1 + 400}\n• *ENERGI* ?\n~> *ENERGI SEKARANG* : ${myEnergi(sender)}\n~> *ENERGI TERKURAS* : ${energi1 + 8}\n• *NOTE* : Jika energi anda di bawah 20 maka anda tidak bisa melanjutkan pertempuran, dan silahkan beli ramuan di ${prefix}buyramuan, agar energi anda pulih sepenuhnya\n\nApakah anda bersiap untuk serangan selanjutnya?`,"./media/image/karakter/" + `${myKarakter(sender)}/target${musuh}.jpg`,"(SIAP) SERANG LAGI!!",`${prefix + command} y`)
setUang(sender, setAll(myUang(sender), uang1 + 4000, "positif"))
setExp(sender, setAll(myExp(sender), exp1 + 400, "positif"))
setEnergi(sender, setAll(myEnergi(sender), energi1 + 7, "negatif"))
}
if (myKarakter(sender) == "lovebot") {
if (myEnergi(sender) <= 99) return reply(`Untuk mengalahkan raja iblis energi anda harus 100%, Ayo beli ramuan terlebih dahulu di ${prefix}buyramuan`)
sendPng("1", `[ *RAJA-IBLIS* ]\n\nKarakter anda (LoveBot) Karakter terkuat, target raja iblis, Ayo masuk dungeon dan kalahkan raja iblis sekarang!`,"./media/image/karakter/" + `${myKarakter(sender)}/target1.jpg`,"(SIAP) SERANG!!",`${prefix}dungeonn yy`)
}}
if (musuh1 == false) {
sendPng("1", `[ *MONYET-HACKER* ]\n\nWkwk Sayang sekali anda bertemu musuh tak terkalahkan(MoyetHacker), dan karena kamu bertemu joker ini uang kamu berkurang 2500, dan energi kamu menjadi 20%`,"./media/image/karakter/monyet.jpg","SERANG LAGI!!",`${prefix + command} y`)
setUang(sender, setAll(myUang(sender), 2500, "negatif"))
setEnergi(sender, 20)
}
} 
break
case 'dungeonn':
if (isGroup) return reply("ONLY PESAN PRIBADI")
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
if (myKarakter(sender) == "NaN") return reply(`Anda belum memiliki karakter, silahkan beli karakter terlebih dahulu di ${prefix}buykarakter`)
if (myKarakter(sender) == "lovebot") {
if (args[0] == "yy") {
sendPng("1", `[ *RAJA-IBLIS* ]\n\nRaja iblis telah ditemukan, Ayo kalahkan sekarang!!`,"./media/image/karakter/" + `${myKarakter(sender)}/target2.jpg`,"SERANG!!",`${prefix + command} yyy`)
}
if (args[0] == "yyy") {
sendPng("1", `[ *RAJA-IBLIS* ]\n\nBagus! sayap kiri iblis berhasil kamu hancurkan, Ayo serang lagi!!`,"./media/image/karakter/" + `${myKarakter(sender)}/target3.jpg`,"SERANG!!",`${prefix + command} yyyy`)
}
if (args[0] == "yyyy") {
sendPng("1", `[ *RAJA-IBLIS* ]\n\nBagus! sayap kanan & kiri iblis berhasil kamu hancurkan, Ayo serang lagi!!`,"./media/image/karakter/" + `${myKarakter(sender)}/target4.jpg`,"SERANG!!",`${prefix + command} yyyyy`)
}
if (args[0] == "yyyyy") {
sendPng("1", `[ *RAJA-IBLIS* ]\n\nNice, Tangan kanan iblis berhasil kamu hancurkan, Ayo serang lagi!!`,"./media/image/karakter/" + `${myKarakter(sender)}/target5.jpg`,"SERANG!!",`${prefix + command} yyyyyy`)
}
if (args[0] == "yyyyyy") {
sendPng("1", `[ *RAJA-IBLIS* ]\n\nNice, Tangan kanan & kiri iblis berhasil kamu hancurkan, Ayo 1 serang lagi!!`,"./media/image/karakter/" + `${myKarakter(sender)}/target6.jpg`,"SERANG!!",`${prefix + command} yyyyyyy`)
}
if (args[0] == "yyyyyyy") {
sendPng("1", `[ *RAJA-IBLIS* ]\n\nAkhirrnyaa!! raja iblis telah di kalahkan!!`,"./media/image/karakter/" + `${myKarakter(sender)}/target7.jpg`,"NEXT!!",`${prefix + command} yyyyyyyy`)
}
if (args[0] == "yyyyyyyy") {
sendPng("1", `[ *RAJA-IBLIS* ]\n\nKamu benar benar telah mengalahkan raja iblis, Ayo claim hadiah mu!!`,"./media/image/karakter/" + `${myKarakter(sender)}/target8.jpg`,"CLAIM!!",`${prefix + command} yyyyyyyyy`)
}
if (args[0] == "yyyyyyyyy") {
sendMedia("image","./media/image/karakter/lovebot/menang.jpg",`[ *HADIAH* ]\n\n• *UANG* : 500.000\n• *EXP* : 50.000\nSelamat anda telah berhasil menamatkan game ini`)
setUang(sender, setAll(myUang(sender), 500000, "positif"))
setExp(sender, setAll(myExp(sender), 50000, "positif"))
}}
break
case 'mykarakter':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
if (myKarakter(sender) == "NaN") { reply(`Kamu belum punya karakter,silahkan beli karakter terlebih dahulu di ${prefix}buykarakter`)}
if (myKarakter(sender) == "swordbot") {sendMedia("image","./media/image/karakter/" + `${myKarakter(sender)}.jpg`, `[ *YOUR KARAKTER* ]\n\n• *NAME* : ${myKarakter(sender)}\n• *HARGA* : 13500\n• *LEVEL* : 1\n• *ROLE* : Bronze\n• *TARGET* : hewan buas\n\nSilahkan memulai pertarungan di ${prefix}dungeon`)}
if (myKarakter(sender) == "whipbot") {sendMedia("image","./media/image/karakter/" + `${myKarakter(sender)}.jpg`, `[ *YOUR KARAKTER* ]\n\n• *NAME* : ${myKarakter(sender)}\n• *HARGA* : 20000\n• *LEVEL* : 2\n• *ROLE* : Silver\n• *TARGET* : prajurit\n\nSilahkan memulai pertarungan di ${prefix}dungeon`)}
if (myKarakter(sender) == "gunbot") {sendMedia("image","./media/image/karakter/" + `${myKarakter(sender)}.jpg`, `[ *YOUR KARAKTER* ]\n\n• *NAME* : ${myKarakter(sender)}\n• *HARGA* : 31000\n• *LEVEL* : 3\n• *ROLE* : Gold\n• *TARGET* : zombie\n\nSilahkan memulai pertarungan di ${prefix}dungeon`)}
if (myKarakter(sender) == "firebot") {sendMedia("image","./media/image/karakter/" + `${myKarakter(sender)}.jpg`, `[ *YOUR KARAKTER* ]\n\n• *NAME* : ${myKarakter(sender)}\n• *HARGA* : 45500\n• *LEVEL* : 4\n• *ROLE* : Platinum\n• *TARGET* : titan\n\nSilahkan memulai pertarungan di ${prefix}dungeon`)}
if (myKarakter(sender) == "hackbot") {sendMedia("image","./media/image/karakter/" + `${myKarakter(sender)}.jpg`, `[ *YOUR KARAKTER* ]\n\n• *NAME* : ${myKarakter(sender)}\n• *HARGA* : 57000\n• *LEVEL* : 5\n• *ROLE* : Diamond\n• *TARGET* : monster\n\nSilahkan memulai pertarungan di ${prefix}dungeon`)}
if (myKarakter(sender) == "lovebot") {sendMedia("image","./media/image/karakter/" + `${myKarakter(sender)}.jpg`, `[ *YOUR KARAKTER* ]\n\n• *NAME* : ${myKarakter(sender)}\n• *HARGA* : 72500\n• *LEVEL* : 6\n• *ROLE* : Ridiant\n• *TARGET* : raja iblis\n\nSilahkan memulai pertarungan di ${prefix}dungeon`)}
break
case 'buykarakter': 
//if (isGroup) return reply("ONLY PESAN PRIBADI")
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
if (!q) return sendMedia("image","./media/image/karakter/listkarakter.jpg",`[ *BOT SHOP* ]\n\n(1) SWORDBOT\n> *Harga* : 13500\n> *Buy?* : ${prefix + command} swordbot\n> *level Karakter* : 1\n\n(2) WHIPBOT\n> *Harga* : 20000\n> *Buy?* : ${prefix + command} whipbot\n> *level Karakter* : 2\n\n(3) GUNBOT\n> *Harga* : 31000\n> *Buy?* : ${prefix + command} gunbot\n> *level Karakter* : 3\n\n(4) FIREBOT\n> *Harga* : 45500\n> *Buy?* : ${prefix + command} firebot\n> *level Karakter* : 4\n\n(5) HACKBOT\n> *Harga* : 57000\n> *Buy?* : ${prefix + command} hackbot\n> *level Karakter* : 5\n\n(6) LOVEBOT\n> *Harga* : 72500\n> *Buy?* : ${prefix + command} lovebot\n> *level Karakter* : 6(MAX)\n\n~> *NOTE* : Setelah membeli karakter baru, maka karakter sebelumnya akan terhapus, setelah membeli karakter silahkan bermain game di ${prefix}dungeon`)
if (q == "swordbot") {
if (myUang(sender) <= 13500) return reply(`• *UANG KAMU* : ${myUang(sender)}\n*• HARGA KARAKTER* : 13500,\n\nMaaf Uang kamu kurang ${setAll(13500, myUang(sender), "negatif")} untuk membeli karakter ini`)
setKarakter(sender, "swordbot")
setUang(sender, setAll(myUang(sender), 13500, "negatif"))
sendMedia("image","./media/image/karakter/" + `${q}.jpg`, `[ *SUKSES!!* ]\n\n• *NAME* : ${q}\n• *HARGA* : 13500\n• *SISA UANG* : ${myUang(sender)}\n\nSilahkan cek karakter anda ${prefix}mykarakter`)}
if (q == "whipbot") {
if (myUang(sender) <= 20000) return reply(`• *UANG KAMU* : ${myUang(sender)}\n*• HARGA KARAKTER* : 20000,\n\nMaaf Uang kamu kurang ${setAll(20000, myUang(sender), "negatif")} untuk membeli karakter ini`)
setKarakter(sender, "whipbot")
setUang(sender, setAll(myUang(sender), 20000, "negatif"))
sendMedia("image","./media/image/karakter/" + `${q}.jpg`, `[ *SUKSES!!* ]\n\n• *NAME* : ${q}\n• *HARGA* : 20000\n• *SISA UANG* : ${myUang(sender)}\n\nSilahkan cek karakter anda ${prefix}mykarakter`)}
if (q == "gunbot") {
if (myUang(sender) <= 31000) return reply(`• *UANG KAMU* : ${myUang(sender)}\n*• HARGA KARAKTER* : 31000,\n\nMaaf Uang kamu kurang ${setAll(31000, myUang(sender), "negatif")} untuk membeli karakter ini`)
setKarakter(sender, "gunbot")
setUang(sender, setAll(myUang(sender), 31000, "negatif"))
sendMedia("image","./media/image/karakter/" + `${q}.jpg`, `[ *SUKSES!!* ]\n\n• *NAME* : ${q}\n• *HARGA* : 31000\n• *SISA UANG* : ${myUang(sender)}\n\nSilahkan cek karakter anda ${prefix}mykarakter`)}
if (q == "firebot") {
if (myUang(sender) <= 45500) return reply(`• *UANG KAMU* : ${myUang(sender)}\n*• HARGA KARAKTER* : 45500,\n\nMaaf Uang kamu kurang ${setAll(45500, myUang(sender), "negatif")} untuk membeli karakter ini`)
setKarakter(sender, "firebot")
setUang(sender, setAll(myUang(sender), 45500, "negatif"))
sendMedia("image","./media/image/karakter/" + `${q}.jpg`, `[ *SUKSES!!* ]\n\n• *NAME* : ${q}\n• *HARGA* : 45500\n• *SISA UANG* : ${myUang(sender)}\n\nSilahkan cek karakter anda ${prefix}mykarakter`)}
if (q == "hackbot") {
if (myUang(sender) <= 57000) return reply(`• *UANG KAMU* : ${myUang(sender)}\n*• HARGA KARAKTER* : 57000,\n\nMaaf Uang kamu kurang ${setAll(57000, myUang(sender), "negatif")} untuk membeli karakter ini`)
setKarakter(sender, "hackbot")
setUang(sender, setAll(myUang(sender), 57000, "negatif"))
sendMedia("image","./media/image/karakter/" + `${q}.jpg`, `[ *SUKSES!!* ]\n\n• *NAME* : ${q}\n• *HARGA* : 57000\n• *SISA UANG* : ${myUang(sender)}\n\nSilahkan cek karakter anda ${prefix}mykarakter`)}
if (q == "lovebot") {
if (myUang(sender) <= 72500) return reply(`• *UANG KAMU* : ${myUang(sender)}\n*• HARGA KARAKTER* : 72500,\n\nMaaf Uang kamu kurang ${setAll(72500, myUang(sender), "negatif")} untuk membeli karakter ini`)
setKarakter(sender, "lovebot")
setUang(sender, setAll(myUang(sender), 72500, "negatif"))
sendMedia("image","./media/image/karakter/" + `${q}.jpg`, `[ *SUKSES!!* ]\n\n• *NAME* : ${q}\n• *HARGA* : 72500\n• *SISA UANG* : ${myUang(sender)}\n\nSilahkan cek karakter anda ${prefix}mykarakter`)}
//sendButton("1","Nama karakter tersebut tidak ada di list karakter, silahkan cek list karakter kembali","LIST-KARAKTER",`${prefix + command}`)
break
 
case 'menu':
case 'help':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
menuu = `<=❲ *ZALLMODS* ❳=❲❶❳>
~> *NAME* : ${pushname}
~> *NO* : ${sender}
~> *LEVEL* : ${lvl}
~> *EXP* : ${myExp(sender)}
~> *UANG* : ${myUang(sender)}
~> *ENERGI* : ${myEnergi(sender)}
~> *KRKTER* : ${myKarakter(sender)}
~> *OFFICER* : ${myOfficer(sender)}
~> *HUSBU* : ${myHusbu(sender)}
~> *WAIFU* : ${myWaifu(sender)}
~> *HOME* : ${myHome(sender)}

<=❲ *ALLMENU* ❳=❲❶❳>
╭─⬣ COMMAND
│
├─⬣ OWNER
│🔖${prefix}autorespon [ on/off ]
│🔖${prefix}bc [ teks/reply gif/image/video with caption ]
│🔖${prefix}tobc [ reply sticker/audio with caption ]
│🔖${prefix}return [ javascript ]
│🔖${prefix}clearall
│🔖${prefix}delchat
│🔖${prefix}mute
│🔖${prefix}unmute
│🔖${prefix}public
│🔖${prefix}self
│🔖${prefix}spam [ teks|jumlah ]
│🔖${prefix}demoteall
│🔖${prefix}promoteall
│🔖${prefix}addcmd [ teks reply stc ]
│🔖${prefix}delcmd [ reply stc ]
│🔖${prefix}listcmd
│🔖${prefix}spamsw [ teks|jumlah ]
│🔖${prefix}upswteks [ teks ]
│🔖${prefix}upswlokasi [ teks ]
│🔖${prefix}upswaudio [ reply audio ]
│🔖${prefix}upswvoice [ reply audio ]
│🔖${prefix}upswsticker [ reply sticker ]
│🔖${prefix}upswimage [ reply image with caption ]
│🔖${prefix}upswgif [ reply gif with caption ]
│🔖${prefix}upswvideo [ reply video with caption ]
│🔖${prefix}shutdown
│🔖${prefix}offline [ alasan ]
│🔖${prefix}online
│🔖${prefix}exif [ nama|author ]
│🔖${prefix}setprofile [ reply image ]
│🔖${prefix}setname [ teks ]
│🔖${prefix}setprefix [ multi/nopref ]
│🔖${prefix}setbio [ teks ]
│🔖${prefix}leave
│🔖${prefix}restart
│🔖${prefix}join [ link group ]
│🔖${prefix}addrespon [ tanya|jawab ]
│🔖${prefix}delrespon [ nama ]
│🔖${prefix}q [ reply message ]
│
├─⬣ VIRUS MENU
│🔖${prefix}virtex
│🔖${prefix}tovirgam [reply Sticker]
│🔖${prefix}bugkatalog
│🔖${prefix}bugloc
│🔖${prefix}bugrow
│🔖${prefix}buglink
│🔖${prefix}bugbutton
│🔖${prefix}bug [ jumlah ]
│🔖${prefix}bugpc2 [ jumlah ]
│🔖${prefix}bugtroli2 [ jumlah ]
│🔖${prefix}bugtroli3
│🔖${prefix}bugpc
│🔖${prefix}bugcombine
│🔖${prefix}bugtroli
│🔖${prefix}buglokasi
│🔖${prefix}bughole
│
├─⬣ GAME 
│🔖${prefix}ttt [tag 1 pemain]
│🔖${prefix}truth
│🔖${prefix}dare
│🔖${prefix}kapankah
│🔖${prefix}bisakah
│🔖${prefix}cekganteng
│🔖${prefix}cekcantik
│🔖${prefix}cekmati
|
├─⬣ DOWNLOAD
│🔖${prefix}infogempa
│🔖${prefix}herolist
│🔖${prefix}herodetail [ hero ]
│🔖${prefix}google [ search ]
│🔖${prefix}gimage [ search ]
│🔖${prefix}wiki [ search ]
│🔖${prefix}mediafire [ link ]
│🔖${prefix}ytsearch [ judul ]
│🔖${prefix}ytmp4 [ link yt ]  PERBAIKAN
│🔖${prefix}ytmp3 [ link yt ]
│🔖${prefix} [ judul lagu ]
│🔖${prefix}video [ judul video ]
│🔖${prefix}tinyurl [ link ]
│🔖${prefix}fetch [ link ]
│🔖${prefix}igdl [ link ]
│🔖${prefix}tiktokdl [ link ]
│🔖${prefix}pinterest [ search ]
│🔖${prefix}lirik [ judul ]
│🔖${prefix}tourl [ reply image/video ]
│🔖${prefix}resepmasakan [ judul ]
│🔖${prefix}artimimpi [ teks ]
│🔖${prefix}bilangangka [ angka ]
│🔖${prefix}kalkulator [ angka ]
│🔖${prefix}fancytext [ teks ]
│🔖${prefix}githubstalk [ username ]
│🔖${prefix}translate [ kodebhs|teks ]
│🔖${prefix}ss [ link ]
│🔖${prefix}tiktokaudio [ link ]
│🔖${prefix}igstory [ link ]
│🔖${prefix}linkwa
│🔖${prefix}store [ query ]
│🔖${prefix}fb [ link ]
│🔖${prefix}twitter [ link ]
│
├─⬣ MAKER
│🔖${prefix}foliokiri 「 text 」
│🔖${prefix}foliokanan 「 text 」
│🔖${prefix}nuliskanan 「 text 」
│🔖${prefix}nuliskiri 「 text 」
│🔖${prefix}matrix [ teks ]
│🔖${prefix}googletxt [ teks ]
│🔖${prefix}spiderman [ teks ]
│🔖${prefix}express [ teks ]
│🔖${prefix}dance [ teks ]
│🔖${prefix}blackbird [ teks ]
│🔖${prefix}halloween [ teks ]
│🔖${prefix}vampire [ teks ]
│🔖${prefix}codetxt [ teks ]
│🔖${prefix}text3d [ teks ]
│🔖${prefix}warrior [ teks ]
│🔖${prefix}maker2d2 「 text 」
│🔖${prefix}maker2d3 「 text 」
│🔖${prefix}maker2d4 「 text 」
│🔖${prefix}maker3d 「 text 」
│🔖${prefix}maker3d2 「 text 」
│🔖${prefix}maker3d3 「 text 」
│🔖${prefix}maker3d4 「 text 」
│🔖${prefix}transformer 「 text 」
│🔖${prefix}googletxt 「 text 」
│🔖${prefix}battlefield 「 text 」
│🔖${prefix}coffeecup 「 text 」
│🔖${prefix}coffeecup2 「 text 」
│🔖${prefix}neon 「 text 」
│🔖${prefix}glow 「 text 」
│🔖${prefix}summer 「 text 」
│🔖${prefix}flower 「 text 」
│🔖${prefix}burn 「 text 」
│🔖${prefix}quote 「 text 」
│🔖${prefix}wooden 「 text 」
│🔖${prefix}golden 「 text 」
│
├──⬣ GROUP
│🔖${prefix}getpict [ @tag ]
│🔖${prefix}getname [ reply target ]
│🔖${prefix}getbio [ reply target ]
│🔖${prefix}promote [ @tag ]
│🔖${prefix}demote [ @tag ]
│🔖${prefix}antilink [ 1/0 ]
│🔖${prefix}nsfw [ 1/0 ]
│🔖${prefix}creategrup [ nama|@tag ]
│🔖${prefix}tictactoe [ @tag ]
│🔖${prefix}delttt
│🔖${prefix}getpp
│🔖${prefix}kick [ @tag ]
│🔖${prefix}add [ nomor ]
│🔖${prefix}getdeskgc
│🔖${prefix}sider [ reply pesan bot ]
│🔖${prefix}hacked [ teks ]
│🔖${prefix}setnamegc [ teks ]
│🔖${prefix}setdeskgc [ teks ]
│🔖${prefix}fitnah [ @tag|teks1|teks2 ]
│🔖${prefix}kontak [ @tag|nama ]
│🔖${prefix}kontag [ @tag|nama ]
│🔖${prefix}opengc
│🔖${prefix}closegc
│🔖${prefix}resetlinkgc
│🔖${prefix}linkgrup
│🔖${prefix}listonline
│🔖${prefix}listadmin
│🔖${prefix}pemudaline
│🔖${prefix}hidetag [ teks ]
│🔖${prefix}sticktag [ nama sticker ]
│🔖${prefix}totag [ reply media ]
│
├─⬣ NSFW
│🔖${prefix}trapnime
│🔖${prefix}neko
│🔖${prefix}megumin
│🔖${prefix}blowjob
│🔖${prefix}hentai
│🔖${prefix}awoo
│🔖${prefix}bj 
│🔖${prefix}eroneko
│🔖${prefix}lesbian
│🔖${prefix}anal
│🔖${prefix}yuri
│🔖${prefix}baka
│🔖${prefix}neko2
│🔖${prefix}wallpaper
│🔖${prefix}pussy
│🔖${prefix}kitsune
│🔖${prefix}keta
│🔖${prefix}neko2
│🔖${prefix}poke
│🔖${prefix}slap
│🔖${prefix}komiku [ query ]
│🔖${prefix}otaku [ query ]
│🔖${prefix}chara [ query ]
│
├─⬣ TOOLS
│🔖${prefix}getscmd
│🔖${prefix}stickerwm [ nama|author ]
│🔖${prefix}takestick [ nama|author ]
│🔖${prefix}colong [ reply sticker ]
│🔖${prefix}sticker
│🔖${prefix}semoji [ emoji ]
│🔖${prefix}attp [ teks ]
│🔖${prefix}toimg
│🔖${prefix}tomp3 [ reply video ]
│🔖${prefix}tomp4 [ reply sticker gif ]
│🔖${prefix}robot [ reply audio ]
│🔖${prefix}balik [ reply audio ]
│🔖${prefix}bass [ reply audio ]
│🔖${prefix}gemuk [ reply audio ]
│🔖${prefix}detikvn [ reply audio caption angka ]
│🔖${prefix}detikvideo [ reply video caption angka ]
│🔖${prefix}tts [ kodebhs teks ]
│
├─⬣ STORAGE
│🔖${prefix}addsticker [ nama ]
│🔖${prefix}delsticker [ nama ]
│🔖${prefix}addvn [ nama ]
│🔖${prefix}delvn [ nama ]
│🔖${prefix}addimage [ nama ]
│🔖${prefix}delimage [ nama ]
│🔖${prefix}listimage
│🔖${prefix}liststicker
│🔖${prefix}listvn
│
├─⬣ JADI BOT
│🔖${prefix}stopjadibot
│🔖${prefix}jadibot
│
├─⬣ OTHER / FUN
│🔖${prefix}caripesan [ teks|jumlah ]
│🔖${prefix}slots
│🔖${prefix}suit [ gunting/batu/kertas ]
│🔖${prefix}tag [ nomor ]
│🔖${prefix}tagme
│🔖${prefix}readmore [ teks1|teks2 ]
│🔖${prefix}fitnahpc [ nomor|teks1|teks2 ]
│🔖${prefix}chat [ nomor|teks ]
│🔖${prefix}fdeface [ replyimg link|teks1|teks2 ]
│🔖${prefix}listgrup
│🔖${prefix}baileys [ reply message ]
│🔖${prefix}getcaption [ reply message ]
│🔖${prefix}pantun
│🔖${prefix}tospam [ reply audio/sticker/image|jumlah ]
│🔖${prefix}sharelock [ teks1|teks2 ]
│🔖${prefix}dadu
└─────────────────⬣`
gg = [1,2,3,4,5,6,7,8,9][Math.floor(Math.random() * ([1,2,3,4,5,6,7,8,9].length))]
await sendMenu(from, menuu, "©ZallMods", await nayla.sendnew(from, {image : {url:`./media/image/menu/${gg}.jpg` }, caption: menuu}),{quoted:nay1})
break
case 's':
case 'sticker':
case 'stiker':
case 'sgif':
case 'stickergif':
case 'stikergif':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
try {
reply("[❗] SEDANG DIPROSES")
if (isMedia || isQuotedImage) {
var stream = await downloadContentFromMessage(nay.message.imageMessage || nay.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
var buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
fs.writeFileSync('./media/res_buffer.jpg', buffer)
const image = './media/res_buffer.jpg'
await ffmpeg(image)
.input(image)
.on('start', function (start) {
 console.log(colors.green.bold(`${start}`))
})
.on('error', function (error) {
reply("error")
 console.log(`${error}`)
})
.on('end', function () {
console.log(colors.yellow('Selesai convert'))
nayla.sendMessage(from, { sticker: {url: './media/mysticker.webp'}, mimetype: 'image/webp' })
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save('./media/mysticker.webp')
} else if (isMedia || isQuotedVideo) {
var stream = await downloadContentFromMessage(nay.message.videoMessage || nay.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
var buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
fs.writeFileSync('./media/res_buffer.mp4', buffer)
const video = './media/res_buffer.mp4'
await ffmpeg(video)
.input(video)
.on('start', function (start) {
 console.log(colors.green.bold(`${start}`))
})
.on('error', function (error) {
reply("error")
 console.log(`${error}`)
})
.on('end', function () {
console.log(colors.yellow('Selesai convert'))
nayla.sendMessage(from, { sticker: {url: './media/mysticker2.webp' }, mimetype: 'image/webp' })
})
.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
.toFormat('webp')
.save('./media/mysticker2.webp')
} else {
reply('_Kirim gambar/video dengan caption !sticker/ reply gambar/video dengan perintah !sticker_ ')
}
} catch (e) {
console.log(colors.red(e))
reply("_Maaf error, coba lagi dengan reply gambar/video dengan caption !sticker, *jika tetap terjadi lapor ke owner bot*_")
}
break 
case 'editinfo':
case 'editinfogroup':
case 'editinfogrup':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
if (args[0] === 'all') {
await nayla.groupSettingUpdate(from, 'unlocked')
} else if (args[0] === 'admin') {
await nayla.groupSettingUpdate(from, 'locked')
} else {
const buttons = [
{buttonId: '!editinfo admin', buttonText: {displayText: 'Only admin'}, type: 1},
{buttonId: '!editinfo all', buttonText: {displayText: 'All members'}, type: 1},]
const buttonMessage = {text: "Klik Only admin untuk mengizinkan edit grup hanya admin, Klik All members untuk mengizinkan edit group untuk semua peserta group",footer: '',buttons: buttons,headerType: 1}
nayla.sendMessage(from, buttonMessage)
}
break
case 'group':
case 'grup':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
if (args[0] === 'close') {
await nayla.groupSettingUpdate(from, 'announcement')
} else if (args[0] === 'open') {
await nayla.groupSettingUpdate(from, 'not_announcement')
} else {
const buttons = [
{buttonId: '!group open', buttonText: {displayText: 'Open'}, type: 1},
{buttonId: '!group close', buttonText: {displayText: 'Close'}, type: 1},]
const buttonMessage = {
text: "Klik open untuk membuka group, Klik close untuk menutup group\n\n Klik Only admin untuk mengizinkan edit grup hanya admin, Klik All members untuk mengizinkan edit group untuk semua peserta group",footer: '',buttons: buttons,headerType: 1}
nayla.sendMessage(from, buttonMessage)
}
break
case 'hidetag':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
if (!q) return reply(respon.notText(prefix,cmd, pushname));
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
const id = uwong.map(v => v.id)
nayla.sendMessage(from, { text: `${q}`, mentions: id })
break
case 'promote':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang yang ingin dipromosikan menjadi admin group');
const men = nay.message.extendedTextMessage.contextInfo.mentionedJid;
nayla.groupParticipantsUpdate(from, men,"promote");
break
case 'demote':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang yang ingin di demote di group ini');
const mention = nay.message.extendedTextMessage.contextInfo.mentionedJid;
await nayla.groupParticipantsUpdate(from, mention,"demote");
break
case 'add':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
try {
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
if (!q) return reply("Masukan nomor yang ingin ditambahkan di group\nex: !add 62881xxxxxxx")
nomor = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
await nayla.groupParticipantsUpdate(from, [nomor],"add")
} catch (e) {
reply('Maaf error')
}
break
case 'kick':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
try {
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang yang ingin dikeluarkan dari group ini')
const mention = nay.message.extendedTextMessage.contextInfo.mentionedJid
await nayla.groupParticipantsUpdate(from, mention,"remove")
} catch (e) {
reply('Maaf error')
}
break
case 'resetlink':
case 'revoke':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
await nayla.groupRevokeInvite(from)
break
case 'linkgroup':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
const code = await nayla.groupInviteCode(from)
reply("https://chat.whatsapp.com/" + code)
break
case 'setdesc':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
if (!q) return reply(respon.notText(prefix,cmd, pushname));
nayla.groupUpdateDescription(from, q)
break
case 'setname':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
if (!q) return reply(respon.notText(prefix,cmd, pushname));
nayla.groupUpdateSubject(from, q);
break
case 'owner':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
reply("KLICK")
break
case 'zall':
			    for (let x of nomerowner) {
			      sendContact(from, x.split('@s.whatsapp.net')[0], 'Owner', msg)
			    }
break
case 'donasi':
case 'donate':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
reply(linkdonate)
break
case 'audio1':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz1.m4a")
break
case 'audio2':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz2.m4a")
break
case 'audio3':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz3.m4a")
break
case 'audio4':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz4.m4a")
break
case 'audio5':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz5.m4a")
break
case 'audio6':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz6.m4a")
break
case 'audio7':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz7.m4a")
break
case 'audio8':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz8.m4a")
break
case 'audio9':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz9.m4a")
break
case 'audio13':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz13.m4a")
break
case 'audio12':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz12.m4a")
break
case 'audio11':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz11.m4a")
break
case 'audio47':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz47.m4a")
break
case 'audio46':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz46.m4a")
break
case 'audio45':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz45.m4a")
break
case 'audio50':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz50.m4a")
break
case 'audio49':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz49.m4a")
break
case 'audio44':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz44.m4a")
break
case 'audio43':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz43.m4a")
break
case 'audio42':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz42.m4a")
break
case 'audio41':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz41.m4a")
break
case 'audio40':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz40.m4a")
break
case 'audio39':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz39.m4a")
break
case 'virtex':
reply(`🌐×𝗭𝗔𝗟𝗟 𝗠𝗔𝗞𝗘𝗥𝗭×
ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ🥶🍏🥵🍏🥶🍏🥵🍏 ~*🍏ۿۿۿۿ⃢❥ۿۿۿۿ⃢ۿۿ❥ۿۿ⃢ۿۿ.li* ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘๘๘*~ ~*๘๘๘๘๘๘๘๘*~ ~*🍏เקђ๏ภє🍏*~ ~*๘๘๘๘๘๘wa.me/❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓֮̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓֮̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓֮̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓֮̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓֮̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓֮̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓֮̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓֮̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓֮̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓֮̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓֮̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓֮̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓֮̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓֮̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓֮̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓֮̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓֮̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓֮̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓֮̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓֮̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓֮̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓֮̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓֮̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓֮̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓֮̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓֮̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓֮̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓֮̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓֮̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓֮̽❄͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̋̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓֮֮̽̽̈́̽̽⃠͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̈́̽̽̈́̽̽⃠່͓͓͓͓͓͓͓͓֮֮֮֮̽̽̈́̽̽̽̽̈́̽@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟@ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀ
ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.
ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.ᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂᬀᬀᬀᬀᬀᬁᬁᬁᬁᬁᬂᬂᬂᬂᬂᬂ.`)
break
case 'audio38':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz38.m4a")
break
case 'audio37':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz37.m4a")
break
case 'audio36':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz36.m4a")
break
case 'audio48':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz48.m4a")
break
case 'audio35':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz35.m4a")
break
case 'audio34':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz34.m4a")
break
case 'audio33':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz33.m4a")
break
case 'audio32':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz32.m4a")
break
case 'audio30':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz30.m4a")
break
case 'audio29':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz29.m4a")
break
case 'audio28':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz28.m4a")
break
case 'audio27':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz27.m4a")
break
case 'audio26':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz26.m4a")
break
case 'audio25':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz25.m4a")
break
case 'audio24':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz24.m4a")
break
case 'audio23':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz23.m4a")
break
case 'audio22':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz22.m4a")
break
case 'audio21':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz21.m4a")
break
case 'audio20':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz20.m4a")
break
case 'audio19':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz19.m4a")
break
case 'audio18':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz18.m4a")
break
case 'audio17':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz17.m4a")
break
case 'audio16':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz16.m4a")
break
case 'audio15':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz15.m4a")
break
case 'audio14':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz14.m4a")
break
case 'audio10':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
sendMedia("vn","./media/audio/nyz10.m4a")
break
case 'antilink':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
if (!q) return reply(`[ *ANTILINK* ]\n~> *ON*\n• ${prefix + command} on\n~> *OFF*\n• ${prefix + command} off`)
if (q == "on"){addSet("antilink-on", from)
reply("SUKSES ON")}
if (q == "off"){addSet("antilink-off", from)
reply("SUKSES OFF")}
break
case 'welcome':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
if (!q) return reply(`[ *WELCOME* ]\n~> *ON*\n• ${prefix + command} on\n~> *OFF*\n• ${prefix + command} off`)
if (q == "on"){addSet("welcome-on", from)
reply("SUKSES ON")}
if (q == "off"){addSet("welcome-off", from)
reply("SUKSES OFF")}
break
case 'antitag':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
if (!q) return reply(`[ *ANTITAG* ]\n~> *ON*\n• ${prefix + command} on\n~> *OFF*\n• ${prefix + command} off`)
if (q == "on"){addSet("antitag-on", from)
reply("SUKSES ON")}
if (q == "off"){addSet("antitag-off", from)
reply("SUKSES OFF")}
break
case 'antitoxic':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
if (!q) return reply(`[ *ANTITOXIC* ]\n~> *ON*\n• ${prefix + command} on\n~> *OFF*\n• ${prefix + command} off`)
if (q == "on"){addSet("antitoxic-on", from)
reply("SUKSES ON")}
if (q == "off"){addSet("antitoxic-off", from)
reply("SUKSES OFF")}
break
case 'updatehome': 
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
for (let homee of home) {
if (homee.id == sender) {myhome = homee.home}}
if (myhome == 0) { harga = 10000}
if (myhome == 1) { harga = 15000}
if (myhome == 2) { harga = 20000}
if (myhome == 3) { harga = 25000}
if (myhome == 4) { harga = 30000}
if (myhome == 5) { harga = 35000}
if (myUang(sender) <= harga) return reply(`• *UANG KAMU* : ${myUang(sender)}\n*• HARGA UPDATE* : ${harga},\n\nMaaf Uang kamu kurang ${setAll(1000, myUang(sender), "negatif")} untuk update home:(`)
if (!q) {
if (myhome == 0) { sendPng("1",`[ *UPDATE-HOME* ]\nUpdate Home untuk mendapatkan prabotan di atas seharga ${harga}, dan uang kamu sekarang ${myUang(sender)}\nApakah anda yakin ingin update home anda?`,"./media/image/home/home/1.jpg", "UPDATE", `${prefix}updatehome y`)} 
if (myhome == 1) { sendPng("1",`[ *UPDATE-HOME* ]\nUpdate Home untuk mendapatkan prabotan di atas seharga ${harga}, dan uang kamu sekarang ${myUang(sender)}\nApakah anda yakin ingin update home anda?`,"./media/image/home/home/2.jpg", "UPDATE", `${prefix}updatehome y`)} 
if (myhome == 2) { sendPng("1",`[ *UPDATE-HOME* ]\nUpdate Home untuk mendapatkan prabotan di atas seharga ${harga}, dan uang kamu sekarang ${myUang(sender)}\nApakah anda yakin ingin update home anda?`,"./media/image/home/home/3.jpg", "UPDATE", `${prefix}updatehome y`)} 
if (myhome == 3) { sendPng("1",`[ *UPDATE-HOME* ]\nUpdate Home untuk mendapatkan prabotan di atas seharga ${harga}, dan uang kamu sekarang ${myUang(sender)}\nApakah anda yakin ingin update home anda?`,"./media/image/home/home/4.jpg", "UPDATE", `${prefix}updatehome y`)} 
if (myhome == 4) { sendPng("1",`[ *UPDATE-HOME* ]\nUpdate Home untuk mendapatkan prabotan di atas seharga ${harga}, dan uang kamu sekarang ${myUang(sender)}\nApakah anda yakin ingin update home anda?`,"./media/image/home/home/5.jpg", "UPDATE", `${prefix}updatehome y`)} 
if (myhome == 5) { return reply("Home kamu sudah maksimal(MAX), Silahkan tunggu update an selanjutnya ya")}
}
if (q == "y") { 
Object.keys(home).forEach((i) => { 
home[i].home += 1
fs.writeFileSync('./media/text/home.json', JSON.stringify(home))
reply("SUKSES UPDATE, SILAHKAN CEK HOME ANDA:)")
setUang(sender, setAll(myUang(sender), harga, "negatif"))
})
}
break 
case 'myhome': 
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
for (let homeee of home) {
if (homeee.id == sender) {myhomee = homeee.home} }
sendPng("1",`[ *YOUR-HOME* ]\n~> *LEVEL* : ${myhomee}`,"./media/image/home/" + myhomee + ".jpg", "UPDATE", `${prefix}updatehome`)
break

case 'dog': case 'fox': case 'bunny': case 'shiba': case 'duck': 
case 'koala': case 'bird': case 'panda': case 'cat': 
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
reply("[❗] SEDANG DIPROSES")
if (command == "dog"){ImageHewan = await gen.animal.dog()}
if (command == "cat"){ImageHewan = await gen.animal.cat()}
if (command == "panda"){ImageHewan = await gen.animal.panda()}
if (command == "bird"){ImageHewan = await gen.animal.bird()}
if (command == "koala"){ImageHewan = await gen.animal.koala()}
if (command == "duck"){ImageHewan = await gen.animal.duck()}
if (command == "shiba"){ImageHewan = await gen.animal.shiba()}
if (command == "bunny"){ImageHewan = await gen.animal.bunny()}
if (command == "fox"){ImageHewan = await gen.animal.fox()}
sendPng("1","Mirip kamu>//<", ImageHewan, "NEXT", prefix + command)
break
case 'wink': case 'pat': case 'hug': case 'punch': case 'kiss': 
case 'slap': case 'kill': case 'cuddle': case 'foxgirl': case 'neko':
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
reply("[❗] SEDANG DIPROSES")
if (command == "wink") { ImageAnime = await gen.anime.wink()}
if (command == "neko") { ImageAnime = await gen.anime.neko()}
if (command == "foxgirl") { ImageAnime = await gen.anime.foxGirl()}
if (command == "cuddle") { ImageAnime = await gen.anime.cuddle()}
if (command == "kill") { ImageAnime = await gen.anime.kill()}
if (command == "slap") { ImageAnime = await gen.anime.slap()}
if (command == "punch") { ImageAnime = await gen.anime.punch()}
if (command == "kiss") { ImageAnime = await gen.anime.kiss()}
if (command == "hug") { ImageAnime = await gen.anime.hug()}
if (command == "pat") { ImageAnime = await gen.anime.pat()}
nayla.sendMessage(from, {video: {url: ImageAnime}, caption: "Url? " + ImageAnime, gifPlayback: true})
break
case 'stockup': case 'spongebob': case 'patrick': 
case 'hacker2': case 'hacker1': case 'rip': case 'stocknot': 
reply("[❗] SEDANG DIPROSES")
if (myLogin(sender) !== sender) return sendMedia("image","./media/image/login/home.jpg",`[ *YOU ARE UNKNOWN* ]\n\nAnda belum terdaftar di database bot, silahkan gunakan command\n( *BELUM PUNYA AKUN* )\n• ${prefix}signin pw-nya>\n*CONTOH* ?\n${prefix}signin ABC123\n( *SUDAH PUNYA AKUN* )\n• ${prefix}login nomer&pw-nya>\n*CONTOH* ?\n${prefix}login 62xxx&ABC123`)
if (isMedia || isQuotedImage) {
var stream = await downloadContentFromMessage(nay.message.imageMessage || nay.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
let bufferr = Buffer.from([])
for await(const chunk of stream) {
bufferr = Buffer.concat([bufferr, chunk])
}
fs.writeFileSync("./nyx-1.jpg", bufferr)
RA.UploadFile("./nyx-1.jpg").then(respon => {
sendMedia("image", `https://rimurubotz-api.herokuapp.com/api/${command}?url=${respon.result.namaFile}`,"SUKSES")
})
} else { reply("Kirim image/tag image")}
break
case 'artinama': 
fetch(`https://rimurubotz-api.herokuapp.com/api/artinama?text=${q}`)
.then(data => {reply(data.result)})
break
case 'mimpi':
fetch(`https://rimurubotz-api.herokuapp.com/api/mimpi?text=${q}`)
.then(data => {reply(data.result)})
break
case 'tanggaljadi':
if(!q) return reply("Masukkan tanggal jadi kamu")
fetch(`https://rimurubotz-api.herokuapp.com/api/tanggaljadi?text=${q}`)
.then(data => {reply(data.result)})
break
case 'igfoto': case 'igmp3': case 'igmp4': case 'ytmp3': case 'ytmp4':
if (!q) return reply("Masukkan url")
fetch(`https://rimurubotz-api.herokuapp.com/api/${command}?url=${q}`)
.then(data => {reply("Sukses link download : " + data.unduh + "\n*Note* : Send media Error, silahkan download sendiri hasil pencarian anda di atas")})
break
case 'playmp3': case 'playmp4':
if (!q) return reply("Masukkan judul video")
fetch(`https://rimurubotz-api.herokuapp.com/api/${command}?text=${q}`)
.then(data => {reply("Sukses link download : " + data.unduh + "\n*Note* : Send media Error, silahkan download sendiri hasil pencarian anda di atas")})
break
case 'pinterest':
if (!q) return reply("Masukkan nama image")
reply("[❗] SEDANG DIPROSES")
fetch(`https://rimurubotz-api.herokuapp.com/api/${command}?text=${q}`)
.then(data => {sendMedia("image", data.unduh, "SUKSES")})
break
case 'orange': case 'sign': case 'stone': case 'giraffe': case 'neon':
case 'metal': case 'sketch': case 'thunder': case 'light': case 'cloud': 
if (!q) return reply("Masukkan text")
reply("[❗] SEDANG DIPROSES")
fetch(`https://rimurubotz-api.herokuapp.com/api/${command}?text=${q}`)
.then(data => {sendMedia("image", data.result, "SUKSES")})
break
case 'teknologi': case 'programming': case 'cyberspace': case 'muslim': case 'pegunungan': 
reply("[❗] SEDANG DIPROSES")
sendMedia("image", `https://rimurubotz-api.herokuapp.com/api/${command}`, "SUKSES")
break
case 'siapaaku': case 'susunkata': case 'tebakkalimat': case 'tebakkata': 
case 'tebaklirik': case 'tebakkimia': case 'tebaktebakan': case 'tekateki': case 'asahotak': 
fetch(`https://rimurubotz-api.herokuapp.com/api/${command}`)
.then(data => { 
var levelGame = data.game.level
var soalGame = data.game.soal
var jawabanGame = data.game.jawaban
reply(`> *GAME* : ${command}\n> *LEVEL* : ${levelGame}\n> *SOAL* : ${soalGame}\n\n• NOTE : Jawaban akan keluar 30 detik dari sekarang`)
setTimeout( () => {reply("*JAWABAN* : " + jawabanGame)}, 30000)})
break
case 'waifu': case 'gura': case 'kaneki': case 'loli': case 'sadboy': 
reply("[❗] SEDANG DIPROSES")
if(!q) return reply("Masukkan text")
sendMedia("image",`https://rimurubotz-api.herokuapp.com/api/${command}?text=${q}`, "SUKSES")
break
default: 
if (budy.includes("@")){
if (!isGroup) return
if (mySet(antitag, from) !== from) return
sendMedia("stickers","./media/sticker/tag.webp","STOP TAG TAG!")}
if (mySet(antitoxic, from) == from) {
if (budy.includes("njing")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("anjg")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("ajg")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("anj")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("bangsat")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("bngsd")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("tod")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("asw")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("bajingan")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("kunyuk")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("kntol")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("kontol")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("kntl")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("kontl")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("blok")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("memek")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("mmk")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("memk")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("mmek")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("gentod")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("gentot")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("ento")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("jablay")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("banci")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("pencong")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("pecun")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("perek")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("ytem")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("yatim")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("brengsek")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("bejad")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("keparat")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("setan")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("budek")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("sarap")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("tolol")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("lol")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("sinting")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("geblek")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("idiot")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("goblok")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("blok")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("gblok")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("gblk")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("bgo")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("bego")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("meki")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
if (budy.includes("telaso")) return sendMedia("stickers","./media/sticker/toxic.webp","STOP TOXIC!")
}
if (mySet(antilink, from) == from) {
if (!isGroup) return
if (budy.includes("http")) { sendMedia("stickers","./media/sticker/link.webp","STOP!")
await nayla.groupParticipantsUpdate(from, [sender], "remove")}
if (budy.includes("https")) { sendMedia("stickers","./media/sticker/link.webp","STOP!")
await nayla.groupParticipantsUpdate(from, [sender], "remove")}
if (budy.includes("wa.me")) { sendMedia("stickers","./media/sticker/link.webp","STOP!")
await nayla.groupParticipantsUpdate(from, [sender], "remove")}
if (budy.includes(".com")) { sendMedia("stickers","./media/sticker/link.webp","STOP!")
await nayla.groupParticipantsUpdate(from, [sender], "remove")}
if (budy.includes(".id")) { sendMedia("stickers","./media/sticker/link.webp","STOP!")
await nayla.groupParticipantsUpdate(from, [sender], "remove")}
if (budy.includes("t.me")) { sendMedia("stickers","./media/sticker/link.webp","STOP!")
await nayla.groupParticipantsUpdate(from, [sender], "remove")}
}


}
} catch (e) {
console.log(`${e}`)
}
}
