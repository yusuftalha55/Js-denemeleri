let yenisatir = "\r\n";
let metin = "1 - Pazartesi" + yenisatir + "2 - Salı" + yenisatir +
"3 - Çarşamba" + yenisatir + "4 - Perşembe" + yenisatir + "5 - Cuma" +
yenisatir + "6 - Cumartesi" + yenisatir + "7 - Pazar" + yenisatir + "Lütfen bir gün seçiniz";
let rakam = prompt(metin);
switch(rakam)
{
    case"1":
        console.log("Pazartesi");
    break;    

    case"2":
        console.log("Salı");
    break;    

    case"3":
        console.log("Çarşamba");
    break;    

    case"4":
        console.log("Perşembe");
    break;    

    case"5":
        console.log("Cuma");
    break;    

    case"6":
        console.log("Cumartesi");
    break;    

    case"7":
        console.log("Pazar");
    break;    

    default:
        console.log("Lütfen 1 ile 7 arasında bir sayı giriniz");

}