
const myheader = new Headers();
myheader.append('Content-Type', 'application/json');

const img =document.getElementById("img") , 
NameBook=document.getElementById("NameBook"),
version= document.getElementById("version"),
author = document.getElementById("author"),
unviersity = document.getElementById("unviersity"),
college= document.getElementById("college"),
department= document.getElementById("department"),
books= document.getElementById("books"),
price= document.getElementById("price"),
name = document.getElementById("name"),
email = document.getElementById("email"),
mobile = document.getElementById("mobile"),
ex=document.getElementById("ex"),
sm = document.getElementById("sm");

url = window.location.href ; 
console.log(getParameterByName("id",url));
function getParameterByName(name, url) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

let id = getParameterByName("id",url);  // home sale , free , book , home with out img header

console.log(id );

fetch('http://localhost:3000/product/'+id, {
    meathod: 'GET',
    headers: myheader
}).then(response => response.json()).then(data => {
            console.log(data);
            RenderingProduct(data[0]);
    });


function RenderingProduct(data){
    
    console.log(data);
    img.src =`http://localhost:3000${data.img}`;
    NameBook.innerHTML =data.NameBook;
    version.innerHTML=data.version_date ;
    author.innerHTML =data.NameAuthor;

    unviersity.innerHTML = data.unviersity ; 
    college.innerHTML =data.college;
    department.innerHTML =data.department ;
  

    name.innerHTML= " " + data.Name_user ;
    email.innerHTML= " " +data.email_user ;
    mobile.innerHTML= " " +data.mobile ;
    sm.innerHTML= " " +data.social_media ;


    if(data.donation ===1){
        price.innerHTML =  "0.00 JD ......   Free ";
        ex.style.display="none";
        console.log("free");
    }
    if(data.exchange===1){ 
        let b=[] , a ="";
b = data.name_book_exchange.split("\n");
b.forEach(item=>{ a+=`<h4 style="color: gray"><b>${item}</b></h4>`} );

         books.innerHTML = a;
         console.log("exe book");
        if(data.saleable===1){
            price.innerHTML=data.price +"JD" ;
            console.log("exe price");
            if(data.nagotiable===1){
                price.innerHTML += "  .......  " + 'Negotiable';
                console.log("exe price nago");
            }
        }
    }
    if(data.sale===1){
        ex.style.display="none";
        price.innerHTML=data.price + "JD";
        console.log("sale price ");
        if(data.nagotiable===1){
            price.innerHTML += " .......  " + 'Negotiable';
            console.log("sale price nago");
        }
    }

  
  }