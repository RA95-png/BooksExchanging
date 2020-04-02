const {createDatabaseConnection, DB_NAME} = require('../DataBase/config');

function checkUserEmailExists(Email, callback) {
    const sql = `SELECT COUNT(*) as count from ${DB_NAME}.data_user WHERE email_user = "${Email}"`;
    createDatabaseConnection((connectError, connection) => {
        if (connectError) {
            callback(connectError, null);
        } else {
            connection.query(sql, (error, result) => {
                if (callback) {
                    callback(error,result[0].count>0);
                }
        
                connection.end();
            });
        }
    });
}
function addUserAccount(username,Email,password,address,Mobile,SocialMedia,university,college,department,callback){
let sql =`INSERT INTO ${DB_NAME}.data_user (Name_user, email_user, mobile, social_media, id_univer, id_college, id_department, pass_user,con_pass) VALUES('${req.body.username}','${req.body.Email}','${req.body.Mobile}','${req.body.SocialMedia}','${req.body.university}',' ${req.body.college}','${req.body.department}',${req.body.password}, '${req.body.conPassword}')`;
createDatabaseConnection((connectError, connection) => {
    if (connectError) {
        callback(connectError, null);
    } else {
        connection.query(sql, (error, result) => {
         
                callback(error,result);

            connection.end();
        });
    }
});
}

function checkPasswordDB(Email , callback) {
    const sql = `select pass_user from ${DB_NAME}.data_user where email_user =+'${Email}'`
    createDatabaseConnection((connectError, connection) => {
        if (connectError) {
            callback(connectError, null);
        } else {
            connection.query(sql, (error, result) => {
             
                    callback(error,result);
    
                connection.end();
            });
        }
    });
}

function showNameWithLogIn(email , callback){
    const sql = `select Name_user,id, pass_user from ${DB_NAME}.data_user where email_user ='${email}'`
    createDatabaseConnection((connectError, connection) => {
        if (connectError) {
            callback(connectError, null);
        } else {
            connection.query(sql, (error, result) => {
             
                    callback(error,result);

                connection.end();
            });
        }
    });
}


function UpdatePasswordUser(id , newPassword , callback){
    const sql = `UPDATE ${DB_NAME}.data_user SET pass_user = '${newPassword}' WHERE (id = '${id}')`;
    createDatabaseConnection((connectError, connection) => {
        if (connectError) {
            callback(connectError, null);
        } else {
            connection.query(sql, (error, result) => {
             
                    callback(error,result);

                connection.end();
            });
        }
    });
}


function UpdateInformationUser(id , name , phone , social_media , callback){
    const sql = `UPDATE ${DB_NAME}.data_user SET name = '${name}', 
    social_media = '${social_media}', mobile = '${phone}' WHERE (id = '${id}')`
    createDatabaseConnection((connectError, connection) => {
        if (connectError) {
            callback(connectError, null);
        } else {
            connection.query(sql, (error, result) => {
             
                    callback(error,result);

                connection.end();
            });
        }
    });
}

function getAllUsers(callback) {
const sql = `select id,Name_user,social_media,mobile,email_user from ${DB_NAME}.data_user`
createDatabaseConnection((connectError, connection) => {
    if (connectError) {
        callback(connectError, null);
    } else {
        connection.query(sql, (error, result) => {
         
                callback(error,result);

            connection.end();
        });
    }
});
}


module.exports = {
    checkUserEmailExists,addUserAccount,checkPasswordDB,showNameWithLogIn,UpdatePasswordUser,
    getAllUsers,UpdateInformationUser


};