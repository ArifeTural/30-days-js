
console.log("-------------EXERCISES 6  DAY --------------------------");

//!Seviye 1


//?1-while ve do while kullanarak 0 dan 10'a kadar giden bir döngü kurun.

// let i = 0
// while (i < 11) {
//   console.log(i)
//   i++
// }

// let i = 0
// do {
//   console.log(i)
//   i++
// } while (i <= 10)



//?2-while ve do while kullanarak 10 dan 0'a kadar giden bir döngü kurun.

let i =10
while(i >= 0){
    console.log(i);
    i--
}

//?3- 0'dan n' e kadar giden bir for döngüsü kurun.
for(let i = 0 ; i<= 10 ; i++){
    console.log("i",i);
}

//?4- Console.log() kullanarak aşağıdaki çıktıyı almayı deneyin.
let str = "";
for (let i = 1; i <= 7; i++) {
  str += "#";
  console.log(str);
}

//?5- Aşağıdaki çıktıyı almak için bir döngü kurun:

for(let i = 0; i <= 10; i++){
    console.log(`${i} * ${i} = ${i * i}`)
  }

//? 6-Aşağıdaki çıktıyı almak için bir döngü kurun:
console.log(`i    i^2   i^3`);
for(let i = 0; i<=10; i++){
    console.log(`${i}  ${i**2} ${i * (i**2)} `)
     }

//? 7-0'dan 100'e kadar olan çift sayıları bir döngü yardımı ile ekrana yazdırın.

for(let b = 0; b<=100; b++){
    if(b % 2 === 0){
        console.log(b);
    }
}

//? 8- 0'dan 100'e kadar olan tek sayıları bir döngü yardımı ile ekrana yazdırın
for(let b = 0; b<=100; b++){
    if(b % 2 === 1){
        console.log(b);
    }
}

//? 9- 0'dan 100'e kadar olan asal sayıları bir döngü yardımı ile ekrana yazdırın
for (let i = 2; i <= 100; i++) {
    if (i === 2 || i === 3 || i === 5 || i === 7) {
      console.log(i);
    } else if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
      console.log(i);
    }
  }
//? 10- 0 ile 100 arasındaki tüm sayıların toplamını ekrana yazıdırn


//? 11- 0 ile 100 arasındaki tek ve çift sayıların toplamını bulun

//!SEVİYE 2

//?Herhangi bir sayıda rastgele id numarası atayan bir fonksiyon yazın
function random(length) {
    // Karakter setimizi burada tanımlıyoruz.
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    // Rastgele karakter seçimi
    var str = '';
    for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return str;
};

console.log(random(4))
console.log(random(15))
console.log(random(20));




//?Rastgele hexadecimal sayı üreten bir fonksiyon yazın.
function deneme(length){
    let hexadecimal = "0123456789abcdef"
    let =  hex = "";
    for(let cd = 0; cd < length; cd++){
        str += hexadecimal.charAt(Math.floor(Math.random() * hexadecimal.length));

    }
     return hex;
}
console.log(deneme(4));


//? Rastgele bir rgb renk numarası oluşturan fonksiyon yazın.

let i = Math.floor (Math.random() * 256);
let j = Math.floor (Math.random() * 256);
let k = Math.floor (Math.random() * 256);
const rgb = function(i,j,k) {
    return `rgb(${i},${j},${k})`
}
console.log(rgb(i,j,k));


