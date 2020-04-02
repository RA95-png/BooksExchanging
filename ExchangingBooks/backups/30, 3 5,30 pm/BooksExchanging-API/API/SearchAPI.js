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

    router.get("/searchAdv/:data", (req, res) => {
        let data = req.params.data;
          data =data.split(",");
        console.log(data);
         console.log(data[0]);
        createDatabaseConnection((error, connection) => {
            if (error) {
                res.status(500);
                return;
            }
  let sql=`SELECT b.id , b.NameBook , b.NameAuthor , b.version_date , b.id_univer ,b.id_college , b.id_department , b.id_user ,
   b.donation , b.exchange , b.sale , b.name_book_exchange , b.price ,b.nagotiable , b.saleable, b.img , b.id_user, u.name as unviersity  
   , c.name as college , p.name as department , d.Name_user , d.email_user , d.mobile ,  d.social_media FROM  ${DB_NAME}.books as b ,
    ${DB_NAME}.unviersities as u ,  ${DB_NAME}.data_user as d  ,  ${DB_NAME}.college as c   ,  ${DB_NAME}.department as p
     where b.NameBook LIKE '%${data[0]}%' or  b.id_univer ='${data[1]}' or b.id_college='${data[2]}'
      or b.id_department='${data[3]}'  or  b.price BETWEEN ${data[5]} AND ${data[6]}  `
            connection.query(sql, function (err, result) {
                if (err) throw err;
                console.log(result);
                res.status(200).send(result);
            });
        });
    });

    module.exports = router;
    
    // 
    
    
    //or if(img='/BooksImages/addbook/default.png')