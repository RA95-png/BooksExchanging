const express = require('express'),
    fs = require('fs'),
    router = express.Router(),
    //bodyParser = require('body-parser'),
    routeBase = '/addbook',
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
        let bookImg = req.body.ImgBook;
        let base64Image = bookImg.split(';base64,').pop();
        let imgpath = "/BooksImages/addbook/" + Math.floor(Math.random() * 10000000) + 1 + ".png";
        let fullpath = process.cwd() + imgpath;
        fs.writeFile(fullpath, base64Image, {
            encoding: 'base64'
        }, function (err) {
             console.log('File created');
             console.log(err);
        });
        console.log(process.cwd());

 let sql =`INSERT INTO ${DB_NAME}.books (NameBook,NameAuthor,version_date,id_univer,id_college,id_department,donation,donation_text,exchange,sale ,name_book_exchange,price ,nagotiable,img,id_user) VALUES ('${req.body.BookName}','${req.body.Author}','${req.body.Version}','${req.body.university}','${req.body.college}','${req.body.department}','${req.body.donation}' ,'${req.body.donation_text}','${req.body.Exchange}' ,'${req.body.saleable}', '${req.body.books}' ,'${req.body.Sale}' ,'${req.body.nagotiable}' , '${imgpath}', '${req.body.idUser}')`;
            connection.query(sql, function (err, result) {
                if (err) throw err;
                console.log(result);
                // console.log(data);
                connection.end();
                res.send(result);
            });
        });
    });

    router.get(routeBase+"/:id", (req, res) => {
        let id = req.params.id;  
        createDatabaseConnection((error, connection) => {
            if (error) {
                res.status(500);
                return;
            }
            let sql =`SELECT *  FROM  ${DB_NAME}.books  where id=`+id;
            connection.query(sql, function (err, result) {
                if (err) throw err;
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "*");
            console.log(result);
            connection.end();
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
            let sql = `DELETE FROM ${DB_NAME}.books WHERE id=${id}`;
            connection.query(sql, function (err, result) {
                if (err) throw err;
                res.status(200).send(result);
            });
        });
    });


    module.exports = router;