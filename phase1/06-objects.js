const users = [
  { id: 1, name: "Eugeniu", age: 30, role: "admin", active: true },
  { id: 2, name: "Alex",    age: 25, role: "user",  active: false },
  { id: 3, name: "Maria",   age: 28, role: "user",  active: true },
  { id: 4, name: "Ion",     age: 35, role: "admin", active: false },
];

// 1. Destructure the first user's name and role.
//    Also grab a "country" property with default value "Moldova".
const { name, role, country = "Moldova" } = users[0];
console.log(name, role, country);

// 2. Use Object.entries + map to transform the first user
//    into an array of "key = value" strings.
//    Expected: ["id = 1", "name = Eugeniu", "age = 30", ...]
console.log(Object.entries(users[0]).map(([key, value]) => `${key} = ${value}`));

// 3. Using Object.fromEntries, build a lookup object from the users array
//    where each key is the user's id and the value is their name.
//    Expected: { 1: "Eugeniu", 2: "Alex", 3: "Maria", 4: "Ion" }
console.log(Object.fromEntries(users.map((user) => [user.id, user.name])));

// 4. Write a function updateUser(user, changes) that returns a new
//    user object with the changes applied — without mutating the original.
//    updateUser(users[0], { age: 31, active: false })
//    → { id: 1, name: "Eugeniu", age: 31, role: "admin", active: false }
const updateUser = (user, changes) => ({ ...user, ...changes });
console.log(updateUser(users[0], { age: 31, active: false }));

// 5. Write a function pick(obj, keys) that returns a new object
//    with only the specified keys.
//    pick(users[0], ["name", "role"]) → { name: "Eugeniu", role: "admin" }
function pick(obj, keys) {
  // Keep only entries whose key is included in the provided list.
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => keys.includes(key)),
  );
}
console.log(pick(users[0], ["name", "role"]));


// 6. Write a function omit(obj, keys) that returns a new object
//    with the specified keys removed.
//    omit(users[0], ["id", "active"]) → { name: "Eugeniu", age: 30, role: "admin" }
function omit(obj, keys) {
  // Keep only entries whose key is not included in the provided list.
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => keys.includes(key)),
  );
}
console.log(omit(users[0], ["id", "active"]));

// 7. Group the users array into an object by role using reduce.
//    Expected: { admin: [...], user: [...] }
const groupUsers = users.reduce((acc, item) => {
  const key = item.role;
  if (!acc[key]) {
    acc[key] = []; // create an array for this key if it doesn't exist
  }
  acc[key].push(item); // add the product to the appropriate array
  return acc;
},{});
console.log(groupUsers);

// 8. Write a function deepEqual(a, b) that checks if two objects
//    have the same keys and values (one level deep only).
//    deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 }) → true
//    deepEqual({ a: 1 }, { a: 2 })              → false
function deepEqual(a, b) {

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false; // ← catches extra keys

  for (const item of keysA) {
    if (a[item] !== b[item]) {
      return false;
    }
  }
  return true;
}
console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 }));
console.log(deepEqual({ a: 1, b: 1 }, { a: 1, b: 2 }));

const users2 = [
  { id: 1, name: "Eugeniu", age: 30, role: "admin", active: true, salary: 5000 },
  { id: 2, name: "Alex",    age: 25, role: "user",  active: false, salary: 3200 },
  { id: 3, name: "Maria",   age: 28, role: "user",  active: true, salary: 3800 },
  { id: 4, name: "Ion",     age: 35, role: "admin", active: false, salary: 5500 },
];

// 9. Write a function mapValues(obj, fn) that applies a function
// to every value in an object, keeping the keys the same.
// mapValues({ a: 1, b: 2, c: 3 }, n => n * 10) → { a: 10, b: 20, c: 30 }

// 10. Write a function invert(obj) that swaps keys and values.
// invert({ a: "x", b: "y" }) → { x: "a", y: "b" }

// 11. Write a function deepClone(obj) that creates a full deep copy —
// nested objects and arrays should NOT share references with the original.
// (Don't use structuredClone or JSON.parse/stringify — do it manually
// with recursion, so you understand what those built-ins do for you.)
const original = { name: "Eugeniu", address: { city: "Chișinău" }, tags: ["dev", "js"] };
const clone = deepClone(original);
clone.address.city = "Balti";
console.log(original.address.city); // should still be "Chișinău"

// 12. Write a function deepEqual(a, b) that works recursively —
// unlike the earlier version, this one must handle nested objects.
// deepEqual({ a: { b: 1 } }, { a: { b: 1 } }) → true
// deepEqual({ a: { b: 1 } }, { a: { b: 2 } }) → false
// Hint: if a value is itself an object, call deepEqual on it recursively.

// 13. Write a function groupBy(array, keyFn) — a generic version of the
// role-grouping you did earlier, but reusable for any key.
// groupBy(users, user => user.active) → { true: [...], false: [...] }
// groupBy(users, user => user.age >= 30 ? "senior" : "junior") → { senior: [...], junior: [...] }

// 14. Write a function sortByKey(array, key) that returns a new array
// of objects sorted by a given property name, without mutating the original.
// sortByKey(users, "salary") → users sorted by salary ascending

// 15. Using reduce, calculate summary statistics from the users array
// in a single pass — total salary, average age, and count of active users.
// Expected shape: { totalSalary: 17500, avgAge: 29.5, activeCount: 2 }