// Exercise: Level 1

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

// 1. Declare an empty array;
// let array = [];
// console.log(array);

// 2. Declare an array with more than 5 number of elements
// let arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr);

// 3. Find the length of your array
// console.log(arr.length); // uncomment no 4 array

// 4. Get the first item, the middle item and the last item of the array
// console.log(arr[0], arr[5], arr[9]);  // uncomment no 4 array

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
// const arr = [5,"meet", 5.66, undefined, null ,Symbol,{name : "meet", age : 22},true];
// console.log(arr);
// console.log(arr[7]);

// 6. Declare an array variable name it Companies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// 7. Print the array using console.log()
// console.log(companies);

// 8. Print the number of companies in the array
// console.log(`No of companies : ${companies.length}`);

// 9. Print the first company, middle and last company
// console.log(companies[0], companies[3], companies[6]);

// 10. Print out each company
// console.log(companies);

// 11. Change each company name to uppercase one by one and print them out
// let uppercaseCompanies = companies.map(str => str.toUpperCase());
// console.log(uppercaseCompanies);

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// const arr = ['Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.'];
// console.log(arr);

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
///////// Method 1 /////////
// const res = companies.find(x=> x === a  )
// if (res)
//     console.log(`${a}, match has found`)
//  else
//     console.log(`${a} this is not found here`);
///////// Method 2 /////////
//  const item = companies.find(companies => companies === "Microsoft");
//  console.log(item, "match has found");
// if(item = companies.find(companies => companies === "Microsoft")){
//     console.log(item, "match has found");
// }else{
//     console.log("does not match the company");
// }
 //////////// Method 3 //////////
// const itCompanies = companies.filter(companies => companies === "Microsoft");
// console.log(itCompanies, "match has found");

// 14. Filter out companies which have more than one 'o' without the filter method
///////// tuff to understand ////////
// let oo = []
// for (let i = 0; i < companies.length; i++) {
//     oo.push(companies[i].includes("oo"));
// }
// console.log(oo);

// 15. Sort the array using sort() method
// console.log(companies.sort());

// 16. Reverse the array using reverse() method
// console.log((companies.sort()).reverse());

// 17. Slice out the first 3 companies from the array
// console.log(companies.slice(0,3));

// 18. Slice out the last 3 companies from the array
// console.log(companies.slice(3,6));

// 19. Slice out the middle IT company or companies from the array
// console.log(companies.slice(1,6));

// 20. Remove the first IT company from the array
// console.log(companies.shift());
// console.log(companies);

// 21. Remove the middle IT company or companies from the array
// console.log(companies.splice(1,5));
// console.log(companies);

// 22. Remove the last IT company from the array
// console.log(companies.pop());

// 23. Remove all IT companies
// console.log(companies.splice(0,companies.length));
// console.log(companies);