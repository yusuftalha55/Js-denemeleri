let araba1 = {
    img: "img/img1.jpg",
    not: `Elektrikli Arabaların Yükselişi: Günümüzde çevre dostu teknolojilere olan talep arttıkça, 
    elektrikli arabalar piyasadaki önemli bir yer ediniyor. Bu araçlar, fosil yakıt kullanımını azaltarak 
    çevreye daha az zarar veriyor. Ayrıca, elektrikli arabaların tasarımı ve teknolojisi giderek daha çekici 
    ve gelişmiş hale geliyor.`
};

let araba2 = {
    img: "img/img2.jpg",
    not: `Otomatik sürüş teknolojileri, arabaların gelecekteki yönünü şekillendiriyor. 
    Yapay zeka ve sensör teknolojileri sayesinde, araçlar artık kendi kendine sürüş
     yapabilir hale geliyor. Bu gelişmeler, 
    trafik kazalarını azaltabilir ve sürüş deneyimini daha güvenli hale getirebilir.`
};

let araba3 = {
    img: "img/img3.jpg",
    not: `Elektrikli arabaların yükselişiyle birlikte, klasik arabaların da özel bir
     cazibesi var. Klasik arabalar, nostalji sevenler için eşsiz bir çekiciliğe sahip.
      Bu araçlar, 
    tarihî değerleri ve özel tasarımlarıyla otomobil tutkunlarını cezbetmeye devam ediyor.`
};

let araba4 = {
    img: "img/img4.jpg",
    not: `Yenilenebilir enerji kaynakları, 
    arabaların enerji tüketimini daha sürdürülebilir hale getiriyor. 
    Güneş enerjisi ve rüzgar enerjisi gibi kaynaklar, elektrikli arabaların
     şarj edilmesinde kullanılabiliyor. Bu durum, arabaların çevre
      üzerindeki etkisini azaltarak enerji verimliliğini artırıyor.`
};

let arabalar = [araba1, araba2, araba3, araba4];
let gosterilenObjectIndex = 0;

function forword() {
    if (gosterilenObjectIndex < arabalar.length - 1) {
        gosterilenObjectIndex++;
    } else {
        gosterilenObjectIndex = 0;
    }
    gosterilenNesneyiGuncelle();
}

function back() {
    if (gosterilenObjectIndex > 0) {
        gosterilenObjectIndex--;
    } else {
        gosterilenObjectIndex = arabalar.length - 1;
    }
    gosterilenNesneyiGuncelle();
}

function random() {
    gosterilenObjectIndex = Math.floor(Math.random() * arabalar.length);
    gosterilenNesneyiGuncelle();
}

function gosterilenNesneyiGuncelle() {
    let gosterilenAraba = arabalar[gosterilenObjectIndex];
    document.getElementById("imgElementId").src = gosterilenAraba.img;
    document.getElementById("notElementId").textContent = gosterilenAraba.not;
}

