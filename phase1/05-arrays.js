const orders = [
  { id: 1, product: "laptop", price: 999, shipped: true },
  { id: 2, product: "phone", price: 599, shipped: false },
  { id: 3, product: "tablet", price: 399, shipped: true },
  { id: 4, product: "monitor", price: 299, shipped: false },
  { id: 5, product: "keyboard", price: 79, shipped: true },
  { id: 6, product: "mouse", price: 49, shipped: false },
];

// 1. Get an array of just the product names.
const names = orders.map(prod => prod.product); //object => object property
console.log(names);

// 2. Get all orders that have been shipped.
const shipped = orders.filter(prod => prod.shipped === true);
console.log(shipped);

// 3. Calculate the total price of all orders.
const totalPrice = orders.reduce((total, prod) => total + prod.price, 0);
console.log(totalPrice);

// 4. Get the total price of shipped orders only.
//    (hint: you can chain filter + reduce, or use reduce alone)
const totalShippedPrice = orders.filter(prod => prod.shipped === true).reduce((total, prod) => total + prod.price, 0);
console.log(totalShippedPrice);

// 5. Find the most expensive order object.
let maxCost = 0;
let obj = {};
for (const item of orders) {
    if (item.price > maxCost) {
        //Object.assign(obj, item); // This creates a shallow copy of item and assigns its properties to obj, so obj will 
                                    // have the same properties as item but will be a different object in memory.
        obj = item; // This works because objects are assigned by reference, so obj will point to the same object as item.
        maxCost = item.price;
    } 
}
console.log(obj)

// 6. Check if any order is over $900.
const isOver900 = orders.some(prod => prod.price > 900);
console.log(isOver900);

// 7. Check if all orders under $100 have been shipped.
const isShipped = orders.filter(prod => prod.price < 100).every(prod => prod.shipped === true );
console.log(isShipped);

// 8. Sort orders by price, lowest to highest (don't mutate the original).
//    Hint: spread into a new array first, then sort.

// 9. Group orders by shipped status using reduce.
// Result should look like:
// { true: [...shipped orders], false: [...unshipped orders] }

// 10. Return a new array of orders with a discount applied —
// 10% off all items over $400. Don't mutate the originals.
// Hint: map + spread to create new objects.

// 11. Get the products sorted alphabetically, without mutating
// the original orders array.

// 12. Flatten this nested structure into a single array of product names:
const catalog = [
  { category: "computers", products: ["laptop", "desktop", "tablet"] },
  { category: "phones", products: ["phone", "smartwatch"] },
  { category: "accessories", products: ["keyboard", "mouse", "monitor"] },
];
// Expected: ["laptop", "desktop", "tablet", "phone", "smartwatch", "keyboard", "mouse", "monitor"]
// Hint: flatMap

// 13. Remove duplicate values from this array without using Set:
const tags = ["js", "node", "js", "react", "node", "ts", "react", "js"];
// Expected: ["js", "node", "react", "ts"]
// Hint: filter + indexOf

// 14. Chunk an array into groups of a given size using reduce.
// chunk([1, 2, 3, 4, 5, 6, 7], 3) → [[1, 2, 3], [4, 5, 6], [7]]
// chunk([1, 2, 3, 4], 2)          → [[1, 2], [3, 4]]
function chunk(arr, size) {
  // your code here
}

// 15. Implement your own version of Array.prototype.map
// using a for...of loop. Don't use .map() inside it.
function myMap(arr, fn) {
  // your code here
}
console.log(myMap([1, 2, 3], n => n * 2)); // [2, 4, 6]

// 16. Zip two arrays together into an array of pairs.
// zip([1, 2, 3], ["a", "b", "c"]) → [[1, "a"], [2, "b"], [3, "c"]]
// If arrays are different lengths, stop at the shorter one.
function zip(a, b) {
  // your code here
}