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

// 4. Write a function "truncate" that shortens a string to a max
// length and adds "..." if it was cut off.
// truncate("Hello World", 5)  → "Hello..."
// truncate("Hi", 5)           → "Hi" (no truncation needed)

// 5. Write a function "countVowels" that counts how many vowels
// are in a string (a, e, i, o, u — case insensitive).
// countVowels("Hello World") → 3

// 6. Write a function "slugify" that converts a string into a
// URL-friendly slug: lowercase, spaces replaced with hyphens,
// special characters removed.
// slugify("Hello, World! It's JS Time") → "hello-world-its-js-time"

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