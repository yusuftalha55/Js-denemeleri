let bakiye = 15000;

document.getElementById("yazdır").innerHTML = " Bakiye Görüntüleme: " + bakiye;
// let paraCek = parseFloat(document.getElementById("money-out").value);
// let paraYatır = parseFloat(document.getElementById("money-in").value);


function getMoney() {

    let paraCek = parseFloat(document.getElementById("money-out").value);

    if (bakiye >= paraCek) {
        bakiye -= paraCek;
    }
    else {
        alert("Lütfen paranızdan fazla çekim yapmaya çalışmayın!!!")
    }
    document.getElementById("yazdır").innerHTML = " Bakiye Görüntüleme: " + bakiye;
}

function setMoney() {
    let paraYatır = parseFloat(document.getElementById("money-in").value);
    bakiye = bakiye + paraYatır;
    document.getElementById("yazdır").innerHTML = " Bakiye Görüntüleme: " + bakiye;

}

