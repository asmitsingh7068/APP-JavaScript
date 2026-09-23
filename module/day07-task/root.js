//Task 01
//Create a math.js file and export a single add() function using module.exports.
//(Example: module.exports = function add(a, b) { return a + b; })

// const add = require('./math.js')
// const b = add(10,10);
// console.log("add number a + b" , b)


// -=============================================================================================
// Task 02
// Create a greet.js file and export a single greet() function.
// The function should print "Hello Student" or greet a name.

// const greet = require('./math.js');
// greet();

//=====================================================
//Task 03
// Create a user.js file and export a single name variable.
// (Example: module.exports = "Rahul";)

// const name =  require('./math.js');
// console.log(name);

// ==================================================
//task 4
// Task 04
// Create a square.js file and export a single square() function.
// The function should return the square of a number.
// (Hint: square(5) should return 25)
// const squre = require('./math.js')
// const a = squre(10);
// console.log("squre is : ",a);

//====================================================
// Task 05
// Create a student.js file and export a single student object containing name, age, and course.
// (Example: module.exports = { name: "Amit", age: 20, course: "JavaScript" };)
// const {name,age,course} = require('./math');

// console.log(`name is ${name} and age ${age} and course  ${course}`)

//================================================
// Task 06
// Create a message.js file and export a single string "Hello JavaScript".
// Import it in another file and print it using console.log().

// const message = require('./math')
// console.log("print message :"+ message)
//==================================================

// Task 07
// Create a multiply.js file and export a single multiply() function.
// Import it using require() and calculate 8 × 9.
// Print the result. (Expected output: 72)
// const a = 8;
// const b = require('./math')
// console.log ("a*b : "+ a*b)
//===================================================
//Task 08
// Create a city.js file and export a single city name.
// Import it into app.js and print it.
// (Example: module.exports = "Delhi";)

// const city = require('./math');
// console.log("city name :", city);

//===================================================
// Task 09
// Create a calculator.js file and export only a divide() function.
// Import and use it in app.js to divide two numbers (e.g. 20 / 5).
// Print the result.
// const {a,b} = require('./math')

// console.log(`a is ${a} and b is ${b} now multiply is ${a*b}`)

//==================================================
// task 10
// Create a company.js file and export a single object containing name, location, and employees.
// Import it in app.js and print all three properties.

// const {companyName , companyLocation, Employee} = require('./math')

// console.log(`comany name is ${companyName} location ${companyLocation} and employee ${Employee} `)
//===================================================

// Task 11
// Create a math.js file and export three functions: add(), subtract(), and multiply().
// Import all three in app.js and use them with sample numbers.

// const {add , multiply , divide} = require('./math')

// add(4,5);
// multiply(4,5);
// divide(4,5);
//====================================================
// Task 12
// Create a user.js file and export name, age, and email using multiple exports.
// Import them in app.js and print all three values.

// const {name ,age , email} = require('./math')
// console.log(`name is ${name} age is ${age} email is ${email}`)
//==================================================
//====================================================
// Task 13
// Create a calculator.js file and export four functions:
// add(), subtract(), multiply(), and divide().
// Import all four in app.js and print the result of each operation.

// const { add, subtract, multiply, divide } = require('./math')

// console.log("Addition :", add(10, 5))
// console.log("Subtraction :", subtract(10, 5))
// console.log("Multiplication :", multiply(10, 5))
// console.log("Division :", divide(10, 5))
//==================================================


//==================================================
// // Task 13
// Create a calculator.js file and export four functions:
// add(), subtract(), multiply(), and divide().
// Import all four in app.js and print the result of each operation.

// const { add, subtract, multiply, divide } = require('./math')
//-----------------------------------------
// console.log("Addition :", add(10, 5))
// console.log("Subtraction :", subtract(10, 5))
// console.log("Multiplication :", multiply(10, 5))
// console.log("Division :", divide(10, 5))
//===============================================


//====================================================
// Task 14
// Create a student.js file and export name, course, marks, and grade.
// Import them in app.js and print a student report.

// const { name, course, marks, grade } = require('./math')

// console.log("Student Name :", name)
// console.log("Course :", course)
// console.log("Marks :", marks)
// console.log("Grade :", grade)
//==================================================

//====================================================
// Task 15
// Create a fruits.js file and export three variables:
// fruit1, fruit2, and fruit3.
// Import them in app.js and print all three fruit names.

// const { fruit1, fruit2, fruit3 } =require('./math')

// console.log("Fruit 1 :", fruit1)
// console.log("Fruit 2 :", fruit2)
// console.log("Fruit 3 :", fruit3)
//==================================================

//====================================================
// Task 16
// Create a geometry.js file and export functions for
// areaOfCircle(), areaOfSquare(), and areaOfRectangle().
// Import all three in app.js and calculate sample areas.

// const { areaOfCircle, areaOfSquare, areaOfRectangle } = require('./math')
// console.log("Area of Circle :", areaOfCircle(5))
// console.log("Area of Square :", areaOfSquare(4))
// console.log("Area of Rectangle :", areaOfRectangle(10, 5))
//==================================================


//====================================================
// Task 17
// Create a number.js file and export square(), cube(),
// and isEven() functions.
// Import them in app.js and test with a number.

// const { square, cube, isEven } =require('./math')

// const num = 4;

// console.log("Square :", square(num))
// console.log("Cube :", cube(num))
// console.log("Is Even :", isEven(num))
//==================================================

//====================================================
// Task 18
// Create a person.js file and export name, age, city,
// and a greet() function.
// Import all of them in app.js.
// Call greet() and print the other values.

// const { name, age, city, greet } = require('./math')

// greet()

// console.log("Name :", name)
// console.log("Age :", age)
// console.log("City :", city)
//==================================================

//====================================================
// Task 19
// Create a product.js file and export productName, price,
// category, and a showProduct() function.
// Import them in app.js and call showProduct()
// to display product details.

// const { productName, price, category, showProduct } = require('./math')

// showProduct()

// console.log("Product Name :", productName)
// console.log("Price :", price)
// console.log("Category :", category)
//==================================================

//====================================================
// Task 20
// Create a complete CommonJS mini-project with math.js and app.js.
// math.js should have multiple exports
// (add, subtract, multiply, divide).
// app.js should import and use all of them.
// Print the result of each operation.

// const { add, subtract, multiply, divide } = require('./math')

// console.log("Addition :", add(20, 10))
// console.log("Subtraction :", subtract(20, 10))
// console.log("Multiplication :", multiply(20, 10))
// console.log("Division :", divide(20, 10))
//==================================================