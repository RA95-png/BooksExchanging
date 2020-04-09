
//////////show more 9 

const deparment = document.getElementById("deparment"),
  showMore = document.getElementById("showMore"),
  count = document.getElementById("count"),
  start =document.getElementById("start"),
  end =document.getElementById("end"),
  books = document.getElementById("books");

  let page = 1  , arrayBook = [];

url = window.location.href;
console.log(getParameterByName("id", url));
function getParameterByName(name, url) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
let id = getParameterByName("id", url); //// home  college 
let Sale = getParameterByName("Sale", url); // home section  for sale book 
let Free = getParameterByName("Free", url);   /// home section for free book 
let array = getParameterByName("array", url);     // button search about  name book 
let advanc = getParameterByName("search", url);     // advance search by cond. 
console.log(id, Sale, Free, array);
console.log(advanc);

const myheader = new Headers();
myheader.append('Content-Type', 'application/json');
pages();
function pages() {
  if (id !== null) {

  fetch('http://localhost:3000/department/' + id, {
    method: 'GET',
    headers: myheader
  }).then(response => response.json())
    .then((data) => {
      console.log(data);
      renderDepartment(data);
    });

  fetch('http://localhost:3000/book/' +id +"/"+ (page++), {
    method: 'GET',
    headers: myheader
  }).then(response => response.json())
    .then((data) => {
      console.log(data);
      count.innerHTML = data.count ;
      start.innerHTML=data.start ;
      end.innerHTML= data.end ;
      renderbook(data.resul);
    });
}
else if (Sale === "1") {
  fetch('http://localhost:3000/bookSale/'+(page++), {

    method: 'GET',
    headers: myheader
  }).then(response => response.json())
    .then((data) => {
      console.log(data);
      count.innerHTML = data.count ;
      start.innerHTML=data.start ;
      end.innerHTML= data.end ;
   
      renderbook(data.resul);
    });
}
else if (Free === "1") {
  fetch('http://localhost:3000/bookFree/'+(page++), {
    method: 'GET',
    headers: myheader
  }).then(response => response.json())
    .then((data) => {
      console.log(data);
      count.innerHTML = data.count ;
      start.innerHTML=data.start ;
      end.innerHTML= data.end ;
   
      renderbook(data.resul);
    });
}

else if (array !== null) {
  fetch('http://localhost:3000/search' + array +"/"+(page++), {
    method: 'GET',
    headers: myheader
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      count.innerHTML = data.count ;
      start.innerHTML=data.start ;
      end.innerHTML= data.end ;
   
      renderbook(data.resul);
    });
}
else if (advanc !== null) {
  advanc = advanc.split(",");
  console.log(advanc);
  
  fetch('http://localhost:3000/searchAdv/'+advanc +"/"+ (page++) , {
    method: 'GET',
    headers: myheader,
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      count.innerHTML = data.count ;
      start.innerHTML=data.start ;
      end.innerHTML= data.end ;
   
      renderbook(data.resul);
    });
}
else {
  fetch('http://localhost:3000/book/'+ (page++) , {

    method: 'GET',
    headers: myheader
  }).then(response => response.json())
    .then((data) => {
      console.log(data);
      count.innerHTML = data.count ;
      start.innerHTML=data.start ;
      end.innerHTML= data.end ;
      arrayBook.push(data.resul);
      console.log(arrayBook);
      renderbook(arrayBook[i]); 
      showMore.innerHTML = '<a href ="#"  onclick="pages()">SHOR MORE</a>';

    });

}}



function getDep(event) {
  let idDep = event.srcElement.value;
  console.log(idDep);
  fetch('http://localhost:3000/bookDep/' + idDep +"/" +(page++), {
    method: 'GET',
    headers: myheader
  }).then(response => response.json())
    .then((data) => {
      console.log(data);
      count.innerHTML = data.count ;
      start.innerHTML=data.start ;
      end.innerHTML= data.end ;
      renderbook(data.resul);
    });
}


deparment.addEventListener("change", getDep);

let i=0  ;

function renderbook(data) {
  let x = "";

  // array.push(data), console.log(array);
  // for (var i = 0; i < data.length; i++) {
   

    const div = document.createElement("Div");
   
    div.id="id"+i;
    div.className="row";
     books.appendChild(div);
  data.forEach(item => {
    let price = "";
    if (item.donation) { price = "Free"; }
    else if (item.sale) { price = item.price + "JD"; }
    else if (item.exchange) { price = "Exchange"; }
  
    document.getElementById("id"+i).innerHTML+= `<div class="col-lg-4 col-sm-6"><div class="product-item"><div class="pi-pic">
     <img src="http://localhost:3000${item.img}" alt="" onload="resizeImg(this, 200, 100)">
      <ul><li class="quick-view"><a href="./product.html?id=${item.id}">+ More Details</a></li></ul></div>
  <div class="pi-text"><div class="catagory-name">${item.department}</div>
      <a href="./product.html?id=${item.id}"><h5>${item.NameBook}</h5> </a>
      <div class="product-price">${price}</div></div></div></div>`;
  });
  i++ ;
  }

function resizeImg(img, height, width) {
    img.height = height;
    img.width = width;
}
 

function renderDepartment(data) {
  let x = '<option value="" selected disabled label="Select The  Department that the book belongs to:"></option>';

  data.forEach(item => {
    x += "<option value=" + item.id + ">" + item.name + "</option>";
  });
  deparment.innerHTML = x;
}


// function draw_all_img(ind, array_src) {
//     const di = document.createElement("DIV");
//        picture.appendChild(di);
    
//        di.id='a'+i ; 
//        di.class="picture";
//        ind.forEach(r => {
//        document.getElementById('a'+i).innerHTML += '<div class="class-div"><img src="' + array_src[r] + '"class="class-img" id="' + r + '"/></div>';
//     }); i++; 
// }
// 
