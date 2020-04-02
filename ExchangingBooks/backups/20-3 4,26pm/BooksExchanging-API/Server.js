const express = require('express')
const app = express() ,
bodyParser = require('body-parser'),
home = require ("./API/apiHome"),
books = require ("./API/apiBooks"),
addBooks = require ("./API/apiAddBook"),
myBooks = require ("./API/apiMyBook"),
advanced = require ("./API/apiAdvanced"),
login = require ("./API/apiLogin"),
register = require ("./API/apiRegister"),
 product = require ("./API/apiProduct"),
 sale = require("./API/apiSale"),
 password =require("./API/apiPassword") ,
 cors = require('cors');
const port = 3000;


app.use(cors());
app.use(express.json({limit: '50mb'}));


app.use('/BooksImages/addBook',express.static( process.cwd() + '/BooksImages/addBook' ));


app.use(bodyParser.json());
app.use(home);
app.use(books);
app.use(addBooks);
app.use(myBooks);
app.use(advanced);
app.use(login);
app.use(register);
app.use(product);
app.use(sale);
app.use(password);


app.get('/', (req, res) => res.send('test'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))