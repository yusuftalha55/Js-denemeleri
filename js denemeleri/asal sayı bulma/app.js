let sayi =Number(prompt("bir sayı giriniz: "));
let sonuc=true;
for(let i=sayi; i<= Math.floor(sayi/2); i++){
    if(sayi%i==0){
        sonuc=false;
        break;
    }
}
if(sonuc){
    alert(sayi + "asal sayıdır. ");

}
else{
    alert(sayi + "asal sayı değildir. ");
}