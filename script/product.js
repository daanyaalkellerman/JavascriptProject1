
document.querySelector('#year').innerHTML = new Date().getFullYear();

let addedToCart = [];
let product = JSON.parse(localStorage.getItem('product'))
let main = document.querySelector('main')
function leMap(){
    let dedsec = product.map(function(object,index){
       return`
       <div class="prodCard">
           <div class="imgWrap">
               <img class="img1" src='${object.url}'/>
               <button value= '${index} class="addtoCart">Add to Cart</button>
           </div>
           <div class="info">
           <div class="textP">${object.name}</div>
           <div class="desP">${object.description}</div>
           <div class="pP">R${pobject.price}</div>
           
           </div>
       </div>
       `
   })
   main.innerHTML = dedsec.join('')

}
leMap()

