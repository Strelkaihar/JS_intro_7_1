const appleStore = [
    {
        productName: "iPhone 14 Pro",
        quantity: 50,
        price: 1099.99,
    },
    {
        productName: "MacBook Pro 16-inch",
        quantity: 30,
        price: 2399.99,
    },
    {
        productName: "iPad Air",
        quantity: 75,
        price: 599.99,
    },
    {
        productName: "Apple Watch Series 7",
        quantity: 100,
        price: 399.99,
    },
    {
        productName: "AirPods Pro",
        quantity: 200,
        price: 249.99,
    }
];
// Find the most expensive product   -> MacBook Pro 16-inch
// Find the least expensive product   -> AirPods Pro
// Find the product with the biggest quantity   -> AirPods Pro
// Find the product with the smallest quantity  -> MacBook Pro 16-inch
// Find all the product names   -> [ 'iPhone 14 Pro', 'MacBook Pro 16-inch', 'iPad Air', 'Apple Watch Series 7', 'AirPods Pro' ]
let most_expensive = {
    productName: null,
    price: 0,
    quantity: 0
};
let least_expensive = {
    productName: null,
    price: appleStore[0].price,
    quantity: 0
};
let biggest_quantity = {
    productName: null,
    price: 0,
    quantity: 0
};
let smallest_quantity = {
    productName: null,
    price: 0,
    quantity: appleStore[0].quantity
};
const products = [];

for(const product of appleStore){
    if(product.price > most_expensive.price) most_expensive = product;
    if(product.price < least_expensive.price) least_expensive = product;
    if(product.quantity > biggest_quantity.quantity) biggest_quantity = product;
    if(product.quantity < smallest_quantity.quantity) smallest_quantity = product;
    products.push(product.productName);
}

console.log(most_expensive.productName);
console.log(least_expensive.productName);
console.log(biggest_quantity.productName);
console.log(smallest_quantity.productName);
console.log(products);