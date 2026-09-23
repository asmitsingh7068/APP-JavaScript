// task 1 

// Task 01
// Use forEach() to print all elements of [10, 20, 30, 40, 50].

// const a =[10, 20, 30, 40, 50];
// a.forEach(x => {console.log(x)});

// Task 02
//Use forEach() to print the square of each number in an array.

// const a =[10, 20, 30, 40, 50];
// a.forEach(x => {
//    let squre =  x*x   
//     console.log(squre)
// });
//  console.log(a)

//Task 03
//Use forEach() to print student names one by one.

// let name  = ["asmit","divya","rahul","amit"];
// name.forEach(element => {
//     console.log(element)
// });

//
//Task 04
//Use forEach() to add 5 to each number in an array and print the result.

// let number = [21,22,33,44,55,34];
// number.forEach((value)=>
//     {
//         console.log(value)
//     })


// Task 05
// Use push() to add "Mango" at the end of an array.

// let fruit = ["lichi", " bnana", "date", "apple", "grapes"];
// fruit.push("mango");
// console.log(fruit);

// task 6
//Task 06
//Use push() to add 3 new numbers to an array.

// const a =[10, 20, 30, 40, 50];
// a.push(1,2,3);
// console.log(a);


// Task 07
// Use pop() to remove the last element of an array.
// const a =[10, 20, 30, 40, 50];
// a.pop(); // remove 50
//  console.log(a); // 10 20 30 40

//Task 08
// Use pop() to remove the last element and print the removed element in the console.
// const a =[10, 20, 30, 40, 50];
// console.log(a);
// const ni = a.pop(); // remove 50
//  console.log(ni); // 10 20 30 40


//Task 09
//Use unshift() to add "Apple" at the beginning of an array.
// let fruit = ["lichi", " bnana", "date", "apple", "grapes"];
// fruit.unshift("Apple");// dalna aage se
// console.log(fruit);

// Task 10
// Use shift() to remove the first element of an array and print it.
// let fruit = ["lichi", " bnana", "date", "apple", "grapes"];
//  fruit.shift();//  nikalna aage se
// console.log(fruit);

// Task 11
// Use includes() to check whether 30 is present in [10, 20, 30, 40].
// let a = [10, 20, 30, 40];
// let res = a.includes(30);
// console.log(res);


// Task 12
// Use indexOf() to find the index of "JavaScript".
// let a = ["JavaScript", "dsa", "c++", "ds"];
// console.log(a.indexOf("JavaScript"));

//Task 13
//Use indexOf() to check whether a given element is present in an array./
// let a = [10, 20, 30, 40];
// let res = a.indexOf(30);
//  console.log(res);


// Task 14
// Use Array.isArray() to check whether let data = [1, 2, 3] is an array.
// let data = [1, 2, 3];
// let c = Array.isArray(data)
// console.log(c); // true



// Task 15
// Use Array.isArray() to check both an array and a normal object.
// ?????

// Task 16
// Use map() to find the square of all numbers in [1, 2, 3, 4, 5].


// const a = [1, 2, 3, 4, 5];
// const square = a.map(x=>x*x);
// console.log(square); // [1, 4, 9, 16, 25]

// Task 17
// Use map() to double each number in [10, 20, 30, 40].

// const a = [10, 20, 30, 40];
// const double =  map(x=>x*2);
// console.log(double);


// Task 18
// Use map() to convert student names to uppercase.
// let name = ["asmit", "raja", "baja", "rani"];
// let upper = name.map(x => x.toUpperCase());
// console.log(upper);

// task 19
//Use map() to increase prices by 10%.
// let price = [100,200,300,400,500];
// let increase = price.map(x=>x+x*1/10);
// console.log(increase);

// Task 20
// Use map() to convert each number in an array to a string.
// let arr = [10, 20, 30, 40, 50];
// let result = arr.map(x => x.toString());
// console.log(result);

// Task 21
// Use filter() to get only the even numbers from an array.
// let a = [1,2,3,4,5,6,7,8,9];
// let result = a.filter(function(x) {
//     return x % 2 == 0;
// });

// console.log(result);


// Task 22
// Use filter() to get only the odd numbers from an array.
// let a = [1,2,3,4,5,6,7,8,9];
// let result = a.filter(function(x) {
//     return x % 2 != 0;
// });

// console.log(result);

//Task 23
// Use filter() to get students whose marks are greater than 50.

// const studentMarks = [10,20,30,40,50,60,70];
// const a = studentMarks.filter(x=>x>50);
// console.log(a);


// Task 24
// Use filter() to get persons whose age is 18 or greater.
// const personAge = [5,10,20,30,40,50,60];
// const a = personAge.filter(x=> x >18);
// console.log(a);


// Task 25
// Use filter() to create a new array of positive numbers.

// let a = [1,-2,-3,-4,5];
// let b = a.filter(x=>x>0);
// console.log(b);

// Task 26
// Use reduce() to find the sum of all numbers in an array.

// const num = [5,10,20,30,40,50,60];
// const sum = num.reduce((x, y) => x + y, 0);
// console.log(sum); // 215

// Task 27
// Use reduce() to multiply all numbers in an array.
// const num = [5,10,20,30];
// const multi = num.reduce((x, y) => x * y, 1);
// console.log(multi); // 30000

// Task 28
// Use reduce() to find the maximum number in an array.
// ???????


//Task 29
//Use reduce() to find the minimum number in an array.



//Task 30
//Use reduce() to calculate the total price of products in a shopping cart.

// let arr = [1,2,3,4,5,6,7];
// arr.reduce(x=> x )


// Task 31
// Use slice() to get the first 3 elements of an array.
// let arr = [1,2,3,4,5,6,7];
// let a = arr.slice(0,3); // aage se katana
// console.log(a);

// Task 32
// Use slice() to get the last 3 elements of an array.
// let arr = [1,2,3,4,5,6,7];
// let a = arr.slice(-3); // piche se katna
// console.log(a); // [5, 6, 7]

// Task 33
// Use splice() to remove 2 elements from an array.
// let arr = [1,2,3,4,5,6,7];
// let a = arr.slice(-2); // piche se katna
// console.log(a); // [ 6, 7]
// console.log(arr); // [1,2,3,4,5,6,7]

// Task 34
// Use splice() to add a new element at the second position of an array.
// let arr = [1, 2, 3, 4];
// arr.splice(1, 0, 10); // 1 positon pr 0 mtlb bina delete kiye hame number update kro
// console.log(arr); // [1, 10, 2, 3, 4]

// let arr = [1, 2, 3, 4];
// arr.splice(1, 1, 10);// 1 position pr 1 mtlb delete kr k update kro.
// console.log(arr); // [1, 10, 3, 4]

// Task 35
// Use reverse() to reverse an array.
// let a = [1,2,3,4,5,6];
// let b = a.reverse();
// console.log(b);

// Task 36
// Use sort() to arrange names in alphabetical order.

// let name = ["asmit", "raja", "baja","xyz", "rani"];
// let a = name.sort();
// console.log(a);

// Task 37
// Use sort() to arrange numbers in ascending order.

// let a =[9,5,4,1,2,6,7,8]
// let b = a.sort();
// console.log(b);

//Task 38
//Use sort() to arrange numbers in descending order.

// Task 39
// Use concat() to combine 2 arrays.
// let a = [1,2,3,4];
// let b = [5,6,7];
// let c = a.concat(b);
// console.log(c);

// Task 40
// Given numbers = [10, 5, 20, 15, 30, 25], use filter(), map(), reduce(),
// sort(), and reverse() to:
//     - get numbers greater than 10
//     - find their squares
//     - find the total of the squares
//     - arrange the squares in descending order

// let numbers = [10, 5, 20, 15, 30, 25];

// // 1. Numbers greater than 10
// let greater = numbers.filter(x => x > 10);

// // 2. Their squares
// let squares = greater.map(x => x * x);

// // 3. Total of squares
// let total = squares.reduce((x, y) => x + y, 0);

// // 4. Squares in descending order
// let descending = squares.sort((a, b) => a - b).reverse();

// console.log(greater);    // [20, 15, 30, 25]
// console.log(squares);    // [400, 225, 900, 625]
// console.log(total);      // 2150
// console.log(descending); // [900, 625, 400, 225]



