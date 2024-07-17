// console.log("ahmet" === "mehmet".length);


// let result = 5 > 8 ? "evet beş büyüktür" : "hayır senin matematiğini seveyim";

// console.log(result);
// let isDelete = confirm("silmek istediğine emin misin?")

// console.log(isDelete ? "silme işlemi başarılı" : "silme işlemi iptal edildi");


// const date = new Date()

// console.log(date);


// console.log(date.getFullYear());

// console.log(date.getHours())


// const date = new Date()

// let year = date.getFullYear(),
//     month =date.getMonth(),
//     day = date.getDay(),
//     hour = date.getHours(),
//     minute =date.getMinutes(),
//     second = date.getSeconds(),
//     dayNumber = date.getDay()


//   let months = [
//     "ocak",
//     "şubat",
//     "mart",
//     "nisan",
//     "mayıs",
//     "haziran",
//     "temmuz",
//     "ağustos",
//     "eylül",
//     "ekim",
//     "kasım",
//     "aralık",

//   ]

//   let days = [
//     "pazar",
//     "pazartesi",
//     "salı",
//     "çarşamba",
//     "perşembe",
//     "cuma",
//     "cumartesi"
//   ]

//   let humanReadableDate =` ${day} ${months[month]} ${year},${days[dayNumber]}, ${hour}: ${minute}:${second}

//   `

//   console.log(humanReadableDate);


  console.log("-------------EXERCISES 2  DAY --------------------------");
  //!Seviye 1:

//?1-firstName, lastName, country, city, age, isMarried, year değişkenlerini oluşturun ve bunlara değer atayın. Farklı veri türlerini kontrol etmek için typeof operatörünü kullanın.

  let firstName= "Arife"
  let lastName ="Tural"
  let country = "Turkey"
  let city = "İstanbul"
  let age = 29
  let isMarried = true
   
  console.log(typeof firstName,
    typeof lastName,
    typeof country,
    typeof city,
    typeof age,
    typeof isMarried);

 //?2-'10' türünün 10'a eşit olup olmadığını kontrol edin

console.log(10 ==="10");

//?3-parseInt('9.8') 10'a eşit olup olmadığını kontrol edin

console.log(parseInt(9.8)===10);

//?4-Boolean değeri, doğru veya yanlıştır.Doğruluk değeri sağlayan üç JavaScript ifadesi yazın.Yanlış değer sağlayan üç JavaScript ifadesi yazın.


//!TRUE
let a= "arife"
let b= 5

console.log(a.length === b);

let c= "selim"
let d= "tural"
console.log(c.length === d.length);

let e ="madam"
let f = "madam"

console.log(e === f);

//!FALSE

let aa= "arife"
let bb = "5"
console.log(aa.length === bb);


let cc = "selim"
let dd ="turaall"

console.log(cc.length === dd.length);

let ee =12
let ff = "12"

console.log(ee === ff);

//?5-console.log() kullanmadan önce aşağıdaki karşılaştırma ifadesinin sonucunu bulun. Sonuca karar verdikten sonra console.log() kullanarak onaylayın.

4 > 3     //True +
4 >= 3    //true +
4 < 3     //false +
4 <= 3    //false +
4 == 4    //true + 
4 === 4   //true +
4 != 4    //false +
4 !== 4   //false +
4 != '4'  //false +
4 == '4'  //true +
4 === '4' //false +
console.log('python'.length != 'jargon'.length); //false


//?6-console.log() kullanmadan önce aşağıdaki ifadelerin sonucunu bulun. Sonuca karar verdikten sonra console.log() kullanarak onaylayın.

4 > 3 && 10 < 12     // true
4 > 3 && 10 > 12     // false
4 > 3 || 10 < 12     // true
4 > 3 || 10 > 12     // true
!(4 > 3)             // false
!(4 < 3)             // true
!(false)             // true
!(4 > 3 && 10 < 12)  // false
!(4 > 3 && 10 > 12)  // true
!(4 === '4')         // true
let dr = "dragon"
let py = "pyton"
console.log(dr.includes("on"));
console.log(py.includes("on"));  //TRUE

//?7-Aşağıdaki etkinlikleri yapmak için Date nesnesini kullanın.

let now = new Date();


  console.log(now.getFullYear());
  console.log(now.getMonth());
  console.log(now.getDate());
  console.log(now.getDay());
  console.log(now.getHours());
  console.log(now.getMinutes());
  console.log(Math.floor(now.getTime()));


  //!SEVİYE 2

  //? 1-Kullanıcıdan üçgenin tabanını ve yüksekliğini girmesini ve bir üçgenin alanını hesaplamasını isteyen bir komut dosyası yazın (alan = 0,5 x b x h).

// let base = +prompt("taban giriniz")
// let height = +prompt("yükseklik giriniz")

// let area= 0.5 * base *height;
// console.log(`üçgenin alanı: ${area}`);

//? 2-Kullanıcıdan üçgenin a kenarını, b kenarını ve c kenarını girmesini ve üçgenin çevresini hesaplamasını isteyen bir komut dosyası yazın (çevre = a + b + c)

// let akenari = +prompt("a kenarını giriniz")
// let bkenari = +prompt("b kenarını giriniz")
// let ckenari = +prompt("c kenarını giriniz")

// let cevre = akenari + bkenari + ckenari

// console.log(`üçgenin çevresi: ${cevre}`);

//? 3-Komut istemini kullanarak uzunluk ve genişliği alın ve bir dikdörtgenin alanını hesaplayın (alan = uzunluk x genişlik ve dikdörtgenin çevresi (çevre = 2 x (uzunluk + genişlik))

// let uzunluk = +prompt("dikdörtgenin uzunluğunu giriniz")
// let genislik = +prompt("dikdörtgenin genişliğini giriniz")

// let dkCevre= 2* uzunluk + genislik;

// console.log(`Dikdörtgenin çevresi: ${dkCevre}`);

//? 4-Komut istemini kullanarak yarıçapı alın ve bir dairenin alanını (alan = pi x r x r) ve bir dairenin çevresini (c = 2 x pi x r) hesaplayın, burada pi = 3.14.

let yaricap = 3

let alan = Math.PI * yaricap * yaricap

console.log(alan);

//---------------------

let dairecevre = 2 * Math.PI * yaricap

console.log(dairecevre);

//? 5- y= 2x -2'nin eğimini, x kesme noktasını ve y kesme noktasını hesaplayın

let egim = 2; 
let x_kesim = 1;
let y_kesim = -2; 

console.log(`Eğim: ${egim}, x-kesim noktası: ${x_kesim}, y-kesim noktası: ${y_kesim}`);

//? 6-Eğim m = (y2-y1)/(x2-x1). (2, 2) noktası ile (6,10) noktası arasındaki eğimi bulun

let x1 = 2, y1 = 2;
let x2 = 6, y2 = 10;
let egim1 = (y2 - y1) / (x2 - x1);
console.log(`Eğim: ${egim1}`);


//? 7- Yukarıdaki iki sorunun eğimini karşılaştırın.

console.log(egim === egim1);

//? 8-y'nin değerini hesaplayın (y = x2 + 6x + 9). Farklı x değerleri kullanmayı deneyin ve y'nin hangi x değerinin 0 olduğunu bulun.

x = -3

y = ( x * x) + (6 * x) + 9;
console.log(y);

//? 9-Kullanıcıdan saat ve saat başına oran girmesini isteyen bir komut dosyası yazın. Kişinin ücretini hesapla?

// let saat = +prompt("kaç saat çalıştığınızı giriniz")
// let ucret = +prompt("saat başına aldığınız miktarı giriniz")
// let aayy  = 30
// let maas= saat * ucret  * aayy

// console.log(maas);


//? 10-Adınızın uzunluğu 7'den büyükse, adınız uzun, yoksa adınızın kısa olduğunu söyleyin.

let isim = "arife"
console.log((isim.length > 7) ? "İsminiz uzun." : "İsminiz kısa.")

//? 11- Adınızın uzunluğunu ve soyadınızın uzunluğunu karşılaştırın ve bu çıktıyı almalısınız.

let soyisim ="turalll"

let karsilastirma = isim.length > soyisim.length ? "isim uzun" :"soyisim uzun"
console.log(karsilastirma);

//? 12-  ki değişken myAge ve yourAge bildirin ve bunlara başlangıç değerleri ile myAge ve yourAge atayın.

let myAge = 29
let momAge = 47

console.log(`annem benden ${momAge - myAge}  sene daha yaşlı`);

//? 13-İstemi kullanarak, kullanıcının doğduğu yılı alır ve kullanıcı 18 veya daha büyükse, kullanıcıya belirli bir süre beklemesini söylemediği takdirde, kullanıcının araba kullanmasına izin verir.

// let dyili = +prompt("doğum yılınızı giriniz")

// let agem = new Date().getFullYear() - dyili;

// let araba = agem > 18 ? "araba kullanabilir" : "araba kullanamaz"

// console.log(araba);

//? 14-Kullanıcıdan yıl sayısını girmesini isteyen bir komut dosyası yazın. Bir kişinin yaşayabileceği saniye sayısını hesaplayın. Birinin sadece yüz yıl yaşadığını varsayalım

// let years = parseFloat(prompt("Kaç yıl yaşadınız: "));
// let seconds = years * 365 * 24 * 60 * 60;
// console.log(`Sen ${seconds} saniye yaşadın.`);

//? 15- Tarih saat nesnesini kullanarak insan tarafından okunabilir bir saat biçimi oluşturun

// let an = new Date();

// let year = an.getFullYear();
// let month = an.getMonth() +1;
// let day = an.getDate();
// let hour = an.getHours();
// let minute = an.getMinutes();

// console.log(`YYYY-MM-DD HH:mm: ${year}-${month}-${day} ${hour}:${minute}`);
// console.log(`DD-MM-YYYY HH:mm: ${day}-${month}-${year} ${hour}:${minute}`);
// console.log(`DD/MM/YYYY HH:mm: ${day}/${month}/${year} ${hour}:${minute}`);


  //!SEVİYE 3

  //?Tarih saat nesnesini kullanarak insan tarafından okunabilir bir saat biçimi oluşturun. Saat ve dakika her zaman iki basamaklı olmalıdır (7 saat 07 ve 5 dakika 05 olmalıdır)

  let suan = new Date();

  let year = suan.getFullYear()
  let month = String(suan.getMonth()+1).padStart(2, "0")
  let day = String(suan.getDay()).padStart(2, "0")
  let hour = String(suan.getHours()).padStart(2, "0")
  let minute = String(suan.getMinutes()).padStart(2, "0")

  console.log(`YYYY-MM-DD HH:mm: ${year}-${month}-${day}-${hour}:${minute}
  `);






















