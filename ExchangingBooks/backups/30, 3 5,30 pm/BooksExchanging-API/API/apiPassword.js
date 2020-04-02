const
 express = require('express'),
    fs = require('fs'),
    router = express.Router(),
    routeBase = '/password',
    {
        createDatabaseConnection,
        DB_NAME
    } = require('../DataBase/config');

    router.put(routeBase+'/', (req, res) => {
        let Email = req.body.Email;
        createDatabaseConnection((error, connection) => {
            if (error) {
                res.status(500);
                return;
            }
            connection.query(`UPDATE ${DB_NAME}.data_user SET pass_user = ${req.body.password}, con_pass = ${req.body.conPassword}
            WHERE email_user = ${Email} `, function (err, result) {
                if (err) throw err;
                res.send(result);
            });
        });
    });
    
    // router.get(routeBase + "/", (req, res) => {
    //     let Email = req.body.Email;
    //     createDatabaseConnection((error, connection) => {
    //         if (error) {
    //             res.status(500);
    //             return;
    //         }
    //         connection.query(`SELECT * FROM UPDATE ${DB_NAME}.data_user  WHERE email_user = ${Email} `, function (err, result) {
    //             if (err) throw err;
    //             res.status(200).send(result);
    //         });
    //     });
    // });
    module.exports = router;