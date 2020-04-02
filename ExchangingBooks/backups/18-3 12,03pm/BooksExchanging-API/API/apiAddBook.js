const express = require('express'),
    fs = require('fs'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    routeBase = '/addbooks',
    {
        createDatabaseConnection,
        DB_NAME
    } = require('../DataBase/config');
    router.post(routeBase, (req, res) => {
        let bookImg = req.body.ImgBook;
        let base64Image = bookImg.split(',base64,;').pop();
        let imgpath = "/BooksImages/addbook" + Math.floor(Math.random() * 10000000) + 1 + ".png";
        let fullpath = process.cwd() + imgpath;
        fs.writeFile(fullpath, base64Image, {
            encoding: 'base64'
        }, function (err) {
            // console.log('File created');
             console.log(err);
        });
        console.log(process.cwd());
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
    

    
    
    module.exports = router;