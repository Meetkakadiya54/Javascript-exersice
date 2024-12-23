// Exercises: Level 2

// 1. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-79, B
// 60-69, C
// 50-59, D
// 0-49, F
////////////// Amswer ////////////
// let a = 68;
// if (80 <= a && a<= 100) {
//     console.log('Your grade is A.');
// } else if (70 <= a && a<= 79) {
//     console.log('Your grade is B.');
// } else if (60 <= a && a<= 69) {
//     console.log('Your grade is C.');
// } else if (50 <= a && a<= 59) {
//     console.log('Your grade is D.');
// } else {
//     console.log('Your grade is D.');
// }

// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
////////////////// Answer ////////////////////
// let months = "June";
// if (months == "September" || months == "October" || months == "November") {
//     console.log(`You have enter ${months} here and the season is Autumn`);
// } else if (months == "December" || months == "January" || months == "February") {
//     console.log(`You have enter ${months} here and the season is Winter`);
// }else if (months == "March" || months == "April" || months == "May") {
//     console.log(`You have enter ${months} here and the season is Spring`);
// }else if (months == "June" || months == "July" || months == "August") {
//     console.log(`You have enter ${months} here and the season is Summer`);
// }

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.
//     What is the day today? saturDaY
//     Saturday is a weekend.
//     What is the day today? Friday
//     Friday is a working day.
//     What is the day today? FrIDAy
//     Friday is a working day.
///////////////// Answer ////////////////////
// let day = "mOnday";
// let lowercaseDay = day.toLowerCase();
// if (lowercaseDay == "monday" || lowercaseDay == "tuesday" || lowercaseDay == "wensday" || lowercaseDay == "thursday" || lowercaseDay == "friday") {
//     console.log(`You have enter ${lowercaseDay} here and this is your working day.`);
// } else if (lowercaseDay == "saturday" || lowercaseDay == "sunday") {
//     console.log(`You have enter ${lowercaseDay} here and this is your weekend`);
// }