// let sayac=1;
// do {
//     console.log(sayac);
//     sayac++;
// } while (sayac<=10);

let sayac=1;
let toplam=0;
do {
    if(sayac%2==1){
        toplam+=sayac;
    }
    sayac++;
    
} while (sayac<=20);
console.log("toplam: " +toplam);
