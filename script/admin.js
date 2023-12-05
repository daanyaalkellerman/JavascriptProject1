
// the creation of the array
let product = [];

// constructor function to add products
function AddProd(id,name,description,price,url){
    this.id = id,
    this.name = name,
    this.description = description,
    this.price = price,
    this.url = url
}

let prod1 = new AddProd(1,'Wrench Mask','Digital display of emotions in a mask form',666,'https://i.postimg.cc/sDFFpdKY/712v95-Jh-WPL-AC-UY780.jpg')
let prod2 = new AddProd(2,'Dedsec Cosplay Slingbag','Slingbag from the original Dedsec warehouse',800,'https://i.postimg.cc/rsqLCD3B/DEDSEC-BAG.jpg')
let prod3 = new AddProd(3,'Dedsec Backpack','Custom bag for you!!',950,'https://i.postimg.cc/MpHqFjHx/dedsecbag.jpg')
let prod4 = new AddProd(4,'Dedsec Art Hoodie','If you want to be more show off your creative side',500,'https://i.postimg.cc/zGx3LrbD/dedsechoodie1.jpg')
let prod5 = new AddProd(5,'Dedsec Grey Hoodie','Plain but comfortable',200,'https://i.postimg.cc/268qcSsZ/dedsechoodie2.jpg')

// push products in array
product.push(prod1,prod2,prod3,prod4,prod5);

console.log([...product])
// adding products to local storage
function local(){
    localStorage.setItem('product',JSON.stringify(product));
    product = JSON.parse(localStorage.getItem('product'));
}
// calling the element table
let table = document.querySelector('table');

// function to display table on html
function deLaMap(){
    let clothing = product.map(function(object,index){
        return `
        <tbody id="clothing" >
        <tr style="font-size:12px;">
            <td >${object.id}</td>
            <td>${object.name}</td>
            <td>R${object.price}</td>
            <td>${object.description}</td>
            <td><img src="${object.url}" style="width:60px; height: 60px"></img></td>
            <td><button class="edit">Edit</button></td>
            <td><button class="remove" value="${index}">Delete</button></td>
        </tr>
        </tbody>
        `  
    })
    table.innerHTML = clothing.join('')
}
deLaMap()


// Find the input
// Add onchange function to the input
// Get data from localStorage (everything from this point on happens in the function)
// Filter the array by comparing what's in the input using the .includes array method and set it everytime there's a change back into localStorage so that the changes can take effect
