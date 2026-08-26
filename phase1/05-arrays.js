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
const shipped = orders.filter(prod => prod.shipped); // instead of prod.shipped === true
console.log(shipped);

// 3. Calculate the total price of all orders.
const totalPrice = orders.reduce((total, prod) => total + prod.price, 0);
console.log(totalPrice);

// 4. Get the total price of shipped orders only.
//    (hint: you can chain filter + reduce, or use reduce alone)
const totalShippedPrice = orders.filter(prod => prod.shipped).reduce((total, prod) => total + prod.price, 0); // instead of prod.shipped === true
console.log(totalShippedPrice);

// 5. Find the most expensive order object.
// let maxCost = 0;
// let obj = {};
// for (const item of orders) {
//     if (item.price > maxCost) {
//         //Object.assign(obj, item); // This creates a shallow copy of item and assigns its properties to obj, so obj will 
//                                     // have the same properties as item but will be a different object in memory.
//         obj = item; // This works because objects are assigned by reference, so obj will point to the same object as item.
//         maxCost = item.price;
//     } 
// }
// can be implemented via reduce
const mostExpensive = orders.reduce((max, order) =>
  order.price > max.price ? order : max
, orders[0]);
console.log(mostExpensive)

// 6. Check if any order is over $900.
const isOver900 = orders.some(prod => prod.price > 900);
console.log(isOver900);

// 7. Check if all orders under $100 have been shipped.
const isShipped = orders.filter(prod => prod.price < 100).every(prod => prod.shipped); // instead of prod.shipped === true
console.log(isShipped);

// 8. Sort orders by price, lowest to highest (don't mutate the original).
//    Hint: spread into a new array first, then sort.
// [...orders] creates a shallow copy, so sort() rearranges the copy instead of
// changing the original orders array. The comparison function receives two
// order objects, a and b, and returns a.price - b.price: a negative result
// places a before b, a positive result places b before a, and zero treats them
// as equal. Because the prices are compared numerically, the result is ordered
// from the lowest price to the highest price.
const sortedByPrice = [...orders].sort((a, b) => a.price - b.price);
console.log(sortedByPrice);

// 9. Group orders by shipped status using reduce.
// Result should look like:
// { true: [...shipped orders], false: [...unshipped orders] }
const groupedByShipped = orders.reduce((acc, prod) => {
  const key = prod.shipped; // true or false
  if (!acc[key]) {
    acc[key] = []; // create an array for this key if it doesn't exist
  }
  acc[key].push(prod); // add the product to the appropriate array
  return acc;
}, {});
console.log(groupedByShipped);

// 10. Return a new array of orders with a discount applied —
// 10% off all items over $400. Don't mutate the originals.
// Hint: map + spread to create new objects.
const getDiscount = [...orders].map((order) => {
  if (order.price > 400) {
    //For orders whose price is greater than $400, { ...order, price: order.price * 0.9 } creates a new object. 
    // It copies the original properties and replaces price with a value representing a 10% discount. Orders priced 
    // at $400 or less are returned unchanged.
    order = { ...order, price: order.price * 0.9 };
  }
  return order;
});
console.log(getDiscount);

// 11. Get the products sorted alphabetically, without mutating
// the original orders array.
const sortedByName = [...orders].sort((a, b) => a.product.localeCompare(b.product));
console.log(sortedByName);

// 12. Flatten this nested structure into a single array of product names:
const catalog = [
  { category: "computers", products: ["laptop", "desktop", "tablet"] },
  { category: "phones", products: ["phone", "smartwatch"] },
  { category: "accessories", products: ["keyboard", "mouse", "monitor"] },
];
// Expected: ["laptop", "desktop", "tablet", "phone", "smartwatch", "keyboard", "mouse", "monitor"]
// Hint: flatMap
const flatten = catalog.flatMap(s => s.products);
console.log(flatten);

// 13. Remove duplicate values from this array without using Set:
const tags = ["js", "node", "js", "react", "node", "ts", "react", "js"];
// Expected: ["js", "node", "react", "ts"]
// Hint: filter + indexOf
// The filter() method checks every element. For each tag, tags.indexOf(tag) returns the index of its first occurrence. 
// The current element’s index is kept only when it matches that first-occurrence index. Duplicate values appear at later 
// indexes, so they are excluded.
const uniqueTags = tags.filter((tag, index) => tags.indexOf(tag) === index);
console.log(uniqueTags);

// 14. Chunk an array into groups of a given size using reduce.
// chunk([1, 2, 3, 4, 5, 6, 7], 3) → [[1, 2, 3], [4, 5, 6], [7]]
// chunk([1, 2, 3, 4], 2)          → [[1, 2], [3, 4]]
function chunk(arr, size) {
  // your code here
}

// 15. Implement your own version of Array.prototype.map
// using a for...of loop. Don't use .map() inside it.
function myMap(arr, fn) {
  const result = [];
  for (const item of arr) {
    result.push(fn(item));
  }
  return result;
}
console.log(myMap([1, 2, 3], n => n * 2)); // [2, 4, 6]

// 16. Zip two arrays together into an array of pairs.
// zip([1, 2, 3], ["a", "b", "c"]) → [[1, "a"], [2, "b"], [3, "c"]]
// If arrays are different lengths, stop at the shorter one.
function zip(a, b) {
  const result = []
  for(let i = 0; i < Math.min(a.length, b.length); i++) {
    result.push([a[i], b[i]])
  }
  return result
}
console.log(zip([1, 2, 3, 4], ["a", "b", "c"]))