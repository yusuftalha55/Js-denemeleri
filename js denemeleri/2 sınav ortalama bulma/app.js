function hesapla() {
    var sınav1 = parseFloat(document.getElementById("exam1").value);
    var sınav2 = parseFloat(document.getElementById("exam2").value);
    var sınav3 = parseFloat(document.getElementById("exam3").value);

    var result = (sınav1 + sınav2 + sınav3) / 3;


    if (result >= 50) {
        var resultElement = document.getElementById("result");
        if (result >= 50) {
            resultElement.innerHTML = "Ortalama: " + result.toFixed(2) + " (Geçtin)";
        } else {
            resultElement.innerHTML = "Ortalama: " + result.toFixed(2) + " (Kaldın)";
        }
    }
}

// var hesaplaBtn = hesapla();
// hesaplaBtn.addEventListener("click", hesapla);


