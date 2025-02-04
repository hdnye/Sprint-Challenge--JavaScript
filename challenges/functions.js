// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/

function consume(a, b, callback) {
  return callback(a, b);
}

// 

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add(num1, num2) {
  return num1 + num2;
}

console.log(consume(2, 3, add));

function multiplyNums(num1, num2) {
    return num1 * num2;
  };
  
  console.log(consume(2, 3, multiplyNums));

  function greeting(_first_name, _last_name) {
    return `Hello ${_first_name} ${_last_name}, nice to meet you!`;
  };

console.log(consume('Heather', 'Nye', greeting));

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiplyNums)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

 
// Explanation: 

/* Variables called w/in a function are only available w/in that function's {} and is known as a block-scope variable. A variable can look outward but can never look inward and values can't be passed up, only down.  */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
