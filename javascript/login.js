const username = document.getElementById("username"),
password =document.getElementById("password") ,
    signin = document.getElementById("signin") , 
    e1 =document.getElementById("error1") , 
    e2 =document.getElementById("error2") ;

    const search = document.getElementById("buttonSearch") , 
      InputSearch = document.getElementById("InputSearch") 
      ;

      search.addEventListener("click" , funSearch);
      function funSearch (){
          console.log("hello word");
          console.log(InputSearch.value);
      }
   

    function LoginForLogin (){
        location.replace("./Mybooks.html");
      }

    signin.addEventListener("click" , add);
function add (){
let  user = username.value ,
pass = password.value ;


     e1.innerHTML=""; e2.innerHTML="";
 
     if(!validator.isEmpty(user)&&!validator.isEmpty(pass))
    {
        console.log("hello word");
        console.log(user  , pass);
}
    
    else 

    console.log(user , pass);


if(validator.isEmpty(user)){ e1.innerHTML="Please, Enter the information correctly . It is empty . " ;} 
 if(validator.isEmpty(pass)){ e2.innerHTML="Please, Enter the information correctly . It is empty . " ;}

    
}