// display the current year on the page
document.querySelector('#year').innerHTML = new Date().getFullYear();

//empty array to store products
let addedToCart = typeof localStorage.getItem('addedToCart')== 'string'? JSON.parse(localStorage.getItem('addedToCart'))  :[];

// call the main and spinner elements
let main = document.querySelector('main');
let spinspin = document.querySelector('.spinspin');

// get products from local storage
let product = JSON.parse(localStorage.getItem('product'));

// function to display product cards
function work(products) {
    let open = products.map((item, index) => {
        return `
            <div>
                <div class="prodCard">
                    <div class="imgWrap">
                        <img class="img1" src='${item.url}'>
                        <button class="addtoCart" value='${index}' data-addToC>Add to Cart</button>
                    </div>
                    <div class="info">
                        <div style="color:#E5A1FC">${index + 1}</div>
                        <div class="textP">${item.name}</div>
                        <div class="desP" style="font-size:10px">${item.description}</div>
                        <div class="pP" id="price">R${item.price}</div>
                    </div>
                </div>
            </div>
        `;
    });
    main.innerHTML = open.join('');
}

// call the work function to display product cards
work(product);

// adding eventListeners
document.getElementById('searchEm').addEventListener('input', searchEm);
document.querySelector('select').addEventListener('change', searchEm);

// function to search and sort 
function searchEm() {
    try {
        // get search input and sort option values
        let searchIt = document.getElementById('searchEm').value.toLowerCase();
        let options = document.querySelector('select').value;

        // filter products based on search input
        let sorted = product.filter(item => {
            return item.name.toLowerCase().includes(searchIt);
        });

        // sort the filtered products based on the selected option
        if (options === 'Low to High') {
            sorted.sort((a, b) => a.price - b.price);
        } else if (options === 'High to Low') {
            sorted.sort((a, b) => b.price - a.price);
        }

        // display the sorted and filtered products
        work(sorted);
    } catch {
        alert('Error');
    }
}

//calling the button that adds to cart 
main.addEventListener('click', function () {
    if (event.target.hasAttribute('data-addToC')) {
        addToCart(event.target.value);
    }
});

// function to add products to the cart
function addToCart(index) {
    try{
        if(addedToCart.some(item=> item === product[index])){
            throw new Error('Product was added already, change quantity in checkout')
        }        
        addedToCart.push(product[index]);
        localStorage.setItem('addedToCart', JSON.stringify(addedToCart));
    }
    catch(e){
        alert('error.message')
    }
}

// display spinner if product data is not available, otherwise display the product cards
if (product.length === 0) {
    spinspin.innerHTML = `<div class="d-flex align-items-center" style="color:#E5A1FC">
        <strong role="status"></strong>
        <div class="spinner-border ms-auto" aria-hidden="true"></div>
    </div>`;
} else {
    work(product);
}