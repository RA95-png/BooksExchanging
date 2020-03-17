<<<<<<< HEAD
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByClassName("FirstLi");
    console.log(li);
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

  function myFunction1() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
=======
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
<<<<<<< HEAD
    li = ul.getElementsByClassName("FirstLi");
    console.log(li);
=======
    li = ul.getElementsByTagName("li");
<<<<<<< HEAD
    console.log(li);
=======
>>>>>>> 2a6063bbd24656c3a136cb060aef24ecbc1f9325
>>>>>>> 1d52d8e4ba2d81e75a15a2f5a5f8dd5678321f1a
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
>>>>>>> fcd8f9815aea6a949b512772c1a8d6576a65c756
