import React from "react";
import './Container.css'
import makarna from './assets/img/makarna.jpg'; 

const ContainerBreakfast = () => {
    return(
        <div className="mainContainer">
            <h2 className="title">Some Meal</h2>
            <ul>
                <li>Lezzetli: Sahanda yumurta, yumurtanın doğal lezzetini korur ve altın renginde kızarmış kenarlarıyla lezzetli bir seçenektir.</li>
                <li>Kolay ve Hızlı Hazırlık: Sahanda yumurta, hızlı bir kahvaltı veya pratik bir öğle yemeği seçeneği olarak kolayca hazırlanabilir.</li>
                <li>Mükemmel Protein Kaynağı: Sahanda yumurta, yüksek kaliteli protein içerir ve vücut için gerekli olan amino asitleri sağlar.</li>
                <li>Çeşitli Sunum Olanakları: Sahanda yumurta, çeşitli malzemeler ve baharatlar eklenerek farklı lezzetler elde edilebilecek esnek bir temel yemektir.</li>
            </ul>
            <img className="image" src={makarna} alt="Resim gösterilemedi" />
        </div>
    )
}

export default ContainerBreakfast