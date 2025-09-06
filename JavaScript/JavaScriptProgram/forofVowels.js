function countEachVowel(str) {

  const counts = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  
  for (let char of str.toLowerCase()) {

    if (counts.hasOwnProperty(char)) {

      counts[char]++;
    }

  }

  return counts;
  
}

// Example usage:
const input = "Education is powerful";

const vowelCounts = countEachVowel(input);
console.log(vowelCounts);
