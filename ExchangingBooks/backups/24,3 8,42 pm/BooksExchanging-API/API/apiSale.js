const
 express = require('express'),
    fs = require('fs'),
    router = express.Router(),
    routeBase = '/sale',
    {
        createDatabaseConnection,
        DB_NAME
    } = require('../DataBase/config');

    router.get(routeBase+'/', (req, res) => {
        createDatabaseConnection((error, connection) => {
            if (error) {
                res.status(500);
                return;
            }
            connection.query(`SELECT b.img, b.NameBook, b.price, b.collage, u.Name_user FROM
            ${DB_NAME}.books AS b, ${DB_NAME}.data_user AS u 
            where b.sale = 1;`, function (err, result) {
                if (err) throw err;
                res.send(result);
            });
        });
    });
    
    router.delete(routeBase + "/", (req, res) => {
        let id = req.body.id;
        createDatabaseConnection((error, connection) => {
            if (error) {
                res.status(500);
                return;
            }
            connection.query(``, function (err, result) {
                if (err) throw err;
                res.status(200).send(result);
            });
        });
    });
    module.exports = router;