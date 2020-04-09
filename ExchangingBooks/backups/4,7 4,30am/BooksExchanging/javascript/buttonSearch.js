
const search = document.getElementById("buttonSearch") , 
      InputSearch = document.getElementById("InputSearch") ;
      search.addEventListener("click" ,  ()=>{
           
      window.location = "./books.html?array="+ InputSearch.value;

      });