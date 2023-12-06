let theCart=[];
theCart.push()
let addedToCart = JSON.parse(localStorage.getItem('addedToCart'))

function local(){
    addedToCart = JSON.parse(localStorage.getItem('addedToCart'))
    localStorage.setItem('cartProd',JSON.stringify(theCart))
}
let table = document.querySelector('table')
function cart(){
    
    let products = addedToCart.map((object,index) =>{
        return `
        <tbody id="clothing" >
        <tr style="font-size:12px;">
        <td><input style="width:40px; background-color:#150022;color:#E5A1FC; font-family: poppin;border:none " type="number" value="${object.quantity}" onchange="moreQ(${index}, this.value)"></td>
            <td>${object.name}</td>
            <td>R${object.price}</td>
            <td>${object.description}</td>
            <td><img src="${object.url}" style="width:60px; height: 60px"></img></td>
            <td><button class="remove" value="${index}">Delete</button></td>
            </tr>
            </tbody>
            
            `
        })
        
}
cart()
let remove = document.querySelector('.remove')

function removeC(position){
    addedToCart.splice(position,1)
    local()
    cart()
}

table.addEventListener('click', function(event){
    if(event.target.classList.contains('remove')){
        removeC(event.target.value, cart())
    }
})



