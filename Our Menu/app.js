let yumurta = document.getElementById("yumurta");
let menemen = document.getElementById("menemen");
let meyveSalatası = document.getElementById("meyveSalatası");
let gununCorbasi = document.getElementById("gununCorbasi");
let cay = document.getElementById("cay");
let portakalSuyu = document.getElementById("portakalSuyu");
let mercimekCorbası = document.getElementById("mercimekCorbası");
let biftek = document.getElementById("biftek");
let contents = document.getElementById("contents");

let hepsi = [yumurta, menemen, meyveSalatası, gununCorbasi,
    cay, portakalSuyu, mercimekCorbası, biftek];


yumurta.style.display = "none";
menemen.style.display = "none";
meyveSalatası.style.display = "none";
gununCorbasi.style.display = "none";
cay.style.display = "none";
portakalSuyu.style.display = "none";
mercimekCorbası.style.display = "none";
biftek.style.display = "none";



function allClick() {
    yumurta.style.display = "block";
    menemen.style.display = "block";
    meyveSalatası.style.display = "block";
    gununCorbasi.style.display = "block";
    cay.style.display = "block";
    portakalSuyu.style.display = "block";
    mercimekCorbası.style.display = "block";
    biftek.style.display = "block";


}

function breakfastClick() {
    yumurta.style.display = "block";
    menemen.style.display = "block";
    meyveSalatası.style.display = "none";
    gununCorbasi.style.display = "none";
    cay.style.display = "none";
    portakalSuyu.style.display = "none";
    mercimekCorbası.style.display = "none";
    biftek.style.display = "none";


}


function lunchClick() {
    meyveSalatası.style.display = "block";
    gununCorbasi.style.display = "block";
    yumurta.style.display = "none";
    menemen.style.display = "none";
    cay.style.display = "none";
    portakalSuyu.style.display = "none";
    mercimekCorbası.style.display = "none";
    biftek.style.display = "none";


}

function shakesClick() {
    cay.style.display = "block";
    portakalSuyu.style.display = "block";
    yumurta.style.display = "none";
    menemen.style.display = "none";
    meyveSalatası.style.display = "none";
    gununCorbasi.style.display = "none";
    mercimekCorbası.style.display = "none";
    biftek.style.display = "none";

}

function dinnerClick() {
    mercimekCorbası.style.display = "block";
    biftek.style.display = "block";
    yumurta.style.display = "none";
    menemen.style.display = "none";
    meyveSalatası.style.display = "none";
    gununCorbasi.style.display = "none";
    cay.style.display = "none";
    portakalSuyu.style.display = "none";

}