
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
let sum = 0
for(let t = 0; t <= 100; t++){
  sum += t

}
console.log(sum);

//? 11- 0 ile 100 arasındaki tek ve çift sayıların toplamını bulun
let tek = 0
let cift =0
for(let g = 0; g <=100; g++){
  if( g % 2 === 0){
    cift += g
  }
 
else{
  tek += g
}
 }
 console.log(cift);
 console.log(tek);


 console.log(`tek ve çift sayıların toplamı: ${cift} + ${tek} = ${cift + tek}`);
 
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
let p = Math.ceil (Math.random() * 255);
let j = Math.ceil (Math.random() * 255);
let k = Math.ceil (Math.random() * 255);

const rgb = function(p,j,k) {
  return`rgb(${p},${j},${k})`
}
console.log(rgb(p,j,k));

//?Yukarıdaki array'i kullanarak rastgele yeni bir dizi oluşturun.
let ulke = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

//?Yukarıdaki array'i kullanarak ülkelerin harf uzunluklarını içeren bir dizi olşturun'.
let ulkeUzunluk = [ulke[0].length, ulke[1].length, ulke[2].length, ulke[3].length,ulke[4].length, ulke[5].length, ulke[6].length, ulke[7].length, ulke[8].length, ulke[9].length, ulke[10].length,]


console.log(ulkeUzunluk);

//?Yukarıdaki diziyi kullanarak aşağıdaki diziyi oluşturun:

// for(let i = 0; i<= ulke.length; i++){

//   console.log(`[${ulke[i]}, ${ulke[i].slice(0,3)} ,${ulke[i].length}]`);
  
//   }


//?Yukarıdaki ülkeler dizisinde "land" sözcüğünü içeren bir ülke veya ülke olup olmadığını kontrol edin. "land" içeren ülkeler varsa bunu dizi halinde yazdırın.

let landIceriyor = ulke.filter(country => country.includes("LAND"));
console.log(landIceriyor);

//?Yukarıdaki ülkeler dizisinde "ia" sözcüğünü içeren bir ülke veya ülke olup olmadığını kontrol edin. "ia" içeren ülkeler varsa bunu dizi halinde yazdırın..


let aiIceriyor = ulke.filter(Aİulke => Aİulke.includes("IA"));
console.log(aiIceriyor);

//?Yukarıdaki ülkeler dizisini kullanarak en fazla karakter içeren ülkeyi bulun.

let enUzunUlke = ulke.reduce((enUzun, current) => {
    // Eğer current'in uzunluğu enUzun'un uzunluğundan büyükse, current'i döndür.
    // Aksi takdirde, enUzun'u döndür.
    return current.length > enUzun.length ? current : enUzun;
}, ""); // "" başlangıç değeridir.

console.log(enUzunUlke);

//?Yukarıdaki ülkeler dizisini kullanarak, yalnızca 5 karakter içeren ülkeyi bulun.


let bess = ulke.filter(cont => cont.length === 5);
console.log(bess);


//! seviye 3





