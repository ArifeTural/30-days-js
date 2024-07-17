// let numone = 3
// let numtwo = 3
// console.log(numone == numtwo);

// let js = "javascript"
// let py = "pyton"
// console.log(js==py);


// let lighton= true

// let lightof= false

// console.log(lighton==lightof);

// let nums = [1, 2, 3]
// nums[0] = 10
// console.log(nums) 

// let numss = [1, 2, 3]
// let numbers = [1, 2, 3]
// console.log(numss == numbers) // false

// let userOne = {
//   name: 'Asabeneh',
//   role: 'teaching',
//   country: 'Finland'
// }
// let userTwo = {
//   name: 'Asabeneh',
//   role: 'teaching',
//   country: 'Finland'
// }
// console.log(userOne == userTwo) 


// let numberss = nums
// console.log(nums == numberss)  // true

// let userOne = {
// name:'Asabeneh',
// role:'teaching',
// country:'Finland'
// }
// let userTwo = userOne
// console.log(userOne == userTwo)  // true



let random= Math.floor(Math.random()*10)

console.log(random);

// let age =29
// let space = ' '
// let firstName = 'arife'
// let lastName = 'tural'
// let country = 'Finland'
// let city = 'Helsinki'
// let language = 'JavaScript'
// let job = 'teacher'
// // Concatenating using addition operator
// let fullName = firstName + space + lastName // concatenation, merging two string together.
// console.log(fullName)

// let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country // ES5
// console.log(personInfoOne)


// // Concatenation: Template Literals(Template Strings)
// let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
// let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
// console.log(personInfoTwo)
// console.log(personInfoThree)

// let love = "selimtural"

// console.log(love[1] );

// console.log(love.toUpperCase());


// console.log(love.substring(4,9));

// console.log(love.split(""));
// console.log(love.split("").reverse());
// console.log(love.split("").reverse().join(""));

console.log("-------------EXERCISES 2  DAY --------------------------");
//!Seviye 1:

let challenge = "30 Days Of JavaScript"
console.log(challenge);
console.log(challenge.length);

challenges= challenge.toUpperCase()
console.log(challenges);

challengess= challenge.toLowerCase()
console.log(challengess);

console.log(challenge.substring(3));

console.log(challenge.includes("Script"));

console.log(challenge.split());

console.log(challenge.split(""));


console.log(challenge.replace("JavaScript", "Python"));

console.log(challenge.charAt(15));

console.log("JavaScript'in 30 Gunu".charCodeAt("J"));  //??

console.log(challenge.indexOf("a"));

console.log(challenge.lastIndexOf("a"));

let cumle = " Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır "

console.log(cumle.indexOf("çünkü"));

console.log(cumle.lastIndexOf("çünkü"));

console.log(cumle.search("çünkü"));

console.log(cumle);
console.log(cumle.trim());

console.log(challenge.startsWith(""));

console.log(challenge.endsWith(""));

console.log(challenge.match(/a/g));

let part1 = '30 Days of';
let part2 = 'JavaScript';
console.log(part1.concat(' ', part2));

console.log(challenge.repeat(8));


//! seviye-2

console.log("'There is no exercise  better for the heart than reaching down and lifting people up.' by Jhon Holmes teaches us to help one another");

console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

let on = "10"
let onn = 10

console.log(on === onn);
console.log(+on === onn);


console.log(Math.ceil(parseFloat("9.8")) === 10); //??

let py = "Paython Jargon"
console.log(py.search(/on/g));


let ag = "Umarım bu kurs jargonla dolu değildir"
console.log(ag.includes("jargon"));

console.log(Math.random()*100);

console.log(Math.floor(Math.random() * 51) + 50);

console.log(Math.random()*256);

let jd ="javascrit"
console.log(jd.length);

console.log(Math.ceil(Math.random()*10));

console.log(`

1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
`);

let cml ="Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır"

console.log(cml.indexOf("çünkü çünkü"));
console.log(cml.substring(37,49));


//! Seviye 3

// !let love ="aşk bu dünyadaki en iyi şeydir. Bazıları aşkını buldu ve bazıları hala aşkını arıyor."

//! let count = (love.match(/love/gi) || []).length;
//! console.log(count);



let sy ="Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır"

let syy =(sy.match(/çünkü/gi))

console.log(syy);

let aylik =15000 *12

let birkerelik = 10000

let ikramiye =5000 *12

console.log(aylik + birkerelik + ikramiye);








