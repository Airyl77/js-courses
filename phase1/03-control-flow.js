// 1. FizzBuzz — classic interview question.
// Loop from 1 to 30. Print:
// "Fizz" if divisible by 3
// "Buzz" if divisible by 5
// "FizzBuzz" if divisible by both
// The number itself otherwise

for(let i = 1; i <=30; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i)
    }
}


// 2. Write a function that takes an array of numbers
// and returns the first number greater than 10.
// Use a for...of loop with break.
function testForOf () {

const numbers = [2, 5, 8, 12, 3, 17];

    let result = undefined;
    for (const number of numbers) {
        if (number > 10) {
            result = number;
            break;
        }
    }
    return result;
}
console.log(testForOf())

// 3. Use for...in to loop over this object and
// print each key-value pair as "key: value"
const config = {
  host: "localhost",
  port: 3000,
  debug: true
};

for (const key in config) {
    console.log(`${key}: ${config[key]}`); // You could also use a template literal for slightly cleaner output:
}

// 4. Rewrite this for loop using while:
for (let i = 10; i >= 0; i -= 2) {
  console.log(i);
}

let i = 10;
while (i >= 0) {
    console.log(i);
    i -= 2;
}