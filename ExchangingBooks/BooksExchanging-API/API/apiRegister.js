//     const express = require('express'),
//             fs = require('fs'),
//             router = express.Router(),
//             bodyParser = require('body-parser'),
//             bcrypt = require('bcryptjs'),
//             jwt = require('jsonwebtoken'),
//             routeBase = '/register',
//             {
//                 createDatabaseConnection, 
//                 DB_NAME
//             } = require('../DataBase/config');



// router.post(routeBase , async(req, res) => {

   
//     try{
//         let name = req.body.username;
//         let email = req.body.Email;
//         let mobile = req.body.Mobile;
//         let Social_Media = req.body.SocialMedia;
//         let university = req.body.university;
//         let college = req.body.college ;
//         let department= req.body.department ;
//         let password = req.body.password;

//         const salt = await bcrypt.genSaltSync(10);
//         const hash = await bcrypt.hashSync(password, salt);
//         console.log(hash);

//          createDatabaseConnection((error, connection) => {
//         if (error) {
//             req.status(500);
//             return;
//         }

// let sql =`INSERT INTO ${DB_NAME}.data_user (Name_user,email_user,mobile,social_media,id_univer,id_college,id_department,pass_user) VALUES 
// ('${name}','${email}','${mobile}','${Social_Media}', '${university}','${college}','${department}' ,'${hash}')`;


//     connection.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log(result);
//         connection.end();
//         res.send(result);
//     });
// });       
   
// } catch {
//     res.status(500).send();
//   }

// });

// router.get(routeBase,(req,res)=>{
//     createDatabaseConnection((error, connection) => {
//         if (error) {
//             req.status(500);
//             return;
//         }
// let sql= `Select * from ${DB_NAME}.data_user `;
//         connection.query(sql, function (err, result) {
//             if (err) throw err;
//             console.log(result);
//             connection.end();
//             res.send(result);
//         });
// })
// });



// router.post('/login', (req, res, err) => {
//     try {
    
//       createDatabaseConnection((error, connection) => {
//         if (error) {
//           req.status(500);
//           return;
//         };
//         connection.query(`SELECT * FROM ${DB_NAME}.data_user ;`, async (error, results, fields) => {
//           const user = results.find(user => user.email_user === req.body.email);
//           console.log(user);
//           if (user == null) {
//             res.status(400).send('400')
//           }
//           const x = await bcrypt.compareSync(req.body.pass, user.pass_user);
//           let y =user.id ;
//           console.log(x);
//           if (x) {
//             const token = await jwt.sign({
//               email: req.body.email
//             }, 'secretkey');
//             console.log(token);
//             res.send({
//               token , y
//             });
//           } else {
//             res.status(400).send('400')
//           }
//         });
//       });
//     } catch (err) {
//       console.log(err);
//       res.status(400).send('400')
//     }
//   });
// module.exports = router;











































// // ==================================================Hashing password by Bcrypt============================================

const
    express = require("express"),
    bcrypt = require("../DataBase/Hash"),
    jwt = require("jsonwebtoken"),
    router = express.Router(),
    { checkUserEmailExists,
       getAllUsers, 
       UserAccount,
        checkPasswordDB,
         showNameWithLogIn, 
         UpdatePasswordUser, 
         addUserAccount ,
         UpdateInformationUser 
        } = require('../API/AddNewUser'),
    routeBase = '/register'
    ;
//.....................................
const key = "iwearft54aw7eg6yq3urt4jy4567idfhjgkuiyut";

router.post(routeBase , (req, res) => {        /////register
    let name = req.body.username;
    let email = req.body.Email;
    let password = req.body.password;
    let Social_Media = req.body.SocialMedia;
    let phone = req.body.Mobile;
    let university = req.body.university;
    let college = req.body.college ;
    let department= req.body.department ;

console.log(name, email,password , Social_Media , phone , university ,college , department);
    const checkName = /^[a-z]|[_\.\-]*$/i;
    const checkEmail = /[a-z0-9_\.\-]+@+[a-z_\.\-]+\.+[a-z]/i;
    const checkPassword = /[a-z]+|[A-Z]+|[0-9]+|\!+|\@+|\#+|\$+|\%+|\&/i;
    const checkSocialMedia = /[0-9]|[a-z]/i;
    const checkPhone = /^[0-9]*$/gm;


    if (checkName.test(name) && checkEmail.test(email)  &&
        checkPassword.test(password) && checkSocialMedia.test(Social_Media) && checkPhone.test(phone)) {
        checkUserEmailExists(email, (EmailDidNotExisit, EmailExisted) => {
console.log("chname",checkName.test(name));
            if (EmailExisted == 0) {
                bcrypt.hashPassword(password, 8, (HashingDidNotWork, HashingPasswordWorked) => {
console.log("error 1",HashingDidNotWork ,HashingPasswordWorked); 
                    if (HashingDidNotWork) {
                        res.status(500);
                    } else {
                        addUserAccount(name, email, HashingPasswordWorked, phone, Social_Media,  university, college, department, (addNgoAccountFiled, addNgoAccountSuccessed) => {
                            if (addNgoAccountFiled) {
                                res.status(500);
                            } else {
                                let id = addNgoAccountSuccessed.insertId
                                let tokenSignUp = jwt.sign({ id: id, email: email, password: HashingPasswordWorked, Social_Media: Social_Media, phone: phone, university: university, college: college, department: department }, key)
                                res.send({ status: 201, id: id, token: tokenSignUp });
                            }

                        });
                    }
                })
            } else {
                res.send({ status: 226  , err: "email is exist "})
            }
        })
    } else {

        res.send({status : 400});
    }
});

//...........................////login page 
router.post('/login', (req, res) => {
    let email = req.body.email;
    let password = req.body.pass;
    console.log(email,password);
    checkPasswordDB(email, (err, FindPasswordByEmail) => {
        console.log(err)
        console.log(FindPasswordByEmail)
        if (FindPasswordByEmail.length > 0) {
            bcrypt.comparePassword(password, FindPasswordByEmail[0].pass_user, (err, CompareDone) => {
                  console.log(err)
                if (CompareDone == true) {
                    showNameWithLogIn(email, (error, NameUser) => {
                        console.log(error)
                        let idToken = NameUser[0].id ;
                        console.log(idToken);
                        let passwordToken = NameUser[0].pass_user;
                        let tokenLogIn = jwt.sign({ id: idToken, email: email, password: passwordToken }, key);
                        console.log(tokenLogIn);
                        res.send({ status: 200, token: tokenLogIn, id: idToken });
                    })
                } else {
                    res.send({ status: 400 })
                }
            })
        } else {
            res.send({ status: 404 })
        }
    })
})

// router.put('/password', (req, res) => {
// let token =  req.headers.authorization.split(" ")[0];
// console.log(token)
// let old_password = req.body.old_password;
// let new_password = req.body.new_password;
// jwt.verify(token, key, (TokenIndefind, InfoByToken) => {
//     console.log(InfoByToken)
//     if (TokenIndefind) {
//         res.send({status:404})
//     }
//     let id = InfoByToken.id;
//     let email = InfoByToken.email;
//     let password = InfoByToken.password;
//     bcrypt.comparePasswordUsers(old_password , password , (CompairFiled , compiesDone)=>{
//         console.log(compiesDone)
//         if(compiesDone == false) {
//             res.send({status : 404})
//         }else{
//             bcrypt.hashPasswordUser(new_password , 8 , (HashingFiled , HashingSuccessed)=>{
//                 UpdatePasswordUser(id,HashingSuccessed,(FiledUpdate , SuccssedUpdate)=>{
//                     if(FiledUpdate) {
//                         res.send({status : 400})
//                     }else{
//                         let token = jwt.sign({id:id,email:email,password:password},key);
//                     res.send({status:200 , result : SuccssedUpdate , token:token})
//                     }
//                 })
//             })

//         }
//     })


//  })


// });

// router.put(routeBase + '/EditeInformation' , (req , res)=>{
// let name = req.body.username;
// let phone = req.body.Mobile;
// let social_media = req.body.SocialMedia;
// let token = req.headers.authorization.split(" ")[0];
// jwt.verify(token , key , (tokenFiled , resultOfToken)=>{
//     console.log(tokenFiled)
//     console.log(resultOfToken)
//     let id = resultOfToken.id
//     if(tokenFiled) {
//         res.send({status : 400})
//     }else{
//         UpdateInformationUser(id , name , phone , social_media , (EditeFiled , EditeSuccssed)=>{
//             console.log(EditeFiled)
//             if(EditeFiled){
//                 res.send({status:404})
//             }else{
//         let tokenUser = jwt.sign({id:id,name:name,phone:phone,social_media:social_media},key)
//         res.send({
//             id:id , result:EditeSuccssed , token:tokenUser
//         })
//             }
//         })
//     }
// })



// })

// let pagesize = 9;
// router.get(routeBase + '/getUser/page/:page' ,(req , res)=>{
// let page = req.params.page;
// let start = (page-1)*pagesize;
// let end = start + pagesize;
// getAllUsers((FiledGetTrainee , FoundUser)=>{
//     if(FiledGetTrainee) {
//         res.send({status : 404})
//     }else{
//      let result = FoundUser.slice(start , end)
//         res.send({status:200,result:result})
//     }
// })
// })

module.exports = router;