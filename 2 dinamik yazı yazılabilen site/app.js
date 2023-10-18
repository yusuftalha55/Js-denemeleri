let sabit1 = localStorage.getItem("input1Verisi") || "";
let sabit2 = localStorage.getItem("input2Verisi") || "";
let sabit3 = localStorage.getItem("input3Verisi") || "";

document.getElementById("card1").innerHTML = sabit1;
document.getElementById("card2").innerHTML = sabit2;
document.getElementById("card3").innerHTML = sabit3;

function card1Click() {
    let input1 = document.getElementById("input1").value;
    document.getElementById("card1").innerHTML = input1;
    localStorage.setItem("input1Verisi", input1);
}


function card1Click1() {
    document.getElementById("card1").innerHTML = "";
    localStorage.removeItem("input1Verisi");
}

function card2Click() {
    let input2 = document.getElementById("input2").value;
    document.getElementById("card2").innerHTML = input2;
    localStorage.setItem("input2Verisi", input2);
}

function card2Click2() {
    document.getElementById("card2").innerHTML = "";
    localStorage.removeItem("input2Verisi");
}

function card3Click() {
    let input3 = document.getElementById("input3").value;
    document.getElementById("card3").innerHTML = input3;
    localStorage.setItem("input3Verisi", input3);
}

function card3Click3() {
    document.getElementById("card3").innerHTML = "";
    localStorage.removeItem("input3Verisi");
}
