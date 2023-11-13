let urun1 = {
  isim: "iphone x",
  price: 10000
};

let urun2 = {
  isim: "iphone xr",
  price: 15000
};

let urun3 = {
  isim: "iphone xs",
  price: 20000
};

let urun4 = {
  isim: "iphone 11",
  price: 25000
};

let urun5 = {
  isim: "iphone 12",
  price: 30000
};

let urun6 = {
  isim: "iphone 13",
  price: 35000
};

let urun7 = {
  isim: "iphone 14",
  price: 40000
};

let urun8 = {
  isim: "iphone 15",
  price: 45000
};

let urunler = [urun1, urun2, urun3, urun4, urun5, urun6, urun7, urun8];
let filtreliUrunler = [];

document.querySelector("input[type='text']").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    kullaniciVerisi = event.target.value;
    filtreliUrunler = []; // Önceki sonuçları temizle
    gelenVeriyiBulma(urunler);
    aranmisUrunYazdir(filtreliUrunler);
  }
});

function gelenVeriyiBulma(urunler) {
  urunler.forEach(function(urun) {
    if (urun.isim.toUpperCase().includes(kullaniciVerisi.toUpperCase())) {
      filtreliUrunler.push(urun);
    }
  });
}

function aranmisUrunYazdir(filterProducts) {
  filtreliUrunler.forEach(function(urun) {
    console.log("Ürün İsmi: " + urun.isim + " - Fiyat: " + urun.price);
  });
}








































// function gelenVeriyiBulma(urunler) {
//   urunler.forEach(urun) {
//     if (urun.isim.toUpperCase().includes(kullaniciVerisi.toUpperCase())) {
//       filtreliUrunler.push(urun);
//     }
//   }
// }

// function aranmisUrunYazdir(urunler) {
//   urunler.forEach(function (urun) {
//     console.log("___________________________________________");
//     console.log("|" + urun.isim + "|" + urun.kategori + "|" + urun.fiyat);
//   });
// }



