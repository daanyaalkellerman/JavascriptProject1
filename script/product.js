document.querySelector('#year').innerHTML = new Date().getFullYear();

let addedToCart = [];
let main = document.querySelector('main')
let product = JSON.parse(localStorage.getItem('product')) 

function work(products){
    let open = products.map((item,index)=>{
    
        return`
        <div>
        <div class="prodCard">
            <div class="imgWrap">
                <img class="img1" src='${item.url}'>
                <button class="addtoCart">Add to Cart</button>
            </div>
            <div class="info">
                <div class="textP">${item.name}</div>
                <div class="desP">${item.description}</div>
                <div class="pP" id="price">R${item.price}</div>
            </div>
        </div>
    </div>
`
    })
    
    main.innerHTML = open.join('')
    
        
        
}
work(product)

document.getElementById('searchEm').addEventListener('input', searchEm);
document.querySelector('select').addEventListener('change', searchEm);

// if(.length===0){
//     main.innerHTML = `<div class="spinner-border text-danger" role="status">
//     <span class="sr-only">Loading...</span>
//   </div>`
// }else{
//     work(product)
// }

function searchEm(){
    let searchIt = document.getElementById('searchEm').value.toLowerCase();
    let options = document.querySelector('select').value;
    let sorted = product.filter(item => {
        return item.name.toLowerCase().includes(searchIt);
    });
    if (options === 'Low to High') {
        sorted.sort((a, b) => a.price - b.price);
    } else if (options === 'High to Low') {
        sorted.sort((a, b) => b.price - a.price);
    }
    work(sorted);
}

