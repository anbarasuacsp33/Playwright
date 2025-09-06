const fruits = ["apple", "banana", "cherry", "apple"];

console.log(fruits[2]);     // "apple"
console.log(fruits.length); // 3
console.log(fruits.push("mango"));
console.log(fruits);


// | Method       | Purpose                              | Example                                          |
// | ------------ | ------------------------------------ | ------------------------------------------------ |
// | `push()`     | Add to end                           | `fruits.push("orange")`                          |
// | `pop()`      | Remove from end                      | `fruits.pop()`                                   |
// | `shift()`    | Remove from start                    | `fruits.shift()`                                 |
// | `unshift()`  | Add to start                         | `fruits.unshift("mango")`                        |
// | `forEach()`  | Loop over elements                   | `fruits.forEach(fruit => console.log(fruit))`    |
// | `map()`      | Create new array with transformation | `const upper = fruits.map(f => f.toUpperCase())` |
// | `filter()`   | Filter array by condition            | `const short = fruits.filter(f => f.length < 6)` |
// | `includes()` | Check if item exists                 | `fruits.includes("apple")`                       |
