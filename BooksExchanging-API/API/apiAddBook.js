const express = require('express'),
    fs = require('fs'),
    router = express.Router(),
    //bodyParser = require('body-parser'),
    routeBase = '/addbook',
    {
        createDatabaseConnection,
        DB_NAME
    } = require('../DataBase/config');
var data="";
    router.post(routeBase, (req, res) => {
        
        createDatabaseConnection((error, connection) => {
            if (error) {
                req.status(500);
                return;
            }
            let imgpath ;
            if(req.body.ImgBook===""){
                imgpath ="/BooksImages/addbook/default.png";
            }
      else { let bookImg = req.body.ImgBook;
        let base64Image = bookImg.split(';base64,').pop();
         imgpath = "/BooksImages/addbook/" + Math.floor(Math.random() * 10000000) + 1 + ".png";
        let fullpath = process.cwd() + imgpath;
        fs.writeFile(fullpath, base64Image, {
            encoding: 'base64'
        }, function (err) {
             console.log('File created');
            //  console.log(err);
        });}
        // console.log(process.cwd());

 let sql =`INSERT INTO ${DB_NAME}.books (NameBook,NameAuthor,version_date,id_univer,id_college,id_department,donation,exchange,sale ,name_book_exchange,saleable,price ,nagotiable,img,id_user) VALUES ('${req.body.BookName}','${req.body.Author}','${req.body.Version}','${req.body.university}', '${req.body.college}','${req.body.department}','${req.body.donation}' ,'${req.body.Exchange}' ,'${req.body.Sale}', '${req.body.books}'  ,'${req.body.saleable}','${req.body.price}','${req.body.nagotiable}' ,  '${imgpath}', '${req.body.idUser}')`;

   

            connection.query(sql, function (err, result) {
                if (err) throw err;
                console.log(result);
                // console.log(data);
                connection.end();
                res.send(result);
            });
        });
    });

    router.get(routeBase+"/:id", (req, res) => {
        let id = req.params.id;  
        createDatabaseConnection((error, connection) => {
            if (error) {
                res.status(500);
                return;
            }
            let sql =`SELECT *  FROM  ${DB_NAME}.books  where id=`+id;
            connection.query(sql, function (err, result) {
                if (err) throw err;
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "*");
            console.log(result);
            connection.end();
            data=result[0];
            res.send(result);
            });
        });
    });


    router.get("/college/:id", (req, res) => {
        let id = req.params.id;  
        createDatabaseConnection((error, connection) => {
            if (error) {
                res.status(500);
                return;
            }
            let sql =`SELECT c.id , c.name , t.id_college , t.id_univer  FROM ${DB_NAME}.college_unvier  as t , ${DB_NAME}.college as  c where  c.id =t.id_college  and t.id_univer =`+id;
            connection.query(sql, function (err, result) {
                if (err) throw err;
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "*");
            console.log(result);
            connection.end();
            res.send(result);
            });
        });
    });

    
    router.get("/department/:id", (req, res) => {
        let id = req.params.id;  
        createDatabaseConnection((error, connection) => {
            if (error) {
                res.status(500);
                return;
            }
            let sql =`SELECT * FROM ${DB_NAME}.department where id_college =`+id;
            connection.query(sql, function (err, result) {
                if (err) throw err;
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "*");
            console.log(result);
            connection.end();
            res.send(result);
            });
        });
    });


                                                                                       

router.put(routeBase ,(req , res)=>{
    let id = req.body.id;
    createDatabaseConnection((error, connection) => {
        if (error) {
            res.status(500);
            return;
        }
        let imgpath ;
     if(req.body.ImgBook===""){
            imgpath =data.img;
        }
  else { 
      let bookImg = req.body.ImgBook;
    let base64Image = bookImg.split(';base64,').pop();
     imgpath = "/BooksImages/addbook/" + Math.floor(Math.random() * 10000000) + 1 + ".png";
    let fullpath = process.cwd() + imgpath;
    fs.writeFile(fullpath, base64Image, {
        encoding: 'base64'
    }, function (err) {
         console.log('File created');
    });
}
    const sql = `UPDATE ${DB_NAME}.books SET NameBook='${req.body.BookName}', NameAuthor='${req.body.Author}', version_date='${req.body.Version}',id_univer='${req.body.university}' , id_college='${req.body.college}',id_department='${req.body.department}' , donation='${req.body.donation}', exchange='${req.body.Exchange}', sale='${req.body.Sale}', name_book_exchange='${req.body.books}', saleable='${req.body.saleable}', price='${req.body.price}', nagotiable='${req.body.nagotiable}', img='${imgpath}' , id_user ='${req.body.idUser}'  WHERE id=${id}`;

        connection.query(sql, function (err, result) {
            if (err) throw err;
            res.status(200).send(result);
        });
    });
});

    // router.delete(routeBase + "/", (req, res) => {
    //     let id = req.body.id;
    //     createDatabaseConnection((error, connection) => {
    //         if (error) {
    //             res.status(500);
    //             return;
    //         }
    //         let sql = `DELETE FROM ${DB_NAME}.books WHERE id=${id}`;
    //         connection.query(sql, function (err, result) {
    //             if (err) throw err;
    //             res.status(200).send(result);
    //         });
    //     });
    // });



    module.exports = router;