var loki = require("lokijs");
var db = new loki("db.db");
function loadCollection(colName, callback) {
  db.loadDatabase({}, function () {
    var _collection = db.getCollection(colName);

    if (!_collection) {
      console.log("Collection %s does not exit. Creating ...", colName);
      _collection = db.addCollection("users", {
        indices: ["id"],
        unique: ["id"],
      });
    }

    callback(_collection);
  });
}
module.exports = { db, loadCollection };
