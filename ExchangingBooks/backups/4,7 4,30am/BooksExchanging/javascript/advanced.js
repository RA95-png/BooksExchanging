
const  university = document.getElementById("university"),
college = document.getElementById("college"),
department = document.getElementById("deparment") , 
picture = document.getElementById("picture") ,
bookname = document.getElementById("bookname"),
min = document.getElementsByClassName("min")[0],
max =document.getElementsByClassName("max")[0],
sale = document.getElementById("sale"),

priceRange=document.getElementById("priceRange"),

searchButton=document.getElementById("search") ;

priceRange.style.display ="none";

sale.addEventListener("change",()=>{
  if(sale.value==="sale"){
    priceRange.style.display ="inline-block";
  }else{
    priceRange.style.display ="none";
  }
})

const myHeader = new Headers();

myHeader.append('Content-Type', 'application/json');

searchButton.addEventListener("click",advancedsearch);
function advancedsearch()
{ let  mn="", mx="",
   p=picture.checked,
  u=university.value ,
  c=college.value,
  d=department.value,
  n=bookname.value,
  s=sale.value;
   if(s==="sale"){
  mn=min.value ;
  mx=max.value;
   }
   else{
     mn="";
     mx="";
   }
 
  
  console.log(u);
  console.log(c);
  console.log(d);
  console.log(s);
  console.log(n);
  console.log(mn);
  console.log(mx);
  console.log(p);
 window.location = "./books.html?search="+n+","+u+"," + c+"," + d +"," + s +"," + p +","+ mn +"," + mx  ;
 }
university.addEventListener("change", functionUn);

function functionUn (event){

  id = event.srcElement.value ;
  console.log(id);

  fetch('http://localhost:3000/college/'+id, {

    method: 'GET',
    headers: myHeader 
    }).then(response => response.json())
    .then((data) => {
  console.log(data);
    renderCollege(data);
      });

}

college.addEventListener("change" , funcDepartment);

function funcDepartment (event)
{
  id = event.srcElement.value ;
  console.log(id);

  fetch('http://localhost:3000/department/'+id, {

    method: 'GET',
    headers:myHeader 
    }).then(response => response.json())
    .then((data) => {
  console.log(data);
    renderDepartment(data);
      });
}


function renderCollege(data) {
  let x="<option value='' disabled selected label='Select The collage that the book belongs to:'></option>";
  data.forEach(item => {
    x+="<option value="+item.id+">"+item.name+"</option>" ;
  });
 college.innerHTML = x ;
}

function renderDepartment(data) {
  let x='<option value="" disabled selected  label="Select The Department that the book belongs to:"></option>';
  data.forEach(item => {
    x+="<option value="+item.id+">"+item.name+"</option>" ;
  });
 department.innerHTML = x ;
}


//   fetch('http://localhost:3000/advanced/u='+u+"&c=" + c+"&d=" + d +"&p=" + p +"&n=" +n+"&mn=" + mn +"&mx=" + mx+"&s="+l , {
//     method: 'GET',
//     headers: myHeader 
// })
//  .then (response => response.json())
// .then(data => {console.log(data);
//   getBook(data);
// });

 


//  function getBook (a){
//   let l="";
//   a.forEach(i=>{
//       l += i.id +" ";
//   })
//   console.log(l);
//   // window.location = "./books.html?array="+l ;
// }





//////bar 

fetch('http://localhost:3000/bookFree/1', {
    method: 'GET',
    headers: myHeader
  }).then(response => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.resul);
rander(data.resul);
    
    });

let html ="";
function rander(data){
  console.log(data);
  let div =document.createElement("DIV");
         div.setAttribute("class","product-slider owl-carousel");
         div.setAttribute("id","id");
         document.getElementById("create").appendChild(div);
       data.forEach((i)=>{
      html  +=`<div class="product-item"><div class="pi-pic">
      <img src="http://localhost:3000${i.img}" alt="" onload="resizeImg(this, 200, 100)"> <ul>
      <li class="w-icon active"><a href="product.html?id=${i.id}"><i class="icon_bag_alt"></i></a></li>
      <li class="quick-view"><a href="product.html?id=${i.id}">+ More Details</a></li></ul> </div><div class="pi-text">
  <div class="catagory-name">${i.department}</div><a href="product.html?id=${i.id}"><div>
      <h5 >${i.NameBook}</h5></div></a><div class="product-price">${i.price}</div></div></div>`;
       })
 document.getElementById("id").innerHTML = html  ; 
{/* <div  class="product-slider owl-carousel">` +`</div>`+ */}

}


function resizeImg(img, height, width) {
  img.height = height;
  img.width = width;
}