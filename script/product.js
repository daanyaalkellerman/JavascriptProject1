document.querySelector('#year').innerHTML = new Date().getFullYear();

let addedToCart = [];
let main = document.querySelector('main')
let spinspin = document.querySelector('.spinspin')
let product = JSON.parse(localStorage.getItem('product')) 

function work(products){
    let open = products.map((item,index)=>{
    
        return`
        <div>
        <div class="prodCard">
            <div class="imgWrap">
                <img class="img1" src='${item.url}'>
                <button class="addtoCart" value='${index}' data-addToC>Add to Cart</button>
            </div>
            <div class="info">
                <div style="color:#E5A1FC">${1}</div>
                <div class="textP">${item.name}</div>
                <div class="desP" style="font-size:10px">${item.description}</div>
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

if(product.length===0){
    spinspin.innerHTML = `<div class="d-flex align-items-center" style="color:Red">
    <strong role="status"></strong>
    <div class="spinner-border ms-auto" aria-hidden="true"></div>
  </div>`
}else{
    work(product)
}

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
main.addEventListener('click', function(){
    if(event.target.hasAttribute('data-addToC')){
        addToCart(event.target. value)
    }
})
function addToCart(index){
    addedToCart.push(product[index])
    localStorage.setItem('addedToCart', JSON.stringify(addedToCart))
}

