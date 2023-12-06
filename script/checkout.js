let theCart=[];

let addedToCart = JSON.parse(localStorage.getItem('addedToCart'))
local()


function local(){
    addedToCart = JSON.parse(localStorage.getItem('addedToCart'))
    localStorage.setItem('cartProd',JSON.stringify(theCart))
}


let table = document.querySelector('[data-table]')
function cart(){
     addedToCart.map((object,index) =>{
        table.innerHTML +=  `
        <tbody id="clothing" >
        <tr style="font-size:12px;">
            <td><input style="width:40px; background-color:#150022;color:#E5A1FC; font-family: poppin;border:none " type="number" value="${object.quantity}" onchange="moreQ(${index}, this.value)"></td>
            <td>${object.name}</td>
            <td>R${object.price}</td>
            <td>${object.description}</td>
            <td><img src="${object.url}" style="width:60px; height: 60px;"/></td>
        </tr>
    </tbody>
    `
        })
}
cart()


let purchased = document.getElementById('purchased')

purchased.addEventListener('click', bought)
function bought(){
    alert('Thank you for purchasing')
}
