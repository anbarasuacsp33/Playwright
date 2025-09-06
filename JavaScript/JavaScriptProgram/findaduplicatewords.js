function findDuplicateWords(sentence) {
  
  // Remove punctuation and convert to lowercase
  const cleaned = sentence.replace(/[^\w\s]/g, '').toLowerCase();

  // Split the sentence into words
  const words = cleaned.split(/\s+/);

  const wordCounts = {};

  // Count each word using a for...in loop
  for (let i in words) {
    const word = words[i];
    if (wordCounts[word]) {
      wordCounts[word]++;
    } else {
      wordCounts[word] = 1;
    }
  }

  // Print only duplicates
  console.log("Duplicate words:");
  for (let word in wordCounts) {
    if (wordCounts[word] > 1) {
      console.log(`${word}: ${wordCounts[word]} times`);
    }
  }
}

// Example usage
const input = "This is a test. This test is only a test.";
findDuplicateWords(input);
