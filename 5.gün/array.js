// let names = Array(5)
// console.log(names);

// let names2= [1,2,4,56,34,12,]
// console.log(names2.length);

// let ad ="Tayfun,"

// console.log(ad.split(""));

// console.log(names2[3]);

// names2[0] = "Arife"
// console.log(names2);

// let birlestir = ad.concat(names2)
// console.log(birlestir);

// console.log(names2.includes("Arife"));

// console.log(names2.lastIndexOf(4));



console.log("-------------EXERCISES 1  DAY --------------------------");

//! SEVİYE 1

//? boş bir dizi yaratın;
let arr = Array(10)
console.log(arr);


let myArr = []
console.log(myArr);

//?Eleman sayısı 5'ten fazla olan bir dizi yaratın.

let fa = ["arife","selim",95,93,4,"hi","clarusway",[1,2,3]]
console.log(fa);

//?Yarattığınız dizinin uzunluğunu bulun ( length ).

console.log(fa.length);

//?Dizinizdeki ilk elemanı, ortadaki elemanı ve sondaki elemanı bulun.

console.log(fa[0]);
console.log(fa[3]);
console.log(fa[7]);
console.log(fa[fa.length-1]);

//? mixedDataTypes adında bir dizi yaratın,dizinin içine farklı veri tiplerinde elemanlar koyun ve bu dizinin uzunluğunu bulun. Dizinin uzunluğu 5'ten büyük olmalıdır.

// let mixedDataTypes = ["tural",true,12,{obje},[12,23,45]]

//?ItCompanies adlı bir dizi değişkeni oluşturun ve Facebook, Google, Microsoft, Apple, IBM, Oracle ve Amazon'a başlangıç değerleri atayın.

 let ItCompanies=["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log(ItCompanies);

console.log(ItCompanies[0]);
console.log(ItCompanies[1]);
console.log(ItCompanies[2]);
console.log(ItCompanies[3]);
console.log(ItCompanies[4]);
console.log(ItCompanies[5]);
console.log(ItCompanies[ItCompanies.length-1]);

console.log(ItCompanies[0].toUpperCase());
console.log(ItCompanies[1].toUpperCase());
console.log(ItCompanies[2].toUpperCase());
console.log(ItCompanies[3].toUpperCase());
console.log(ItCompanies[4].toUpperCase());
console.log(ItCompanies[5].toUpperCase());
console.log(ItCompanies[6].toUpperCase());

const word = ["Are the big It companies"]
let word1 = ItCompanies.join(",")
let word2 = word.join(" ")

console.log(word2.concat(word));


console.log(ItCompanies.includes("Apple"));
console.log(ItCompanies.includes("App"));

//?Birden fazla 'o' harfi içeren şirketleri filter metodunu kullanmadan filtreleyin.


//?sort() metodunu kullanarak diziyi sıralayın. 
//?reverse() metodunu kullanarak diziyi tersine çevirin.

console.log(ItCompanies.sort().reverse());

//?Diziden ilk 3 şirketi dilimleyin ( Slice edin ).
//?Diziden son 3 şirketi dilimleyin ( Slice edin ).

console.log(ItCompanies.slice(0,3));

console.log(ItCompanies.slice(4));

//?Ortadaki IT şirketini ya da şirketlerini diziden dilimleyin ( Slice edin ).

console.log(ItCompanies.slice(3,4));

//? İlk IT şirketini diziden kaldırın.

console.log(ItCompanies.shift());

//?Sondaki IT şirketini diziden kaldırın.
console.log(ItCompanies.splice(3,1));

console.log(ItCompanies);

//?Bütün IT şirketlerini kaldırın.

console.log(ItCompanies.splice(0));

console.log(ItCompanies);


//!SEVİYE 2 

//? Ayrı bir country.js dosyası oluşturun ve country dizisini bu dosyaya kaydedin, ayrı bir web_techs.js dosyası oluşturun ve webTechs dizisini bu dosyaya kaydedin. Daha sonra Main.js dosyasından her iki dosyaya da erişim sağlayın.

//?Önce bütün noktalama işaretlerini kaldırın ve ve string ifadeyi dizi olarak değiştirin ve dizideki kelime sayısını sayın.


let  text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

text1 = text.replaceAll(","," ").replaceAll("."," ")
text2 = text1.split(" ")

console.log(text2);

//? Aşşağıdaki alışveriş sepetindeki elemanları ekleyin, silin , düzenleyin.

const  shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift("meat")

console.log(shoppingCart);

shoppingCart.pop()

shoppingCart.push("sugar")

console.log(shoppingCart);

shoppingCart[3] = "Green Tea"

//?Aşağıdaki iki değişkeni birleştirin ve bir fullStack değişkeninde atayın.


const  frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']

const  backEnd = ['Node','Express', 'MongoDB']

let fullStack = frontEnd.concat(backEnd)

console.log(fullStack)

//!SEVİYE 3
//?Diziyi sıralayın ve en küçük ve en büyük yaşı bulun
const  ages = [19, 22, 19, 24, 20, 25, 34, 35, 34, ]

let ages1 = ages.sort()

console.log(ages1);




//?Medyan yaşı bulun(dizinin ortasındaki eleman ama ortada iki eleman varsa elemanlar ikiye bölünür.

console.log(ages1.length); //10



if(ages1.length % 2 === 1){
let S = (ages1.length +1)/2
   console.log(ages1[S]);
}
else{
    let SE = (ages1.length )/2
    let SEL = SE + 1
    console.log((ages1[SE] + ages1[SEL]) / 2);
}

//?Ortalama yaşı bulun(tüm elemanlar eleman sayısına bölünür)

let toplam = ages1[0] + ages1[1] +ages1[2] +ages1[3] +ages1[4] +ages1[5] +ages1[6] +ages1[7] 

console.log(toplam / 8);


//?Yaş aralığını bulun (maks - min)

console.log(ages1[8] - ages1[1]);



































