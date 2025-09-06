const sentence = "A man, a plan, a canal: Panama";
const reversed = sentence.split('').reverse().join('');
console.log(reversed);


// function isPalindrome(sentence) {
//   // Remove all non-alphanumeric characters and convert to lowercase
//   const cleaned = sentence.replace(/[^a-z0-9]/gi, '').toLowerCase();

//   // Reverse the cleaned string
//   const reversed = cleaned.split('').reverse().join('');

//   // Check if the cleaned sentence equals the reversed version
//   return cleaned === reversed;
// }

// // Example usage
// const input = "A man, a plan, a canal: Panama";
// console.log(`Is palindrome? ${isPalindrome(input)}`);  // true
