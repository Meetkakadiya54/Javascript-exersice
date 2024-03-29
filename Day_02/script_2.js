// Exercise: Level 2


// 1. Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
// console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.');

// 2. Using console.log() print out the following quote by Mother Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
// console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
// console.log(typeof(10) === 'number');
// console.log(10 === 'number');

// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
// console.log(parseFloat(Math.round('9.8')) === 10);

// 5. Check if 'on' is found in both python and jargon
// console.log('python and jargon'.includes('on'));

// 6. I hope this course is not full of jargon. Check if jargon is in the sentence.
// console.log('I hope this course is not full of jargon.'.includes('jargon'));

// 7. Generate a random number between 0 and 100 inclusively.
// console.log(Math.floor(Math.random(100)*100));

// 8. Generate a random number between 50 and 100 inclusively.
// console.log(Math.floor(Math.random()* (100 - 50 + 1) + 50));

// 9. Generate a random number between 0 and 255 inclusively.
// console.log(Math.floor(Math.random(255)*100));

// 10. Access the 'JavaScript' string characters using a random number.
// let string = 'JavaScript'
// console.log(string.charAt(0));

// 11. Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
// console.log(1 ,1, 1, 1, 1);
// console.log(2 ,1 ,2 ,4 ,8);
// console.log(3 ,1 ,3 ,9 ,27);
// console.log(4 ,1 ,4 ,16 ,64);
// console.log(5 ,1 ,5 ,25 ,125);

// 12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
// method-1
// let str = 'You cannot end a sentence with because because because is a conjunction';
// let getstr = "because because because"
// let getIndex = str.indexOf("because because because")
// let lastIndex = getIndex + getstr.length
// let sub_str = str.substring(getIndex,lastIndex);
// console.log(sub_str);

// Method-2
// let str = 'You cannot end a sentence with because because because is a conjunction';
// console.log(str.length);
// console.log(str.indexOf("b"));
// console.log(str.lastIndexOf("is"));
// console.log(str.substring(31,55));