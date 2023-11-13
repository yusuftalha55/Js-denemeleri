let urun1 = {
    isim: "MSI THIN GF63",
    kategori: "teknoloji",
    fiyat: 26899
}

let urun2 = {
    isim: "Huawei MateBook D15",
    kategori: "teknoloji",
    fiyat: 17999
}

let urun3 = {
    isim: "Dell Vostro 3400",
    kategori: "teknoloji",
    fiyat: 6999
}

let urun4 = {
    isim: "Hp Victus 7P648EA",
    kategori: "teknoloji",
    fiyat: 27999
}

let urun5 = {
    isim: "Acer Nitro 5 AN517",
    kategori: "teknoloji",
    fiyat: 35999
}

let urun6 = {
    isim: "Dell Vostro 3520",
    kategori: "teknoloji",
    fiyat: 23966
}

let urun7 = {
    isim: "Asus X515EA-BQ967",
    kategori: "teknoloji",
    fiyat: 6999
}

let urunler = [urun1, urun2, urun3, urun4, urun5, urun6, urun7];
let filtreliUrunler = [];
let kullaniciVerisi = prompt("Lütfen bir ürün adı giriniz");


gelenVeriyiBulma(urunler);
aranmisUrunYazdir(filtreliUrunler);
function gelenVeriyiBulma(urunler) {
    urunler.forEach(function(urun) {
        if (urun.isim.toUpperCase().includes(kullaniciVerisi.toUpperCase())) {
            filtreliUrunler.push(urun);
        }
    });
}

function aranmisUrunYazdir(urunler) {
    urunler.forEach(function(urun) {
        console.log("___________________________________________");
        console.log("|" + urun.isim + "|" + urun.kategori + "|" + urun.fiyat);
    });
}
