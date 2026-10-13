// SHOP
// CLEANING SUPPLIES


const Stuff = [
    // Detergents
    { name: "Eco Friendly", price: 28.99, category: "Detergents" },
    { name: "Liquid Detergent", price: 10.99, category: "Detergents" },
    { name: "Detergent Pods", price: 10.99, category: "Detergents" },
    { name: "Free And Clear", price: 18.99, category: "Detergents" },


    // Original placeholder replacements
    { name: "Heavy-Duty Degreaser", price: 4.99, category: "Degreasers" },
    { name: "Bathroom Cleaner", price: 3.49, category: "Bathroom Cleaners" },
    { name: "Sanitizing Spray", price: 4.99, category: "Sanitizers" },


    // 20 additional products
    { name: "All-Purpose Cleaner", price: 3.49, category: "Surface Cleaners" },
    { name: "Glass Cleaner", price: 2.49, category: "Glass Cleaners" },
    { name: "Disinfecting Wipes", price: 3.19, category: "Sanitizers" },
    { name: "Disinfectant Spray", price: 4.99, category: "Sanitizers" },
    { name: "Bleach", price: 3.99, category: "Bleach" },
    { name: "Toilet Bowl Cleaner", price: 2.49, category: "Bathroom Cleaners" },
    { name: "Floor Cleaner", price: 4.99, category: "Floor Cleaners" },
    { name: "Dish Soap", price: 2.99, category: "Dishwashing" },
    { name: "Powder Cleanser", price: 0.99, category: "Scouring Cleaners" },
    { name: "Cream Cleanser", price: 2.99, category: "Scouring Cleaners" },
    { name: "Mop", price: 10.99, category: "Cleaning Tools" },
    { name: "Broom", price: 4.99, category: "Cleaning Tools" },
    { name: "Dustpan", price: 2.99, category: "Cleaning Tools" },
    { name: "Scrub Brush", price: 3.49, category: "Cleaning Tools" },
    { name: "Sponges (4-Pack)", price: 2.99, category: "Cleaning Tools" },
    { name: "Microfiber Cloths (3-Pack)", price: 4.99, category: "Cleaning Tools" },
    { name: "Rubber Gloves", price: 2.99, category: "Cleaning Tools" },
    { name: "Paper Towels", price: 4.49, category: "Paper Products" },
    { name: "Trash Bags", price: 6.99, category: "Waste Disposal" },
    { name: "Carpet Spot Cleaner", price: 4.99, category: "Carpet Cleaners" }
];






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





console.log(filter(Stuff,"Bathroom Cleaners"));







