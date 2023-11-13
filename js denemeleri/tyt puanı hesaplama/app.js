let yenisatir = "\r\n" ;
let metin = "1 - TYT puanı hesapla " + yenisatir + "2 - Çıkış";

let secim = prompt(metin);
switch(secim) {
    case "1":
        let matematik = Number(prompt("Matematik netinizi giriniz: "));
        let turkce = Number(prompt("Türkçe netinizi giriniz: "));
        let sosyal = Number(prompt("Sosyal netinizi giriniz: "));
        let fen = Number(prompt("Fen netinizi giriniz: "));
        let okulPuanı = Number(prompt("Lütfen okul puanını giriniz: "));

        if (okulPuanı <= 60) {
            let sonuc = ((matematik + turkce + sosyal + fen) * 4) + okulPuanı;
            alert("TYT puanınız: " + sonuc);
        } else {
            alert("Lütfen 60'dan küçük bir okul puanı giriniz");
        }
        break;

    case "2":
        alert("Başarıyla çıkış yaptınız");
        break;

    default:
        alert("Lütfen 1 veya 2 seçiniz");
        break;
}

