// 1. Write a function "clamp" that takes a number, a min and a max,
// and returns the number clamped within that range.
console.log(clamp(15, 0, 10)) // → 10
console.log(clamp(-5, 0, 10)) // → 0
console.log(clamp(7, 0, 10)) //  → 7
function clamp(num, min, max) {
    if (num < min) {
        return min;
    } else if (num > max) {
        return max;
    } else {
        return num;
    } // or just Math.min(Math.max(number, min), max)
}

// 2. Write a function "pipe" that takes any number of functions
// and returns a new function that passes a value through each one:
// const transform = pipe(double, addOne, square);
// transform(3) → ((3 * 2) + 1) ** 2 = 49

// 3. Rewrite this using an arrow function with implicit return:
function multiply(a, b) {
  return a * b;
}
console.log(multiply(2, 3))
const multiple = (a, b) => a * b;
console.log(multiple(2,3));


// 4. What does this print and why?
const makeCounter = () => {
  let count = 0;
  return () => ++count;
};

const counter = makeCounter(); // This creates a new counter function that has access to the "count" variable through closure. 
// Each time you call "counter()", it increments "count" and returns the new value. 
// counter is basically () => ++count; function that has access to the "count" variable defined in the outer scope of makeCounter.
// So the output will be:
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
