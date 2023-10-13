//! -function-

//? Ques 1
// function curTime() {
//     var time = new Date();
//     document.write(time);
// };
// curTime();

//? Ques 2

// function user() {
//     var name1 = prompt('Enter First Name');
//     var name2 = prompt('Enter Last Name');
//     var fullName = name1 +' '+ name2;
//     document.write('Welcome '+ fullName + '.....!');
// }; 
// user();

//? Ques 3

// function addNums(){
//     var num1 = +prompt('Enter 1st Number');
//     var num2 = +prompt('Enter 2st Number');
//     var sum = num1 + num2;
//     return sum
// }
// var add = addNums();
// document.write(add);

//? Ques 4

// function cal(num1, op, num2){
//     var num1 = +prompt('Enter 1st Number')
//     var op = prompt("Enter Operator(+, -, *, /):")
//     var num2 = +prompt('Enter 2nd Number')
//     switch (op) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             if (num2 === 0) {
//                 return "It Can't Division by zero.";
//             }
//             result = num1 / num2;
//             break;
//         default:
//             return "Invalid operator";
//     }
//     return result
// }
// document.write(cal())

//? Ques 5

// function square(number) {
//     return number * number;
// }

// var user = +prompt('Enter Any Number For Square Root');
// var sqr = square(user);
// console.log("Square of " + user + " is: " + sqr);

//? Ques 6


// function factorialRecursive(number) {
//     if (number === 0 || number === 1) {
//         return 1;
//     } else {
//         return number * factorialRecursive(number - 1);
//     }
// }

// var input = 5;
// var result = factorialRecursive(input);
// console.log("The factorial of " + input + " is: " + result);

//? Ques 7

// function countNum(start, end) {
//     if (isNaN(start) || isNaN(end)) {
//         return "Invalid input. Please enter valid numbers.";
//     }

//     start = +(start);
//     end = +(end);
//     if (start <= end) {
//         var result = "";
//         for (var i = start; i <= end; i++) {
//             result += i + " ";
//         }
//         return result;
//     } else {
//         return "End number must be greater than or equal to start number.";
//     }
// }

// var startNum = prompt("Enter the start number:");
// var endNum = prompt("Enter the end number:");

// var count = countNum(startNum, endNum);

// if (count === "Invalid input. Please enter valid numbers." || count === "End number must be greater than or equal to start number.") {
//     document.write(count);
// } 
// else {
//     document.write("Counting: " + count);
// }

//? Ques 8

// function calHypo(base, perpendi) {
//     function calcuSqr(x) {
//         return x * x;
//     }

//     var baseSqr = calcuSqr(base);
//     var perpendiSqr = calcuSqr(perpendi);

//     var hypoSqr = baseSqr + perpendiSqr;
//     var hypotenuse = Math.sqrt(hypoSqr);

//     return hypotenuse;
// }

// var base = 3;
// var perpendi = 4;
// var hypotenuse = calHypo(base, perpendi);

// console.log("For a right-angled triangle with base " + base + " and perpendicular " + perpendi + ",");
// console.log("The hypotenuse is: " + hypotenuse);

//? Ques 9

//! Arguments as Values:
// function calRectangle(width, height) {
//     return width * height;
// }
// var area1 = calRectangle(5, 8);
// document.write("Area of the rectangle is (By Values): " + area1, '<br>');

//! Arguments as Variables
// function calRectangle(width, height) {
//     return width * height;
// }
// var rectWidth = 5;
// var rectHeight = 8;
// var area2 = calRectangle(rectWidth, rectHeight);
// document.write("Area of the rectangle is (By Variables): " + area2);

//? Ques 10

// function isPalin(str) {
//     str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     return str === str.split('').reverse().join('');
// }

// var inpString = prompt("Enter Word for checking Plindrome or Not");
// if (isPalin(inpString)) {
//     document.write(inpString + " is a palindrome.");
// } else {
//     document.write(inpString + " is not a palindrome.");
// }

//? Ques 11

// function capiLetter(inpStr) {
//     var words = inpStr.split(' ');

//     var capitalLetter = words.map(word => {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     });
//     var resultStr = capitalLetter.join(' ');
  
//     return resultStr;
// }

//   var inpStr = 'the quick brown fox';
//   var outputString = capiLetter(inpStr);
//   document.write('String: '+ inpStr + "<br>")
//   document.write('Output: ' + outputString); 
  

//? Ques 12


// function LongestWord(inpStr) {
//     var words = inpStr.split(' ');
  
//     var longWord = '';
//     var longWordLen = 0;
//     for (var word of words) {
//       if (word.length > longWordLen) {
//         longWord = word;
//         longWordLen = word.length;
//       }
//     }
  
//     return longWord;
//   }
  
//   var inpStr = 'Web Development Tutorial';
//   var longWord = LongestWord(inpStr);
//   document.write('String: '+inpStr + "<br>"); 
//   document.write( "Longest Word: " + longWord); 
  
//? Ques 13


// function countLet(inputStr, letter) {
//     var count = 0;
  
//     for (let i = 0; i < inputStr.length; i++) {
//       if (inputStr[i] === letter) {
//         count++;
//       }
//     }
  
//     return count;
// }
//   var  inputStr = 'JSResourceS.com';
//   var  letterToCount = 'o';
//   var  result = countLet(inputStr, letterToCount);
//   document.write('Letter ' + letterToCount + ' Show  ' + result+ ' times in the Sentence.');

//? Ques 14

// function calCircumference(radius) {
//     var circum = 2 * Math.PI * radius;
//     document.write('Circumference is: ' +circum , '<br>');
//   }
//   function calcArea(radius) {
//     var area = Math.PI * Math.pow(radius, 2);
//     document.write('Area is: ' +area);
//   }
//   var radius = 5;   calCircumference(radius);
//   calcArea(radius);
  