// =============================B64============================
const inputfile = document.getElementById("fileInput"),
  imgBook = document.getElementById('imgBook');
let b64 = "";

function readURL(input) {
  console.log(input.files && input.files[0]);
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      document.getElementById("imgBook").setAttribute('src', e.target.result);
    }
    reader.readAsDataURL(input.files[0]);
  }
}

inputfile.addEventListener("change", function () {
  readURL(this);
});
imgBook.addEventListener('click', () => {
  inputfile.click()
});

inputfile.onchange = function () {
  var file = inputfile.files[0],
    img = new FileReader();
  img.onloadend = function () {
    b64 = img.result.replace(/^data:.+;base64,/, '');
  };
  img.readAsDataURL(file);
};

//======================================Validation & add book informations===============================================


const bookName = document.getElementById("bookName"),
    author = document.getElementById('author'),
    version = document.getElementById("version"),
    university = document.getElementById("unviersity"),
    college = document.getElementById("college"),
    department = document.getElementById("deparment"),
    donation = document.getElementById("donation"),
    exchange = document.getElementById("exchange"),
    textarea = document.getElementById("textarea"),
    saleable = document.getElementById("saleable"),
    NegotiableSale = document.getElementById("NegotiableSale"),
    Negotiable = document.getElementById("Negotiable"),
    buttonAdd = document.getElementById("buttonAdd"),
    e1 = document.getElementById("error1"),
    e2 = document.getElementById("error2"),
    e3 = document.getElementById("error3"),
    e4 = document.getElementById("error4"),
    e5 = document.getElementById("error5"),
    e6 = document.getElementById("error6"),
    e7 = document.getElementById("error7"),
    e8 = document.getElementById("error8");

function mybook() {
    location.replace("./Mybooks.html");
}

// buttonAdd.addEventListener("click", add);
function add() {
    let Name = bookName.value,
        Author = author.value,
        Version = version.value,

        univ = university.value,
        coll = college.value,
        depart = department.value;

    e1.innerHTML = ""; e2.innerHTML = ""; e3.innerHTML = ""; e4.innerHTML = ""; e5.innerHTML = ""; e6.innerHTML = ""; e7.innerHTML = ""; e8.innerHTML = "";

    if (!validator.isEmpty(Name) &&
        !validator.isEmpty(Author) &&
        !validator.isEmpty(Version) &&

        !validator.isEmpty(univ) &&
        !validator.isEmpty(coll) &&
        !validator.isEmpty(depart)
    ) {
        console.log("hello word");
        console.log("Done");
      

    }

    else

        if (validator.isEmpty(Name)) { e1.innerHTML = "Please, Enter the information correctly . It is empty . "; }
    if (validator.isEmpty(Author)) { e2.innerHTML = "Please, Enter the information correctly . It is empty  ."; }
    if (validator.isEmpty(Version)) { e3.innerHTML = "Please, Enter the information correctly . It is empty . "; }
    if (validator.isEmpty(univ)) { e4.innerHTML = "Please, Enter the information correctly . It is empty . "; }
    if (validator.isEmpty(coll)) { e5.innerHTML = "Please, Enter the information correctly . It is empty . "; }
    if (validator.isEmpty(depart)) { e6.innerHTML = "Please, Enter the information correctly . It is empty . "; }

}

// =====================================add book informations==============================================

// function AddBookInfo() {
//     let Book = bookName.value,
//         Author = author.value,
//         Version = version.value,

//         university2 = university.value,
//         college2 = college.value,
//         department2 = department.value,
   
//         exchange = textarea.value,
//         saleable2 = saleable.value,
//         price = document.getElementById("price").value;

//     const obj = new Headers();
 
//     obj.append('Content-Type', 'application/json');
//     fetch('http://localhost:3000/addbook', {

//         method: 'POST',
//         headers: obj,
//         body: JSON.stringify({
//             BookName: Book,
//             Author: Author,
//             Version: Version,
//             university: university2,
//             department: department2,
//             college: college2,
//             Exchange: exchange,
//             Sale: price,
//             saleable: saleable2,
//             ImgBook: b46

//         })

//     })
//         .then(response => response.json())
//         .then(data => console.log(data));


// }


// function EditBookInfo() {
//     let Book = bookName.value,
//         Author = author.value,
//         Version = version.value,

//         university2 = university.value,
//         college2 = college.value,
//         department2 = department.value,
//         exchange = textarea.value,
//         saleable2 = saleable.value,
//         price = document.getElementById("price").value;

//     const obj = new Headers();
//     obj.append('Authorization', 'Bearer 1HXWFhZZT_h8KTB0pQDX_fThygtGEUIvUUcO');
//     obj.append('Content-Type', 'application/json');
//     fetch('http://localhost:3000/addbook', {

//         method: 'PUT',
//         headers: obj,
//         body: JSON.stringify({
//             BookName: Book,
//             uthor: Author,
//             Version: Version,
//             university: university2,
//             department: department2,
//             college: college2,
//             Exchange: exchange,
//             Sale: price,
//             saleable: saleable2,
//             ImgBook: b64

//         })

//     })
//         .then(response => response.json())
//         .then(data => console.log(data));


// }
// =================================================================================================================================

// ============================exchange==========================================
function radioChecked1() {
  if (exchange.checked == true) {
    document.getElementById("textarea").style.display = "block";
    document.getElementById("sealableLbl").style.display = "inline-block";
    document.getElementById("saleable").style.display = "inline-block";
    document.getElementById("price").style.display = "none";
    document.getElementById("Negotiable").style.display = "none";
    document.getElementById("negoLbl").style.display = "none";
    saleable.checked = true;
    radioChecked2();
  }
else if (exchange.checked == true &&  saleable.checked == false)
{

  document.getElementById("priceSale").style.display = "none";
  document.getElementById("NegotiableSale").style.display = "none";
  document.getElementById("NegotiableLBL").style.display = "none";
  document.getElementById("saleable").style.display = "inline-block";
  document.getElementById("textarea").style.display = "block";
  document.getElementById("sealableLbl").style.display = "inline-block";
  // exchangeAPI();
}
}

// ==================saleable=========================
function radioChecked2() {
  if (saleable.checked == true) {
    document.getElementById("priceSale").style.display = "inline-block";
    document.getElementById("NegotiableSale").style.display = "inline-block";
    document.getElementById("NegotiableLBL").style.display = "inline-block";
    document.getElementById("saleable").style.display = "inline-block";

    // saleableAPI();

  }
  else {
    document.getElementById("priceSale").style.display = "none";
    document.getElementById("NegotiableSale").style.display = "none";
    document.getElementById("NegotiableLBL").style.display = "none";
    document.getElementById("saleable").style.display = "inline-block";
   
  }
}

// ==================sale====================
function radioChecked3() {
  if (sale.checked == true) {

    document.getElementById("Negotiable").style.display = "inline-block";
    document.getElementById("negoLbl").style.display = "inline-block";
    document.getElementById("price").style.display = "inline-block";
    document.getElementById("priceSale").style.display = "none";
    document.getElementById("NegotiableSale").style.display = "none";
    document.getElementById("NegotiableLBL").style.display = "none";
    document.getElementById("saleable").style.display = "none";
    document.getElementById("sealableLbl").style.display = "none";
    document.getElementById("textarea").style.display = "none";
    // saleAPI();
  }
  else {
    document.getElementById("Negotiable").style.display = "none";
    document.getElementById("negoLbl").style.display = "none";
    document.getElementById("price").style.display = "none";

  }
}

// ==================donation====================
function radioChecked4() {
  if (donation.checked == true) {
    saleable.checked = false;
    document.getElementById("textarea").style.display = "none";
    document.getElementById("price").style.display = "none";
    document.getElementById("Negotiable").style.display = "none";
    document.getElementById("negoLbl").style.display = "none";

    document.getElementById("priceSale").style.display = "none";
    document.getElementById("NegotiableSale").style.display = "none";
    document.getElementById("NegotiableLBL").style.display = "none";
    document.getElementById("saleable").style.display = "none";
    document.getElementById("sealableLbl").style.display = "none";
    // donationAPI();

  }
}
// =======================================================================================

function hide() {
  document.getElementById("saleable").style.display = "none";
  document.getElementById("sealableLbl").style.display = "none";
  document.getElementById("Negotiable").style.display = "none";
  document.getElementById("negoLbl").style.display = "none";
  document.getElementById("price").style.display = "none";
  document.getElementById("priceSale").style.display = "none";
  document.getElementById("NegotiableSale").style.display = "none";
  document.getElementById("NegotiableLBL").style.display = "none";
  document.getElementById('textarea').value = "";
  // document.getElementById("description").value = "";
}
// ====================description====================
// function description() {

// }

// function exchangeAPI()
// {

// let Book = bookName.value,
// Author = author.value,
// Version = version.value,

// university2 = university.value,
// college2 = college.value,
// department2 = department.value,

// exchange = textarea.value,
// saleable2 = saleable.value;

// const obj = new Headers();

// obj.append('Content-Type', 'application/json');
// fetch('http://localhost:3000/addbook', {

// method: 'POST',
// headers: obj,
// body: JSON.stringify({
//     BookName: Book,
//     Author: Author,
//     Version: Version,
//     university: university2,
//     department: department2,
//     college: college2,
//     Exchange: exchange,
//     saleable: saleable2,
//     ImgBook: b46

// })

// })
// .then(response => response.json())
// .then(data => console.log(data));


// }
// function saleAPI(){
//   let Book = bookName.value,
//   Author = author.value,
//   Version = version.value,
//   university2 = university.value,
//   college2 = college.value,
//   department2 = department.value,
//   price = document.getElementById("price").value;
// const obj = new Headers();
// obj.append('Content-Type', 'application/json');
// fetch('http://localhost:3000/addbook', {
//   method: 'POST',
//   headers: obj,
//   body: JSON.stringify({
//       BookName: Book,
//       Author: Author,
//       Version: Version,
//       university: university2,
//       department: department2,
//       college: college2,
//       Sale: price,
//       ImgBook: b46})})
//   .then(response => response.json()).then(data => console.log(data));}

// function saleableAPI()
// {
//   let Book = bookName.value,
//   Author = author.value,
//   Version = version.value,
//   university2 = university.value,
//   college2 = college.value,
//   department2 = department.value,
//   exchange = textarea.value,
//   saleable2 = saleable.value,
// const obj = new Headers();
// obj.append('Content-Type', 'application/json');
// fetch('http://localhost:3000/addbook', {
//   method: 'POST',
//   headers: obj,
//   body: JSON.stringify({
//       BookName: Book,
//       Author: Author,
//       Version: Version,
//       university: university2,
//       department: department2,
//       college: college2,
//       Exchange: exchange,
//       saleable: saleable2,
//       ImgBook: b46
//   })

// })
//   .then(response => response.json())
//   .then(data => console.log(data));
// }

// function donationAPI()
// {
//   let Book = bookName.value,
//   Author = author.value,
//   Version = version.value,
//   university2 = university.value,
//   college2 = college.value,
//   department2 = department.value,
// const obj = new Headers();
//  obj.append('Content-Type', 'application/json');
// fetch('http://localhost:3000/addbook', {
//   method: 'POST',
//   headers: obj,
//   body: JSON.stringify({
//       BookName: Book,
//       Author: Author,
//       Version: Version,
//       university: university2,
//       department: department2,
//       college: college2,
//       donation: "For Free",
//       ImgBook: b46
//   })
// })
//   .then(response => response.json())
//   .then(data => console.log(data));
// }
// window.onload = hide;
