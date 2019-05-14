var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(val, cb) {
        orm.insertOne("burgers", "burger_name", val, function(res) {
            cb(res);
        });
    },
    updateOne: function(condition, cb) {
        orm.updateOne("burgers", "devoured", 1, "id", condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(res) {
          cb(res);
        });
      }
};

module.exports = burger;