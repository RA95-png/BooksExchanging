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
            connection.query(`SELECT  b.id ,b.NameBook , b.NameAuthor , b.version_date , b.id_univer ,b.id_college , b.id_department , b.id_user ,b.donation ,  b.exchange , b.sale , b.name_book_exchange , b.price , b.nagotiable , b.saleable, b.img  ,  u.name as unviersity  , c.name as college , p.name as department FROM ${DB_NAME}.books as b ,${DB_NAME}.unviersities as u ,${DB_NAME}.college as c , ${DB_NAME}.department as p  where b.id_univer = u.id and  b.id_college = c.id  and b.id_department = p.id and b.NameBook LIKE '%${bookname}%' `, function (err, result) {
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
   , c.name as college , p.name as department , d.Name_user , d.email_user , d.mobile ,  d.social_media  FROM  ${DB_NAME}.books as b ,
    ${DB_NAME}.unviersities as u ,  ${DB_NAME}.data_user as d  ,  ${DB_NAME}.college as c   ,  ${DB_NAME}.department as p 
where  b.id_univer = u.id and  b.id_college = c.id  and b.id_department = p.id and b.id_user = d.id and `+functionSql(data);
console.log(sql);
            connection.query(sql, function (err, result) {
                if (err) throw err;
                console.log(result);
                res.status(200).send(result);
            });
        });
    });

    module.exports = router;

  

    function functionSql (data){
        let sql=[];
        if(data[0]!==""){
            sql.push(" b.NameBook LIKE '%"+data[0]+"%' ");
        }
       if(data[1]!==""){
           sql.push(" b.id_univer ='"+data[1]+"' ");
       }
       if(data[2]!==""){
           sql.push(" b.id_college='"+data[2]+"' ");
       }
       if(data[3]!==""){
           sql.push(" b.id_department='"+data[3]+"' ");
       }

       if(data[4]!==""){
               sql.push(" b."+data[4]+"= 1 "); 
       }
        if(data[4]==="sale"){
            sql.push(" b.price BETWEEN "+data[6]+" AND "+data[7]);
         }
        if(data[5]=== "true"){
            sql.push(" if(b.img='/BooksImages/addbook/default.png' , 0 , 1)='1'");
        }
if(data[0]=="" && data[1]=="" && data[2]=="" && data[3]=="" && data[4]=="" && data[5]==="false"){
    sql.push(" b.id_univer = 0");
}
sql=sql.join("AND");
console.log(sql);
        return sql ;
    }
    
    
  
    //or if(img='/BooksImages/addbook/default.png')
    // b.NameBook LIKE '%${data[0]}%' and b.id_univer ='${data[1]}' and b.id_college='${data[2]}' and b.id_department='${data[3]}' ;

// or  b.price BETWEEN ${data[6]} AND ${data[7]}

    //  b.NameBook LIKE '%${data[0]}%' and  b.id_univer ='${data[1]}' and b.id_college='${data[2]}'
    //  and b.id_department='${data[3]}'  and b.price BETWEEN ${data[6]} AND ${data[7]}  `;

