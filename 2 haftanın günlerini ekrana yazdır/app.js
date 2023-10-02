let gun1 = {
    sayi : 1,
    isim : "Pazartesi"
}

let gun2 = {
    sayi : 2,
    isim : "Salı"
}

let gun3 = {
    sayi : 3,
    isim : "Çarşamba"
}

let gun4 = {
    sayi : 4,
    isim : "Perşembe"
}

let gun5 = {
    sayi : 5,
    isim : "Cuma"
}

let gun6 = {
    sayi : 6,
    isim : "Cumartesi"
}

let gun7 = {
    sayi : 7,
    isim : "Pazar"
}

let gunler =[gun1,gun2,gun3,gun4,gun5,gun6,gun7];

function buttonClick(){
    let gelenVeri = document.getElementById("input").value.toUpperCase(); 
    let icerik = document.getElementById("day");
    let bulundu = false;

    for (let i = 0; i < gunler.length; i++) {
        if (gunler[i].sayi.toString() === gelenVeri || gunler[i].sayi.toString().includes(gelenVeri)) {
            icerik.innerHTML = gunler[i].isim;
            bulundu = true;
            break;
        }
    }

    if (!bulundu) {
        icerik.innerHTML = "Geçersiz gün numarası";
    }
}
