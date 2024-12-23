// Exercise: Level 3

// 1. The following is an array of 10 students ages:
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
/////////////////// Answer //////////////////
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// ages.sort();
// console.log(`${ages[0]} is the min and ${ages[9]} is the max age`);

// let median;
// const middleIndex = Math.floor(ages.length / 2);
// if (ages.length % 2 === 0) {
//     median = (ages[middleIndex - 1] + ages[middleIndex]) / 2;
// } else {
//     median = ages[middleIndex];
// }
// console.log(median);

// Calculate the sum of all ages
// const sumOfAges = ages.reduce((total, age) => total + age, 0);
// const averageAge = sumOfAges / ages.length;
// console.log(averageAge);

// let min = ages[0];
// let max = ages[ages.length -1];
// let range = max - min;
// console.log(range);

// let minAvg = Math.abs(min - averageAge);
// let maxAvg = Math.abs(max - averageAge);
// console.log(minAvg);
// console.log(maxAvg);

const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda',
    'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain',
    'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan',
    'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria',
    'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde',
    'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros',
    'Congo (Brazzaville)', 'Congo', 'Costa Rica', "Cote d'Ivoire", 'Croatia', 'Cuba',
    'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic',
    'East Timor (Timor Timur)', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea',
    'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon',
    'Gambia, The', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala',
    'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland',
    'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica',
    'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South',
    'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya',
    'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi',
    'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius',
    'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Morocco', 'Mozambique',
    'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua',
    'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea',
    'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia',
    'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent', 'Samoa', 'San Marino',
    'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia and Montenegro', 'Seychelles',
    'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia',
    'South Africa', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden',
    'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga',
    'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine',
    'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan',
    'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
  ];
  
// console.log(countries.slice(0,10));

// 2. Find the middle country(ies) in the countries array
/////////// My code ///////////
// const middleIndex = Math.floor(countries.length / 2);
// console.log(middleIndex);
// console.log(countries[middleIndex]);
//////////// GPT code ///////////
// const middleIndex = Math.floor(countries.length / 2);
// if (countries.length % 2 === 0) {
//     // If the array has an even number of elements
//     const middleCountries = [countries[middleIndex - 1], countries[middleIndex]];
//     console.log("Middle countries:", middleCountries);
// } else {
//     // If the array has an odd number of elements
//     const middleCountry = countries[middleIndex];
//     console.log("Middle country:", middleCountry);
// }
// console.log(countries.length);

// 3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
// const devide = Math.floor(countries.length/2);
//     // If the array has an even number of elements
//     const firstHalf = countries.slice(0,devide);
//     const secondHalf = countries.slice(devide,countries.length);
//     console.log(firstHalf);
//     console.log(secondHalf); 
