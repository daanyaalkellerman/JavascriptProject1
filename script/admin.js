document.querySelector('#year').innerHTML = new Date().getFullYear();
// create an empty array to store products
let product = [];

// create a constructor function to add products
function AddProd(id, name, description, price, url) {
    this.id = id,
    this.name = name,
    this.description = description,
    this.price = price,
    this.url = url
}

// create instances of the AddProd constructor to represent products
let prod1 = new AddProd(1, 'Wrench Mask', 'Digital display of emotions in a mask form', 666, 'https://i.postimg.cc/sDFFpdKY/712v95-Jh-WPL-AC-UY780.jpg')
let prod2 = new AddProd(2, 'Dedsec Cosplay Slingbag', 'Slingbag from the original Dedsec warehouse', 800, 'https://i.postimg.cc/rsqLCD3B/DEDSEC-BAG.jpg')
let prod3 = new AddProd(3, 'Dedsec Backpack', 'Custom bag for you!!', 950, 'https://i.postimg.cc/MpHqFjHx/dedsecbag.jpg')
let prod4 = new AddProd(4, 'Dedsec Art Hoodie', 'If you want to show off your creative side', 500, 'https://i.postimg.cc/zGx3LrbD/dedsechoodie1.jpg')
let prod5 = new AddProd(5, 'Dedsec Grey Hoodie', 'Plain but comfortable', 200, 'https://i.postimg.cc/268qcSsZ/dedsechoodie2.jpg')

// push products into the array
product.push(prod1, prod2, prod3, prod4, prod5);

// function to add products to local storage
function local() {
    localStorage.setItem('product', JSON.stringify(product));
    product = JSON.parse(localStorage.getItem('product'));
}

// select the table body element
let tbody = document.querySelector('tbody');

// function to display the table on HTML


function deLaMap() {
  try{let clothing = product.map(function (object, index) {
    return `
    <div class="modal fade" id="exampleModal1"${object.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
                      <div class="modal-content">
                      <div class="modal-header" style="background-color:#E5A1FC">
                              <h1 class="modal-title fs-5 text-center" id="exampleModalLabel" style="font-family: Hacked; color:black">Edit Clothing</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body text-center " style="font-family: poppin; background-color: #150022; color:#E5A1FC">
                              <label for="">Name <br>
                                  <input type="text" id="name1" required>
                              </label>
                              <br>
                              <label for="">Description <br>
                                  <input type="text" id="description1" required>
                                  </label>
                              <br>
                              <label for="">Price <br>
                                  <input type="number" id="price1" required>
                                  </label>
                              <br>
                              <label for="">Image <br>
                              <input type="text" id="image1" required>
                              </label>
                              <br>
                              </div>
                          <div class="modal-footer" style="background-color:#E5A1FC">
                              <button type="button" class="btn edit" data-bs-dismiss="modal">Close</button>
                              <button type="button" class="btn edit">Save changes</button>
                          </div>
                      </div>
                  </div>
              </div>
              <tbody id="clothing" >
              <tr style="font-size:10px;">
                      <td>${object.id}</td>
                      <td>${object.name}</td>
                      <td><img src="${object.url}" style="width:60px; height: 60px"></img></td>
                      <td>R${object.price}</td>
                      <td>${object.description}</td>
                      <td><button class="btn edit" data-bs-toggle="modal" data-bs-target="#exampleModal1"${object.id}>Edit</button></td>
                      <td><button class="remove" value="${index}" style="font-size:10px">Delete</button></td>
                      </tr>
                      </tbody>
                      `;
                    });
      tbody.innerHTML = clothing.join('');
    }catch{
      alert('Not working')
    }
  }
  
  // load products from local storage and display the table
  local();
  deLaMap();
  
  // function to remove an item from the array
  function removeItem(index) {
    product.splice(index, 1)
    local();
    deLaMap();
}

// select the remove button
let removeProd = document.querySelector('.remove');

// add event listener to the table body
tbody.addEventListener('click', function (event) {
    // check if the clicked element has the class 'remove'
    if (event.target.classList.contains('remove')) {
        // call the removeItem function with the value attribute as the position
        removeItem(event.target.value)
    }
})


let addIndex = document.getElementById('id')
let addName = document.getElementById('name')
let addDescription = document.getElementById('description')
let addPrice = document.getElementById('price')
  let addImage = document.getElementById('image')
  
  
  function saveAdded() {
  try{
    let addedProd = {
        index: document.getElementById('id').value,
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        price: document.getElementById('price').value,
        image: document.getElementById('image').value,
    }
    product.push(addedProd)
    localStorage.setItem('product', JSON.stringify(product));
  }catch{
    alert('Not working')
  }
}

let addBtn = document.getElementById('addBtn')
addBtn.addEventListener('click', saveAdded)

let saveChanges = document.getElementById('save').addEventListener('click', function () {
    deLaMap()
})



