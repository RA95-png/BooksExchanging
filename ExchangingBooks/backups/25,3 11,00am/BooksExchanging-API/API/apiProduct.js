const
 express = require('express'),
    fs = require('fs'),
    router = express.Router(),
    routeBase = '/product',
    {
        createDatabaseConnection,
        DB_NAME
    } = require('../DataBase/config');

    router.get(routeBase+'/', (req, res) => {
        let id = req.body.id;
        createDatabaseConnection((error, connection) => {
            if (error) {
                res.status(500);
                return;
            }
            connection.query(`SELECT b.NameBook , b.NameAuthor , b.version_date , b.id_univer , b.donation ,b.donation_text, b.exchange , b.sale , b.name_book_exchange , b.price ,b.nagotiable ,
            b.img , b.id_user, u.name , d.Name_user , d.email_user , d.mobile , d.id_univer , d.social_media FROM 
            ${DB_NAME}.books as b , ${DB_NAME}.unviersities as u ,
            ${DB_NAME}.data_user as d 
            where b.id_univer = u.id and b.id_user =d.id ;
            `, function (err, result) {
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