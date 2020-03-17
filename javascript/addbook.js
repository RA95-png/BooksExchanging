const bookName = document.getElementById("bookName"),
author = document.getElementById('author'),
version = document.getElementById("version"),
    university = document.getElementById("unviersity"),
    college = document.getElementById("college"),
    department = document.getElementById("deparment"),
    donation = document.getElementById("donation"),
    exchange= document.getElementById("exchange"),
    textarea = document.getElementById("textarea"),
    saleable = document.getElementById("saleable"),
    NegotiableSale = document.getElementById("NegotiableSale"),
    Negotiable = document.getElementById("Negotiable"), 
    imgBook = document.getElementById("imgBook"),
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

buttonAdd.addEventListener("click", add);
function add() {
    let  Name = bookName.value,
    Author = author.value,
        Version = version.value,
        
        univ = university.value,
        coll = college.value,
        depart = department.value,

        Donation = donation.value,
        Negotiabl =Negotiable.value ,
        //how to create validator for cheekbox ?
        ImgBook = imgBook.value;
 

    e1.innerHTML = ""; e2.innerHTML = ""; e3.innerHTML = ""; e4.innerHTML = ""; e5.innerHTML = ""; e6.innerHTML = ""; e7.innerHTML = ""; e8.innerHTML = ""; 

    if (!validator.isEmpty(Name) && 
    !validator.isEmpty(Author) && 
    !validator.isEmpty(Version) && 
   
     !validator.isEmpty(univ) && 
     !validator.isEmpty(coll) &&
        !validator.isEmpty(depart) &&
         !validator.isEmpty(Donation) && 
          !validator.isEmpty(ImgBook) &&
         !validator.isEmpty(Negotiabl)) {
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
    if (validator.isEmpty(Donation)) { e7.innerHTML = "Please, Enter the information correctly . It is empty . "; }
     if (validator.isEmpty(imgBook)) { e8.innerHTML = "Please, Enter the information correctly . It is empty . "; }
    
}