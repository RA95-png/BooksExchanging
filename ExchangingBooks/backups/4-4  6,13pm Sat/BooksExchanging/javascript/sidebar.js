
  function openNav() {
    var x= document.getElementById("mySidepanel");


     
      if (x.style.width === "200px") {
        x.style.width = "0";
      } else {
        x.style.width = "200px";
      }
  
  }

  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var x= document.getElementById("mySidepanel");

  if (document.body.scrollTop > 2 || document.documentElement.scrollTop > 2) {
    x.style.width = "0";
  } 
}
  
