const user = {
  name: "Alice",
  age: 30,
  isAdmin: true
};

console.log(user.name);      // "Alice"
console.log(user["age"]);    // 30

// | Operation           | Syntax / Example                           |
// | ------------------- | ------------------------------------------ |
// | Access property     | `user.name` or `user['name']`              |
// | Add property        | `user.email = "a@example.com"`             |
// | Delete property     | `delete user.age`                          |
// | Loop through object | `for (let key in user) { ... }`            |
// | Object keys/values  | `Object.keys(user)`, `Object.values(user)` |
