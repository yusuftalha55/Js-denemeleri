const resimler = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg"];
let gosterilenResimIndex = 0;
const sliderImage = document.getElementById("sliderImage");

function nextClick(){
    if(gosterilenResimIndex< resimler.length - 1){
        gosterilenResimIndex++; 
    }

    else{
        gosterilenResimIndex=0;
    }

    sliderImage.src =  resimler[gosterilenResimIndex];
}
