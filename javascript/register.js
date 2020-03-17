const username = document.getElementById("username"),
    email = document.getElementById('email') , 
    mobile = document.getElementById("mobile") , 
    SocialMedia =document.getElementById("SocialMedia") ,
    university =document.getElementById("university") ,
    college =document.getElementById("college") ,
    department =document.getElementById("department")  ,
    password =document.getElementById("password") ,
    conPassword =document.getElementById("con-password") ,
    register =document.getElementById("register") ,
    login =document.getElementById("login") ,
    e1 =document.getElementById("error1") , e2 =document.getElementById("error2") ,  e3 =document.getElementById("error3") , 
    e4 =document.getElementById("error4")  ,  e5 =document.getElementById("error5")  , e6 =document.getElementById("error6") , e7 =document.getElementById("error7") , e8 =document.getElementById("error8") , e9 =document.getElementById("error9") ; 
    function LoginForRegister (){
        location.replace("./login.html");
      }
register.addEventListener("click" , add);
function add (){
let  user = username.value ,
     Email = email.value ,
     Mobile = mobile.value , 
     SM = SocialMedia.value ,
     univ = university.value , 
     coll = college.value ,
     depart = department.value ,
     pass = password.value , 
     conPass = conPassword.value ; 

     e1.innerHTML=""; e2.innerHTML=""; e3.innerHTML=""; e4.innerHTML="" ; e5.innerHTML=""; e6.innerHTML=""  ; e7.innerHTML=""; e8.innerHTML="" ; e9.innerHTML="" ;
  

  if(!validator.isEmpty(user)&& validator.isEmail( Email)&& !validator.isEmpty(Mobile)&&!validator.isEmpty(SM)&&  !validator.isEmpty(univ)&& !validator.isEmpty(coll)&&
     !validator.isEmpty(depart)&& !validator.isEmpty(pass)&& !validator.isEmpty(conPass))
    {
        console.log("hello word");
        console.log(user  , Email , Mobile , SM , univ , coll , depart , pass, conPass);
}
    
    else 
    console.log(univ , coll, depart);
    console.log(user  , Email , Mobile , SM , univ , coll , depart , pass, conPass);

 if(validator.isEmpty(user)){ e1.innerHTML="Please, Enter the information correctly . It is empty . " ;} 
 if(!validator.isEmail(Email)){ e2.innerHTML="Please, Enter the Email correctly ." ;}
if(validator.isEmpty(Mobile)){ e3.innerHTML="Please, Enter the information correctly . It is empty . " ;}
if(validator.isEmpty(SM)){ e4.innerHTML="Please, Enter the information correctly . It is empty . " ;}
if(validator.isEmpty(univ)){ e5.innerHTML="Please, Enter the information correctly . It is empty . " ;}
if(validator.isEmpty(coll)){ e6.innerHTML="Please, Enter the information correctly . It is empty . " ;}
if(validator.isEmpty(depart)){ e7.innerHTML="Please, Enter the information correctly . It is empty . " ;}
if(validator.isEmpty(pass)){ e8.innerHTML="Please, Enter the information correctly . It is empty . " ;}
if(validator.isEmpty(conPass)){ e9.innerHTML="Please, Enter the information correctly . It is empty . " ;}
      
}