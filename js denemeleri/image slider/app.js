const resim1 = document.getElementById('resim1');
const resim2 = document.getElementById('resim2');
const resim3 = document.getElementById('resim3');
const resim4 = document.getElementById('resim4');
const resimler = [resim1, resim2, resim3, resim4];

let gosterilenResimIndex = 0;

function gosterilenResmiGuncelle() {
    resimler.forEach((resim, index) => {
        if (index === gosterilenResimIndex) {
            resim.style.display = 'block';
        } else {
            resim.style.display = 'none';
        }
    });
}

function nextClick() {
    if (gosterilenResimIndex < resimler.length - 1) {
        gosterilenResimIndex++;
    } else {
        gosterilenResimIndex = 0;
    }
    gosterilenResmiGuncelle();
}

gosterilenResmiGuncelle();

