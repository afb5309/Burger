var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function(tableInput, colName, value, cb) {
        value = connection.escape(value);
        var queryString = "INSERT INTO " + tableInput + " (" + colName + ") VALUES (" + value + ");";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(tableInput, colName, value, idColName, id, cb) {
        var queryString = "UPDATE " + tableInput + " SET " + colName + " = " + value + " WHERE " + idColName + " = " + id + ";";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    delete: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      }
}

module.exports = orm;