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

// let gelenveri = document.getElementById("input1").value;
// console.log(gelenveri);

function buttonClick() {
    let readData = document.getElementById("readData_1").value;
    let showData = document.getElementById("showData");
    showData.innerHTML = readData;
    document.body.style.backgroundColor="aqua";
    // console.log(gelenveri);
}

// function veriEkranaYaz() {
//     let 
// }


// let inputs = document.getElementsByName('title');
// inputs.forEach(function (element, element_key) {
//     element.placeholder = 'Lütfen değer giriniz (' + element_key + ')';
//     element.setAttribute("data-key", element_key);
// });

// urunler.forEach(function(urun, key){
//     console.log(urun.isim + ': ' + urun.price);
// });