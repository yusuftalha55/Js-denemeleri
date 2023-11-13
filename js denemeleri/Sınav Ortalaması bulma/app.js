function hesapla(){
    var test1 = document.getElementById("sinav1").value;
    var test2 = document.getElementById("sinav2").value;
    var test3 = document.getElementById("sinav3").value;

    var s1 = Number(test1);
    var s2 = Number(test2);
    var s3 = Number(test3);

    var ortalama = (s1 + s2 + s3) / 3; 

    if(ortalama >= 50){
        document.getElementById("sonuc").innerHTML = "Ortalama: " + ortalama.toFixed(2) + " geçtin.";
    } else {
        document.getElementById("sonuc").innerHTML = "Ortalama: " + ortalama.toFixed(2) + " kaldınız.";
    }
}

var hesaplaBtn = document.getElementById("hesapla");
hesaplaBtn.addEventListener("click", hesapla);