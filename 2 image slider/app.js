const resim1 = document.getElementById('resim1');
const resim2 = document.getElementById('resim2');
const resim3 = document.getElementById('resim3');
const resim4 = document.getElementById('resim4');
const resimler = [resim1, resim2, resim3, resim4];

let gösterilenResimIndex = 0;

function gösterilenResmiGuncelle() {
    resimler.forEach(function(resim ,index){
        if(index===gösterilenResimIndex) {
            resim.style.display ='block';
        }

        else{
            resim.style.display = 'none';
        }
    })
};

function nextClick(){
    if(gösterilenResimIndex < resimler.length - 1){
        gösterilenResimIndex++;
    }

    else{
        gösterilenResimIndex = 0;
    }
    gösterilenResmiGuncelle();
        
}
gösterilenResmiGuncelle();