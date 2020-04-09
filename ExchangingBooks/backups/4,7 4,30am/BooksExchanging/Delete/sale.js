const my = new Headers();
my.append('Content-Type', 'application/json');

fetch('http://localhost:3000/sale',{
    method:'GET', 
    headers : my }) .then( res => res.json())  .then((data) => { 
        console.log(data) ; 
        RenderingSale(data); 
    });

function RenderingSale(data)
{
 let html="";
data.forEach(element => {
    html+=` <tr>
    <td class="cart-pic first-row"> <a href="product.html"> <img ssrc="http://localhost:3000'${element.img}alt=""></a>
    <td class="cart-title first-row">
        <a href="product.html"> <h5 style="text-align: center;">${element.NameBook}</h5></a>
    </td>
    <td class="p-price first-row">${element.price}</td>

    <td class="cart-title first-row">
        <a href="product.html"> <h5 style="text-align: center;">${element.college}</h5></a>
    </td>
    <a href="product.html"> <td class="total-price first-row" colspan="2">${element.Name_user}</td></a>
    
</tr>`;
});
document.getElementById("tbody").innerHTML= html;
}