const search = document.getElementById("buttonSearch") , 
      InputSearch = document.getElementById("InputSearch") 
      ;

      search.addEventListener("click" , funSearch);
      function funSearch (){
          console.log("hello word");
          console.log(InputSearch.value);
      }


      // function open(trg){
      //     console.log("hello");
      //   console.log(trg);
      //   let id=trg.parentElement.getAttribute("idbook");
      //   console.log(id);
      //   window.location = "../books.html?id="+id;
      // }