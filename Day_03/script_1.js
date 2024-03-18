// Day 3: Exercises
// Exercises: Level 1

// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
// let firstName = "Meet";
// let lastName = "Kakadiya";
// let country = "India";
// let city = "Ahmedabad";
// let age = 22;
// let isMarried = "No";
// let year = 2024;
// console.log(typeof(year));

// 2. Check if type of '10' is equal to 10
// console.log(typeof('10')===typeof(10));

// 3. Check if parseInt('9.8') is equal to 10
// console.log(parseInt('9.8')===10);

// 4. Boolean value is either true or false.
//    i. Write three JavaScript statement which provide truthy value.
    //   let a = true;
    //   let b = 5;
    //   let c = "Meet";
//    ii. Write three JavaScript statement which provide falsy value.
    //   let a = false;
    //   let b = 0;
    //   let c = "";

// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// 4 > 3
// 4 >= 3
// 4 < 3
// 4 <= 3
// 4 == 4
// 4 === 4
// 4 != 4
// 4 !== 4
// 4 != '4'
// 4 == '4'
// 4 === '4'
// console.log(4==='4'); // with this console.log I am checking the result 

// 6. Find the length of python and jargon and make a falsy comparison statement.
// console.log('python'.length === 'jargon '.length); // both value has same chrctr so I put space at the end of the jargon to make it false 

// 7. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
// 4 > 3 && 10 < 12
// 4 > 3 && 10 > 12
// 4 > 3 || 10 < 12
// 4 > 3 || 10 > 12
// !(4 > 3)
// !(4 < 3)
// !(false)
// !(4 > 3 && 10 < 12)
// !(4 > 3 && 10 > 12)
// !(4 === '4')
// console.log(!(4 == '4'));
//There is no 'on' in both dragon and python
// console.log(('python', 'jargon').includes('on'))

// 7. Use the Date object to do the following activities
// const now = new Date();
// i. What is the year today?
//    console.log(now.getFullYear())

// ii. What is the month today as a number?
//    console.log(now.getMonth())

// iii. What is the date today?
//    console.log(now.toDateString())

// iv. What is the day today as a number?
//    console.log(now.getDate());

// v. What is the hours now?
//    console.log(now.getHours());

// vi. What is the minutes now?
//    console.log(now.getMinutes());

// vii. Find out the numbers of seconds elapsed from January 1, 1970 to now.
    // let seconds = Date.now() / 1000;
    // console.log(seconds);