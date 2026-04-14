const fna = "Eugeniu";
console.log("Hello,", fna);
let year = 2026;
console.log("The year is", year);

let user = { name: "Eugeniu" };
console.log(user.name); 
let copy = user;
copy.name = "Alex";
console.log(user.name); // "Alex" — same object in memory!

console.log("5" * "3");
console.log("3" + "4");
console.log(null == undefined);
console.log(null === undefined);
