// 1. Predict the output, then run it to check:
function outer() {
  let x = 10;
  function inner() {
    console.log(x);
    x++;
  }
  inner();
  inner();
  console.log(x);
}
outer();

// 2. Write a function "createCounter" that returns an object with
// three methods: increment(), decrement(), and getValue().
// The count should start at 0 and be private (not accessible directly).
function createCounter() {
    let count = 0;
    return {
        increment() {count ++; return count;},
        decrement() {count --; return count;},
        getValue() {return count}
    }
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getValue()); // 2
counter.decrement();
console.log(counter.getValue()); // 1

// 3. Write a function "once(fn)" that returns a new function which
// only allows fn to be called ONE time — subsequent calls do nothing
// (or return the first result, cached).
function sayHi() { console.log("hi!"); return "hi"; }
const sayHiOnce = once(sayHi);
sayHiOnce(); // logs "hi!", returns "hi"
sayHiOnce(); // does NOT log again, still returns "hi" (cached)
sayHiOnce(); // same

// 4. Fix this classic bug using a closure-based solution
// (don't just swap var for let — write it using an IIFE,
// to understand the pre-ES6 way this was solved):
for (var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 100);
}
// Should print 1, 2, 3 — using an IIFE wrapper, not `let`

// 5. Write a function "createMultiplierSet" that returns an array
// of 3 functions: [double, triple, quadruple] — built dynamically
// in a loop using factors [2, 3, 4], each correctly closing over
// its own factor.
const [double, triple, quadruple] = createMultiplierSet();
console.log(double(5));    // 10
console.log(triple(5));    // 15
console.log(quadruple(5)); // 20