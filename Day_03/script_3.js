// // 1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// //    i. YYY-MM-DD HH:mm eg. 20120-01-02 07:05
// let now = new Date();
// let year = now.getFullYear();
// let month = now.getMonth();
// let date = now.getDate();
// let hours = now.getHours();
// let minutes = now.getMinutes();

// // Add leading zeros if needed
// year = (year < 10 ? '0' : '') + year;
// month = (month < 10 ? '0' : '') + month;
// date = (date < 10 ? '0' : '') + date;
// hours = (hours < 10 ? '0' : '') + hours;
// minutes = (minutes < 10 ? '0' : '') + minutes;

// const formattedTime = year+ '-' +month+ '-' +date+ " " +hours+ ':' + minutes;
// console.log(formattedTime);