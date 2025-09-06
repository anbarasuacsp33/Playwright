try {

  // Code that may throw an error

  let result = 10 / 0;

  console.log("Result is:", result);

  // This will throw an error because 'x' is not defined
 console.log(x);

} catch (error) {


  // This block runs if an error occurs in the try block
  console.error("An error occurred:", error.message);


} finally {

  // This block always runs, error or not
  console.log("Execution finished.");


}
