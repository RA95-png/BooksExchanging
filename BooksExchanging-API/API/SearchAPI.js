const
 express = require('express'),
    fs = require('fs'),
    router = express.Router(),
    routeBase = '/search',
    {
        createDatabaseConnection,
        DB_NAME
    } = require('../DataBase/config');

   
    router.get(routeBase + "/:bookname" , (req, res) => {
        let bookname = req.params.bookname;
        console.log(bookname);
        createDatabaseConnection((error, connection) => {
            if (error) {
                res.status(500);
                return;
            }
            connection.query(`select * from ${DB_NAME}.books where NameBook LIKE '%${bookname}%' `, function (err, result) {
                if (err) throw err;
                console.log(result);
                res.status(200).send(result);
            });
        });
    });
    module.exports = router;