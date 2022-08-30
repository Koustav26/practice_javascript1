// 1. JavaScript Program To Print Hello World
//console.log("Hello World");

// 2 .JavaScript Program to Add Two Numbers
// let a = 2;
// let b = 3;
// sum = a + b;
// console.log(sum);

// 3 . JavaScript Program to Find the Square Root

// function sqrtNum(num) {
//   let number = Math.sqrt(num)
//   return number;
// }

// console.log(sqrtNum(9));

// 4. JavaScript Program to Calculate the Area of a Triangle

// let base = 10;
// let height = 20;
// let area = (base * height) / 2;
// console.log(area);

// 5. JavaScript Program to Swap Two Variables

// let number1 = 2;
// let number2 = 3;
// let temp ;
// temp = number1;
// number1 = number2;
// number2 = temp;
// console.log(`Number 1 : ${number1} , Number 2 : ${number2}`);

// 6. Javascript Program to solve Quadratic Equation

// function quadraticEquation(a, b, c) {
//   let root1,root2;
//   let top = (b * b - 4 * a * c)
//   if(top > 0){
//    root1 = (- b + Math.sqrt(top));
//    root2 = (- b - Math.sqrt(top));
//    return console.log(`The two roots are Root 1 : ${root1} and Root 2 : ${root2} `);
//   }else (top) {

//   }
// }
// quadraticEquation(2, 3, 4);

// 7 . JavaScript Program to Convert Kilometers to Miles

// let kilometer = 10;
// let result = kilometer * 0.62137;
// console.log(`Kilometer to Mile is : ${result}`);

// 8. Javascript Program to Convert Celsius to Fahrenheit

// function convertTemp (c){
//   let temp = (c * 1.8) + 32;
//   return temp;
// }
// console.log(convertTemp(23));

// 9. Javascript Program to Generate a Random Number
// let number = (Math.random() * 9);
// let number2 = Math.floor(number);
// console.log(`the number is ${number} & number 2 is : ${number2}`);

// 10. Javascript Program to Check if a number is Positive, Negative, or Zero

// function checkNumber(a) {
//   if (a > 0) {
//     return console.log(`${a} is a Positive number`);
//   } else if (a < 0) {
//     return console.log(`${a} is a negative number`);
//   } else {
//     return console.log(`${a} is a zero`);
//   }

// }

// checkNumber(-2);

// 11.Javascript Program to Check if a Number is Odd or Even

// function checkNumber(a) {
//   if (a !== 0 && a !== 1) {
//     if (a % 2 === 0) {
//       return console.log(`${a} is a Even Number`)
//     } else (a % 2 !== 0)
//       return console.log(`${a} is a odd number`)

//   } else return console.log(`${a} is not a valid input`);
// }
// checkNumber(420);
// 12 . JavaScript Program to Find the Largest Among Three Numbers

// function biggestNumber(a,b,c){
//   if(a > b && a > c){
//     return console.log(`A : ${a} is the biggest number`);
//   }else if (b > a && b > c){
//     return console.log(`B : ${b} is the biggest number`);
//   }else {
//     return console.log(`C : ${c} is the biggest number`);
//   }
// }
// biggestNumber(2,3,4);

// 13. JavaScript Program to Check Prime Number

// function checkPrime(a) {
//   let count = 0;
//   if (a > 1) {
//     for (let i = 0; i < a; i++) {
//       for(let j = 2; j < i -1; j++){
//       if (a % i === 0) {
//         count++;
//         break;
//       }
//       }
//     } if (count === 0) {
//       return console.log(`${a} is a Prime Number`);
//     } else {
//       return console.log(`${a} is not a Prime Number`);
//     }
//   }
// }

// checkPrime(59);

// 14. JavaScript Program to Print All Prime Numbers in an Interval

// for (var counter= 0; counter <= 100; counter++) {

//     var notPrime = false;
//     for (var i = 2; i <= counter; i++) {
//         if (counter%i===0 && i!==counter) {
//             notPrime = true;
//         }
//     }
//     if (notPrime === false) {
//                 console.log(counter);
//     }
// }

// 15.JavaScript Program to Find the Factorial of a Number

// function factorial(a){
//   let fact = 1;
//   //let final;
//   for(let i =1; i <= a; i++){
//      fact *= i;

//   }
//   return fact;
// }
// console.log(factorial(5));

// 16. JavaScript Program to Display the Multiplication Table

// let answer = 1;
// for(let i = 1; i <= 10; i++){
//   answer = i * i;
//   console.log(`${i} * ${i} = ${answer}`);
// }

// 17. JavaScript Program to Print the Fibonacci Sequence

// let n = 10;
// let n1 = 0;
// let n2 = 1;
// let nextTerm = 0;
// for(let i = 0; i <= n; i++){
//   console.log(n1);
//   nextTerm = n1 + n2;
//   n1 = n2;
//   n2 = nextTerm;
// }

// 18. JavaScript Program to Check Armstrong Number

// const num = prompt("Enter a positive Number");
// let numLength = num.length;
// let sum = 0;
// let temp = num;
// while (temp > 0) {
//   let remainder = temp % 10;
//   sum += remainder ** numLength;
//   temp = parseInt(temp / 10);
// }
// if (sum == num) {
//   console.log("The number is an Armstrong Number");
// } else {
//   console.log("The number is not an Armstrong Number");
// }

//19. JavaScript Program to Find Armstrong Number in an Interval


// 20. JavaScript Program to Make a Simple Calculator

// let number1 = prompt("Enter the first number :");
// let number2 = prompt("Enter the second number :");
// let operator = prompt("Enter a operator : ");
// let equals = 0;

// if(operator == "+"){
//   equals = parseInt(number1) + parseInt(number2);
//   console.log(`sum of Number 1 : ${number1} & Number 2 : ${number2} is : ${equals} `);
// }else if(operator == "-"){
//   equals = parseInt(number1) - parseInt(number2);
//   console.log(`subtarction of Number 1 : ${number1} & Number 2 : ${number2} is : ${equals} `);
// }else if(operator == "*"){
//   equals = parseInt(number1) * parseInt(number2);
//   console.log(`Multiplication of Number 1 : ${number1} & Number 2 : ${number2} is : ${equals} `);
// }else {
//   equals = parseInt(number1) / parseInt(number2);
//   console.log(`Division of Number 1 : ${number1} & Number 2 : ${number2} is : ${equals} `);
// }

// 21. JavaScript Program to Find the Sum of Natural Numbers

// let number = prompt("Enter the number :");
// let temp = parseInt(number);
// let sum = 0;
// for(let i = 0; i <= temp; i++){
//    sum += i; 
// }

// console.log(sum);

// 22. JavaScript Program to Check if the Numbers Have Same Last Digit

// let number1 = 451;
// let number2 = 341;
// let lastDigit1, lastDigit2;
// lastDigit1 = number1 % 10;
// lastDigit2 = number2 % 10;
// if(lastDigit1 === lastDigit2){
//   console.log("The numbers have the same last digit");
// }else {
//   console.log("The numbers don't have the same last digit");
// }

// 23. JavaScript Program to Find HCF or GCD

// let number1 = 22;
// let number2 = 34;
// let hcf;

// for (let i = 0; i <= number1 && i <= number2; i++) {
//   if (number1 % i === 0 && number2 % i === 0) {
//     hcf = i;
//   }
// }
// let lcm = (number1 * number2) / hcf;
// console.log(`the HCF and LCM of ${number1} and ${number2} is ${hcf} and ${lcm}`);

// 24. JavaScript Program to Find LCM

// let number1 = 23;
// let number2 = 24;
// let lcm = [];
// let lcm1 = [];
// for (let i = 0; i <= number1; i++) {
//   if (number1 % i == 0) {
//     lcm.push(i);
//   }
// }
// for(let j = 0; j <= number2; j++){
//   if(number2 % j == 0){
//     lcm1.push(j);
//   }
// }
// console.log(lcm, lcm1);

// 25. JavaScript Program to Find the Factors of a Number

// let number = 12;
// let factors = [];
// for(let i = 0; i <= number; i++){
//   if(number % i === 0){
//     factors.push(i);
//   }
// }

// console.log(factors);

// 26. JavaScript Program to Find Sum of Natural Numbers Using Recursion

// function sumRec (n){
//   if(n <= 1){
//     return n;
//   }
//   return n + sumRec(n - 1);
// }

// console.log(sumRec(10));

// 27. JavaScript Program to Guess a Random Number

// function guessNumber() {

//   let number = Math.floor(Math.random() * 10) + 1;
//   console.log(`The right number is ${number}`);
//   // console.log(numb
//   let gNumber = prompt("Enter a a number between 1 to 10 :");

//   // while (number !== gNumber) {
//   //   gNumber = prompt("Enter a a number between 1 to 10 :");
//   // }

//   if (number === gNumber) {
//     return console.log("you guessed write number");
//     //console.log(`The right number is ${gNumber}`);
//   } else {
//     return console.log("The number gussed is not write");
//   }

// }

// guessNumber();

// 28. JavaScript Program to Shuffle Deck of Cards


// 29. JavaScript Program to Display Fibonacci Sequence Using Recursion

// function fibonacciRec(n) {
//   if (n === 1) {
//     return [0,1];
//   }else {
//     let arr = fibonacciRec(n-1);
//     arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
//     return arr;
//   }
// }

// console.log(fibonacciRec(8));

// 30. JavaScript Program to Find Factorial of Number Using Recursion

// function factorial (n){
//   let fact;
//   if(n === 1){
//      return 1;
//   }else {
//     fact = n * factorial(n - 1);
//     return fact;
//   } 
// }

// console.log(factorial(3));

// 31. JavaScript Program to Convert Decimal to Binary
/*
function decToBinary(n) {
  let arr = [];
  while(n > 0){
    arr.unshift(n % 2);
    n = Math.floor(n / 2);
  }
  return arr.join('')
}
console.log(decToBinary(42));
// 2nd method
//-----------------------------
function decimalToBinary2(num){
  let str = '';
  while(num > 0){
    str = str + (num % 2);
    num = Math.floor(num / 2);
  }
  return str.split('').reverse().join('');
}

console.log(decimalToBinary2(42));
*/

// 32. JavaScript Program to Find ASCII Value of Character

// let string = prompt('Enter the value :');

// let result = string.charCodeAt();
// console.log(` The ASCII value of ${string} is : ${result}`);

// 33. JavaScript Program to Check Whether a String is Palindrome or Not

// let string = prompt("Enter the string :");
// let rev = string.split('').reverse().join('');
// console.log(rev);
// if(string === rev){
//   console.log(`${string} is a palindrome string`);
// }else {
//   console.log(`${string} is not a palindrome string`);
// }

// 2nd method
//----------------------
// let string = prompt("Enter the string : ");
// // let lastDigit = string.split('');
// let len = string.length;
// for(let i = 0; i <= len / 2; i++){
//   if(string[i] !== string[len - 1- i]){
//     console.log(`${string} : This is not a palindrome number.`);
//     break;
//   }else {
//     console.log(`${string} : This is a palindrome number.`)
//     break;
//   }
// }

// 34. JavaScript Program to Sort Words in Alphabetical Order

// let arr = ['koustav','poulami','kakali'];
// let newArr = [];
// for(let i = 0; i <= arr.length -1; i++){
//   let string = arr[i]
//   var splitString =  string.split('')

// }
// console.log(newArr);
// console.log(splitString);
// Recursion problem

function sum(n) {

  if (n == 0) {
    return 0;
  } else {
    return n + sum(n - 1);
  }
}
console.log(sum(10));

function fact(num){
  if(num == 0){
    return 1;
  }else {
    return num * fact(num - 1);
  }
}
console.log(fact(1));

// 10 using recurtion 10 - 1 = print , sum ,

/*
let personalInfo = {
  firstName: "Koustav",
  lastName: "Basak",
  fathersName: "Sanjoy Basak",
  mothersName: "Kakali Basak",
  age: 28,
  address: {
    address_line: "15 M.N.K Road",
    "pin code": 700036,
    postoffice: {
      "head-office": "cossipur",
      zonal_code: 123,
      
    
  getfullName : function(){
    return this.firstName + " " + this.lastName ;
    
  

let key = "zonal_code";

//console.log(personalInfo.firstName,personalInfo.lastName);

console.log(personalInfo.address.postoffice[key]);


// console.log(personalInfo[key]);

console.log(personalInfo.getfullName());

*/