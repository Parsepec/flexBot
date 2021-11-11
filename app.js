const { Telegraf, Markup } = require("telegraf");
const { db } = require("./db/db");
const routes = require("./routes/index");
// var users = db.getCollection("user");
// var db = new loki("./db.json", { autosave: true });
console.log(db.listCollections());
const bot = new Telegraf(
  "1952831387:AAGAlZeRrIo_NNdW_TjsWe8we4ck-KzhvYk"
).catch((err) => console.log(err));

bot.start(routes.start);
// https://t.me/flexmatrixofficial
bot.command("joingroup", routes.joinGroup);
bot.command("info", routes.info);
bot.on("new_chat_members", routes.newUser);
bot.command("count", routes.count);
bot.launch().catch((err) => console.log(err));

console.log("Running");
