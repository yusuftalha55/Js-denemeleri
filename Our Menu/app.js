let yumurta = document.getElementsByClassName("yumurta");
let menemen = document.getElementsByClassName("menemen");
let meyveSalatası = document.getElementsByClassName("meyveSalatası");
let gununCorbasi = document.getElementsByClassName("gununCorbasi");
let cay = document.getElementsByClassName("cay");
let portakalSuyu = document.getElementsByClassName("portakalSuyu");
let mercimekCorbası = document.getElementsByClassName("mercimekCorbası");
let biftek = document.getElementsByClassName("biftek");
let contents = document.getElementsByClassName("contents");

let hepsi =[yumurta,menemen,meyveSalatası,gununCorbasi,
cay,portakalSuyu,mercimekCorbası,biftek];


function allClick(){
    let contentsArray = Array.from(contents);
    contentsArray.forEach(function(content) {
        content.style.display = "block";
    });
    
}

function breakfastClick(){
    yumurta.style.display ="block";
    menemen.style.display ="block";


}

function lunchClick(){

}

function shakesClick(){

}

function dinnerClick(){

}