function multiply(num1, num2,){
    
    return num1 * num2
}

let num1 = 5, 
    num2 = 2
let total = multiply(num1, num2)




function sumArrayValues(array){
    let total = 0
    for(let i = 0; i < array.length; i++){
        total += array[i]
    }
    return total

}
let dizi = [2,4,6,8,10,20]

console.log('total',sumArrayValues(dizi));

function topla(){
    let total = 0
    for(let i = 0; i < arguments.length; i++){
        topla += arguments[i]
    }
    return total

}

topla(2,5,7,9,10)


const sayHello = function(name){
    return `Hello ${name}`
}
console.log(sayHello("tayfun"));


let say=(function(name){
    console.log(`hello ${name}`);
})("arife");


const hello2 = (name,surname) => `hola ${name} ${surname}`


console.log(hello2("selim","tural"));


console.log("-------------EXERCISES 7 DAY --------------------------")

//!SEVİYE 1

//? 1-Declare a function fullName and it print out your full name.
function fullName (a,b){
   console.log("arife","tural");
}

fullName()

//? 2-Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName2 (){
    let firstName = "Arife "
    let lastName = "Tural"
    full = firstName + lastName
    console.log(full);
    
 }
 
 fullName2()


//? 3-Declare a function addNumbers and it takes two two parameters and it returns sum.

function toplam (){

    let a= 12
    let b = 17
    console.log(a+b);

}

toplam()


//? 4-An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

 function areaOfRectangle() {
       let uzunluk = 20
       let genislik = 30
       let area = uzunluk * genislik
       console.log(area);

}
areaOfRectangle()

//? 5-A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function areaOfRectangle1() {
    let uzunluk = 20
    let genislik = 30
   
    console.log((uzunluk * genislik)*2);

}
areaOfRectangle1()


//? 6- A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

const volume = () => {
    return 3 * 2 * 4
  }
  
 console.log(volume(3));

//? 7- Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(){
    let r = 6
    let area = Math.PI * (r * r)
    console.log(area);
}
areaOfCircle()

//? 8-Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function areaOfCircle2(){
    let r = 6
    let area = 3.14 * r * 2
    console.log(area);
}
areaOfCircle2()

//? 9-Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

function yogunluk (){
    let kütle = 30
    let hacim = 11
    let yogunluk = kütle / hacim
    console.log(yogunluk);
}
yogunluk()

//? 10 -Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

const hiz = () => {
    return 200/ 2
  }
  
 console.log(hiz(2));

 //? 11- Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

 function agirlik (){
    let kutle = 115
    let yerCekimi = 8
    let hesap = kutle * yerCekimi
    console.log(hesap);
 }

 agirlik()

 //? 12- Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

function oF (){
    let oC = 120
    let cevirme =oC + 273.15
    console.log(cevirme);
}
oF()



 //? 13- Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

 function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    return bmi;
  }
  
  function getWeightCategory(bmi) {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }
  

  const weight = 80; 
  const height = 1.90; 
  
  const bmi = calculateBMI(weight, height);
  const category = getWeightCategory(bmi);
  
  console.log(`BMI: ${bmi.toFixed(2)}`);
  console.log(`Weight Category: ${category}`);
  
 //? 14- Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

 function mevsimler (aylar){

   aylar = aylar.toLowerCase();

    if (aylar === "aralık" || aylar === "ocak" || aylar === "şubat") {
      return "kış"
        
    }
     else if(aylar === "mart" || aylar === "nisan" || aylar === "mayıs") {
        return "ilkbahar"
        
    }
     else if(aylar === "haziran" || aylar === "temmuz" || aylar === "ağustos") {
        return "yaz"
        
    }
     else if(aylar === "eylül" || aylar === "ekim" || aylar === "kasım") {
        return "sonbahar"
        
    }
    else {
        return "geçerli ay giriniz"
    }
 
 }

 console.log(mevsimler("ocak"));
 console.log(mevsimler("nisan"));
 console.log(mevsimler("temmuz"));
 console.log(mevsimler("kasım"));
 console.log(mevsimler("hello"));

 //? 15- Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.


 function findMax (a,b,c){
    let max = a

    if (b > max){
        max = b
    }
    else if  (c > max){
        max = c
    }

    return max ;
 }

 console.log(findMax(12,34,23));

 
//!SEVİYE 2

//? 1- Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.


//? 2-Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.


//?3-Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

// function printArray (array){
//    for(let i = 0; i < array.length; i++){
//     console.log(array[i]);

//    }
 
// }
// let myArray =[1,5,2,56,89,43]
// printArray(myArray)


//? 4- Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

function showDateTime() {
    const now = new Date();
    
    let  year = String(now.getFullYear());
    let month = String(now.getMonth() + 1);
    let day =   String(now.getDate());



    let hour =   String(now.getHours());
    let minute = String(now.getMinutes());
    

    let formatDate = `${day}/${month}/${year}  ${hour}:${minute}`

    console.log(formatDate);

  }
  showDateTime();

  //?5-Declare a function name swapValues. This function swaps value of x to y.

  //? 6- Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

  function reverseArray(array) {
    let sum = [];
    for (let i = array.length - 1; i >= 0; i--) {
      sum.push(array[i]);
    }
    
    return sum
  }
  let myArray = [1, 2, 3, 4, 5];
  let reversed = reverseArray(myArray);
  console.log(reversed);

  //?7-Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

  function capitalizeArray (buyuk){
    for(let i = 0; i < buyuk.length; i++){
        console.log(buyuk[i].toUpperCase());

    }
  }
  let buyukArray = ["arife","selim","tural"]
  capitalizeArray(buyukArray)


  //? 8- Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

  let items = []

  function addItem (item){
    items.push(item)
    return items
  }

  console.log(addItem("kuş"));
  console.log(addItem("ördek"));
  console.log(addItem("kaz"));
  console.log(addItem("flamingo"));

  //? 9-Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
  let removeItem = ["gül","karanfil","lale","papatya","yasemin"]

  function remove (index, item){
    removeItem.splice(index, 1, item)
    return removeItem
  }
  console.log(remove(1, "elma"));
  console.log(remove(0, "hello"));
  console.log(remove(4, "kiraz"));


  //? 10- Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

  function sumOfNumbers (para){
     let sum = 0
     for(let i = 0 ; i <= para ; i++){
        sum+= i
     }
      return sum ;
  }


  console.log(sumOfNumbers(10));
  console.log(sumOfNumbers(100));
  

//?11- Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

function tek (n) {
  let sum = 0;
  for(let i = 0; i <= n; i++){
   if(i % 2 === 1){
    sum += i
    

   }
  }
  return sum;
 
}

console.log(tek(5));
console.log(tek(67));
console.log(tek(20));



//? 12- Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

function cift (x) {
  let sayi = 0;
  for(let i = 0; i <= x; i++){
   if(i % 2 === 0){
    sayi += i
    

   }
  }
  return sayi;
 
}
console.log(cift(20));
console.log(cift(78));
console.log(cift(9));


//?13-Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

function evensAndOdds(n) {
  let evens = 0;
  let odds = 0;
  
  for (let i = 0; i <= n; i++) {
      if (i % 2 === 0) {
          evens++;
      } else {
          odds++;
      }
  }
  
  return { evens: evens, odds: odds };
}

// Örnek kullanım
console.log(evensAndOdds(100));  
console.log(evensAndOdds(15));


//? 14-Write a function which takes any number of arguments and return the sum of the arguments

function herhangi (){
  let toplam = 0 
  for(let i = 0; i < arguments.length; i++){
  toplam += arguments[i]
  }
  return toplam;


}

console.log(herhangi(20,12,45));

//? 15-Write a function which generates a randomUserIp.

//? 16-Write a function which generates a randomMacAddress

//? 17- Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.


function onAltılık (n){
  let hexadecimal = "0123456789abcdef" 
  let hex = ""
  for(let i=0; i < n ; i++){
    hex += hexadecimal.charAt(Math.floor(Math.random() * hexadecimal.length))
  }
  return hex;
}
console.log(onAltılık(9));
console.log(onAltılık(5));
console.log(onAltılık(11));

//? 18- Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

function userIdGenerator(length) {
 
  let tanım = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  let random = '';
  for (let i = 0; i < length; i++) {
      random += tanım.charAt(Math.floor(Math.random() * tanım.length));
  }

  return random;
};

console.log(userIdGenerator(4))
console.log(userIdGenerator(15))
console.log(userIdGenerator(20));


  

