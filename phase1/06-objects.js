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
console.log(Object.entries(users[0]).map((a) => `${a[0]} = ${a[1]}`));

// 3. Using Object.fromEntries, build a lookup object from the users array
//    where each key is the user's id and the value is their name.
//    Expected: { 1: "Eugeniu", 2: "Alex", 3: "Maria", 4: "Ion" }

// 4. Write a function updateUser(user, changes) that returns a new
//    user object with the changes applied — without mutating the original.
//    updateUser(users[0], { age: 31, active: false })
//    → { id: 1, name: "Eugeniu", age: 31, role: "admin", active: false }

// 5. Write a function pick(obj, keys) that returns a new object
//    with only the specified keys.
//    pick(users[0], ["name", "role"]) → { name: "Eugeniu", role: "admin" }

// 6. Write a function omit(obj, keys) that returns a new object
//    with the specified keys removed.
//    omit(users[0], ["id", "active"]) → { name: "Eugeniu", age: 30, role: "admin" }

// 7. Group the users array into an object by role using reduce.
//    Expected: { admin: [...], user: [...] }

// 8. Write a function deepEqual(a, b) that checks if two objects
//    have the same keys and values (one level deep only).
//    deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 }) → true
//    deepEqual({ a: 1 }, { a: 2 })              → false