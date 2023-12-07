document.querySelector('#year').innerHTML = new Date().getFullYear();
// create an empty array to store cart items
let theCart = [];

// retrieve cart items from local storage
let addedToCart = JSON.parse(localStorage.getItem('addedToCart'));

// call the local function to initialize the local storage
// local();

function local() {
    // update the local storage with the current state of theCart array
    localStorage.setItem('addedToCart', JSON.stringify(addedToCart));
    // retrieve cart items from local storage
    addedToCart = JSON.parse(localStorage.getItem('addedToCart'));
}

// select the table element
let table = document.querySelector('tbody');

// function to display cart items in the table
function cart() {
    table.innerHTML = '';
    addedToCart.map((object, index) => {
        table.innerHTML +=  `
            <tbody id="clothing" >
                <tr style="font-size:12px;">
                    <td><input style="width:40px; background-color:#150022;color:#E5A1FC; font-family: poppin;border:none " type="number">${index+1}</td>
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

// select the 'purchased' button element
let purchased = document.getElementById('purchased');

// add an event listener to the 'purchased' button
purchased.addEventListener('click', bought);

// function to handle the purchase event
function bought() {
    alert('Thank you for purchasing');
    addedToCart = [];
    // localStorage.setItem('theCart',JSON.stringify(theCart))
    local();
    cart();
}


