function buttonClick(){
    // console.log("buton çalıştı");
    let exam1 = parseFloat(document.getElementById("exam1").value);
    let exam2 = parseFloat(document.getElementById("exam2").value);
    let exam3 = parseFloat(document.getElementById("exam3").value);
    
    let sonuc = (exam1+exam2+exam3)/3 ;
    if(sonuc>=50){
        document.getElementById("result").innerHTML="Sonuç: " +sonuc.toFixed(1) +"  geçtiniz";
    }
    else {
        document.getElementById("result").innerHTML = "Sonuç: " +sonuc.toFixed(1) + " Kaldınız";
    }

    // return result;


}

// var resultValue = buttonClick();
// document.getElementById("button1").addEventListener("click",buttonClick);

// resultValue.addEventListener("click",buttonClick);

// document.getElementById("result").innerHTML=resultValue;


