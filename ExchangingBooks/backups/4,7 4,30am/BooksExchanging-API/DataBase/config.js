const mySql = require('mysql'),
        express = require("express"),
      DB_NAME = 'exchanging_books';

function createDatabaseConnection(callback) {
    const connection = mySql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
       // password: 'Tt12345678',
        database: DB_NAME
    });
    // connect
    connection.connect((err) => {
        if (callback) {
            callback(err, connection);
        }
    });
}

module.exports = {
    createDatabaseConnection,
    DB_NAME
};
