// SHOP
// CLEANING SUPPLIES


// TODO:
// 1. Images
// 2. Rewrite functions to consider globaltotal

const Stuff = [
    // Detergents
    { name: "Eco Friendly", price: 28.99, category: "Detergents", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRf84t2ssxs7fO9r9juBajl8hWlL6ZCJaOXiwWHMY1329nZjDmUA2-200iy-H0cwAdVWFdsPNLsJMoMKcyMv3J3wfCRBeihhw"},
    { name: "Liquid Detergent", price: 10.99, category: "Detergents", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT0CIsiThUWPzrWnh6zy53oRV6j4K-W3LWikf9oFW_EID5ZiSanpbHQup-n4zriJDqpgLnss0pn4vD4i_Cmwtr4j1psu1aZktlCSiuIJxZvPQldpgNCO6C3pw" },
    { name: "Detergent Pods", price: 10.99, category: "Detergents", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ66DAt-itTcpnOA2rAyyVz9muMm8XimTIf6rjhl2XhEQ7WTmZaiY5WZ_riOoRgeqf_FCFVDyRE_fRiAxdczc_sGJizOYxD" },
    { name: "Free And Clear", price: 18.99, category: "Detergents", image: "" },


    // Orphans
    { name: "Heavy-Duty Degreaser", price: 4.99, category: "Degreasers", image: "" },
    { name: "Bathroom Cleaner", price: 3.49, category: "Bathroom Cleaners", image: "" },
    { name: "Sanitizing Spray", price: 4.99, category: "Sanitizers", image: "" },


    // more cleaners
    { name: "All-Purpose Cleaner", price: 3.49, category: "Surface Cleaners", image: "" },
    { name: "Glass Cleaner", price: 2.49, category: "Glass Cleaners", image: "" },
    { name: "Disinfecting Wipes", price: 3.19, category: "Sanitizers", image: "" },
    { name: "Disinfectant Spray", price: 4.99, category: "Sanitizers", image: "" },
    { name: "Bleach", price: 3.99, category: "Bleach", image: "" },
    { name: "Toilet Bowl Cleaner", price: 2.49, category: "Bathroom Cleaners", image: "" },
    { name: "Floor Cleaner", price: 4.99, category: "Floor Cleaners", image: "" },
    { name: "Dish Soap", price: 2.99, category: "Dishwashing", image: "" },
    { name: "Powder Cleanser", price: 0.99, category: "Scouring Cleaners", image: "" },
    { name: "Cream Cleanser", price: 2.99, category: "Scouring Cleaners", image: "" },
    { name: "Mop", price: 10.99, category: "Cleaning Tools", image: "" },
    { name: "Broom", price: 4.99, category: "Cleaning Tools", image: "" },
    { name: "Dustpan", price: 2.99, category: "Cleaning Tools", image: "" },
    { name: "Scrub Brush", price: 3.49, category: "Cleaning Tools", image: "" },
    { name: "Sponges (4-Pack)", price: 2.99, category: "Cleaning Tools", image: "" },
    { name: "Microfiber Cloths (3-Pack)", price: 4.99, category: "Cleaning Tools", image: "" },
    { name: "Rubber Gloves", price: 2.99, category: "Cleaning Tools", image: "" },
    { name: "Paper Towels", price: 4.49, category: "Paper Products", image: "" },
    { name: "Trash Bags", price: 6.99, category: "Waste Disposal", image: "" },
    { name: "Carpet Spot Cleaner", price: 4.99, category: "Carpet Cleaners", image: "" }
];



// functions below

function filter(array, category) {
    let relevant = [];


    for (const items of array) {
        if (items.category === category) {
            relevant.push(items.name);
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


    return cart.join(", ") + " Total: $" + totalprice;
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



    return cart.join(", ") + " Total: $" + totalprice;
}




function PrintTotal(placeholder){
    return `Cart Total : ${globaltotal}`
}



console.log(filter(Stuff, "Bathroom Cleaners"));


console.log(AddCart(cart, "Broom", "Carpet Spot Cleaner"));


console.log(removecart(cart, "Broom"));

console.log(PrintTotal());



// probable future replacement to account for quanities of the items passed
function Addcart(cart,...items){
    // TODO: Use .Splice() to replace certain values, and indexof() to check
}

const header = document.querySelector(".name")



// Stuff that hooks into CSS//

function inject(indexplace){
    const name = document.querySelector("#name");
    const category = document.querySelector("#category");
    const price = document.querySelector("#price");
    const img = document.querySelector("#img");
    const product = Stuff[indexplace];

    name.textContent = product.name;
    category.textContent = product.category;
    price.textContent= `${$product.price}`;
    img.src = product.image;

}



