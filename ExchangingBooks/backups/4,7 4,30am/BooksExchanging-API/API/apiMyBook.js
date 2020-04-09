const
 express = require('express'),
    fs = require('fs'),
    router = express.Router(),
    routeBase = '/myBooks',
    {
        createDatabaseConnection,
        DB_NAME
    } = require('../DataBase/config');

    router.get(routeBase+'/:id', (req, res) => {
        let id = req.params.id ;
        
console.log(id);
        createDatabaseConnection((error, connection) => {
            if (error) {
                res.status(500);
                return;
            }
            let sql =`SELECT b.id , b.NameBook , b.NameAuthor , b.version_date , b.id_univer , b.donation ,b.exchange , b.sale , b.name_book_exchange , b.price ,b.nagotiable , b.img , b.id_user, u.name , d.Name_user, d.email_user , d.mobile ,  d.social_media  FROM  ${DB_NAME}.books as b , ${DB_NAME}.unviersities as u , ${DB_NAME}.data_user as d  where b.id_univer = u.id and b.id_user =d.id  and  b.id_user=`+id;
            connection.query(sql, function (err, result) {
                if (err) throw err;
                console.log(result);
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