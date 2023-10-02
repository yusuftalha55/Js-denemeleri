let vize1 = Number(prompt("ilk vize notunuzu giriniz: "));
let vize2 = Number(prompt("ikinci vize notunuzu giriniz: "));
let final = Number(prompt("final notunuzu giriniz: "));

let sonuc = ((vize1 * 0.3) + (vize2 * 0.3) + (final * 0.4));
if (sonuc>= 60){
        document.write("Tebrikler dersi geçtiniz") 
    }

else {
    
    document.write("Dersten kaldınız") 

}

    
document.write(( "   ders ortalamanız: "), sonuc);