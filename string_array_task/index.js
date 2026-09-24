// Task 01
// Use entries() to print both the index and value of an array.

// let arr = ["Apple", "Banana", "Mango"];
// for (let [index, value] of arr.entries()) {
//     console.log(index, value);
// }

// Task 02
// Use entries() to print only the elements at even indexes.
// let a = [2,3,4,5,6,7];
// for(let[index,value] of a.entries()){
//    if(index % 2 == 0){
//      console.log(index , value);
//    } 
// }

// Task 03
//Use entries() to print the index and marks of students whose marks are 50 or more.

// let studentMark = [20,30,40,50,67,75,53,42];
// let a = studentMark.entries() ;
// for(let[index ,value] of a){
//     if(value >=50){
//         console.log(value ,index);
//     }
// }

// Task 04
// Use every() to check whether all numbers in the array are positive or not.
// let numbers = [10, 20, 30, 5,-3,-2];
// let result = numbers.every(num => num > 0);
// console.log(result); // always true and false // false

// Task 05
// Use every() to check whether all numbers in the array are greater than 10 or not.
// let numbers = [ 20, 30,];
// let result = numbers.every(num => num > 10);
// console.log(result); // always true and false // tru


// Task 06
// Use every() to check whether all students have marks of 40 or more.

// let a = [10,20,30,40,50,60];
// let b = a.every(num => num > 40);
// console.log(b);

//Task 07
// Use some() to check whether there is any even number in the array.
// let a = [10,20,30,40,];
// let b = a.some(num=> num%2 === 0 )
// console.log(b); // true 

// Task 08
// Use some() to check whether there is any number greater than 50 in the array.
// let a = [10,20,30,40];
// let b = a.some(num=> num > 50 )
// console.log(b); // false

// Task 09
// Use some() to check whether any student has marks of 90 or more.
// let a = [10,20,30,40];
// let b = a.some(num=> num > 90 )
// console.log(b); // false

// Task 10
// Use find() to find the first even number in the array.
// let a = [3,20,30,40];
// let b = a.find(num => num%2 ===0)
// console.log(b); // number stisfied

// Task 11
// Use find() to find the first number that is greater than 50.
// let a = [52,20,30,40 ];
// let b = a.find(num => num > 50 )
// console.log(b); // number stisfied hmesa phle  0 index pr operate krta hai


//Task 12
// Use find() to find the first student whose marks are 80 or more.
// let a = [82,20,30,40 ];
// let b = a.find(num => num > 80 )
// console.log(b); // number stisfied hmesa phle  0 index pr operate krta hai mila to number ni to undefind

// Task 13
// Use findIndex() to find the index of the first even number.
// let a = [82,20,30,40 ];
// let b = a.findIndex(num=> num % 2 === 0);
// console.log(b); // return index value because  ham index khojat bani.

//Task 14
//Use findIndex() to find the index of the first number greater than 50.
// let a = [20,30,40,82 ];
// let b = a.findIndex(num=> num >50);
// console.log(b); // 3

// Task 15
// Use findIndex() to find the index of the student whose marks are 80 or more.
// let marks = [20,30,40,82 ];
// let b = marks.findIndex(num=> num > 80);
// console.log(b); // 3

//Task 16
//Use fill() to fill all elements of the array with 0.
// let a = [10, 20, 30, 40, 50];
// a.fill(0);
// console.log(a); // sb zero karo fill mai udas tu bhi udas fill


// Task 17
// Use fill() to fill the elements from index 2 to index 5 with 100.
// let a = [10, 20, 30, 40, 50, 60, 70];
// a.fill(100, 2, 6); // index 2  se 6 ki index tk ki value update kro
// console.log(a); //  print krna 


// Task 18
// Use fill() to fill the last 3 elements of the array with "JavaScript".
// let a = ["HTML", "CSS", "Node", "React", "Angular"];
// a.fill("JavaScript", -3);
// console.log(a);


// Task 19
// Use length to find the total number of characters present in a string.
// let  a = "narendarmodi   " // 3 space bhi eha 
// let b = a.length;
// console.log(b);

// Task 20
// Use length to access the last character of a string.
// let  a = "narendarmodi" // 
// let b = a[a.length-1]; // ?????????????/
// console.log(b);

// Task 21
// Use length to check how many characters are in a string.
//  let  a = "narendarmodi damodardas" // 
// let b = a.length; // ?????????????/
// console.log(b);


// Task 22
// Use toUpperCase() to convert "javascript" to uppercase.
// let a = "javascript";
// console.log(a.toUpperCase());


// Task 23
// Use toUpperCase() to convert "hello world" to uppercase.
// let a = "hello world";
// console.log(a.toUpperCase());

// Task 24
// Use toUpperCase() to convert all names present in an array to uppercase.
// let a = ["asmit", "raja", "rani"];

//type 1 with for of.
// for(let value of a){
// console.log(value.toUpperCase());
// }

// let a = ["asmit", "raja", "rani"];
// type 2 
// for(let [index , value] of a.entries()){
//    let b =  value.toUpperCase();
//    console.log(b);

// }



//type 3 with map().
// let a = ["asmit", "raja", "rani"];
// let b = a.map(name => name.toUpperCase());
// console.log(b);


// Task 25
// Use toLowerCase() to convert "JAVASCRIPT" to lowercase.
// let a = "Javascript";
// console.log(a.toLowerCase());


// Task 26
// Use toLowerCase() to convert "HELLO WORLD" to lowercase.
// let a = "HELLO WORLD";
// console.log(a.toLowerCase());


// Task 27
// Use toLowerCase() to convert all names present in an array to lowercase.

// let a = ["Asmit", "Raja", "Rani"];
// //type 2 
// for(let [index , value] of a.entries()){
//    let b =  value.toLowerCase();
//    console.log(b);
// }


// Task 28
// Use match() to find "JavaScript" in "I love JavaScript".
// let a = "I love JavaScript";
// console.log(a.match("JavaScript" )); // node list  yaad rkho


// Task 29
// Use match() to find all matches of "apple" in "apple banana apple mango".
// let a =  "apple banana apple mango";
// let b = a.match("apple");
// console.log(b);

// Task 30
// Use match() to find all numbers in the given sentence.
// let a = "this is the hero 1 2 3 4";
// let b = a.match(/\d+/g); // ye kya hai be
// console.log(b);

// Task 31
// Use slice() to extract the first 4 characters from "JavaScript".
// let a = "JavaScript";
// console.log(a.slice(0, 4));

// Task 32
// Use slice() to extract "World" from "Hello World".
// let a = "Hello World";
// console.log(a.slice(6, 11));

// Task 33
// Use slice() to extract the last 3 characters of a string.
// let a = "JavaScript";
// console.log(a.slice(-3));


// Task 34
// Use replace() to replace "JavaScript" with "Python" in "I love JavaScript".
// let a = "I love JavaScript";
// let b = a.replace("JavaScript","Python");
// console.log(b);


// Task 35
// Use replace() to replace "World" with "Everyone" in "Hello World".
// let a = "Hello World";
// let b = a.replace("World", "Everyone");
// console.log(b);


// Task 36
// Use replace() to replace the first "JavaScript" with "Python" in
// "I like JavaScript and JavaScript is easy".

// let a = "I like JavaScript and JavaScript is easy";
// let b = a.replace("JavaScript", "Python");
// console.log(b);
// console.log(a.replaceAll("JavaScript", "Python"))

// Task 37
// Use replaceAll() to replace all "JavaScript" with "Python" in
// "I like JavaScript. JavaScript is easy."
// let a = "I like JavaScript. JavaScript is easy.";
// let b = a.replaceAll("JavaScript", "Python");
// console.log(b);

// Task 38
// Use replaceAll() to replace all "apple" with "orange" in
// "apple banana apple mango apple".
// let a = "apple banana apple mango apple";
// let b = a.replaceAll("apple", "orange");
// console.log(b);

// Task 39
// Use replaceAll() to replace all "Hello" with "Hi" in
// "Hello World. Hello Everyone. Hello JavaScript."
// let a = "Hello World. Hello Everyone. Hello JavaScript.";
// let b = a.replaceAll("Hello", "Hi");
// console.log(b);


// Task 40
// Use split() to convert "JavaScript" into an array of individual characters.
// let a = "JavaScript";
// let b = a.split("");
// console.log(b);

// Task 41
// Use split() to convert "I love JavaScript" into an array of words.
// let a = "I love JavaScript";
// let b = a.split(" ");
// console.log(b);

// Task 42
// Use split() to convert "HTML-CSS-JavaScript-Bootstrap" into an array of
// separate elements based on "-".
// let a = "HTML-CSS-JavaScript-Bootstrap";
// let b = a.split("-");
// console.log(b);


// Task 43
// Use trim() to remove the extra spaces before and after " JavaScript ".
// let a = " JavaScript ";
// let b = a.trim();
// console.log(b);

// Task 44
// Use trim() to print " Hello World " without extra spaces.
// let a = " Hello World ";
// let b = a.trim();
// console.log(b);


// Task 45
// Use trim() to remove extra spaces from " Hello javaScript " and then find its length.
// let a = " Hello javaScript ";
// let b = a.trim();
// console.log(b);
// console.log(b.length);

// Task 46
// Use includes() to check whether "Script" exists in the string "JavaScript".
// let a = "JavaScript";
// console.log(a.includes("Script"));//true

// Task 47
 // Use includes() to check whether "learning" exists in "I love learning JavaScript".
// let a = "I love learning JavaScript";
// console.log(a.includes("learning")); /// true

// Task 48
// Use includes() to check whether "Java" exists in "HTML, CSS, JavaScript, Bootstrap".
// let a = "HTML, CSS, JavaScript, Bootstrap";
// console.log(a.includes("Java"));  // true

// Task 49
// Use Template Literals (backticks ` `) to print "Welcome to JavaScript".
// console.log(`Welcome to JavaScript`);

// Task 50
// Use Template Literals to print the values of course and duration variables
// in one sentence.
// let course = "JavaScript";
// let duration = "3 months";
// console.log(`I am learning ${course} for ${duration}.`);

// Task 51
// Use Template Literals to print the values of product, price, and quantity
// as a multi-line bill.
// let product = "Laptop";
// let price = 50000;
// let quantity = 2;

// console.log(`
// Product: ${product}
// Price: ₹${price}
// Quantity: ${quantity}
// Total: ₹${price * quantity}
// `);
