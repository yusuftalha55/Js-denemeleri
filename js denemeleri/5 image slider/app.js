const resimler =["img/img1.jpg" , "img/img2.jpg" , "img/img3.jpg" , "img/img4.jpg"];

let resimIndex =0;
const sliderImage = document.getElementById("sliderImage");

function nextClick(){
    if(resimIndex < resimler.length -1){
        resimIndex++;
    }

    else{
        resimIndex=0;
    }
    sliderImage.src =resimler[resimIndex];
};