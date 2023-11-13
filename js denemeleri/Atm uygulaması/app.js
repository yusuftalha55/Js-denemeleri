let yeniSatır = "\r\n";
let bakiye = 3000;

let metin = "1 bakiye görüntüleme" 
+ yeniSatır + "2 para çekme" 
+ yeniSatır + "3 para yatrıma" 
+ yeniSatır + "4 çıkış" 
+ yeniSatır + "lütfen bir değer giriniz";

let secim = prompt(metin);

switch(secim){
    
     case"1":
          alert("bakiyeniz: " + bakiye);
          break;
          
     case"2":
          let cekilecekTutar = Number(prompt("çekmek istediğiniz miktarı giriniz"));
          if(cekilecekTutar<=bakiye){
            bakiye = bakiye-cekilecekTutar;
            alert("kalan bakiye: " + bakiye);  

          }
          else{
            alert("lütfen bakiyenizden büyük bir değer girmeyiniz"
             +yeniSatır +" bakiyeniz: " +bakiye);
          } 
          
     break;     

     case"3":
         let yatirilacakTutar=Number(prompt("yatırılacak tutarı giriniz: "));
         bakiye = bakiye+yatirilacakTutar;
         alert("güncel bakiye: " + bakiye);
     break;

     case"4":
         alert("sistemden çıkış yapılmıştır");
     break;
     
     default:
        alert("lütfen 1 ile 4 arası bir rakam giriniz");

     break;
    

}
