const express = require('express'),
    fs = require('fs'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    routeBase = '/register',
    {
        createDatabaseConnection,
        DB_NAME
    } = require('../DataBase/config');
    router.post(routeBase, (req, res) => {

        createDatabaseConnection((error, connection) => {
            if (error) {
                req.status(500);
                return;
            }
            let sql =``;
            connection.query(sql, function (err, result) {
                if (err) throw err;
                console.log(result);
                // console.log(data);
                connection.end();
                res.send(result);
            });
        });
    });
    
