// Task 21
// Create a greet.js file and export a single greetUser() function using export default.
// Import it into app.js and call it with a name.

// import greet from  './esmChild.js'
// greet();
//=====================================================

// Task 22
// Create a square.js file and export a single calculateSquare() function.
// Import and use it in app.js to find the square of a number (e.g. 6).

// import calculateSquare from './esmChild.js'
// calculateSquare(12);
//====================================================

// Task 23
// Create a maximum.js file and export a single findMaximum() function.
// Apply it to two numbers (e.g. 15 and 28) and print the larger number.
// import findMaximum from './esmChild.js'
// findMaximum(10,20);

//====================================================

// Task 24
// Create a number.js file and export a single checkEven() function.
// Use it to check whether a number is even or odd and print the result.
// import checkEven from './esmChild.js'
// checkEven(5);
//================================================
// Task 25
// Create an area.js file and export a single calculateArea() function.
// Calculate the area of a circle using radius = 7.
// (Hint: area = 3.14 × radius × radius)

// import calculateArea from './esmChild.js'
// calculateArea(7);
//================================================
// Task 31
// In math.js, export calculateSum(), calculateDifference(), and calculateProduct() functions.
// Import all three in app.js and use them with sample numbers.

// import {calculateSum,calculateDifference,calculateProduct} from './esmChild.js'

// console.log(calculateSum(10, 5))
// console.log(calculateDifference(10, 5))
// console.log(calculateProduct(10, 5))

//=========================================

//Task 32
// In user.js, export getUserName(), getUserAge(), and getUserCity() functions.
// Import all three in app.js and print the returned values.
// import {getUserName,getUserAge,getUserCity} from './esmChild.js'
// getUserName();
// getUserAge();
// getUserCity();
//=====================================
// Task 33
// In calculator.js, export performAddition(), performSubtraction(), performMultiplication(), and performDivision() functions.
// Import all four in app.js and print the result of each.

// import {performAddition,performSubtraction,performMultiplication,performDivision} from './esmChild.js'

// performAddition(10,5);
// performSubtraction(11,4);
// performMultiplication(10,4);
// performDivision(23,4)

//============================================

// Task 41
// math.js se add() function export karo aur app.js mein use sum naam se import karo.
// (Example: import { add as sum } from "./math.js";)
// sum(10, 20) call karke result print karo.
import  { sum as jodo} from "./esmChild.js";
 const t = jodo(10,5);
console.log(t);