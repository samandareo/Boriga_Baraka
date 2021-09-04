// BORIGA BARAKA O'YINI \\
/* Boriga Baraka : Version 1. Keyingi versiyalar  https://github.com/Gafforov . Yangiliklar samandar.me */

// Obyektga olingan sovg'alar \\
let myPrize = {
    1 : "Gugurt",
    2 : "Salfetka",
    3 : "Noutbuk",
    4 : "Spark",
    5 : "Televizor",
    6 : "2 xonali uy",
    7 : "Qozon",
    8 : "Lampochka",
    9 : "Mebel",
    10 : "Muzlatgich",
}

// console
var log = console.log;

// O'yinchining ismini olish uchun \\
function gName(){
    return prompt("Salom . Boriga Baraka o'yiniga xush kelibsiz! Men Muzaffarbek Mirzabekov bugun sizning xizmatingizdaman! Sizning ismingiz?");
}

// Ism o'zgaruvchiga tenglandi . \\
var name = gName();

// O'yinni boshlash uchun tushuncha \\
function start(){
 return alert(name + " siz bilan bugun 10 ta sovg'a o'ynaymiz. Deavom etish uchun OK  tugmasini bosing!"),
alert("Oxirgi 2 ta qolgan sovg'adan siz tanlaganingiz sizga beriladi . Demak boshladik"); 
}

start();

// Asosiy qism \\

function game(){
    let p1 = prompt(name + " sonlardan birini kiriting : 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10."); // Son kiritish so'ralmoqda
    for(myNum in myPrize){
        if(p1 == myNum){   // Kiritilgan songa obyektdagi sovg'a soni tenglanmoqda
            alert(myPrize[myNum] + " o'yindan chiqip ketti");
            log(p1 + " : " + myPrize[myNum]); // console ga sovg'a nomi yozilmoqda
        }
    }
    let p2 = prompt(name + " 1 dan 10 gacha bo'lgan sonlardan birini kiriting. Ishlatilgan sonlar : " + p1);
    for(myNum in myPrize){
        if(p2 == myNum){
            alert(myPrize[myNum] + " o'yindan chiqip ketti");
            log(p2 + " : " + myPrize[myNum]);
        }
    }
    let p3 = prompt(name + " 1 dan 10 gacha bo'lgan sonlardan birini kiriting. Ishlatilgan sonlar : " + p1 + " , " + p2);
    for(myNum in myPrize){
        if(p3 == myNum){
            alert(myPrize[myNum] + " o'yindan chiqip ketti");
            log(p3 + " : " + myPrize[myNum]);
        }
    }
    let p4 = prompt(name + " 1 dan 10 gacha bo'lgan sonlardan birini kiriting. Ishlatilgan sonlar : " + p1 + " , " + p2 + " , " + p3);
    for(myNum in myPrize){
        if(p4 == myNum){
            alert(myPrize[myNum] + " o'yindan chiqip ketti");
            log(p4 + " : " + myPrize[myNum]);
        }
    }
    let p5 = prompt(name + " 1 dan 10 gacha bo'lgan sonlardan birini kiriting. Ishlatilgan sonlar : " + p1 + " , " + p2 + " , " + p3 + " , " + p4);
    for(myNum in myPrize){
        if(p5 == myNum){
            alert(myPrize[myNum] + " o'yindan chiqip ketti");
            log(p5 + " : " + myPrize[myNum]);
        }
    }
    let p6 = prompt(name + " 1 dan 10 gacha bo'lgan sonlardan birini kiriting. Ishlatilgan sonlar : " + p1 + " , " + p2 + " , " + p3 + " , " + p4 + " , " + p5);
    for(myNum in myPrize){
        if(p6 == myNum){
            alert(myPrize[myNum] + " o'yindan chiqip ketti");
            log(p6 + " : " + myPrize[myNum]);
        }
    }
    let p7 = prompt(name + " 1 dan 10 gacha bo'lgan sonlardan birini kiriting. Ishlatilgan sonlar : " + p1 + " , " + p2 + " , " + p3 + " , " + p4 + " , " + p5 + " , " + p6);
    for(myNum in myPrize){
        if(p7 == myNum){
            alert(myPrize[myNum] + " o'yindan chiqip ketti");
            log(p7 + " : " + myPrize[myNum]);
        }
    }
    let p8 = prompt(name + " 1 dan 10 gacha bo'lgan sonlardan birini kiriting. Ishlatilgan sonlar : " + p1 + " , " + p2 + " , " + p3 + " , " + p4 + " , " + p5 + " , " + p6 + " , " + p7);
    for(myNum in myPrize) {
        if(p8 == myNum){
            alert(myPrize[myNum] + " o'yindan chiqip ketti");
            log(p8 + " : " + myPrize[myNum]);
        }
    }
    let p9 = prompt(name + " 1 dan 10 gacha bo'lgan sonlardan birini kiriting. Tanlagan soningiz ortidagi sovg'a sizniki bo'lishi mumkin.  Ishlatilgan sonlar : " + p1 + " , " + p2 + " , " + p3 + " , " + p4 + " , " + p5 + " , " + p6 + " , " + p7 
    + " , " +p8);
    for(myNum in myPrize) {
        if(p9 == myNum){
            if(myPrize[myNum] == "spark"){ // Spark tanlanganligi tekshirilmoqda
                alert(" Ureeeeeee . " + name +" Tabrikliman! Spark avtomabilini yutdingiz:)");
            }else if(myPrize[myNum] == "2 xonali uy"){ // Ikki xonali uy tekshirilmoqda
                alert(" Ureeeee .  " + name +" Tabrikliman! 2 xonali uy  yutdingiz :)");
            }else if(myPrize[myNum] == "Gugurt"){ // Gugurt tekshirilmoqda
                alert(" Afsus! " + name + ". Siz gugurt yutdingiz. :(");
            }else if(myPrize[myNum] == "Salfetka"){ // Salfetka tekshirilmoqda
                alert(" Afsus! " + name + ".  Siz salfetka yutdingiz. :(");
            }else if(myPrize[myNum] == "Lampochka"){ // Lampochka tekshirilmoqda
                alert(" Afsus! " + name + ". Siz lampochka yutdingiz. :(");
            }else{
                alert(" Tabriklayman ! " + name + ". Siz " + myPrize[myNum] + "ni egasi bo'ldingiz");
                log(p9 + " : " + myPrize[myNum]);
            }
        }
    }
}
game();

// Xayrlashish
function toEnd(x) {
    return alert(x + ". Bugungi chiroyli o'yin uchun sizga katta rahmat. Bu dargohdan hech kim norozi bo'lib ketmagan. Sizni yana kutib qolamiz, ishlaringizga omad . Xayr!!!");
}

toEnd(name);
