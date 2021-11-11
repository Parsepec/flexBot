const { Markup } = require("telegraf");
const { loadCollection } = require("../db/db");

const start = (ctx) => {
  ctx.reply("Welcome", Markup.keyboard(["/info", "/joingroup"]));
  console.log(ctx.state);
  console.log(ctx.from);
  console.log(ctx.chat);
  // loadCollection("users", (users) => {
  //   console.log("Persisted", users.find({}).length);
  // });
};
module.exports = start;
