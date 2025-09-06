function generateFibonacci(n) {
  const fib = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      fib.push(0);
    } else if (i === 1) {
      fib.push(1);
    } else {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
  }

  return b;
}

// Example usage:
const numTerms = 10;
const series = generateFibonacci(numTerms);
console.log(`Fibonacci series with ${numTerms} terms:`);
console.log(series.join(', '));
