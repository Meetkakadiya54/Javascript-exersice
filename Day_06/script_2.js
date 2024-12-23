// Exercises: Level 2

// 1. Develop a small script which generate any number of characters random id:
//   fe3jo1gl124g
//   xkqci4utda1lmbelpkm03rba
///////////////// Answer ////////////////////
// const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
// const length = 10; // Change this value to generate a random string of different lengths
// let randomString = '';
// for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     randomString += characters.charAt(randomIndex);
// }
// console.log("Random string:", randomString);

// 2. Write a script which generates a random hexadecimal number.
// '#ee33df'
////////////////// Answer //////////////////
// const characters = "0123456789abcdef";
// let randomString = '#';
// for (let i = 0; i < 6; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     randomString += characters.charAt(randomIndex);
// }   
// console.log(randomString);

// 3. Write a script which generates a random rgb color number.
// rgb(240,180,80)
///////////// Answer //////////////
// const randomRgb = 'rgb('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')';
// console.log(randomRgb);

// 4. Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
///////////// Answer ///////////////////
// let countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// const newArray = [];
// for (let i = 0; i < countries.length; i++) {
//     newArray.push(countries[i][0].toUpperCase());
// }
// console.log(newArray);

// 5. Using the above countries array, create an array for countries length'.
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
// const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];
// let countriesLength = [];
// for (let i = 0; i < countries.length; i++) {
//     countriesLength.push(countries[i].length);
// };
// console.log(countriesLength);


// 6.Use the countries array to create the following array of arrays:
//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]
//////////////////// Answer /////////////////
// const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "ICELAND", "JAPAN", "KENYA"];
// let countriesLength = [];
// let countriesLength2 = [];
// let both = [];
// let firstThree = [];
// for (let i = 0; i < countries.length; i++) {
//     countriesLength.push(countries[i].slice(0, 1).toUpperCase());
//     countriesLength2.push(countries[i].slice(1,countries[i].length).toLowerCase());
//     both.push(countriesLength[i].concat(countriesLength2[i]));
//     firstThree.push(countries[i].slice(0, 3));
// }
// const newArray = [];
// for (let i = 0; i < countries.length; i++) {
//     newArray.push([ both[i], firstThree[i], countries[i].length ]);
// }
// console.log(newArray);

// 7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
// ['Finland','Ireland', 'Iceland']
///////////////////// Answer ///////////////////////
// const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "ICELAND", "JAPAN", "KENYA"];
// const inputWord = 'land';
// const lowecasecountries = countries.map(country => country.toLowerCase());
// let bee = lowecasecountries.filter(lowecasecountries => lowecasecountries.includes(inputWord.toLowerCase()));
// if (bee.length === 0) {
//     console.log("All these countries are without land");
// } else {
//     console.log(bee);
// }   

// 8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
// ['Albania', 'Bolivia','Ethiopia']
// const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "ICELAND", "JAPAN", "KENYA"];
// const inputWord = 'ia';
// const lowecasecountries = countries.map(countries => countries.toLowerCase());
// let bee = lowecasecountries.filter(lowecasecountries => lowecasecountries.includes(inputWord.toLowerCase()));
// if (bee.lenth === 0 ){
//     console.log("These are countries ends without ia");
// }else{
//     console.log(bee);
// }

// 9. Using the above countries array, find the country containing the biggest number of characters.
// Ethiopia
// const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "ICELAND", "JAPAN", "KENYA"];
// let longestCountry = '';
// let longestCountryLength = 0;
// for (const country of countries) {
//   if (country.length > longestCountryLength) {
//     longestCountry = country;
//     longestCountryLength = country.length;
//   }
// }
// console.log(`The country with the biggest number of characters is: ${longestCountry}`);

// 10. Using the above countries array, find the country containing only 5 characters.
// ['Japan', 'Kenya']
// const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "ICELAND", "JAPAN", "KENYA"];
// let countriesLength = [];
// let countriesLength2 = [];
// let both = [];
// let fiveCharCountries = [];
// for(let i = 0; i < countries.length; i++) {
// countriesLength.push(countries[i].slice(0, 1).toUpperCase());
// countriesLength2.push(countries[i].slice(1,countries[i].length).toLowerCase());
// both.push(countriesLength[i].concat(countriesLength2[i]));
// fiveCharCountries = both.filter(both => both.length === 5);
// }
// console.log(fiveCharCountries);

// // 11. Find the longest word in the webTechs array
// let webTechs = ["html", "css", "javascript", "vue", "react", "mongodb", "angular"];
// let longestWord = webTechs[0];
// for (let i = 0; i < webTechs.length; i++) {
//     if (webTechs[i].length > longestWord.length) {
//         longestWord = webTechs[i];
//     }
// }
// console.log(longestWord);

// 12. Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
let webTechs = ["html", "css", "javascript", "vue", "react", "mongodb", "angular"];

// 13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

// 14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

// 15.This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

// 16. Print all the elements of array as shown below.
//   const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]
//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB