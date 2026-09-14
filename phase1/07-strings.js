// 1. Write a function "reverseString" that reverses a string.
// reverseString("hello") → "olleh"
const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString("hello"));

// 2. Write a function "isPalindrome" that checks if a string
// reads the same forwards and backwards (ignore case and spaces).
// isPalindrome("racecar")        → true
// isPalindrome("A man a plan a canal Panama") → true
// isPalindrome("hello")          → false
function isPalindrome(str) {
  const trimmedString = str.toLowerCase().replaceAll(" ","");
  return trimmedString === (reverseString(trimmedString));
}
console.log(isPalindrome("racecar")); //       → true
console.log(isPalindrome("A man a plan a canal Panama")); //→ true
console.log(isPalindrome("hello"));

// 3. Write a function "capitalize" that capitalizes the first
// letter of each word in a string.
// capitalize("hello world") → "Hello World"
function capitalize(str) {
  // split the string into words, capitalize the first letter of each word, and join them back together with spaces
  return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "); 
}
console.log(capitalize("hello world"));


// 4. Write a function "truncate" that shortens a string to a max
// length and adds "..." if it was cut off.
// truncate("Hello World", 5)  → "Hello..."
// truncate("Hi", 5)           → "Hi" (no truncation needed)
function truncate(str, length) {
  if (str.length <= length) {
    return str;
  } else {
    return str.slice(0, length) + "...";
  }
} 
console.log(truncate("Hello World", 5));
console.log(truncate("Hi", 5));

// 5. Write a function "countVowels" t>hat counts how many vowels
// are in a string (a, e, i, o, u — case insensitive).
// countVowels("Hello World") → 3
function countVowels(str) {
  //This line uses JavaScript’s match() method on a string variable named str. It searches the string for any characters that match 
  // the pattern inside the regex: /[aeiou]/gi.

  //The pattern [aeiou] means “match any single character that is one of these vowels: a, e, i, o, or u.” The g flag tells 
  // JavaScript to find all matches in the whole string, not just the first one. The i flag makes the match case-insensitive, so it
  //  will also match uppercase vowels like A, E, I, O, and U.
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
console.log(countVowels("Hello World")); // → 3


// 6. Write a function "slugify" that converts a string into a
// URL-friendly slug: lowercase, spaces replaced with hyphens,
// special characters removed.
// slugify("Hello, World! It's JS Time") → "hello-world-its-js-time"
const slugify = (str) => str.toLowerCase().replaceAll(" ", "-").replace(/[^a-z0-9//-]/g, "");
console.log(slugify("Hello, World! It's JS Time"));


// 7. Using a template literal, build a multi-line receipt from this data:
const receipt = {
  customer: "Eugeniu",
  items: [
    { name: "Laptop", price: 999 },
    { name: "Mouse", price: 49 },
  ],
};
// Expected output (multi-line string):
// Receipt for Eugeniu
// - Laptop: $999
// - Mouse: $49
// Total: $1048

// 8. Write a function "wordCount" that returns how many words
// are in a string, handling multiple/extra spaces correctly.
// wordCount("  Hello   world  ") → 2
// Hint: split on whitespace, then filter out empty strings