function buttonClick() {
    let m1 = parseFloat(document.getElementById("Minput").value);
    let t1 = parseFloat(document.getElementById("Tinput").value);
    let s1 = parseFloat(document.getElementById("Sinput").value);
    let f1 = parseFloat(document.getElementById("Finput").value);
    let o1 = parseFloat(document.getElementById("Oinput").value);

    if (o1 <= 60) {
        let sonuc = ((m1 + t1 + s1 + f1) * 4) + o1;
        let result = document.getElementById("end");
        result.innerHTML = "Tyt Puanınız: " + sonuc;
    }

    else {
        alert("Lütfen Okul Puanını 60'dan küçük giriniz!!!")
    }

}