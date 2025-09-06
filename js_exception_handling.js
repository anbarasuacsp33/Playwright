// Reference Error

//console.log(x);

//TypeError

// null.f();

//Syntax Error

//eval('if (true { alert("Hi"); }'); // Missing closing parenthesis

//Range Error

//let arr = new Array(-5); // Invalid array length


//Eval Error - Need to discuss

// Mostly legacy; not usually encountered

//throw new EvalError("Something went wrong with eval()");


//URI Error
//decodeURIComponent('%'); // Invalid URI component


//AggregateError - Need to discuss

Promise.any([
  Promise.reject(new Error("Error 1")),

  Promise.reject(new Error("Error 2"))

]).catch(e => console.log(e instanceof AggregateError)); // true





