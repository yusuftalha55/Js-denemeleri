let bakiye = parseFloat(localStorage.getItem("bakiye")) || 15000;

function updateLocalStorage() {
    localStorage.setItem("bakiye", bakiye.toString());
}

document.getElementById("yazdır").innerHTML = " Bakiye Görüntüleme: " + bakiye;



function getMoney() {

    let paraCek = parseFloat(document.getElementById("money-out").value);

    if (bakiye >= paraCek) {
        bakiye -= paraCek;
        updateLocalStorage();
    }
    else {
        alert("Lütfen paranızdan fazla çekim yapmaya çalışmayın!!!")
    }
    document.getElementById("yazdır").innerHTML = " Bakiye Görüntüleme: " + bakiye;
}

function setMoney() {
    let paraYatır = parseFloat(document.getElementById("money-in").value);
    bakiye = bakiye + paraYatır;
    updateLocalStorage();
    document.getElementById("yazdır").innerHTML = " Bakiye Görüntüleme: " + bakiye;

}

