// =====================================add new password====================================

let password = document.getElementById("password"),
    conPassword = document.getElementById("con-password"),
    e8 = document.getElementById("error8"),
    e9 = document.getElementById("error9");


console.log(localStorage.getItem("token"));

if(localStorage.getItem("token")==undefined){
//   window.location="./password.html"

}
    const myheader = new Headers();
myheader.append("authorization", "Bearer:" + localStorage.getItem("token"));
myheader.append('Content-Type', 'application/json');


function Validationpassword() {
    let pass = password.value,
     conPass = conPassword.value;
    e8.innerHTML = "";
    e9.innerHTML = "";

    let upperCaseLetters = /[A-Z]/g, numbers = /[0-9]/g, lowerCaseLetters = /[a-z]/g;

      if(pass.match(upperCaseLetters) && pass.match(lowerCaseLetters)&& pass.match(numbers)&& pass.length >= 8 && pass == conPass)
{              updatepassword();
              
}
else if (pass != conPass) { e9.innerHTML = " password not matches .";}
else { e8.innerHTML ="Password must contain Minimum eight characters,letters and numbers" ;}

   
}

function updatepassword() {

// let id = localStorage.getItem('id');
  let id= 1 ; 
    fetch('http://localhost:3000/password/' + id , {
        method: 'PUT',
        headers: myheader,
        body: JSON.stringify({
            password:password.value,
        })

    }).then(response => response.json())
        .then((data) => {
            console.log(data);
            console.log(data.status);
            localStorage.setItem("token",data.token);
            if(data.status===200){ 
                document.getElementById("success").innerHTML="Password changed successfully.."; 
 // window.location="./password.html" ; 
               
            }
            if(data.status===400){  document.getElementById("success").innerHTML="error ..";}
        });

}




// // =====================================add new password====================================

// let password = document.getElementById("password"),
//     conPassword = document.getElementById("con-password"),
//     e8 = document.getElementById("error8"),
//     e9 = document.getElementById("error9");
//     const myheader = new Headers();
// myheader.append('Content-Type', 'application/json');

// function addpassword() {
//     pass = password.value,
//         conPass = conPassword.value;
//     e8.innerHTML = "";
//     e9.innerHTML = "";

    
//     if (!validator.isEmpty(pass) && !validator.isEmpty(conPass) && pass == conPass && pass.length >= 8  ) {
//        console.log(validator.isAlphanumeric(pass, 'en-US'));
//         document.getElementById("success").innerHTML="Password changed successfully..";
//         updatepassword();
        	
// // ^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$.!%*#?&])[A-Za-z\d@$.!%*#?&]{8,}$

//     }
//     else if (pass != conPass) {
//         e9.innerHTML = " password not matches .";
//     }
//    else if (validator.isAlphanumeric(pass , 'en-US')){"Password must contain letters and numbers"};
//     if(pass.length < 8){e8.innerHTML ="Password must contain Minimum 8 characters" };
//     if (conPass.length < 8){e9.innerHTML = "Password must contain Minimum 8 characters" };
//    // if(!validator.isAlphanumeric(pass)){e8.innerHTML ="Password must contain letters and numbers"};
//     //if(!validator.isAlphanumeric(conPass)){e9.innerHTML="Password must contain letters and numbers"};
//     if (validator.isEmpty(pass)) { e8.innerHTML = "Please, Enter the information correctly . It is empty . "; }
//     if (validator.isEmpty(conPass)) { e9.innerHTML = "Please, Enter the information correctly . It is empty . "; }


// }


// function updatepassword() {
//     const id= 5,
//         pass = password.value ;

//     fetch('http://localhost:3000/password', {
//         method: 'PUT',
//         headers: myheader,
//         body: JSON.stringify({
//             password: pass,
//             id:id 

//         })

//     }).then(response => response.json())
//         .then((data) => {
//             console.log(data);

//         });

// }
