url = window.location.href;
console.log(getParameterByName("bool", url));
function getParameterByName(name, url) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
let bool = false;
    bool = getParameterByName("bool", url); /// add book 
// if(boolean===null){
// 	bool = true ;
// }

const Email = document.getElementById("email"),
password =document.getElementById("password") ,
    signin = document.getElementById("signin") , 
    e1 =document.getElementById("error1") , 
    e2 =document.getElementById("error2") ;

	const myheader = new Headers();
    myheader.append('Content-Type', 'application/json');

    signin.addEventListener("click" , add);
function add (){
let  email = Email.value ,
     pass = password.value ; 
	 e1.innerHTML="";
	  e2.innerHTML="";
 
     if(validator.isEmail(email)&&!validator.isEmpty(pass))
    {
       
		header();
}
    
    else 
    console.log(email , pass);
 if(!validator.isEmail(email)){ e1.innerHTML="Please, Enter the Email carefully .  " ;} 
 if(validator.isEmpty(pass)){ e2.innerHTML="Please, Enter the Password carefully ... It is empty . " ;}

    
}


function header() {
	     
			fetch('http://localhost:3000/login', {
				method: 'POST',
				headers: myheader,
				body: JSON.stringify({
					email:Email.value ,
					pass :password.value
				})
			})
			 .then (response => response.json())
			.then(data =>{
				console.log(data);
				localStorage.setItem("id" , data.id);
				localStorage.setItem("token",data.token);
				if  (data.status == 400){
	          	e2.innerHTML = `Incorrect Username and/or Password!`
				}
				if(data.status ===404){
					e1.innerHTML="email does not exist "
				}

				if(data.status==200){
					let id = data.id;
				console.log(id);
	          if(bool){	
					window.location ="./addBook.html";
				}
				else{
				window.location ="./Index.html";
				}
				if(!(data.status==200 || data.status ==400 ||data.status==404))
				{ 
					e2.innerHTML = `Incorrect Username and/or Password!`

				}

				}
                
			
		});
	
		};










	
	
		

