const username = document.getElementById("username"),
  email = document.getElementById('email'),
  mobile = document.getElementById("mobile"),
  SocialMedia = document.getElementById("SocialMedia"),
  university = document.getElementById("university"),
  college = document.getElementById("college"),
  department = document.getElementById("department"),
  password = document.getElementById("password"),
  conPassword = document.getElementById("con-password"),
  register = document.getElementById("register"),
  login = document.getElementById("login"),
  img =document.getElementById("img"),
  e1 = document.getElementById("error1"), e2 = document.getElementById("error2"), e3 = document.getElementById("error3"),
  e4 = document.getElementById("error4"), e5 = document.getElementById("error5"), e6 = document.getElementById("error6"), e7 = document.getElementById("error7"), e8 = document.getElementById("error8"), e9 = document.getElementById("error9");



university.addEventListener("change", functionUniv);

function functionUniv(event) {

  let id = event.srcElement.value;
  console.log(id);

  fetch('http://localhost:3000/college/' + id, {

    method: 'GET',
    headers: myheader
  }).then(response => response.json())
    .then((data) => {
      console.log(data);
      renderCollege(data);
    });
}
college.addEventListener("change", funcDepartment);

function funcDepartment(event) {
  let id = event.srcElement.value;
  console.log(id);
  fetch('http://localhost:3000/department/' + id, {
    method: 'GET',
    headers: myheader
  }).then(response => response.json())
    .then((data) => {
      console.log(data);
      renderDepartment(data);
    });

}


function renderCollege(data) {
  let x = "<option value='' disabled selected label='Select The collage that the book belongs to:'></option>";
  data.forEach(item => {
    x += "<option value=" + item.id + ">" + item.name + "</option>";
  });
  college.innerHTML = x;
}

function renderDepartment(data) {
  let x = '<option value="" disabled selected  label="Select The Department that the book belongs to:"></option>';
  data.forEach(item => {
    x += "<option value=" + item.id + ">" + item.name + "</option>";
  });
  department.innerHTML = x;
}


register.addEventListener("click", add);
function add() {
  let user = username.value,
    Email = email.value,
    Mobile = mobile.value,
    SM = SocialMedia.value,
    univ = university.value,
    coll = college.value,
    depart = department.value,
    pass = password.value,
    conPass = conPassword.value;

  e1.innerHTML = ""; e2.innerHTML = ""; e3.innerHTML = ""; e4.innerHTML = ""; e5.innerHTML = ""; e6.innerHTML = ""; e7.innerHTML = ""; e8.innerHTML = ""; e9.innerHTML = "";

  let upperCaseLetters = /[A-Z]/g,
       numbers = /[0-9]/g,
       lowerCaseLetters = /[a-z]/g,
       cheeksm = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g;
       cheekmobile = /^[0-9\+]*$/gm; 


  if (!validator.isEmpty(user) && validator.isEmail(Email) && !validator.isEmpty(Mobile) && !validator.isEmpty(SM) && !validator.isEmpty(univ) && !validator.isEmpty(coll) &&
    !validator.isEmpty(depart)&&Mobile.match(cheekmobile)&&SM.match(cheeksm) && pass.match(upperCaseLetters) && pass.match(lowerCaseLetters) && pass.match(numbers) && pass.length >= 8 && pass == conPass && (Mobile.length == 14 || Mobile.length == 10)) {
    console.log("hello word");
    console.log(user, Email, Mobile, SM, univ, coll, depart, pass, conPass);
    AddNewUser();
  } 
  if(validator.isEmpty(pass)){e8.innerHTML="It is empty " ; scrol()}
  if (!(pass.match(upperCaseLetters)&& pass.match(lowerCaseLetters)&& pass.match(numbers)&& pass.length >= 8)){ e8.innerHTML = "Password must contain capital letter and small letter and numbers";  scrol()}
  if (pass != conPass) { e9.innerHTML = " Password not matches . "; scrol()}
 if(validator.isEmpty(conPass)){ e9.innerHTML="It is empty " , scrol()}
if (validator.isEmpty(depart)) { e7.innerHTML = "Please, Choose a Department ... It is empty .";scrol() }
 if (validator.isEmpty(coll)) { e6.innerHTML = "Please, Choose a College ... It is empty ."; scrol()}
 if (validator.isEmpty(univ)) { e5.innerHTML = "Please, Choose an University ... It is empty ."; scrol()}
  if (validator.isEmpty(SM)) { e4.innerHTML = "Please, Enter your Social Media ... It is empty . ";scrol() }
 if(!SM.match(cheeksm)){ e4.innerHTML="Please, Enter your Social Media carefully";scrol()} 
 if(!Mobile.match(cheekmobile)){  e3.innerHTML="Please, Enter your Mobile carefully "; scrol()}
 if (!(Mobile.length === 14 || Mobile.length ===10)) { e3.innerHTML = " Please, Enter your Mobile carefully" ; console.log("1" , Mobile.length)} 
  if (validator.isEmpty(Mobile)) { e3.innerHTML = "Please, Enter your Mobile  ... It is empty . "; scrol()}
   if (!validator.isEmail(Email)) { e2.innerHTML = "Please, Enter your Email carefully ."; scrol()}
 if (validator.isEmpty(user)) { e1.innerHTML = "Please, Enter your name carefully ... It is empty . "; scrol()}
 
  // document.body.scrollTop = 1;
  // document.documentElement.scrollTop = 1;
}

const myheader = new Headers();
myheader.append('Content-Type', 'application/json');

function AddNewUser() {
  console.log("hello")
  fetch('http://localhost:3000/register', {

    method: 'POST',
    headers: myheader,
    body: JSON.stringify({
      username: username.value,
      Email: email.value,
      Mobile: mobile.value,
      SocialMedia: SocialMedia.value,
      university: university.value,
      college: college.value,
      department: department.value,
      password: password.value
    })
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      console.log(data.status);
      localStorage.setItem("token",data.token);
      if(data.status===400){
        e9.innerHTML="Please, Enter your information carefully"; scrol()
      }
      if(data.status===226){
        e2.innerHTML="Email is existed , Please login " ; scrol();
      }if(data.status===201){
        let id = data.id;
     window.location = "./index.html";
      }
      if(data.status===500){
        e9.innerHTML="Please, Enter your information carefully";  scrol();
      }
      if(!(data.status ==201 || data.status==500 || data.status==226 ||data.status==400)){
        e9.innerHTML="Please, Enter your information carefully" ; scrol();
      }
    
    });
}


function scrol(){
  document.documentElement.scrollTop = 0;
}


	//////////////////////////////login with  google 

  function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    username.value = profile.getName() ;
    email.value =profile.getEmail() ;
    img.src=profile.getImageUrl() ;  
    scrol();  
    }


    function signOut() {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
      console.log('User signed out.');
      username.value = "";
      email.value = "" ;
      img.src="./img/img.jpeg";  
      scrol(); 
      });
    }