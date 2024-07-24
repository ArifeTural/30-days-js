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



