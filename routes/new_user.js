const { db, loadCollection } = require("../db/db");

const newUser = async function (ctx) {
  console.log(ctx.message.new_chat_members);

  // console.log(`new member joined ${users.find({})}`);
  loadCollection("users", async function (users) {
    // Check if user that joined group is in memory, if yes save the db
    ctx.message.new_chat_members.forEach(async (new_member) => {
      var newMember = users.find({
        id: new_member.id,
      });
      if (newMember) {
        console.log("Joined Group", ctx.message.new_chat_members.id);
        // Save the database after confirming user entered the groupchat
        await db.saveDatabase(() => console.log("DB saved"));
      }
    });
  });

  console.log("new member", ctx.message.new_chat_members);
};

module.exports = newUser;
