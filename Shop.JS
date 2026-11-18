// SHOP
// CLEANING SUPPLIES


// TODO:
// 1. Images
// 2. Rewrite functions to consider globaltotal

const Stuff = [
    // Detergents
    { name: "Eco Friendly", price: 28.99, category: "Laundry & Detergents", image: "imgs/Eco Friendly.png"},
    { name: "Liquid Detergent", price: 10.99, category: "Laundry & Detergents", image: "imgs/Liquid Detergent.png" },
    { name: "Detergent Pods", price: 10.99, category: "Laundry & Detergents", image: "imgs/Detergent Pods.png" },
    { name: "Free And Clear", price: 18.99, category: "Laundry & Detergents", image: "imgs/Free And Clear.png" },


    // Orphans
    { name: "Heavy-Duty Degreaser", price: 4.99, category: "Surface Cleaners", image: "imgs/Heavy-Duty Degreaser.png" },
    { name: "Bathroom Cleaner", price: 3.49, category: "Surface Cleaners", image: "imgs/Bathroom Cleaner.png" },
    { name: "Sanitizing Spray", price: 4.99, category: "Disinfectants & Sanitizers", image: "imgs/Sanitizing Spray.png" },


    // more cleaners
    { name: "All-Purpose Cleaner", price: 3.49, category: "Surface Cleaners", image: "imgs/All-Purpose Cleaner.png" },
    { name: "Glass Cleaner", price: 2.49, category: "Surface Cleaners", image: "imgs/Glass Cleaner.png" },
    { name: "Disinfecting Wipes", price: 3.19, category: "Disinfectants & Sanitizers", image: "imgs/Disinfecting Wipes.png" },
    { name: "Disinfectant Spray", price: 4.99, category: "Disinfectants & Sanitizers", image: "imgs/Disinfectant Spray.png" },
    { name: "Bleach", price: 3.99, category: "Disinfectants & Sanitizers", image: "imgs/Bleach.png" },
    { name: "Toilet Bowl Cleaner", price: 2.49, category: "Surface Cleaners", image: "imgs/Toliet Bowl Cleaner.png" },
    { name: "Floor Cleaner", price: 4.99, category: "Surface Cleaners", image: "imgs/Floor Cleaner.png" },
    { name: "Dish Soap", price: 2.99, category: "Household Essentials", image: "imgs/Dish Soap.png" },
    { name: "Powder Cleanser", price: 0.99, category: "Surface Cleaners", image: "imgs/Powder Cleanser.png" },
    { name: "Cream Cleanser", price: 2.99, category: "Surface Cleaners", image: "imgs/Cream Cleanser.png" },
    { name: "Mop", price: 10.99, category: "Cleaning Tools", image: "imgs/Mop.png" },
    { name: "Broom", price: 4.99, category: "Cleaning Tools", image: "imgs/Broom.png" },
    { name: "Dustpan", price: 2.99, category: "Cleaning Tools", image: "imgs/Dustpan.png" },
    { name: "Scrub Brush", price: 3.49, category: "Cleaning Tools", image: "imgs/Scrub Brush.png" },
    { name: "Sponges (4-Pack)", price: 2.99, category: "Cleaning Tools", image: "imgs/Sponges (4pack).png" },
    { name: "Microfiber Cloths (3-Pack)", price: 4.99, category: "Cleaning Tools", image: "imgs/Microfiber Cloths (3-Pack).png" },
    { name: "Rubber Gloves", price: 2.99, category: "Cleaning Tools", image: "imgs/Rubber Gloves.png" },
    { name: "Paper Towels", price: 4.49, category: "Household Essentials", image: "imgs/Paper Towels.png" },
    { name: "Trash Bags", price: 6.99, category: "Household Essentials", image: "imgs/Trash Bags.png" },
    { name: "Carpet Spot Cleaner", price: 4.99, category: "Surface Cleaners", image: "imgs/Carpet Spot Cleaner.png" }
];



// functions below

function filter(array, category) {
    let relevant = [];


    for (const items of array) {
        if (items.category === category) {
            relevant.push(items); // was orginally items.name, we need items
        }
    }


    if (relevant.length === 0) {
        return "Not found";
    }


    return relevant;
}












let cart = [];
let globaltotal = 0;




function AddCart(cart, ...items) {
    let totalprice = 0;
    const selected = [];


    for (const item of items) {
        const target = Stuff.find((i) => i.name === item);


        if (!target) {
            return "Invalid Selection. Try Again.";
        }


        selected.push(target);
        totalprice += target.price;
    }


    for (const item of selected) {
        cart.push(item.name);
    }
    globaltotal += totalprice; // global total added by the stuff in the cart


    return cart.join(", ") + " Total: $" + globaltotal;
}



// const target = Stuff.find((i) => i.name === items[i]);
    // const cost = target.price;
    // if (target){
    //     cart.push(target.name);
    //     totalprice += cost;
    // }
    // else{
    // return "Not Found"
    // }


function removecart(cart, ...items) {
    let totalprice = 0;


    for (const item of items) {
        const index = cart.indexOf(item); // Searches for the element. I didn't use the 2nd part to specify a start
        if (index === -1) {
            return "Invalid Selection. Try Again.";
        }
        const target = Stuff.find((i) => i.name === item); // item search via name matching
        totalprice += target.price;
        cart.splice(index, 1); // I used mdn. Splice accepts three parameters, and they tell you at what index value should be deleted/replaceed
    }
    globaltotal -= totalprice; // global total added by the stuff in the cart



    return cart.join(", ") + " Total: $" + globaltotal;
}




function PrintTotal(placeholder){
    return `Cart Total : ${globaltotal}`
}






// probable future replacement to account for quanities of the items passed
function Addcart(cart,...items){
    // TODO: Use .Splice() to replace certain values, and indexof() to check
}


function inject(items){
    const Box = document.querySelector(".card-container");
      Box.innerHTML = ""; // Clear The Entire Container Before Injecting New Items
     items.forEach((item) => { 
        Box.insertAdjacentHTML(
            "beforeend",
            `<div class = "card">
            <h2 class = "Name">${item.name}</h2>
            <p class= "Category">${item.category}</p>
            <img class = "Image" src = "${item.image}" alt = "${item.name} image">
            <p class = "Price"> $${item.price}</p>
            <button class = "Addtocartbutton" data-name = "${item.name}">Add to Cart</button>
            </div>`

        );
    }
    )};
//  <h2 class = "name">${item.name}</h2>


inject(Stuff); // DO NOT DELETE IT IS ATLAS HOLDING UP THE SITE

function filterByCategory(items){
    const buttons = document.querySelectorAll(".filter-button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const filteredItems = items.filter((item) => item.category === button.dataset.category);
                if (button.dataset.category === "All"){
                    inject(items);
                }
            else{inject(filteredItems);}
            console.log(button.dataset.category);
        });
    });
}

filterByCategory(Stuff); // The planet in question




function checkoutPopulate(cart) {
    const cartcontainer = document.querySelector(".cart-container");
    cartcontainer.innerHTML = "";
    
cart.forEach((item) => {
    const target = Stuff.find((i) => i.name === item);
    cartcontainer.insertAdjacentHTML(
        "beforeend",
        `<div class="cart-item">
            <h2 class="Name">${target.name}</h2>
            <p class="Price">$${target.price}</p>
            <p class="Category">${target.category}</p>
            <button class="remove-button" data-name="${target.name}">Remove</button>
        </div>`
    );
});

const TotalLabel = document.querySelector(".cart-total");
TotalLabel.textContent = `Total: $${globaltotal.toFixed(2)}`;
}


const ProductContainer = document.querySelector(".card-container");
ProductContainer.addEventListener("click", (event) => {
  if (event.target.matches(".Addtocartbutton")) { // .matches just matches against the class/element
    AddCart(cart, event.target.dataset.name);
    checkoutPopulate(cart);
  }
});

const checkoutcontainer = document.querySelector(".cart-container");
checkoutcontainer.addEventListener("click", (event) => {
  if (event.target.matches(".remove-button")) { 
    removecart(cart, event.target.dataset.name);
    checkoutPopulate(cart);
  }
});


function checkout (cart){
// Checkout
}