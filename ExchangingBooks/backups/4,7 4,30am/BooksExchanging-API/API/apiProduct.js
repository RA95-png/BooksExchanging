const
 express = require('express'),
    router = express.Router(),
    routeBase = '/product',
    {  createDatabaseConnection,
        DB_NAME
    } = require('../DataBase/config');
    router.get(routeBase +'/:id', (req, res) => {
        let id = req.params.id ;
        createDatabaseConnection((error, connection) => {
            if (error) {
                res.status(500);
                return;
            }
let sql=`SELECT b.id , b.NameBook , b.NameAuthor , b.version_date , b.id_univer ,b.id_college , b.id_department , b.id_user , b.donation , b.exchange , b.sale , b.name_book_exchange , b.price ,b.nagotiable , b.saleable, b.img , b.id_user, u.name as unviersity  , c.name as college , p.name as department , d.Name_user , d.email_user , d.mobile ,  d.social_media FROM  ${DB_NAME}.books as b , ${DB_NAME}.unviersities as u ,  ${DB_NAME}.data_user as d  ,  ${DB_NAME}.college as c   ,  ${DB_NAME}.department as p  where b.id_univer = u.id and b.id_user =d.id and b.id_college = c.id and b.id_department = p.id and b.id='${id}'`;
            connection.query(sql, function (err, result) {
                if (err) throw err;
                res.send(result);
            });
        });
    });
    module.exports = router;