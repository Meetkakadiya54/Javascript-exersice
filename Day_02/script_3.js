// Exercises: Level 3


// 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
// let str = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
// // console.log(str.length);
// console.log(str.split(' ').length);

// 2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// let str = 'You cannot end a sentence with because because because is a conjunction';
// console.log(str.match(/because/gi).length); // g = Global & i = case-insesitive

// 3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).
// const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

// method : 1
// let str = sentence.replace(/%/g,"").replace(/@/g,"").replace(/#/g,"").replace("$"," ").replace(/&/g,"").replace(/;/g,"").replace(/!/g,"");
// let newstr = ""
// for (let I = 0; I < str.length; I++) {
//     const x = str[I];
//     if(x=="$"){
//         continue
//     }else{
//         newstr += x
//     }
// }
// console.log(newstr);

// method : 2 is working but $ is not removed from the sentence
// let str = sentence.replace(/%/g,"");
// let str1 = str.replace(/@/g,"");
// let str2 = str1.replace(/#/g,"");
// let str3 = str2.replace(/$/g,"");
// let str4 = str3.replace(/&/g,"");
// let str5 = str4.replace(/;/g,"");
// let str6 = str5.replace(/!/g,"");
// console.log(str6);

// 4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
// let str = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
// Method : 1 
// let strsolve = str.match(/\d+/g);
// let total = Number(strsolve[0]*12) + Number(strsolve[1]) + Number(strsolve[2]*12);
// console.log(total);
// Method : 2
// let strsolve = str.split(" ");
// let total = Number(strsolve[2]*12) + Number(strsolve[8]) + Number(strsolve[12]*12);
// console.log(total);