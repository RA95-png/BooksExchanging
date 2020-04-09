
const create =document.getElementById("createSale") ,
      createf=document.getElementById("createFree"),
      namebook1=document.getElementById("book1"),
      namebook2=document.getElementById("book2"),
      namebook3=document.getElementById("book3"),

      idbook1=document.getElementById("dbook1"),
      idbook2=document.getElementById("dbook2"),
      idbook3=document.getElementById("dbook3");

  function openImg(trg){
          console.log("hello");
        console.log(trg);
        let id=trg.parentElement.getAttribute("idbook");
        console.log(id);
         window.location = "./books.html?id="+id;
      }


const myheader = new Headers();
myheader.append('Content-Type', 'application/json');

      fetch('http://localhost:3000/home', {

        method: 'GET',
        headers: myheader
      }).then(response => response.json())
        .then((data) => {
          console.log(data);
          rander(data);
        });
    
function rander(data){
namebook1.innerHTML=data[0].NameBook;
namebook2.innerHTML=data[1].NameBook;
namebook3.innerHTML=data[2].NameBook;
idbook1.addEventListener("click",()=>{  window.location = "./product.html?id="+data[0].id;})
idbook2.addEventListener("click",()=>{  window.location = "./product.html?id="+data[1].id;})  
idbook3.addEventListener("click",()=>{  window.location = "./product.html?id="+data[2].id;}) 
}


 fetch('http://localhost:3000/bookSale/1', {

    method: 'GET',
    headers: myheader
  }).then(response => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.resul);
      randerSale(data.resul);
   
    });


  fetch('http://localhost:3000/bookFree/1', {
    method: 'GET',
    headers: myheader
  }).then(response => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.resul);
randerFree(data.resul);
    
    });

///////////////////////////////////sale section
function randerSale(data){
    console.log(data);
let html ="";
let div =document.createElement("DIV");
         div.setAttribute("class","product-slider owl-carousel");
         div.setAttribute("id","idsale");
         create.appendChild(div);

         data.forEach((i)=>{
        html  +=`<div class="product-item"><div class="pi-pic"><img src="http://localhost:3000${i.img}" alt="" onload="resizeImg(this, 200, 100)"> <ul>
        <li class="w-icon active"><a href="product.html?id=${i.id}"><i class="icon_bag_alt"></i></a></li>
        <li class="quick-view"><a href="product.html?id=${i.id}">+ More Details</a></li></ul> </div><div class="pi-text">
    <div class="catagory-name">${i.department}</div><a href="product.html?id=${i.id}"><div>
        <h5 >${i.NameBook}</h5></div></a><div class="product-price">${i.price}</div></div></div>`;
         })
   document.getElementById("idsale").innerHTML =html ; 


}

//////////////////////////////////Free
function randerFree(data){
    console.log(data);
    let html ="";
let div =document.createElement("DIV");
         div.setAttribute("class","product-slider owl-carousel");
         div.setAttribute("id","idfree");
         createf.appendChild(div);

         data.forEach((i)=>{
        html  +=`<div class="product-item"><div class="pi-pic"><img src="http://localhost:3000${i.img}" alt="" onload="resizeImg(this, 200, 100)"> <ul>
        <li class="w-icon active"><a href="product.html?id=${i.id}"><i class="icon_bag_alt"></i></a></li>
        <li class="quick-view"><a href="product.html?id=${i.id}">+ More Details</a></li></ul> </div><div class="pi-text">
    <div class="catagory-name">${i.department}</div><a href="product.html?id=${i.id}">
        <h5 >${i.NameBook}</h5></a><div class="product-price">FREE</div></div></div>`;
         })
   document.getElementById("idfree").innerHTML =html ; 


}



function resizeImg(img, height, width) {
    img.height = height;
    img.width = width;
}


/////////// login 

if(localStorage.getItem("token")==undefined){
  // window.location="./login.html?bool=true"

}





//////////log out 
document.getElementById("logout").addEventListener("click",()=>{
    localStorage.removeItem("token");
  localStorage.removeItem("id");
    window.location=".login.html";
})
// function logout(){

// }