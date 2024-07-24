const fonksiyon = number => number ** 2

function cube(cb, number) {
    return cb(number) * number
}

console.log(cube(fonksiyon,3));


const a = s1 => { 
    const b = s2 =>{
        const c =s3 =>{
            return s1 + s2+ s3
        }
        return c
    }
    return b
}

console.log(a(5)(10)(20));

const numbers = [1,2,3,4,5,6,7,8,9]
let total = 0
numbers.forEach(number =>total += number)
console.log(total);



//  function sayHello(){
//     console.log("hello!");
// }
// const interval =setInterval(sayHello,1000);

// const timeout =setTimeout(()=>{
//     clearInterval(interval)
//     console.log("interval işlemiiptal edildi.");
// }, 5000)

// setTimeout(()=>{
//     clearTimeout(timeout)
//     console.log("timeout işlemi iptal edildi, interal devam edecek..");
// },4000)

const numbers2 = numbers.map(number => number *2)
console.log(numbers2);

let userss =[
    {
        id:1,
        name:"tayfun",
        age:29,
        gender: 1
    },
    {
        id:2,
        name:"ahmet",
        age:24,
        gender: 1
    },
    {
        id:3,
        name:"mehmet",
        age:29,
        gender: 1
    },
    {
        id:4,
        name:"zerafet",
        age:29,
        gender: 2

    }
]

userss = userss.map(user => {
    if(user.id === 2){
        user.name = "hakan"
    }
    return user
})
console.log(userss);


const women = userss.filter(user=> user.gender ===2)
const men = userss.filter(user=> user.gender ===1)

console.log(women);
console.log(men);


const num = [1,3,5,7,9]

console.log(
    num.reduce((oldValue, CurrentValue) => { oldValue + CurrentValue},0)
);



console.log("-------------EXERCISES 9  DAY --------------------------");

//! SEVİYE 1

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//? 3-Use forEach to console.log each country in the countries array.

countries.forEach(land => {console.log(land);
  });

 //?4-Use forEach to console.log each name in the names array.

names.forEach(isim =>{console.log(isim);})

//? 5-Use forEach to console.log each number in the numbers array.
numberss.forEach(numara =>{console.log(numara);})

//?6-Use map to create a new array by changing each country to uppercase in the countries array.

const ulke = countries.map(ulkeler => ulkeler.toUpperCase());

console.log(ulke);

//?7-Use map to create an array of countries length from countries array.

const newCountry = countries.map(country => country.length);

console.log(newCountry);

//? 8-Use map to create a new array by changing each number to square in the numbers array

const newnumber= numberss.map(num => num * 2);

console.log(newnumber);

//? 9-Use map to change to each name to uppercase in the names array

const newNames = names.map( isim => isim.toUpperCase());

console.log(newNames);

//? 10-Use map to map the products array to its corresponding prices.

pro = products.map((pro) =>pro.price)

console.log(pro);

//? 11-Use filter to filter out countries containing land.

const newLand = countries.filter(country => country.includes('land') || country.includes('Land') )

console.log(newLand);

//? 12-Use filter to filter out countries having six character.

const lands = countries.filter(country => country.length === 6)
console.log(lands);

//? 13- Use filter to filter out countries containing six letters and more in the country array.

const landss = countries.filter(country => country.length >=6)
console.log(landss);

//? 14- Use filter to filter out country start with 'E';

const E = countries.filter(country => country.startsWith('E'));

console.log(E);

//? 15-Use filter to filter out only prices with values.

const productsWithValidPrices = products.filter(item => typeof item.price === 'number');

console.log(productsWithValidPrices);


