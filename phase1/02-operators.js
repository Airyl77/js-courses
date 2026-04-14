// 1. What does this print? Predict before running.
console.log(10 % 3);
console.log(2 ** 8);
console.log("5" == 5);
console.log("5" === 5);

// 2. What does short-circuit return here?
console.log(0 || "fallback"); // 0 is falsy, so it returns "fallback"
console.log(0 ?? "fallback"); // 0 is not null or undefined, so it returns 0
console.log("" || "fallback"); // "" is falsy, so it returns "fallback"
console.log("" ?? "fallback"); // "" is not null or undefined, so it returns ""

let isLoggedIn = false;
// 3. Rewrite this without a ternary:
const msg = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(msg);
isLoggedIn = true;
// Then rewrite the if/else back as a ternary — practice both directions.

if (isLoggedIn) {
  const msg = "Welcome back!";
  console.log(msg);
} else {
  const msg = "Please log in";
  console.log(msg);
}
console.log(msg);

// 4. Fix this so it doesn't crash:
const data = null;
console.log(data?.user?.name);