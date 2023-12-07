// display the current year on the page
document.querySelector('#year').innerHTML = new Date().getFullYear();

//empty array to store products
let theCart = [];

// get cart items from local storage
let addedToCart = JSON.parse(localStorage.getItem('addedToCart'));

//updates the local storage with the new state of the array
function local() {
    localStorage.setItem('addedToCart', JSON.stringify(addedToCart));
    // retrieve cart items from local storage
    addedToCart = JSON.parse(localStorage.getItem('addedToCart'));
}
//calls the tbody element
let table = document.querySelector('tbody');

// display cart items in the table
function cart() {
    // clear the table content
    table.innerHTML = '';
    // search through cart items and display in the table
    addedToCart.map((object, index) => {
        table.innerHTML +=  `
            <tbody id="clothing" >
                <tr style="font-size:12px;">
                    <td><input style="width:40px; background-color:#150022;color:#E5A1FC; font-family: poppin;border:none " type="number" value="${object.quantity}" id="quantity-${index+1}"></td>
                    <td>${object.name}</td>
                    <td>R${object.price}</td>
                    <td>${object.description}</td>
                    <td><img src="${object.url}" style="width:60px; height: 60px;"/></td>
                </tr>
            </tbody>
        `;
    });
}

// call the cart function to display cart items in the table
cart();

// calling the id of the button
let purchased = document.getElementById('purchased');

purchased.addEventListener('click', bought);

// function to empty the array and to display alert
function bought() {
    try {
        alert('Thank you for purchasing');
        // clear the array
        addedToCart = [];
        // update local storage
        local();
        // update the displayed cart
        cart();
    } catch {
        alert('Error')
    }
}

//calling the spinner
let spinspin = document.querySelector('.spinspin')

// display spinner if the cart is empty, otherwise display the cart
if(addedToCart.length===0){
    spinspin.innerHTML = `<div class="d-flex align-items-center" style="color:#E5A1FC">
        <strong role="status"></strong>
        <div class="spinner-border ms-auto" aria-hidden="true"></div>
    </div>`;
} else {
    cart(addedToCart);
}

