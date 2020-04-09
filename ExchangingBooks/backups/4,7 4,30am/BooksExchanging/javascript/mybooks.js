let myHeader = new Headers()
myHeader.append("authorization", "Bearer:" + localStorage.getItem("token"));
myHeader.append("content-type", "application/json");

function Logout(){
  localStorage.removeItem("token")
  localStorage.removeItem("id")

    window.location="./login.html"
}
console.log(localStorage.getItem("token"));
if(localStorage.getItem("token")==undefined){
 // window.location="./login.html"

}


const
    mybook = document.getElementById("mybooks"),
    name = document.getElementById("name"),
    email = document.getElementById("email"),
    mobile = document.getElementById("mobile"),
    socm = document.getElementById("socm"),
    logout = document.getElementById("logout");
    logout.addEventListener("click",Logout);

let Information = [];
let Books = [];

let id = localStorage.getItem('id');

fetch('http://localhost:3000/myBooks/' + id, {
    meathod: 'GET',
    headers: myHeader
}).then(response => response.json()).then(data => {
    console.log(data);
    Books = data;
    RenderingBooks(Books);

});

function RenderingBooks(Books) {
    let html = '';
    name.innerHTML = Books[0].Name_user;
    email.innerHTML = Books[0].email_user;
    mobile.innerHTML = Books[0].mobile;
    socm.innerHTML = Books[0].social_media;


    Books.forEach(item => {
        html += ` <div class="col-lg-6 col-sm-6"  ><div class="blog-item">
        <div class="bi-pic">
            <img src='http://localhost:3000${item.img}' alt="" onload="resizeImg(this, 200, 100);">
        </div>
        <div class="bi-text">
            <h4>${item.NameBook}</h4>
            <a href="./addBook.html?id=${item.id_user}&idEdit=${item.id}">
                <h5 style="color:#e7ab3c;">Edit Book Information</h5>
            </a>
            <b id="${item.id}" style="cursor: pointer;" onclick="DeleteBooks(this.id)">Delete</b>
        </div></div>
    </div>`
    });
    mybooks.innerHTML = html;
}

function resizeImg(img, height, width) {
    img.height = height;
    img.width = width;
}


function DeleteBooks(id) {

    console.log(id);

    fetch('http://localhost:3000/myBooks/', {
        method: 'DELETE',
        headers: myHeader,
        body: JSON.stringify({
            id: id
        })
    })
        .then(res => {
            console.log(res);
            if (res.status === 200) {

                console.log(res.status);
                Books.forEach((obj, index) => {

                    if (obj.id == id) {

                        Books.splice(index, 1);
                    }
                });
                console.log(Books);
                Books.innerHTML = "";
                RenderingBooks(Books);

            }

        });
}

