
//  express = require('express'),
//     fs = require('fs'),
//     router = express.Router(),
//     routeBase = '/login',
//     {
//         createDatabaseConnection,
//         DB_NAME
//     } = require('../DataBase/config');

//     router.get(routeBase+'/', (req, res) => {
//         createDatabaseConnection((error, connection) => {
//             if (error) {
//                 res.status(500);
//                 return;
//             }
//             connection.query(``, function (err, result) {
//                 if (err) throw err;
//                 res.send(result);
//             });
//         });
//     });
    
//     router.delete(routeBase + "/", (req, res) => {
//         let id = req.body.id;
//         createDatabaseConnection((error, connection) => {
//             if (error) {
//                 res.status(500);
//                 return;
//             }
//             connection.query(``, function (err, result) {
//                 if (err) throw err;
//                 res.status(200).send(result);
//             });
//         });
//     });
//     module.exports = router;