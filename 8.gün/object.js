const user ={}

console.log(user);

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    getFullName: function() {
      return `${this.firstName}${this.lastName}`
    },
    'phone number': '+3584545454545'
  }

  console.log(person);


  console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.location) // undefined

// kçşeli parantez kullanarak
console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])
console.log(person['age'])
console.log(person['location']) // undefined

// örneğin, telefon numarasına erişmek için yalnızca köşeli parantez yöntemini kullanırız
console.log(person['phone number'])

// console.log(Object.entries(person));

for(let [key,val] of  Object.entries(person)){

    console.log(`key = ${key} - value = ${val}`);
}

console.log("-------------EXERCISES 8  DAY --------------------------");


//! SEVİYE 1


//? 1-Create an empty object called dog
 
// const dog = {}

//? 2- Print the the dog object on the console

// console.log(dog);

//? 3-Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

const dog ={
    name: "Karabaş",
    age: 3,
    legs: 4,
    color: "white-black",
    bark: function(){
        return "woof woof"
    }

}

console.log(dog.bark());

//? 4- Get name, legs, color, age and bark value from the dog object

console.log(dog, dog.bark());

//? 5- Set new properties the dog object: breed, getDogInfo

dog.breed= "Sokak Köpeği",
dog.getDogInfo = function() {
    return `name: ${this.name},age: ${this.age}, legs: ${this.legs}, color: ${this.color} , breed: ${this.breed}`;
}

console.log(dog, dog.bark(), dog.getDogInfo());

//! SEVİYE 2

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

  //? 1-Find the person who has many skills in the users object.

  let maxSkillsUser = '';
  let maxSkillsCount = 0;

for (let user in users) {
  if (users[user].skills.length > maxSkillsCount) {
    maxSkillsCount = users[user].skills.length;
    maxSkillsUser = user;
  }
}

console.log(`Max Skill User: ${maxSkillsUser}`);

//? 2- Count logged in users, count users having greater than equal to 50 points from the following object.



let kullanici = 0;
let ellipuan = 0;

for (let user in users) {
  if (users[user].isLoggedIn) {
    kullanici++;
  }
  if (users[user].points >= 50) {
    ellipuan++;
  }
}

console.log(`Giriş yapmış kullanıcı sayısı: ${kullanici}`);
console.log(`Puanı 50 veya daha fazla olan kullanıcı sayısı: ${ellipuan}`); 

//? 3-Find people who are MERN stack developer from the users object

//?4-Set your name in the users object without modifying the original users object

const newUser = {
    Arife: {
      email: 'arifrgv@gmail.com',
      skills: ['HTML', 'CSS', 'JavaScript',],
      age: 29,
      isLoggedIn: true,
      points: 30
    }
  };
  
  const updatedUsers = Object.assign({}, users, newUser);
  
  console.log(updatedUsers);
  

  console.log(users);

  //? 5-Get all keys or properties of users object

  const keys = Object.keys(users);
  console.log(keys);

  //? 6-Get all the values of users object

  const values = Object.values(users);
  console.log(values);

  //? 7- Use the countries object to print a country name, capital, populations and languages.

  const country= {
     Turkey: {
        capital: 'Ankara',
        population: 80000000,
        languages: "Turkish"
     },
     Japan: {
        capital: 'Tokyo',
        population: 126000000,
        languages: "Japanese"
      },
      SouthKorea: {
        capital: 'Seoul',
        population: 51700000,
        languages: "Korean"
      },
      Germany: {
        capital: 'Berlin',
        population: 83700000,
        languages: "German"
      }


  }

  console.log(country);

  //! SEVİYE-3
  //? 1- Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.


  const usersss = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

// sorular çok uzuzn sonra bak



  

