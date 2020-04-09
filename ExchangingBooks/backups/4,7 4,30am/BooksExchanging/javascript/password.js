const 
  email = document.getElementById("email"),
  conf = document.getElementById("confirm"),
  e1 = document.getElementById("error1"),
  code = document.getElementById("code"),
  e2 = document.getElementById("error2"),
  send =document.getElementById("send"),
  div =document.getElementById("divcode"),
  butt =document.getElementById("butt");

div.style.display="none";
butt.style.display ="none";

conf.addEventListener("click", addfun);

send.addEventListener("click",()=>{
    const Email = email.value;
  if (!validator.isEmail(Email)) { e1.innerHTML = "Enter Your Email correctly ."; }
  if ( validator.isEmail(Email)) {
    div.style.display= "inline";
  butt.style.display="inline";
console.log("done send ");
// e1.innerHTML ="check your email ";
}
})

function addfun() { 

  let 
    Email = email.value;

  console.log(Email) ;
  e1.innerHTML = ""; 
  e2.innerHTML = "";
 

  if ( validator.isEmail(Email)&& !validator.isEmpty(code.value)) {
    console.log("hello word");
    console.log( Email , code.value ) ;
   location.replace("./forgetpassword.html");
  }

  else
    console.log(code);
  console.log( Email);

  if (validator.isEmpty(code.value)) { e2.innerHTML = "Enter Cody correctly . It is empty . "; }
  if (!validator.isEmail(Email)) { e1.innerHTML = "Enter Your Email correctly ."; }
 

}



const myheader = new Headers();
myheader.append('Content-Type', 'application/json');





  // fetch('http://localhost:3000/passCode/' +email.value, {

  //   method: 'GET',
  //   headers: myheader
  // }).then(response => response.json())
  //   .then((data) => {
  //     console.log(data);
     
  //   });

//=========================================================================================================

 


