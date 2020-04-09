 //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Page Add book js $$$$$$$$$$$$$$$$$$$$$$
/// ############################ Vareables ######################
  let oneBook ="" , b64 = "" ,  url = window.location.href ; 
  let idEdit= getParameterByName("idEdit",url);


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
            sale = document.getElementById("sale"),
            price1 = document.getElementById("price1"),
            price2 = document.getElementById("price2"),
            e1 = document.getElementById("error1"),
            e2 = document.getElementById("error2"),
            e3 = document.getElementById("error3"),
            e4 = document.getElementById("error4"),
            e5 = document.getElementById("error5"),
            e6 = document.getElementById("error6"),
            e7 = document.getElementById("error7"),
            inputfile = document.getElementById("fileInput"),
            imgBook = document.getElementById('imgBook'),
            buttonAdd = document.getElementById("buttonAdd"),
            buttonEdit = document.getElementById("buttonEdit");
            buttonEdit.style.display ="none";


           //####################################### token
        if(localStorage.getItem("token")==undefined){
               //   window.location="./login.html?bool=true" ; 
        }

        if(idEdit!==null){ 
          buttonAdd.style.display= "none";
          buttonEdit.style.display="inline";
            getbookEdit(idEdit);
        }
/// ############################################## add Event listener #################################

//===========================validator  add book *POST * =================
buttonAdd.addEventListener("click",()=> {
      let Name = bookName.value,
          Author = author.value,
          Version = version.value,
          univ = university.value,
          coll = college.value,
          depart = department.value;
          e1.innerHTML = "";
          e2.innerHTML = "";
          e3.innerHTML = "";
          e4.innerHTML = "";
          e5.innerHTML = "";
          e6.innerHTML = "";
          e7.innerHTML = ""; 

    if (!validator.isEmpty(Name) &&
            !validator.isEmpty(Author) && 
            !validator.isEmpty(Version) &&
            !validator.isEmpty(univ) &&
            !validator.isEmpty(coll) &&
            !validator.isEmpty(depart) &&
            (donation.checked || exchange.checked || sale.checked) )
            
            {
                if(donation.checked){ AddBookInfo(); } 
                
                else

                if(exchange.checked ){
                    if(!validator.isEmpty(textarea.value)){ 
                        if((saleable.checked)) {
                            if(!validator.isEmpty(price1.value)){AddBookInfo();}else{ e7.innerHTML = "Please, Enter the Price ... It is empty . ";} }
                        else
                            {AddBookInfo();} } 
                    else
                        { e7.innerHTML = "Please, Enter the name of the replacement book ... It is empty . ";} }
                else 

                if(sale.checked){
                
                  if(!validator.isEmpty(price2.value)){AddBookInfo(); }
                  
                  else 
                  { e7.innerHTML = "Please, Enter the Price ... It is empty . ";} }
                
              }

    else

        if (validator.isEmpty(Name)) { e1.innerHTML = "Please, Enter the Book Name  ... It is empty . "; }
        if (validator.isEmpty(Author)) { e2.innerHTML = "Please, Enter the Author Name ... It is empty  ."; }
        if (validator.isEmpty(Version)) { e3.innerHTML = "Please, Enter the Version or date ... It is empty . "; }
        if (validator.isEmpty(univ)) { e4.innerHTML = "Please, Choose a University ... It is empty ."; }
        if (validator.isEmpty(coll)) { e5.innerHTML = "Please, Choose a College ... It is empty . "; }
        if (validator.isEmpty(depart)) { e6.innerHTML = "Please, Choose a Department ... It is empty .";};
        if(!(donation.checked || exchange.checked || sale.checked)){ e7.innerHTML = "Please, click on way  book  . It is empty . "; }

});
///========================= validator   EDIT  book   *PUT*  ===============

buttonEdit.addEventListener("click" ,()=>{
              let Name = bookName.value , 
                  Author = author.value ,  
                  Version = version.value,
                  univ = university.value,
                  coll = college.value, 
                  depart = department.value;
                  e1.innerHTML = "";
                  e2.innerHTML = "";
                  e3.innerHTML = "";
                  e4.innerHTML = ""; 
                  e5.innerHTML = "";
                  e6.innerHTML = ""; 
                  e7.innerHTML = ""; 


              if (!validator.isEmpty(Name) && 
                  !validator.isEmpty(Author) && 
                  !validator.isEmpty(Version) && 
                  !validator.isEmpty(univ) &&
                  !validator.isEmpty(coll) &&
                  !validator.isEmpty(depart)&&
                  (donation.checked || exchange.checked || sale.checked) ) 
            {
                                if(donation.checked){ EditBookInfo(); }

                                  else
                                  
                                if(exchange.checked ){
                                      if(!validator.isEmpty(textarea.value)){ 
                                            if(saleable.checked) {
                                                  if(!validator.isEmpty(price1.value)){EditBookInfo();} 
                                                  else 
                                                      { e7.innerHTML = "Please, Enter the Price ... It is empty . "; } } 
                                                      
                                            else 
                                                {EditBookInfo();}  }

                                      else 
                                            { e7.innerHTML = "Please, Enter the name of the replacement book ... It is empty . ";}
                                              }
                              else if(sale.checked) {
                                          if(!validator.isEmpty(price2.value)){EditBookInfo(); } 
                                          else  
                                            { e7.innerHTML = "Please, Enter the Price ... It is empty . "; }  }
                        }
            else
                    if (validator.isEmpty(Name)) { e1.innerHTML = "Please, Enter the Book Name ... It is empty . "; }
                    if (validator.isEmpty(Author)) { e2.innerHTML = "Please, Enter the Author Name ... It is empty  ."; }
                    if (validator.isEmpty(Version)) { e3.innerHTML = "Please, Enter the Version or date ... It is empty . "; }
                    if (validator.isEmpty(univ)) { e4.innerHTML = "Please, Choose an University ... It is empty . "; }
                    if (validator.isEmpty(coll)) { e5.innerHTML = "Please, Choose a College ... It is empty . "; }
                    if (validator.isEmpty(depart)) { e6.innerHTML = "Please, Choose a Department ... It is empty . "; };
                    if(!(donation.checked || exchange.checked || sale.checked)){ e7.innerHTML = "Please, click on way  book  ... It is empty . "; }

});
// ========================== get  college  by id university ==============

university.addEventListener("change", (event)=>{
  let id = event.srcElement.value ;    console.log(id);
  let myheader = new Headers()
       myheader.append("content-type", "application/json");
  fetch('http://localhost:3000/college/'+id, {

          method: 'GET',
          headers: myheader
                }).then(response => response.json())
                .then((data) => {  console.log(data);
                    renderCollege(data);
      });
    } );
// ========================== get  department  by id college==============

college.addEventListener("change" , (event)=>{
  let id = event.srcElement.value ;  console.log(id);

  let myheader = new Headers()
  myheader.append("content-type", "application/json");

 fetch('http://localhost:3000/department/'+id, {
    method: 'GET',
    headers: myheader
        }).then(response => response.json())
        .then((data) => { console.log(data);
            renderDepartment(data);
      });
});
//============================inputfile ================
inputfile.addEventListener("change", ()=> {
  readURL(this);
});
//============================ imgBook =================
imgBook.addEventListener('click', () => {
  inputfile.click()
});
///======================= onchange img ===========
inputfile.addEventListener("change" , ()=> {
      let file = inputfile.files[0],
      img = new FileReader();
      img.onloadend = function () {
      b64 = img.result.replace(/^data:.+;base64,/, '');
  };
  img.readAsDataURL(file);  console.log(img); 
} );


///################################################ functions #################################################

/// ======================function  get id book that Edit by url ================================

function getParameterByName(name, url) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
/// =============================functin POST ======================================

function AddBookInfo() {

   let d=0 , e=0 , s=0 , a =0 , p="" , n=0  ;
  

          if(donation.checked){d=1}
          if(exchange.checked){e=1}
          if(sale.checked){s=1 ; p=price2.value ; if(Negotiable.checked){n=1}}
          if(saleable.checked){a=1 ; p=price1.value ; if(NegotiableSale.checked){n=1}}

          
        let myheader = new Headers()
        myheader.append("authorization", "Bearer:" + localStorage.getItem("token"));
        myheader.append("content-type", "application/json");
           let id = localStorage.getItem('id');

    fetch('http://localhost:3000/addbook', {

            method: 'POST',
            headers: myheader,
            body: JSON.stringify({
                BookName:bookName.value,
                Author: author.value,
                Version: version.value,
                university: university.value,
                college: college.value,
                department: department.value,
                donation:  d ,
                Exchange:  e ,
                Sale: s,
                books:textarea.value,
                saleable: a,
                price :p,
                nagotiable : n ,
                ImgBook: b64 , 
                idUser: id  })  })
        .then(response => response.json())
        .then(data =>{   console.log(data)   ; 
                 location.replace("./Mybooks.html?id=" + id);  } );
 }
/// ============================function PUT book====================================

function EditBookInfo() {
 
      let d=0 , e=0 , s=0 , a =0,p="" , n=0  ;

        if(donation.checked){d=1}
        if(exchange.checked){e=1}
        if(sale.checked){s=1 ; p=price2.value ; if(Negotiable.checked){n=1}}
        if(saleable.checked){a=1 ; p=price1.value ; if(NegotiableSale.checked){n=1}}  console.log(b64);
      

        let myheader = new Headers()
        myheader.append("authorization", "Bearer:" + localStorage.getItem("token"));
        myheader.append("content-type", "application/json");
              let id = localStorage.getItem('id');

    fetch('http://localhost:3000/addbook', {
        method: 'PUT',
        headers: myheader,
        body: JSON.stringify({
                id:idEdit,
                BookName: bookName.value,
                Author: author.value,
                Version: version.value,
                university: university.value,
                college: college.value,
                department: department.value,
                donation:  d ,
                Exchange:  e ,
                Sale: s,
                books:textarea.value,
                saleable: a,
                price :p,
                nagotiable : n ,
                ImgBook: b64,
                idUser: id 
                           })
                                           })
        .then(response => response.json())
        .then(data => {console.log(data);
           location.replace("./Mybooks.html?id="+id)
                      });
   }
// ========================== function log out =====================================
function logout(){
  localStorage.removeItem("token");
  localStorage.removeItem("id");
   window.location=".login.html";
}
// ========================== function render PUT ( for edit data )===================

function render(b){
        bookName.value =b.NameBook ;
        author.value = b.NameAuthor ;
        version.value =b.version_date;
        university.value =b.id_univer;
       imgBook.src=`http://localhost:3000${b.img}`;

       let myheader = new Headers()
           myheader.append("content-type", "application/json");

    fetch('http://localhost:3000/college/'+b.id_univer, {

          method: 'GET',
          headers: myheader
              }).then(response => response.json())
              .then((data) => { console.log(data);
              renderCollege(data);
              college.value =b.id_college;
    });

    fetch('http://localhost:3000/department/'+b.id_college, {
          method: 'GET',
          headers: myheader
              }).then(response => response.json())
              .then((data) => {  console.log(data);
              renderDepartment(data);
              department.value = b.id_department;
      });
   
        if(b.donation==1){donation.checked=true}
        if(b.exchange==1){exchange.checked=true ; textarea.value=b.name_book_exchange ; radioChecked1()}
        if(b.sale==1){sale.checked=true ;  price2.value=b.price ; if(b.nagotiable==1){Negotiable.checked=true} ; radioChecked3()}
        if(b.saleable==1){saleable.checked=true ; price1.value=b.price ; if(b.nagotiable==1){NegotiableSale.checked=true} ; radioChecked2()}
}
// ========================== function  renderCollege =====================================

function renderCollege(data) {
  let x="<option value='' disabled selected label='Select The collage that the book belongs to:'></option>";
      data.forEach(item => {
        x+="<option value="+item.id+">"+item.name+"</option>" ;
      });
       college.innerHTML = x ;
}
// ========================== function renderDepartment =====================================

function renderDepartment(data) {
  let x='<option value="" disabled selected  label="Select The Department that the book belongs to:"></option>';
      data.forEach(item => {
        x+="<option value="+item.id+">"+item.name+"</option>" ;
      });
        department.innerHTML = x ;
}

// ==============================function get book Edit by id   ===================================

function getbookEdit(id){
  let myheader = new Headers()
      myheader.append("content-type", "application/json");

  fetch('http://localhost:3000/addbook/'+id, {

      method: 'GET',
      headers: myheader
          }).then(response => response.json())
          .then((data) => {
          oneBook= data;
          console.log(data);
          render(oneBook[0]);
          });
 }
// ==============================function  readURL ===================================

function readURL(input) {
  console.log(input.files && input.files[0]);
if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
    imgBook.setAttribute('src', e.target.result);
}
reader.readAsDataURL(input.files[0]);
}
}
// ==============================function exchange ===================================

function radioChecked1() {
  if (exchange.checked == true) {
    document.getElementById("textarea").style.display = "block";
    document.getElementById("sealableLbl").style.display = "inline-block";
    document.getElementById("saleable").style.display = "inline-block";
    document.getElementById("price").style.display = "none";
    document.getElementById("Negotiable").style.display = "none";
    document.getElementById("negoLbl").style.display = "none";
    price2.value="";
    Negotiable.checked =false ;
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
  
}
}

// ============================= function saleable=========================
function radioChecked2() {
  if (saleable.checked == true) {
    document.getElementById("priceSale").style.display = "inline-block";
    document.getElementById("NegotiableSale").style.display = "inline-block";
    document.getElementById("NegotiableLBL").style.display = "inline-block";
    document.getElementById("saleable").style.display = "inline-block";

  }
  else {
    document.getElementById("priceSale").style.display = "none";
    document.getElementById("NegotiableSale").style.display = "none";
    document.getElementById("NegotiableLBL").style.display = "none";
    document.getElementById("saleable").style.display = "inline-block";
   
  }
}

// =================================function  sale====================
function radioChecked3() {
  if (sale.checked == true) {
    saleable.checked = false;
    document.getElementById("Negotiable").style.display = "inline-block";
    document.getElementById("negoLbl").style.display = "inline-block";
    document.getElementById("price").style.display = "inline-block";
    document.getElementById("priceSale").style.display = "none";
    document.getElementById("NegotiableSale").style.display = "none";
    document.getElementById("NegotiableLBL").style.display = "none";
    document.getElementById("saleable").style.display = "none";
    document.getElementById("sealableLbl").style.display = "none";
    document.getElementById("textarea").style.display = "none";
    textarea.value="";
    price1.value="";
    NegotiableSale.checked=false;
    
  }
  else {
    document.getElementById("Negotiable").style.display = "none";
    document.getElementById("negoLbl").style.display = "none";
    document.getElementById("price").style.display = "none";

  }
}

// ================================function donation====================
function radioChecked4() {
  if (donation.checked == true) {
    saleable.checked = false;
    NegotiableSale.checked=false ;
    Negotiable.checked=false ;
  
    document.getElementById("textarea").style.display = "none";
    document.getElementById("price").style.display = "none";
    document.getElementById("Negotiable").style.display = "none";
    document.getElementById("negoLbl").style.display = "none";

    document.getElementById("priceSale").style.display = "none";
    document.getElementById("NegotiableSale").style.display = "none";
    document.getElementById("NegotiableLBL").style.display = "none";
    document.getElementById("saleable").style.display = "none";
    document.getElementById("sealableLbl").style.display = "none";
        textarea.value="";
        price1.value="";
        price2.value="";
  }
}

// ============================function hide =============================
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
  document.getElementById("textarea").style.display = "none";

}
window.onload = hide;
// =======================================================================================
// ###########################################console log ########################################

console.log(localStorage.getItem("token"));
console.log( idEdit);

// console.log(donation.checked);
// console.log(exchange.checked);
// console.log(textarea.value);
// console.log(saleable.checked);
// console.log(NegotiableSale.checked);
// console.log(Negotiable.checked);
// console.log(price1.value);
// console.log(price2.value);
// console.log(sale.checked);

// console.log(donation.checked);
// console.log(exchange.checked);
// console.log(textarea.value);
// console.log(saleable.checked);
// console.log(NegotiableSale.checked);
// console.log(Negotiable.checked);
// console.log(price1.value);
// console.log(price2.value);