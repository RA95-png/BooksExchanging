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
    connection.query(`SELECT  b.id ,b.NameBook , b.NameAuthor , b.version_date  , b.price ,b.donation_text , b.img  , c.name  FROM ${DB_NAME}.books as b , ${DB_NAME}.department as c where  b.id_department = c.id`, function (err, result) {
      if (err) throw err;
      console.log(result);
      connection.end();
      res.send(result);
    });
  });
});


router.get(routeBase + "/:id", (req, res) => {
  let id = req.params.id; 
  createDatabaseConnection((error, connection) => {
    if (error) {
      res.status(500);
      console.log(error);
      return;
    }
    connection.query(`SELECT *  FROM ${DB_NAME}.books as b , ${DB_NAME}.department as c where  b.id_department = c.id and b.id=${id}`, function (err, result) {
      if (err) throw err;
      console.log(result);
      connection.end();
      res.send(result);
    });
  });
});

module.exports = router;