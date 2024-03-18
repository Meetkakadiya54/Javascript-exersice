// Exercises: Level 2

// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// Enter base: 20
// Enter height: 10
// The area of the triangle is 100
// answer : 
// const base = prompt("Enter the base : ");
// const height = prompt("Emter the height : ");
// const num1 = parseFloat(base);
// const num2 = parseFloat(height);
// let area = 0.5 * base * height;
// console.log(area);

// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12
// answer
// let num1 = prompt("Enter a : ");
// let num2 = prompt("Enter b : ");
// let num3 = prompt("Enter c : ");
// let a = parseFloat(num1);
// let b = parseFloat(num2);
// let c = parseFloat(num3);
// let perimeter = a + b +c;
// console.log(perimeter);

// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// let num1 = prompt("Enter length");
// let num2 = prompt("Enter width");
// let length = parseFloat(num1);
// let width = parseFloat(num2);
// let area = length * width;
// console.log(area);
// let perimeter = 2 * (length + width);
// console.log(perimeter);

// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// let num1 = prompt("Enter radius : ");
// let num2 = prompt("Enter pi : ");
// let r = parseFloat(num1);
// let pi = parseFloat(num2);
// let area = pi * r *r;
// console.log(area)
// let c = 2*pi*r;
// console.log(c);

// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2 tuff
// let x = 200;
// let y = 2*(x)-2;
// console.log(y);

// 6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
// let x =(2, 2);
// let y = (6, 10);
// let m = (y2-y1)/(x2-x1);
// console.log(m); this is invalid way of code, I could not find the answer
// let x2 = 10;
// let x1 = 6;
// let y2 = 2;
// let y1 = 2;
// let m = (y2-y1)/(x2-x1);
// console.log(m);

// 7. Compare the slope of above two questions.
// console.log(m === y);
// I have uncomment the code of Q5 and Q6 to solve this Q and compare both Q5 and Q6 answers

// 8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
// let x = -3;
// let y = x**(2) + 6*(x) + 9;
// console.log(y);

// 9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
// const num1 = prompt("Enter the first number:");
// const num2 = prompt("Enter the second number:");
// const number1 = parseFloat(num1);
// const number2 = parseFloat(num2);
// const sum = number1 * number2;
// console.log(sum);

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.
// let name1 = "meet";
// if (name1.length > 7) {
//     console.log("Your name is too long!");
// } else {
// console.log("Your name is short!");
// }
// console.log(name1.length);

// 11. Compare your first name length and your family name length and you should get this output.
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh
///////// answer /////////////
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// console.log(firstName.length === lastName.length);

// 12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.
//////// answer /////////////
// let myAge = 250
// let yourAge = 25
// console.log(`My age is ${myAge}. Your age is ${yourAge}. I am ${myAge - yourAge} older than you.`);

// 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// Enter birth year: 1995
// You are 25. You are old enough to drive
// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.
////////// Answer /////////////
// let num1 = prompt("Enter Your birth year : ");
// let year = parseFloat(num1);
// let age = 2024 - year
// if(age > 18){
//     console.log(`You are ${age}. You are old enough to drive`);
// }else{
//     console.log(`You are ${age}. You will be allowed to drive after 3 years.`);
// }

// 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// Enter number of years you live: 100
// You lived 3153600000 seconds.
//////////// Answer //////////////////
// let num1 = prompt("Enter your age here : ");
// let year = parseFloat(num1);
// let seconds = 365 * 24 * 60 * 60;
// let lifeInSecs = seconds * year;
// console.log(lifeInSecs);

// 15. Create a human readable time format using the Date time object
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm
////////////////// Answer //////////////////
// const now = new Date()
// const year = now.getFullYear() 
// const month = now.getMonth() + 1
// const date = now.getDate()
// const hours = now.getHours()
// const minutes = now.getMinutes()
// console.log(`${year}-${month}-${date} ${hours}:${minutes}`)
// console.log(`${date}-${month}-${year} ${hours}:${minutes}`) 
// console.log(`${date}/${month}/${year} ${hours}:${minutes}`)