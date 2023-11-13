 function hesaplavki() {

   let boy = Number(prompt("Lütfen boyunuzu giriniz: "));
   let kilo = Number(prompt("Lütfen kilonuzu giriniz: "));
   let vki = kilo / ((boy / 100) ** 2);

   if (vki <= 18.5) {
    document.write("Zayıfsınız");
} else if (vki <= 24.9) {
    document.write("Normal ağırlık");
} else if (vki <= 29.9) {
    document.write("Kilolu");
} else if (vki <= 34.9) {
    document.write("Obezite");
} else {
    document.write("Ciddi obezite");
}

}
