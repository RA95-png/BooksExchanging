const
 express = require('express'),
    fs = require('fs'),
    router = express.Router(),
    routeBase = '/password',
    {
        createDatabaseConnection,
        DB_NAME
    } = require('../DataBase/config');

    router.put(routeBase+'/', (req, res) => {
        let Email = req.body.Email;
        createDatabaseConnection((error, connection) => {
            if (error) {
                res.status(500);
                return;
            }
            connection.query(`UPDATE ${DB_NAME}.data_user SET pass_user = ${req.body.password} WHERE email_user = ${Email} `, function (err, result) {
                if (err) throw err;
                res.send(result);
            });
        });
    });
  
    module.exports = router;

// =============================================================================================================================================================

//     // POST data validation
// const { check, validationResult } = require('express-validator/check');
// const { matchedData, sanitize } = require('express-validator/filter');

// router.post('/register', [
//   // Form field: 'username'
//   check('username')
//   .isLength({ min: 1}).trim()
//   .withMessage('Username cannot be empty.')
//   .matches(/^[a-zA-Z0-9_]+$/, 'i').withMessage('Username must be alphanumeric, and can contain underscores'),

//   // Form field: 'email'
//   check('email')
//   .isEmail().withMessage('It must be an email')
//   .isLength({ min: 4, max: 100})
//   .withMessage('Email address must be between 4-100 characters long, please try again.')
//   .trim()
//   .normalizeEmail(),

//   // Form field: 'password'
//   check('password')
//   .isLength({ min: 8, max: 100})
//   .withMessage('Password must be between 8-100 characters long.')
//   .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,}$/, 'i')
//   .withMessage('Password must include one lowercase character, one uppercase character, a number, and a special character.'),

//   // Form field: 'confirmPassword'
//   check('confirmPassword')
//   .isLength({ min: 8, max: 100})
//   .withMessage('Password must be between 8-100 characters long.')
//   .equals() // **This must be exactly equal to the value in 'password'**

// ], async (req, res, next) => {
//     // Some logic
// });