const
 express = require('express'),
    fs = require('fs'),
    router = express.Router(),
    routeBase = '/advanced',
    {
        createDatabaseConnection,
        DB_NAME
    } = require('../DataBase/config');

    router.get(routeBase + "/:a", (req, res) => {
        a=req.params.a;
console.log(a);
        createDatabaseConnection((error, connection) => {
            if (error) {
                res.status(500);
                return;
            }
            connection.query(`select * from ${DB_NAME}.books AS b `, function (err, result) {
                if (err) throw err;
                res.status(200).send(result);
            });
        });
    });
    
    // router.delete(routeBase + "/", (req, res) => {
    //     let id = req.body.id;
    //     createDatabaseConnection((error, connection) => {
    //         if (error) {
    //             res.status(500);
    //             return;
    //         }
    //         connection.query(``, function (err, result) {
    //             if (err) throw err;
    //             res.status(200).send(result);
    //         });
    //     });
    // });
    module.exports = router;