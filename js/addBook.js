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

//======================================Sale, Exchange and donation textFields===============================================
let donation = document.getElementById("donation");
let sale = document.getElementById("sale");
let exchange = document.getElementById("exchange");
let saleable = document.getElementById("saleable");
<<<<<<< HEAD
let priceSale = document.getElementById("priceSale");
let NegotiableSale = document.getElementById("NegotiableSale");
let NegotiableLBL = document.getElementById("NegotiableLBL");
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

}

// ==================saleable=========================
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
function description() {

}
=======

// ============================exchange==========================================
function radioChecked1(){
  if(exchange.checked== true)
  {
  document.getElementById("textarea").style.display = "block";
  document.getElementById("price").style.display= "none";

  document.getElementById("negoLbl").style.display = "none" ;
  document.getElementById("Negotiable").style.display = "none" ;

    document.getElementById("sealableLbl").style.visibility= "visible" ;
  document.getElementById("saleable").style.visibility= "visible";
  
  
  }
  else 
  {
    radioChecked3();
    
  }
}

// ==================saleable=========================
function radioChecked2(){
  if(saleable.checked== true)
  {
  document.getElementById("price").style.display = "block";

  document.getElementById("Negotiable").style.display = "block" ;
  document.getElementById("negoLbl").style.display = "block" ;
  document.getElementById("sale").style.visibility= "hidden" ;
  }
  else
  {
    document.getElementById("textarea").style.display = "block";
  document.getElementById("price").style.display= "none";
  document.getElementById("Negotiable").style.display = "block" ;
  document.getElementById("negoLbl").style.display = "block" ;
  }
}

// ==================sale====================
function radioChecked3(){
  if(sale.checked== true)
  {
  document.getElementById("price").style.display = "block";
  document.getElementById("textarea").style.display = "none" ;

  document.getElementById("Negotiable").style.display = "block" ;
  document.getElementById("negoLbl").style.display = "block" ;
document.getElementById("saleable").style.visibility= "hidden";
	document.getElementById("sealableLbl").style.visibility= "hidden" ;
  }
  else
  {
    document.getElementById("price").style.display= "none";
    document.getElementById("negoLbl").style.display = "none" ;
    document.getElementById("Negotiable").style.display = "none" ;
  
    
  }
}

// ==================donation====================
function radioChecked4(){
  if(donation.checked== true){
    document.getElementById("price").style.display= "none";
    document.getElementById("textarea").style.display = "none" ;
	document.getElementById("Negotiable").style.display = "none" ;

	document.getElementById("negoLbl").style.display = "none" ;
	document.getElementById("saleable").style.visibility= "hidden";
	document.getElementById("sealableLbl").style.visibility= "hidden" ;
    //document.getElementById("Negotiable").disabled = true;
   // document.getElementById("saleable").disabled = true;
  }
}
// =======================================================================================
>>>>>>> fcd8f9815aea6a949b512772c1a8d6576a65c756

function hide()
{  document.getElementById("saleable").style.visibility= "hidden";
	document.getElementById("sealableLbl").style.visibility= "hidden" ;
}
window.onload = hide;

window.onload = hide;
























// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }

//   function myFunction2() {
//     document.getElementById("myDropdown2").classList.toggle("show");
//   }

//   function filterFunction() {
//     var input, filter, ul, li, a, i;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     div = document.getElementById("myDropdown");
//     a = div.getElementsByTagName("a");
//     for (i = 0; i < a.length; i++) {
//       txtValue = a[i].textContent || a[i].innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         a[i].style.display = "";
//       } else {
//         a[i].style.display = "none";
//       }
//     }
//   }

//   function filterFunction2() {
//     var input, filter, ul, li, a, i;
//     input = document.getElementById("myInput2");
//     filter = input.value.toUpperCase();
//     div = document.getElementById("myDropdown2");
//     a = div.getElementsByTagName("a");
//     for (i = 0; i < a.length; i++) {
//       txtValue = a[i].textContent || a[i].innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         a[i].style.display = "";
//       } else {
//         div.style.display = "none";
//         a[i].style.display = "none";


//       }

//     }
//   }