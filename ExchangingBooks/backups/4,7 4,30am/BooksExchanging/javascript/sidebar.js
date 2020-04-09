const username = document.getElementById("username"),
  mobile = document.getElementById("mobile"),
  SocialMedia = document.getElementById("SocialMedia"),
  university = document.getElementById("university"),
  college = document.getElementById("college"),
  register = document.getElementById("register"),
  department = document.getElementById("department");




  
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
  let x = "";
  data.forEach(item => {
    x += "<option value=" + item.id + ">" + item.name + "</option>";
  });
  college.innerHTML = x;
}

function renderDepartment(data) {
  let x = "";
  data.forEach(item => {
    x += "<option value=" + item.id + ">" + item.name + "</option>";
  });
  department.innerHTML = x;
}


register.addEventListener("click", add);
function add() {
  let user = username.value,
    Mobile = mobile.value,
    SM = SocialMedia.value,
    univ = university.value,
    coll = college.value,
    depart = department.value;

 // e1.innerHTML = ""; e2.innerHTML = ""; e3.innerHTML = ""; e4.innerHTML = ""; e5.innerHTML = ""; e6.innerHTML = ""; e7.innerHTML = ""; e8.innerHTML = ""; e9.innerHTML = "";
edit();
}



function edit() {
  let myheader = new Headers()
myheader.append("authorization", "Bearer:" + localStorage.getItem("token"));
myheader.append("content-type", "application/json");
fetch('http://localhost:3000/EditeInformation', {
  method: 'PUT',
  headers: myheader ,
    body: JSON.stringify({
username: username.value,
Mobile: mobile.value,
SocialMedia: SocialMedia.value,
university: university.value,
college: college.value,
department: department.value,

    })
}).then(response => response.json())
  .then((data) => {
 console.log(data);
  });}