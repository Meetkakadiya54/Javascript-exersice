// Exercises:Day 6

// Exercises: Level 1

// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland', 
//   'Japan',
//   'Kenya'
// ]
// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]
// const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
// for (let i = 0; i<=10;i++){
//     console.log(i)
// }

// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop
// for (let i = 10; i>=0;i--){
//         console.log(i)
//     }

// 3. Iterate 0 to n using for loop
// for (let i = 0; i <= 1/0; i++) {
//     console.log(i)
// }

// 4. Write a loop that makes the following pattern using console.log():
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######
////////////// Answer ///////////////
// for (let i = 0; i <= 6; i++) {
//     let print = "";
//     for (let j = 0; j <= i; j++) {
//     print += "*"
//     }
//      console.log(print);
// }

// 5. Use loop to print the following pattern:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100
//////////// Answer /////////////
// for (let i = 0; i <= 10; i++) {
//         console.log(`${i} * ${i} = ${j=i*i}`)
//      }

// 6. Using loop print the following pattern
//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000
// for(let i = 0 ; i<=10; i++){
//     console.log(`${i}    ${j = i**2}    ${j = i**3}`);
// }

// 7. Use for loop to iterate from 0 to 100 and print only even numbers
// for (let i = 0; i <= 100; i++) {
//         if(i%2 ===0){
//             console.log(i);
//         }
//      }

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
// for (let i = 0; i <= 100; i++) {
//             if(i%2 !==0){
//                 console.log(i);
//             }
//          }

// 9. Use for loop to iterate from 0 to 100 and print only prime numbers
// for (let i = 2; i <= 100; i++) {
//     if (i==2 || i==3 || i==5 || i==7){
//         console.log(i)
//     }
//     if (i % 2 !== 0) {
//         if (i % 3 !== 0) {
//           if(i%5 !==0){
//             if(i%7 !==0){
//             console.log(i);
//             }
//           }
//         }
//     }
// }

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// The sum of all numbers from 0 to 100 is 5050.
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//     console.log(sum = sum + i);
// }

// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
// let sum = 0
///////// For even numbers //////////
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(sum = sum + i);
//     }
// }
////////////// for Odd numbers ////////
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(sum = sum + i);
//     }
// }

// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
//   [2550, 2500]
///////////// Amswer ///////////////
// let sum1 = 0;
// let sum2 = 0;
// let sumArr;
// let sumArr2;
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         sum1 = sum1 + i
//         sumArr = [sum1];
//     }
// }
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         sum2 = sum2 + i;
//         sumArr2 = [sum2]
//     }
// }
// let total = sumArr.concat(sumArr2)
// console.log(total)

// 13. Develop a small script which generate array of 5 random numbers
//////////// Answer ////////////
// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// const randomNumbers = [];
// for(let i = 0 ;i<= 4; i++ ){
//     const randomNumber = Math.floor(Math.random()*arr.length);
//      randomNumbers.push(randomNumber);
// }
// console.log(randomNumbers);

// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
// const randomNumbers = [];
// for (let i = 0; i <= 4; i++) {
//     let randomNumber = Math.floor(Math.random() * 20);
//     if (!randomNumbers.includes(randomNumber)) {
//         randomNumbers.push(randomNumber);
//     } else {
//         randomNumber = Math.floor(Math.random() * 20);
//         do{
//             randomNumber = Math.floor(Math.random() * 20);
//         }
//         while(randomNumbers.includes(randomNumber))
//         randomNumbers.push(randomNumber);
//     }
// }
// console.log(randomNumbers);

// 15. Develop a small script which generate a six characters random id:
// 5j2khz
// let x = "abcdefghijklmnopqrstuvwxyz1234567890";
// x.charAt(Math.floor(Math.random() * x.length));
// let randomNumber = Math.floor(Math.random() * 101); // Generate a random number between 0 and 100
// let randomAlphabets = '';
// for (let i = 0; i < 4; i++) {
//     randomAlphabets += String.fromCharCode(97 + Math.floor(Math.random() * 26)); // Generate a random lowercase alphabet (ASCII code 97 to 122)
// }
// let result = randomNumber.toString() + randomAlphabets;

// console.log("Random ID :", result);
