// let isRaining =true

// if(isRaining){
//     console.log("o zaman şemsiye al");
// }
// else {
//     console.log("yağmur yağmuyorsa şemsiye almana gerek yok");
// }



// let result = prompt("2 + 5 kaç yapar?")

// if(result=== 7){
//     console.log("doğru cevabı verdin");
// }
// else {
//     console.log("yanlış cevap 7 olmalıydı");
// }


// let number = 8
  
// if(number === 4){

//     console.log("number 4e eşit");

// }
// else if(number >= 5){
//     console.log("number 5e eşit veya büyük");

// }
// else if(number > 5){
//     console.log("number 5 den büyük");

// }
// else{
//     console.log("hepsi yanlış");

// }


// let toplam= 10

// switch(toplam){
//     case 7 === toplam:
//         console.log("7ye eşit");
//     break
// default :
// console.log("toplam 10a eşit");
// }



console.log("-------------EXERCISES 4  DAY --------------------------");

//! SEVİYE 1
//? 1-prompt(“Enter your age:”) ile kullanıcı girdisi alın. Kullanıcı 18 veya daha büyükse, geri bildirimde bulunun:'Sürecek kadar yaşlısınız', ancak 18 değilse, 18 yaşına girmesi gereken yıl sayısını beklemeye başlayarak başka bir geri bildirim verin.

// let yas = +prompt("lütfen yaşınızı giriniz")

// if( yas >= 18){
//     console.log("araba sürecek yaştasınız");
// }
// else{
//     console.log("henüz araba sürecek yaşta değilsiniz");
// }

//? 2-if… else kullanarak myAge ve yourAge değerlerini karşılaştırın. Karşılaştırmaya dayanarak ve sonucu kimin daha yaşlı olduğunu (ben veya siz) belirterek konsola kaydedin. Yaşı girdi olarak almak için komut prompt(“Enter your age:”) kullanın.

// let myAge = 29
// let yourAge = +prompt("yaşınızı giriniz")

// if(myAge > yourAge){
//     console.log("ben daha büyüğüm");
// }
// else if(myAge=== yourAge){
//     console.log("ikimizde aynı yaştayız");
// }
// else if(myAge < yourAge){
//     console.log("sen benden daha büyüksün");
// }
// else{
//     console.log("hatalı giriş yaptınız");
// }

//? 3- a, b'den büyükse, 'a b'den büyüktür', aksi takdirde 'a, b'den küçüktür' döndürür. şekilde uygulamaya çalışın

let a= 4
let b= 8

a > b ? console.log("a bden büyüktür") : console.log("b a dan büyüktür");

//? 4- Çift sayılar 2'ye tam bölünür kalan sıfırdır. Bir sayının çift olup olmadığını veya JavaScript kullanıp kullanmadığını nasıl kontrol edersiniz?

// let sayi = +prompt("bir sayı giriniz")
// if(sayi % 2 ===0){
//     console.log("sayı 2ye tam bölünebilir");
// }
// else{
//     console.log("sayı 2 ye tam bölünemez");
// }


//! SEVİYE 2

//? 1- Öğrencilere puanlarına göre not verebilecek bir kod yazın:

// let not = +prompt("lütfen aldığınız notu giriniz")

// if(not >= 90){
//     console.log("tebrikler a aldınız");
// }
// else if(not >= 70 && not <= 89){
//     console.log("tebrikler b aldınız");
// }
// else if(not >=60 && not <=69){
//     console.log("fena değil c aldınız");
// }
// else if(not >=50 && not <=59){
//     console.log("d aldınız ama olsun en azından geçtiniz");
// }
// else{
//     console.log("F aldınız üzgünüm kaldınız");
// }

//? 2- Mevsimin Sonbahar, Kış, İlkbahar veya Yaz olup olmadığını kontrol edin. Değerler :

// Eylül, Ekim veya Kasım, mevsim sonbahardır.
// Aralık, Ocak veya Şubat, mevsim kıştır.
// Mart, Nisan veya Mayıs mevsimi bahardır
// Haziran, Temmuz veya Ağustos, mevsim yazdır

let ay = prompt("bulunduğunuz ayı giriniz:");

// switch(ay){
//     case "aralık":
//     case "ocak":
//     case "şubat":
//         console.log("bulunduğunuz mevsim:Kış");
//     break

//     case "mart":
//     case "nisan":
//     case "mayıs":
//         console.log("bulunduğunuz mevsim:ilkbahar");
//     break

//     case "haziran":
//     case "temmuz":
//     case "ağustos":
//          console.log("bulunduğunuz mevsim:yaz");
//     break

//     case "eylül":
//     case "ekim":
//     case "kasım":
//          console.log("bulunduğunuz mevsim:sonbahar");
//     break

//     default:
//         console.log("geçerli bbir ay giriniz");


// }

//? 3-Bir günün hafta sonu mu yoksa iş günü mü olduğunu kontrol edin. Komut dosyanız girdi olarak gün alacaktır.

// let gunler = prompt("bulunduğunuz günü giriniz")

// switch(gunler){
//     case "pazartesi":
//     case "salı":
//     case "çarşamba":
//     case "perşembe":
//     case "cuma":
//         console.log("hafta içi");
//     break

//     case "cumastesi":
//     case "pazar":
//         console.log("hafta sonu");
//     break

//     default:
//         console.log("hatalı gün girdiniz");
// }

//! SEVİYE 3

//? 1-Bir aydaki gün sayısını söyleyen bir program yazın.
//? 2-Bir aydaki gün sayısını söyleyen bir program yazın, şimdi artık yılı düşünün.

 
let aylar = prompt("Bir ay girin:");

switch (aylar) {
    case 'ocak':
    case 'mart':
    case 'mayıs':
    case 'temmuz':
    case 'ağustos':
    case 'ekim':
    case 'aralık':
        console.log(aylar.charAt(0)+ aylar.slice(1) + " ayı 31 gündür.");
        break;
    case 'nisan':
    case 'haziran':
    case 'eylül':
    case 'kasım':
        console.log(aylar.charAt(0)+ aylar.slice(1) + " ayı 30 gündür.");
        break;
    case 'şubat':
        console.log(aylar.charAt(0)+ aylar.slice(1) + " ayı 28 gündür.");
        break;
    default:
        console.log("Geçerli bir ay girin.");
}

















