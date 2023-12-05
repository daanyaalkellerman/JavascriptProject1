document.querySelector('#year').innerHTML = new Date().getFullYear();

let addedToCart = [];
let main = document.querySelector('main')
let product = JSON.parse(localStorage.getItem('product'))

function work(){



    let open = product.map(function(){
    
        return`
      
        <div class="container sear">
        <input checked="" class="checkbox" type="checkbox"> 
        <div class="mainbox">
            <div class="iconContainer">
                <svg viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg" class="search_icon"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
            </div>
         <input class="search_input" placeholder="search" type="text">
        </div>
    </div>
    
    
    <section class="layout">
      <div>
        <div class="prodCard">
          <div class="imgWrap">
            <img class="img1" src='https://i.postimg.cc/sDFFpdKY/712v95-Jh-WPL-AC-UY780.jpg'>
            <button class="addtoCart">Add to Cart</button>
          </div>
        <div class="info">
        <div class="textP">Wrench Mask</div>
        <div class="desP">Digital display of emotions in a mask form</div>
        <div class="pP">R666</div>
      </div>
      </div>
      </div>
      <div>
        <div class="prodCard">
          <div class="imgWrap">
            <img class="img1" src='https://i.postimg.cc/rsqLCD3B/DEDSEC-BAG.jpg'>
            <button class="addtoCart">Add to Cart</button>
          </div>
        <div class="info">
        <div class="textP">Dedsec Cosplay Slingbag</div>
        <div class="desP">Slingbag from the original Dedsec warehouse</div>
        <div class="pP">R800</div>
      </div>
      </div>
      </div>
      <div>
        <div class="prodCard">
          <div class="imgWrap">
            <img class="img1" src='https://i.postimg.cc/MpHqFjHx/dedsecbag.jpg'>
            <button class="addtoCart">Add to Cart</button>
          </div>
        <div class="info">
        <div class="textP">Dedsec Backpack</div>
        <div class="desP">Custom bag for you!!</div>
        <div class="pP">R950</div>
      </div>
      </div>
      </div>
      <div>
        <div class="prodCard">
          <div class="imgWrap">
            <img class="img1" src='https://i.postimg.cc/zGx3LrbD/dedsechoodie1.jpg'>
            <button class="addtoCart">Add to Cart</button>
          </div>
        <div class="info">
        <div class="textP">Dedsec Art Hoodie</div>
        <div class="desP">Show off your creative side</div>
        <div class="pP">R500</div>
      </div>
      </div>
      </div>
      <div>
        <div class="prodCard">
          <div class="imgWrap">
            <img class="img1" src='https://i.postimg.cc/268qcSsZ/dedsechoodie2.jpg'>
            <button class="addtoCart">Add to Cart</button>
          </div>
        <div class="info">
        <div class="textP">Dedsec Grey Hoodie</div>
        <div class="desP">Plain but comfortable</div>
        <div class="pP">R200</div>
      </div>
      </div>
      </div>
    </section>
        `
    })
    
    main.innerHTML = open.join('')
    
        
        
}
