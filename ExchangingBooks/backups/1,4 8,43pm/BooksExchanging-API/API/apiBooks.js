const
  express = require("express"),
  router = express.Router(),
  routeBase = '/book',
  {
    createDatabaseConnection, DB_NAME
  } = require('../DataBase/config.js'),
  fs = require('fs');

router.get(routeBase, (req, res) => {
  createDatabaseConnection((error, connection) => {
    if (error) {
      res.status(500);
      console.log(error);
      return;
    }
    let sql =`SELECT  b.id ,b.NameBook , b.NameAuthor , b.version_date , b.id_univer ,b.id_college , b.id_department , b.id_user ,b.donation ,  b.exchange , b.sale , b.name_book_exchange , b.price , b.nagotiable , b.saleable, b.img  ,  u.name as unviersity  , c.name as college , p.name as department FROM ${DB_NAME}.books as b ,${DB_NAME}.unviersities as u ,${DB_NAME}.college as c , ${DB_NAME}.department as p  where b.id_univer = u.id and  b.id_college = c.id  and b.id_department = p.id` ;
      
    connection.query(sql , function (err, result) {
      if (err) throw err;
      console.log(result);
      connection.end();
      res.send(result);
    });
  });
});

router.get(routeBase+ "/:id", (req, res) => {
   let id = req.params.id; 
   createDatabaseConnection((error, connection) => {
    if (error) {
      res.status(500);
      console.log(error);
      return;
    }
    let sql =`SELECT  b.id ,b.NameBook , b.NameAuthor , b.version_date , b.id_univer ,b.id_college , b.id_department , b.id_user ,b.donation ,  b.exchange , b.sale , b.name_book_exchange , b.price , b.nagotiable , b.saleable, b.img  ,  u.name as unviersity  , c.name as college , p.name as department FROM ${DB_NAME}.books as b ,${DB_NAME}.unviersities as u ,${DB_NAME}.college as c , ${DB_NAME}.department as p  where b.id_univer = u.id and  b.id_college = c.id  and b.id_department = p.id and b.id_college ='${id}'` ;
      
    connection.query(sql , function (err, result) {
      if (err) throw err;
      console.log(result);
      connection.end();
      res.send(result);
    });
  });
});

router.get( "/bookDep/:id", (req, res) => {
  let id = req.params.id; 
  createDatabaseConnection((error, connection) => {
   if (error) {
     res.status(500);
     console.log(error);
     return;
   }
   let sql =`SELECT  b.id ,b.NameBook , b.NameAuthor , b.version_date , b.id_univer ,b.id_college , b.id_department , b.id_user ,b.donation ,  b.exchange , b.sale , b.name_book_exchange , b.price , b.nagotiable , b.saleable, b.img  ,  u.name as unviersity  , c.name as college , p.name as department FROM ${DB_NAME}.books as b ,${DB_NAME}.unviersities as u ,${DB_NAME}.college as c , ${DB_NAME}.department as p  where b.id_univer = u.id and  b.id_college = c.id  and b.id_department = p.id and b.id_department ='${id}'` ;
     
   connection.query(sql , function (err, result) {
     if (err) throw err;
     console.log(result);
     connection.end();
     res.send(result);
   });
 });
});

router.get( "/bookFree", (req, res) => {
  createDatabaseConnection((error, connection) => {
   if (error) {
     res.status(500);
     console.log(error);
     return;
   }
   let sql =`SELECT  b.id ,b.NameBook , b.NameAuthor , b.version_date , b.id_univer ,b.id_college , b.id_department , b.id_user ,b.donation ,  b.exchange , b.sale , b.name_book_exchange , b.price , b.nagotiable , b.saleable, b.img  ,  u.name as unviersity  , c.name as college , p.name as department FROM ${DB_NAME}.books as b ,${DB_NAME}.unviersities as u ,${DB_NAME}.college as c , ${DB_NAME}.department as p  where b.id_univer = u.id and  b.id_college = c.id  and b.id_department = p.id and b.donation ='1'` ;
     
   connection.query(sql , function (err, result) {
     if (err) throw err;
     console.log(result);
     connection.end();
     res.send(result);
   });
 });
});

router.get( "/bookSale", (req, res) => {
  createDatabaseConnection((error, connection) => {
   if (error) {
     res.status(500);
     console.log(error);
     return;
   }
   let sql =`SELECT  b.id ,b.NameBook , b.NameAuthor , b.version_date , b.id_univer ,b.id_college , b.id_department , b.id_user ,b.donation ,  b.exchange , b.sale , b.name_book_exchange , b.price , b.nagotiable , b.saleable, b.img  ,  u.name as unviersity  , c.name as college , p.name as department FROM ${DB_NAME}.books as b ,${DB_NAME}.unviersities as u ,${DB_NAME}.college as c , ${DB_NAME}.department as p  where b.id_univer = u.id and  b.id_college = c.id  and b.id_department = p.id and b.sale ='1'` ;
     
   connection.query(sql , function (err, result) {
     if (err) throw err;
     console.log(result);
     connection.end();
     res.send(result);
   });
 });
});

// router.get( "/bookArray/:a", (req, res) => {
//   a=req.params.a;
//   createDatabaseConnection((error, connection) => {
//    if (error) {
//      res.status(500);
//      console.log(error);
//      return;
//    }
//    let sql =`SELECT  b.id ,b.NameBook , b.NameAuthor , b.version_date , b.id_univer ,b.id_college , b.id_department , b.id_user ,b.donation ,  b.exchange , b.sale , b.name_book_exchange , b.price , b.nagotiable , b.saleable, b.img  ,  u.name as unviersity  , c.name as college , p.name as department FROM ${DB_NAME}.books as b ,${DB_NAME}.unviersities as u ,${DB_NAME}.college as c , ${DB_NAME}.department as p  where b.id_univer = u.id and  b.id_college = c.id  and b.id_department = p.id and b.id in (${a})` ;
     
//    connection.query(sql , function (err, result) {
//      if (err) throw err;
//      console.log(result);
//      connection.end();
//      res.send(result);
//    });
//  });
// });

module.exports = router;