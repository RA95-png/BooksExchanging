const express = require('express'),
 app = express() ,
bodyParser = require('body-parser'),
home = require ("./API/apiHome"),
books = require ("./API/apiBooks"),
addBooks = require ("./API/apiAddBook"),
myBooks = require ("./API/apiMyBook"),
advanced = require ("./API/apiAdvanced"),
search = require ("./API/SearchAPI"),
register = require ("./API/apiRegister"),
 product = require ("./API/apiProduct"),
 password =require("./API/apiPassword") ,
 cors = require('cors');
const port = 3000;


app.use(cors());
app.use(express.json({limit: '50mb'}));


 app.use('/BooksImages/addbook',express.static( process.cwd() + '/BooksImages/addbook' ));


app.use(bodyParser.json());

 app.use(home);
 app.use(books);
 app.use(addBooks);
 app.use(myBooks);
 app.use(advanced);
 app.use(search);
 app.use(register);
 app.use(product);
 app.use(password);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))