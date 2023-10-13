let bakiye = 15000;
document.getElementById("show").innerHTML = "Bakiye Görüntüleme: " + bakiye;

function getMoney() {
    let getİnput = parseFloat(document.getElementById("Ginput").value);
    if(getİnput<=bakiye){
        bakiye = bakiye - getİnput;
    }
    else{
        alert("Lütfen bakiyenizden yüksek bir sayı girmeyin!!!")
    }

    document.getElementById("show").innerHTML = "Bakiye Görüntüleme: " + bakiye;
    
}

function setMoney() {

    let setİnput = parseFloat(document.getElementById("Sinput").value);
    bakiye = setİnput + bakiye;
    document.getElementById("show").innerHTML = "Bakiye Görüntüleme: " + bakiye;

}