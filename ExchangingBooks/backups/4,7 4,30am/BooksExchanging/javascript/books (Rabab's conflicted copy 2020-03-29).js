// function myFunction() {
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName("li");
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }

//////////show more 9 

const deparment =document.getElementById("deparment") , 
showMore =document.getElementById("showMore"),
books= document.getElementById("books");

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
let id = getParameterByName("id",url);
let Sale = getParameterByName("Sale",url);
let Free = getParameterByName("Free",url);
let array = getParameterByName("array",url);
let advanc = getParameterByName("search",url);
console.log(id, Sale , Free , array );
console.log(advanc);
// advanc="+u+"&" + c+"&" + d +"&" + p +"&" +n+"&" + mn +"&" + mx+"&"+l  ;
const myheader = new Headers();
    myheader.append('Content-Type', 'application/json');

if(id !==null){

  fetch('http://localhost:3000/department/'+id, {

    method: 'GET',
    headers: myheader
    }).then(response => response.json())
    .then((data) => {
  console.log(data);
    renderDepartment(data);
      });

  fetch('http://localhost:3000/book/'+id, {
        method: 'GET',
        headers: myheader
        }).then(response => response.json())
        .then((data) => {
      console.log(data);
        renderbook(data);
          });
} 
else if(Sale==="1"){
  fetch('http://localhost:3000/bookSale', {

    method: 'GET',
    headers: myheader
    }).then(response => response.json())
    .then((data) => {
  console.log(data);
    renderbook(data);
      });
    }
else if(Free ==="1"){
  fetch('http://localhost:3000/bookFree', {
    method: 'GET',
    headers: myheader
    }).then(response => response.json())
    .then((data) => {
  console.log(data);
    renderbook(data);
      });
    }

else if(array!==null)
{
        fetch('http://localhost:3000/search/'+array , {
              method: 'GET',
              headers: myheader 
          })
           .then (response => response.json())
          .then(data => {console.log(data);
            renderbook(data);
        });
} 
else if(advanc !==null){
   advanc=advanc.split(",");
console.log(advanc);

fetch('http://localhost:3000/searchAdv/'+advanc[0]+"&"+advanc[1]+"&"+advanc[2]+"&"+advanc[3] , {
  method: 'GET',
  headers: myheader ,
})
.then (response => response.json())
.then(data => {console.log(data);
renderbook(data);
});
}
else {
  fetch('http://localhost:3000/book', {

    method: 'GET',
    headers: myheader
    }).then(response => response.json())
    .then((data) => {
  console.log(data);
    renderbook(data);
      });
    }

    

      
      deparment.addEventListener("change", getDep);
      
function getDep(event) {
 let idDep = event.srcElement.value ;
   console.log(idDep);
fetch('http://localhost:3000/bookDep/'+idDep, {
    method: 'GET',
    headers: myheader
    }).then(response => response.json())
    .then((data) => {
  console.log(data);
    renderbook(data);
      });
    }



function renderbook(data){
    let x="";
    data.forEach(item=>{
      let price ="";
           if(item.donation){ price="Free"; }
      else if(item.sale){  price = item.price +"JD" ;} 
      else if(item.exchange){ price = "Exchange" ; }
   
     x+= `<div class="col-lg-4 col-sm-6"><div class="product-item"><div class="pi-pic">
     <img src="http://localhost:3000${item.img}" alt="">
      <ul><li class="quick-view"><a href="./product.html?id=${item.id}" >+ More Details</a></li></ul></div>
  <div class="pi-text"><div class="catagory-name">${item.department}</div>
      <a href="./product.html?id=${item.id}"><h5>${item.NameBook}</h5> </a>
      <div class="product-price">${price}</div></div></div></div>`;
    });
    books.innerHTML=x ; 
}


function renderDepartment(data) {
  let x="";
 
  data.forEach(item => {
    x +="<option value="+item.id+">"+item.name+"</option>" ;
  });
  deparment.innerHTML =x ;
}
//   array = array.split(" ");
// let s=[];
// s =array;
// console.log(s);

//   {
//     fetch('http://localhost:3000/bookArray/'+ s , {
//       method: 'GET',
//       headers: myheader
//       }).then(response => response.json())
//       .then((data) => {
//     console.log(data);
//       renderbook(data);
//         });
//       }


// =========================================Show more=======================================
// let express = require('express');
// let app = express();
// let port = 3000;
// let pagesize=5;
// let students= [];
// let contant='student.json';
// let fs = require('fs');
// fs.readFile(contant, 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err.message);
//     } else {
//         students =data.split('\n');
//       console.log(data);
//       JSON.parse(data)
//     }
// })
// app.get("/students", (req, res) =>{
//     let page1=req.query.page;
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "*");
//   start=(page1-1)*pagesize;
//   end=start+ pagesize;
//   res.send(students.slice(start,end));
//   });
//  app.listen(port, () => console.log(`Example app listening on port ${port}!`));





